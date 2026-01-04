/**
 * Database configuration and connection
 * Using pg for PostgreSQL (Supabase)
 */

import { Pool } from 'pg';

// Database configuration from environment variables
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// Article type definition
export interface Article {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string | null;
    image_url: string | null;
    meta_description: string | null;
    read_time: string;
    status: 'draft' | 'published';
    published_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface CreateArticleInput {
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    image_url?: string;
    meta_description?: string;
    read_time?: string;
    status?: 'draft' | 'published';
    published_at?: string;
}

// ==========================================
// INITIALIZATION
// ==========================================

/**
 * Initialize the database tables (run once on startup)
 */
export async function initDatabase(): Promise<void> {
    const client = await pool.connect();
    try {
        // Create articles table
        await client.query(`
      CREATE TABLE IF NOT EXISTS articles (
        id SERIAL PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        content TEXT NOT NULL,
        excerpt TEXT,
        image_url VARCHAR(500),
        meta_description VARCHAR(500),
        read_time VARCHAR(50) DEFAULT '5 min',
        status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
        published_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `);

        // Create indexes for articles
        await client.query(`CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug)`);
        await client.query(`CREATE INDEX IF NOT EXISTS idx_articles_status_published ON articles(status, published_at)`);

        // Create contacts table
        await client.query(`
            CREATE TABLE IF NOT EXISTS contacts (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255),
                phone VARCHAR(50),
                source VARCHAR(20) NOT NULL CHECK (source IN ('email', 'whatsapp', 'form')),
                message TEXT,
                status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'lost')),
                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW()
            )
        `);

        // Create indexes for contacts
        await client.query(`CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email)`);
        await client.query(`CREATE INDEX IF NOT EXISTS idx_contacts_phone ON contacts(phone)`);
        await client.query(`CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status)`);
        await client.query(`CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(created_at DESC)`);

        console.log('✅ Database initialized successfully (articles + contacts)');
    } catch (error) {
        console.error('Database initialization error:', error);
        throw error;
    } finally {
        client.release();
    }
}

// ==========================================
// QUERY FUNCTIONS
// ==========================================

/**
 * Get all published articles where published_at <= NOW()
 * This is the core of "auto-publication without cron jobs"
 */
export async function getPublishedArticles(): Promise<Article[]> {
    const result = await pool.query(`
    SELECT * FROM articles 
    WHERE status = 'published' 
    AND published_at <= NOW()
    ORDER BY published_at DESC
  `);
    return result.rows as Article[];
}

/**
 * Get a single article by slug (only if published and date has passed)
 */
export async function getPublishedArticleBySlug(slug: string): Promise<Article | undefined> {
    const result = await pool.query(`
    SELECT * FROM articles 
    WHERE slug = $1 
    AND status = 'published' 
    AND published_at <= NOW()
  `, [slug]);
    return result.rows[0] as Article | undefined;
}

/**
 * Get all articles (for admin panel)
 */
export async function getAllArticles(): Promise<Article[]> {
    const result = await pool.query(`
    SELECT * FROM articles 
    ORDER BY created_at DESC
  `);
    return result.rows as Article[];
}

/**
 * Get a single article by slug (for admin panel - includes drafts)
 */
export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
    const result = await pool.query(`SELECT * FROM articles WHERE slug = $1`, [slug]);
    return result.rows[0] as Article | undefined;
}

/**
 * Get a single article by ID (for admin panel)
 */
export async function getArticleById(id: number): Promise<Article | undefined> {
    const result = await pool.query(`SELECT * FROM articles WHERE id = $1`, [id]);
    return result.rows[0] as Article | undefined;
}

/**
 * Create a new article
 */
export async function createArticle(input: CreateArticleInput): Promise<Article> {
    const result = await pool.query(`
    INSERT INTO articles (title, slug, content, excerpt, image_url, meta_description, read_time, status, published_at)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *
  `, [
        input.title,
        input.slug,
        input.content,
        input.excerpt || null,
        input.image_url || null,
        input.meta_description || null,
        input.read_time || '5 min',
        input.status || 'draft',
        input.published_at || null
    ]);

    return result.rows[0] as Article;
}

/**
 * Update an existing article
 */
export async function updateArticle(id: number, input: Partial<CreateArticleInput>): Promise<Article | undefined> {
    const existingArticle = await getArticleById(id);
    if (!existingArticle) return undefined;

    const result = await pool.query(`
    UPDATE articles SET
      title = $1,
      slug = $2,
      content = $3,
      excerpt = $4,
      image_url = $5,
      meta_description = $6,
      read_time = $7,
      status = $8,
      published_at = $9,
      updated_at = NOW()
    WHERE id = $10
    RETURNING *
  `, [
        input.title ?? existingArticle.title,
        input.slug ?? existingArticle.slug,
        input.content ?? existingArticle.content,
        input.excerpt ?? existingArticle.excerpt,
        input.image_url ?? existingArticle.image_url,
        input.meta_description ?? existingArticle.meta_description,
        input.read_time ?? existingArticle.read_time,
        input.status ?? existingArticle.status,
        input.published_at ?? existingArticle.published_at,
        id
    ]);

    return result.rows[0] as Article | undefined;
}

/**
 * Delete an article
 */
export async function deleteArticle(id: number): Promise<boolean> {
    const result = await pool.query(`DELETE FROM articles WHERE id = $1`, [id]);
    return (result.rowCount ?? 0) > 0;
}

/**
 * Check if slug exists
 */
export async function slugExists(slug: string, excludeId?: number): Promise<boolean> {
    const query = excludeId
        ? `SELECT 1 FROM articles WHERE slug = $1 AND id != $2`
        : `SELECT 1 FROM articles WHERE slug = $1`;

    const params = excludeId ? [slug, excludeId] : [slug];
    const result = await pool.query(query, params);

    return result.rows.length > 0;
}

/**
 * Upsert article (insert or update by slug)
 */
export async function upsertArticle(input: CreateArticleInput): Promise<Article> {
    const existingArticle = await getArticleBySlug(input.slug);

    if (existingArticle) {
        return (await updateArticle(existingArticle.id, input))!;
    } else {
        return createArticle(input);
    }
}

// ==========================================
// CONTACTS / CRM
// ==========================================

export interface Contact {
    id: number;
    name: string;
    email: string | null;
    phone: string | null;
    source: 'email' | 'whatsapp' | 'form';
    message: string | null;
    status: 'new' | 'contacted' | 'converted' | 'lost';
    created_at: string;
    updated_at: string;
}

export interface CreateContactInput {
    name: string;
    email?: string;
    phone?: string;
    source: 'email' | 'whatsapp' | 'form';
    message?: string;
    status?: 'new' | 'contacted' | 'converted' | 'lost';
}

/**
 * Initialize contacts table
 */
export async function initContactsTable(): Promise<void> {
    const client = await pool.connect();
    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS contacts (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255),
                phone VARCHAR(50),
                source VARCHAR(20) NOT NULL CHECK (source IN ('email', 'whatsapp', 'form')),
                message TEXT,
                status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'lost')),
                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW()
            )
        `);

        // Create indexes
        await client.query(`CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email)`);
        await client.query(`CREATE INDEX IF NOT EXISTS idx_contacts_phone ON contacts(phone)`);
        await client.query(`CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status)`);
        await client.query(`CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(created_at DESC)`);

        console.log('✅ Contacts table initialized successfully');
    } catch (error) {
        console.error('Contacts table initialization error:', error);
        throw error;
    } finally {
        client.release();
    }
}

/**
 * Create a new contact
 */
export async function createContact(input: CreateContactInput): Promise<Contact> {
    const result = await pool.query(`
        INSERT INTO contacts (name, email, phone, source, message, status)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
    `, [
        input.name,
        input.email || null,
        input.phone || null,
        input.source,
        input.message || null,
        input.status || 'new'
    ]);

    return result.rows[0] as Contact;
}

/**
 * Get all contacts
 */
export async function getAllContacts(): Promise<Contact[]> {
    const result = await pool.query(`
        SELECT * FROM contacts 
        ORDER BY created_at DESC
    `);
    return result.rows as Contact[];
}

/**
 * Get contacts by status
 */
export async function getContactsByStatus(status: string): Promise<Contact[]> {
    const result = await pool.query(`
        SELECT * FROM contacts 
        WHERE status = $1
        ORDER BY created_at DESC
    `, [status]);
    return result.rows as Contact[];
}

/**
 * Update contact status
 */
export async function updateContactStatus(id: number, status: string): Promise<Contact | undefined> {
    const result = await pool.query(`
        UPDATE contacts 
        SET status = $1, updated_at = NOW()
        WHERE id = $2
        RETURNING *
    `, [status, id]);

    return result.rows[0] as Contact | undefined;
}

/**
 * Check if contact exists by email or phone
 */
export async function contactExists(email?: string, phone?: string): Promise<boolean> {
    if (!email && !phone) return false;

    const conditions = [];
    const params = [];
    let paramIndex = 1;

    if (email) {
        conditions.push(`email = $${paramIndex}`);
        params.push(email);
        paramIndex++;
    }

    if (phone) {
        conditions.push(`phone = $${paramIndex}`);
        params.push(phone);
    }

    const query = `SELECT 1 FROM contacts WHERE ${conditions.join(' OR ')} LIMIT 1`;
    const result = await pool.query(query, params);

    return result.rows.length > 0;
}

export { pool };
export default pool;
