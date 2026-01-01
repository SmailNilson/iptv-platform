/**
 * API Route: GET /api/admin/posts
 * Admin endpoint - Returns ALL articles (including drafts and future published)
 */

import { NextResponse } from 'next/server';
import { getAllArticles, initDatabase } from '@/lib/db';

// Initialize database on first request
let dbInitialized = false;

async function ensureDbInitialized() {
    if (!dbInitialized) {
        try {
            await initDatabase();
            dbInitialized = true;
        } catch (error) {
            console.error('Database initialization error:', error);
        }
    }
}

export async function GET() {
    try {
        await ensureDbInitialized();

        // Get all articles for admin panel
        const articles = await getAllArticles();

        return NextResponse.json({
            success: true,
            data: articles,
            count: articles.length
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch articles', details: String(error) },
            { status: 500 }
        );
    }
}
