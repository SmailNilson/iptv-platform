/**
 * Database configuration using JSON files for Vercel deployment
 * Articles are read from static JSON files
 * Contacts are sent to external services (Web3Forms, etc.)
 */

import articlesData from '@/data/articles.json';
import fs from 'fs';
import path from 'path';

const CONTACTS_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'contacts.json');

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
// CONTACTS / CRM (JSON File Database)
// ==========================================

async function readContacts(): Promise<Contact[]> {
    try {
        if (!fs.existsSync(CONTACTS_FILE_PATH)) {
            return [];
        }
        const data = fs.readFileSync(CONTACTS_FILE_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading contacts.json:', error);
        return [];
    }
}

async function writeContacts(contacts: Contact[]): Promise<void> {
    try {
        fs.writeFileSync(CONTACTS_FILE_PATH, JSON.stringify(contacts, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing to contacts.json:', error);
    }
}

/**
 * Create a new contact and save to contacts.json
 */
export async function createContact(input: CreateContactInput): Promise<Contact> {
    const contacts = await readContacts();
    
    // Auto-increment ID based on max existing ID, or fallback to Date.now() if conflicts occur
    const nextId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : Date.now();

    const contact: Contact = {
        id: nextId,
        name: input.name,
        email: input.email || null,
        phone: input.phone || null,
        source: input.source,
        message: input.message || null,
        status: input.status || 'new',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    };

    contacts.push(contact);
    await writeContacts(contacts);

    return contact;
}

/**
 * Get all contacts from contacts.json
 */
export async function getAllContacts(): Promise<Contact[]> {
    const contacts = await readContacts();
    // Sort descending by created_at
    return contacts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

/**
 * Get contacts by status
 */
export async function getContactsByStatus(status: string): Promise<Contact[]> {
    const contacts = await readContacts();
    return contacts.filter(c => c.status === status)
                   .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

/**
 * Update contact status in contacts.json
 */
export async function updateContactStatus(id: number, status: string): Promise<Contact | undefined> {
    const contacts = await readContacts();
    const index = contacts.findIndex(c => c.id === id);
    
    if (index === -1) return undefined;
    
    contacts[index].status = status as Contact['status'];
    contacts[index].updated_at = new Date().toISOString();
    
    await writeContacts(contacts);
    return contacts[index];
}

/**
 * Check if contact exists by email or phone
 */
export async function contactExists(email?: string, phone?: string): Promise<boolean> {
    if (!email && !phone) return false;
    
    const contacts = await readContacts();
    
    return contacts.some(contact => {
        const emailMatch = email && contact.email === email;
        const phoneMatch = phone && contact.phone === phone;
        return emailMatch || phoneMatch;
    });
}

/**
 * Initialize contacts table (No-op but ensures file exists)
 */
export async function initContactsTable(): Promise<void> {
    if (!fs.existsSync(CONTACTS_FILE_PATH)) {
        console.log('📝 Creating contacts.json file');
        fs.writeFileSync(CONTACTS_FILE_PATH, '[]', 'utf-8');
    }
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
