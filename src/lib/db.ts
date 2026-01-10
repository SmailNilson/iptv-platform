/**
 * Database configuration using JSON files for Vercel deployment
 * Articles are read from static JSON files
 * Contacts are sent to external services (Web3Forms, etc.)
 */

import articlesData from '@/data/articles.json';

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

// Contact type definition
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

// ==========================================
// INITIALIZATION (No-op for JSON)
// ==========================================

export async function initDatabase(): Promise<void> {
    console.log('✅ Using JSON-based database (no initialization needed)');
}

// ==========================================
// ARTICLE FUNCTIONS (Read from JSON)
// ==========================================

/**
 * Get all published articles where published_at <= NOW()
 */
export async function getPublishedArticles(): Promise<Article[]> {
    const now = new Date();

    return (articlesData as any[])
        .filter(article =>
            article.status === 'published' &&
            new Date(article.published_at) <= now
        )
        .map((article, index) => ({
            ...article,
            id: index + 1,
            created_at: article.published_at,
            updated_at: article.published_at
        }))
        .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
}

/**
 * Get a single article by slug (only if published and date has passed)
 */
export async function getPublishedArticleBySlug(slug: string): Promise<Article | undefined> {
    const articles = await getPublishedArticles();
    return articles.find(article => article.slug === slug);
}

/**
 * Get all articles (for admin panel - includes drafts)
 */
export async function getAllArticles(): Promise<Article[]> {
    return (articlesData as any[]).map((article, index) => ({
        ...article,
        id: index + 1,
        created_at: article.published_at,
        updated_at: article.published_at
    }));
}

/**
 * Get a single article by slug (for admin panel - includes drafts)
 */
export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
    const articles = await getAllArticles();
    return articles.find(article => article.slug === slug);
}

/**
 * Get a single article by ID
 */
export async function getArticleById(id: number): Promise<Article | undefined> {
    const articles = await getAllArticles();
    return articles.find(article => article.id === id);
}

/**
 * Create a new article (Not supported in JSON mode)
 */
export async function createArticle(input: CreateArticleInput): Promise<Article> {
    throw new Error('Creating articles is not supported in JSON mode. Please edit data/articles.json manually.');
}

/**
 * Update an existing article (Not supported in JSON mode)
 */
export async function updateArticle(id: number, input: Partial<CreateArticleInput>): Promise<Article | undefined> {
    throw new Error('Updating articles is not supported in JSON mode. Please edit data/articles.json manually.');
}

/**
 * Delete an article (Not supported in JSON mode)
 */
export async function deleteArticle(id: number): Promise<boolean> {
    throw new Error('Deleting articles is not supported in JSON mode. Please edit data/articles.json manually.');
}

/**
 * Check if slug exists
 */
export async function slugExists(slug: string, excludeId?: number): Promise<boolean> {
    const articles = await getAllArticles();
    return articles.some(article =>
        article.slug === slug &&
        (!excludeId || article.id !== excludeId)
    );
}

/**
 * Upsert article (Not supported in JSON mode)
 */
export async function upsertArticle(input: CreateArticleInput): Promise<Article> {
    throw new Error('Upserting articles is not supported in JSON mode. Please edit data/articles.json manually.');
}

// ==========================================
// CONTACTS / CRM (External Service)
// ==========================================

/**
 * Create a new contact (Send to external service)
 * In production, this should send to Web3Forms, EmailJS, or similar
 */
export async function createContact(input: CreateContactInput): Promise<Contact> {
    // For Vercel deployment, contacts should be sent to an external service
    // This is just a placeholder that returns a mock contact
    console.warn('⚠️ Contact creation in JSON mode - should use external service (Web3Forms, etc.)');

    const contact: Contact = {
        id: Date.now(),
        name: input.name,
        email: input.email || null,
        phone: input.phone || null,
        source: input.source,
        message: input.message || null,
        status: input.status || 'new',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    };

    return contact;
}

/**
 * Get all contacts (Not supported in JSON mode)
 */
export async function getAllContacts(): Promise<Contact[]> {
    console.warn('⚠️ Getting contacts is not supported in JSON mode');
    return [];
}

/**
 * Get contacts by status (Not supported in JSON mode)
 */
export async function getContactsByStatus(status: string): Promise<Contact[]> {
    console.warn('⚠️ Getting contacts by status is not supported in JSON mode');
    return [];
}

/**
 * Update contact status (Not supported in JSON mode)
 */
export async function updateContactStatus(id: number, status: string): Promise<Contact | undefined> {
    console.warn('⚠️ Updating contact status is not supported in JSON mode');
    return undefined;
}

/**
 * Check if contact exists (Not supported in JSON mode)
 */
export async function contactExists(email?: string, phone?: string): Promise<boolean> {
    // In JSON mode, we can't check for duplicates
    // This should be handled by the external service
    return false;
}

/**
 * Initialize contacts table (No-op for JSON)
 */
export async function initContactsTable(): Promise<void> {
    console.log('✅ Contacts will be sent to external service (no table needed)');
}

export default {
    initDatabase,
    getPublishedArticles,
    getPublishedArticleBySlug,
    getAllArticles,
    getArticleBySlug,
    getArticleById,
    createContact,
    getAllContacts
};
