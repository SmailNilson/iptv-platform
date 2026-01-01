/**
 * API Route: GET /api/posts
 * Returns all published articles where published_at <= NOW()
 * This is the "auto-publication without cron jobs" endpoint
 */

import { NextResponse } from 'next/server';
import { getPublishedArticles, createArticle, initDatabase, type CreateArticleInput } from '@/lib/db';

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

        // Get only published articles where the publish date has passed
        // This is where the "automatic publication" magic happens
        const articles = await getPublishedArticles();

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

export async function POST(request: Request) {
    try {
        await ensureDbInitialized();

        const body: CreateArticleInput = await request.json();

        // Validate required fields
        if (!body.title || !body.slug || !body.content) {
            return NextResponse.json(
                { success: false, error: 'Title, slug and content are required' },
                { status: 400 }
            );
        }

        const article = await createArticle(body);

        return NextResponse.json({
            success: true,
            data: article
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating article:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to create article', details: String(error) },
            { status: 500 }
        );
    }
}
