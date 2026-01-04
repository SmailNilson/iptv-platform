/**
 * API Route: POST /api/contacts
 * Enregistre un nouveau contact (lead) dans la base de données
 */

import { NextResponse } from 'next/server';
import { createContact, initDatabase, contactExists, type CreateContactInput } from '@/lib/db';

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

export async function POST(request: Request) {
    try {
        await ensureDbInitialized();

        const body: CreateContactInput = await request.json();

        // Validate required fields
        if (!body.name || !body.source) {
            return NextResponse.json(
                { success: false, error: 'Name and source are required' },
                { status: 400 }
            );
        }

        // Validate that at least email or phone is provided
        if (!body.email && !body.phone) {
            return NextResponse.json(
                { success: false, error: 'Email or phone is required' },
                { status: 400 }
            );
        }

        // Check if contact already exists
        const exists = await contactExists(body.email, body.phone);
        if (exists) {
            return NextResponse.json(
                {
                    success: true,
                    message: 'Contact already exists',
                    duplicate: true
                },
                { status: 200 }
            );
        }

        // Create the contact
        const contact = await createContact(body);

        return NextResponse.json({
            success: true,
            data: contact,
            message: 'Contact enregistré avec succès'
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating contact:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to create contact', details: String(error) },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await ensureDbInitialized();

        const { getAllContacts } = await import('@/lib/db');
        const contacts = await getAllContacts();

        return NextResponse.json({
            success: true,
            data: contacts,
            count: contacts.length
        });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch contacts', details: String(error) },
            { status: 500 }
        );
    }
}
