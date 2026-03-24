/**
 * API Route: POST /api/contacts
 * Enregistre un nouveau contact (lead) dans la base de données
 */

import { NextResponse } from 'next/server';
import { createContact, initDatabase, contactExists, type CreateContactInput } from '@/lib/db';
import nodemailer from 'nodemailer';

// Zoho SMTP Configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.ZOHO_EMAIL || 'contact@iptvplusfrance.com',
        pass: process.env.ZOHO_APP_PASSWORD || 'iKCR5QTweLfK'
    }
});

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

        // Send email notification to Admin
        try {
            await transporter.sendMail({
                from: '"IPTV Plus France Contact" <contact@iptvplusfrance.com>',
                to: 'contact@iptvplusfrance.com',
                subject: `📬 Nouveau Contact/Lead reçu - ${body.source}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0D1117; color: white; padding: 30px; border-radius: 12px;">
                        <h2 style="color: #7C3AFA;">Nouveau contact enregistré !</h2>
                        <div style="background: rgba(124, 58, 250, 0.1); border: 1px solid rgba(124, 58, 250, 0.3); border-radius: 12px; padding: 20px; margin: 20px 0;">
                            <p style="margin: 5px 0;"><strong>👤 Nom:</strong> ${body.name}</p>
                            <p style="margin: 5px 0;"><strong>📧 Email:</strong> ${body.email || 'Non renseigné'}</p>
                            <p style="margin: 5px 0;"><strong>📱 Téléphone:</strong> ${body.phone || 'Non renseigné'}</p>
                            <p style="margin: 5px 0;"><strong>🎯 Source:</strong> ${body.source}</p>
                            <div style="margin-top: 15px;">
                                <strong>📝 Message:</strong>
                                <p style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 6px; white-space: pre-wrap;">${body.message || 'Aucun message'}</p>
                            </div>
                        </div>
                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333; font-size: 12px; color: #666;">
                            <p>Cet email a été envoyé automatiquement depuis le formulaire de contact du site IPTV Plus France.</p>
                        </div>
                    </div>
                `
            });
        } catch (emailError) {
            console.error('Failed to send contact notification email:', emailError);
            // We continue returning success because the lead was successfully saved to DB
        }

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
