/**
 * Database configuration and connection
 * Using better-sqlite3 for SQLite
 */

import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Ensure data directory exists
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Database file path
const dbPath = path.join(dataDir, 'iptv-platform.db');

// Create database connection
const db = new Database(dbPath, { verbose: console.log });

// Enable WAL mode for better concurrent access
db.pragma('journal_mode = WAL');

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
    try {
        // Create articles table
        db.exec(`
            CREATE TABLE IF NOT EXISTS articles (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                slug TEXT UNIQUE NOT NULL,
                content TEXT NOT NULL,
                excerpt TEXT,
                image_url TEXT,
                meta_description TEXT,
                read_time TEXT DEFAULT '5 min',
                status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
                published_at TEXT,
                created_at TEXT DEFAULT (datetime('now')),
                updated_at TEXT DEFAULT (datetime('now'))
            )
        `);

        // Create indexes for articles
        db.exec(`CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug)`);
        db.exec(`CREATE INDEX IF NOT EXISTS idx_articles_status_published ON articles(status, published_at)`);

        // Create contacts table
        db.exec(`
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT,
                phone TEXT,
                source TEXT NOT NULL CHECK (source IN ('email', 'whatsapp', 'form')),
                message TEXT,
                status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'lost')),
                created_at TEXT DEFAULT (datetime('now')),
                updated_at TEXT DEFAULT (datetime('now'))
            )
        `);

        // Create indexes for contacts
        db.exec(`CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email)`);
        db.exec(`CREATE INDEX IF NOT EXISTS idx_contacts_phone ON contacts(phone)`);
        db.exec(`CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status)`);
        db.exec(`CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(created_at DESC)`);

        console.log('✅ Database initialized successfully (articles + contacts)');
        console.log(`📁 Database location: ${dbPath}`);
    } catch (error) {
        console.error('Database initialization error:', error);
        throw error;
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
    const stmt = db.prepare(`
        SELECT * FROM articles 
        WHERE status = 'published' 
        AND published_at <= datetime('now')
        ORDER BY published_at DESC
    `);
    return stmt.all() as Article[];
}

/**
 * Get a single article by slug (only if published and date has passed)
 */
export async function getPublishedArticleBySlug(slug: string): Promise<Article | undefined> {
    const stmt = db.prepare(`
        SELECT * FROM articles 
        WHERE slug = ? 
        AND status = 'published' 
        AND published_at <= datetime('now')
    `);
    return stmt.get(slug) as Article | undefined;
}

/**
 * Get all articles (for admin panel)
 */
export async function getAllArticles(): Promise<Article[]> {
    const stmt = db.prepare(`
        SELECT * FROM articles 
        ORDER BY created_at DESC
    `);
    return stmt.all() as Article[];
}

/**
 * Get a single article by slug (for admin panel - includes drafts)
 */
export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
    const stmt = db.prepare(`SELECT * FROM articles WHERE slug = ?`);
    return stmt.get(slug) as Article | undefined;
}

/**
 * Get a single article by ID (for admin panel)
 */
export async function getArticleById(id: number): Promise<Article | undefined> {
    const stmt = db.prepare(`SELECT * FROM articles WHERE id = ?`);
    return stmt.get(id) as Article | undefined;
}

/**
 * Create a new article
 */
export async function createArticle(input: CreateArticleInput): Promise<Article> {
    const stmt = db.prepare(`
        INSERT INTO articles (title, slug, content, excerpt, image_url, meta_description, read_time, status, published_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const info = stmt.run(
        input.title,
        input.slug,
        input.content,
        input.excerpt || null,
        input.image_url || null,
        input.meta_description || null,
        input.read_time || '5 min',
        input.status || 'draft',
        input.published_at || null
    );

    const article = await getArticleById(Number(info.lastInsertRowid));
    if (!article) {
        throw new Error('Failed to create article');
    }
    return article;
}

/**
 * Update an existing article
 */
export async function updateArticle(id: number, input: Partial<CreateArticleInput>): Promise<Article | undefined> {
    const existingArticle = await getArticleById(id);
    if (!existingArticle) return undefined;

    const stmt = db.prepare(`
        UPDATE articles SET
            title = ?,
            slug = ?,
            content = ?,
            excerpt = ?,
            image_url = ?,
            meta_description = ?,
            read_time = ?,
            status = ?,
            published_at = ?,
            updated_at = datetime('now')
        WHERE id = ?
    `);

    stmt.run(
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
    );

    return getArticleById(id);
}

/**
 * Delete an article
 */
export async function deleteArticle(id: number): Promise<boolean> {
    const stmt = db.prepare(`DELETE FROM articles WHERE id = ?`);
    const info = stmt.run(id);
    return info.changes > 0;
}

/**
 * Check if slug exists
 */
export async function slugExists(slug: string, excludeId?: number): Promise<boolean> {
    const query = excludeId
        ? `SELECT 1 FROM articles WHERE slug = ? AND id != ?`
        : `SELECT 1 FROM articles WHERE slug = ?`;

    const stmt = db.prepare(query);
    const result = excludeId ? stmt.get(slug, excludeId) : stmt.get(slug);

    return result !== undefined;
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
    try {
        db.exec(`
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT,
                phone TEXT,
                source TEXT NOT NULL CHECK (source IN ('email', 'whatsapp', 'form')),
                message TEXT,
                status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'lost')),
                created_at TEXT DEFAULT (datetime('now')),
                updated_at TEXT DEFAULT (datetime('now'))
            )
        `);

        // Create indexes
        db.exec(`CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email)`);
        db.exec(`CREATE INDEX IF NOT EXISTS idx_contacts_phone ON contacts(phone)`);
        db.exec(`CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status)`);
        db.exec(`CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(created_at DESC)`);

        console.log('✅ Contacts table initialized successfully');
    } catch (error) {
        console.error('Contacts table initialization error:', error);
        throw error;
    }
}

/**
 * Create a new contact
 */
export async function createContact(input: CreateContactInput): Promise<Contact> {
    const stmt = db.prepare(`
        INSERT INTO contacts (name, email, phone, source, message, status)
        VALUES (?, ?, ?, ?, ?, ?)
    `);

    const info = stmt.run(
        input.name,
        input.email || null,
        input.phone || null,
        input.source,
        input.message || null,
        input.status || 'new'
    );

    const getStmt = db.prepare(`SELECT * FROM contacts WHERE id = ?`);
    return getStmt.get(info.lastInsertRowid) as Contact;
}

/**
 * Get all contacts
 */
export async function getAllContacts(): Promise<Contact[]> {
    const stmt = db.prepare(`
        SELECT * FROM contacts 
        ORDER BY created_at DESC
    `);
    return stmt.all() as Contact[];
}

/**
 * Get contacts by status
 */
export async function getContactsByStatus(status: string): Promise<Contact[]> {
    const stmt = db.prepare(`
        SELECT * FROM contacts 
        WHERE status = ?
        ORDER BY created_at DESC
    `);
    return stmt.all(status) as Contact[];
}

/**
 * Update contact status
 */
export async function updateContactStatus(id: number, status: string): Promise<Contact | undefined> {
    const stmt = db.prepare(`
        UPDATE contacts 
        SET status = ?, updated_at = datetime('now')
        WHERE id = ?
    `);

    stmt.run(status, id);

    const getStmt = db.prepare(`SELECT * FROM contacts WHERE id = ?`);
    return getStmt.get(id) as Contact | undefined;
}

/**
 * Check if contact exists by email or phone
 */
export async function contactExists(email?: string, phone?: string): Promise<boolean> {
    if (!email && !phone) return false;

    const conditions = [];
    const params = [];

    if (email) {
        conditions.push(`email = ?`);
        params.push(email);
    }

    if (phone) {
        conditions.push(`phone = ?`);
        params.push(phone);
    }

    const query = `SELECT 1 FROM contacts WHERE ${conditions.join(' OR ')} LIMIT 1`;
    const stmt = db.prepare(query);
    const result = stmt.get(...params);

    return result !== undefined;
}

export { db };
export default db;
