/**
 * API Route: GET /api/posts/:slug
 * Returns a single published article by slug
 * With caching for faster responses
 */

import { NextResponse } from 'next/server';
import {
    getPublishedArticleBySlug,
    getArticleBySlug,
    updateArticle,
    deleteArticle,
    initDatabase
} from '@/lib/db';

interface RouteParams {
    params: Promise<{ slug: string }>;
}

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

// Cache configuration - revalidate every 60 seconds
export const revalidate = 60;

export async function GET(request: Request, { params }: RouteParams) {
    try {
        await ensureDbInitialized();

        const { slug } = await params;

        // Check if this is an admin request (could add auth check here)
        const url = new URL(request.url);
        const isAdmin = url.searchParams.get('admin') === 'true';

        // For admin requests, get article regardless of status
        // For public requests, only get published articles with passed date
        const article = isAdmin
            ? await getArticleBySlug(slug)
            : await getPublishedArticleBySlug(slug);

        if (!article) {
            return NextResponse.json(
                { success: false, error: 'Article not found' },
                { status: 404 }
            );
        }

        const response = NextResponse.json({
            success: true,
            data: article
        });

        // Add cache headers for public requests
        if (!isAdmin) {
            response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
        }

        return response;
    } catch (error) {
        console.error('Error fetching article:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch article', details: String(error) },
            { status: 500 }
        );
    }
}

export async function PUT(request: Request, { params }: RouteParams) {
    try {
        await ensureDbInitialized();

        const { slug } = await params;
        const body = await request.json();

        // Find the article by slug first
        const existingArticle = await getArticleBySlug(slug);
        if (!existingArticle) {
            return NextResponse.json(
                { success: false, error: 'Article not found' },
                { status: 404 }
            );
        }

        const updatedArticle = await updateArticle(existingArticle.id, body);

        return NextResponse.json({
            success: true,
            data: updatedArticle
        });
    } catch (error) {
        console.error('Error updating article:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to update article', details: String(error) },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request, { params }: RouteParams) {
    try {
        await ensureDbInitialized();

        const { slug } = await params;

        // Find the article by slug first
        const existingArticle = await getArticleBySlug(slug);
        if (!existingArticle) {
            return NextResponse.json(
                { success: false, error: 'Article not found' },
                { status: 404 }
            );
        }

        const deleted = await deleteArticle(existingArticle.id);

        if (!deleted) {
            return NextResponse.json(
                { success: false, error: 'Failed to delete article' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Article deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting article:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to delete article', details: String(error) },
            { status: 500 }
        );
    }
}
