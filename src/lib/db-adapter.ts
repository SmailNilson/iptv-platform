/**
 * Database adapter - switches between SQLite (local) and JSON (production/Vercel)
 * 
 * Usage:
 * - Local development: Uses SQLite (src/lib/db.ts)
 * - Production/Vercel: Uses JSON files (src/lib/db-json.ts)
 */

// Determine which database to use based on environment
const USE_JSON_DB = process.env.NEXT_PUBLIC_USE_JSON_DB === 'true' ||
    process.env.VERCEL === '1' ||
    process.env.NODE_ENV === 'production';

// Import the appropriate database module
const dbModule = USE_JSON_DB
    ? require('./db-json')
    : require('./db');

// Log which database is being used
if (typeof window === 'undefined') {
    console.log(`📊 Database mode: ${USE_JSON_DB ? 'JSON (Production)' : 'SQLite (Local)'}`);
}

// Re-export all functions from the selected module
export const {
    initDatabase,
    getPublishedArticles,
    getPublishedArticleBySlug,
    getAllArticles,
    getArticleBySlug,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
    slugExists,
    upsertArticle,
    createContact,
    getAllContacts,
    getContactsByStatus,
    updateContactStatus,
    contactExists,
    initContactsTable
} = dbModule;

// Re-export types
export type {
    Article,
    CreateArticleInput,
    Contact,
    CreateContactInput
} from './db';

export default dbModule.default || dbModule;
