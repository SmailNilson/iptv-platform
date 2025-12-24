import { NextRequest, NextResponse } from 'next/server';
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

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { customerEmail, plan, devices, price, note, paymentLink } = body;

        // 1. Send notification email to admin
        await transporter.sendMail({
            from: '"IPTV Plus France" <contact@iptvplusfrance.com>',
            to: 'contact@iptvplusfrance.com',
            subject: `🛒 Nouvelle Commande IPTV - ${plan} (${devices} appareil${devices > 1 ? 's' : ''})`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #7C3AFA;">Nouvelle commande reçue !</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>📧 Client:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${customerEmail}</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>📦 Offre:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${plan}</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>📱 Appareils:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${devices}</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>💰 Prix:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${price}€</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>📝 Note:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${note || 'Aucune note'}</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>📅 Date:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${new Date().toLocaleString('fr-FR')}</td></tr>
                    </table>
                    <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px;">
                        <strong>💳 Lien de paiement envoyé au client:</strong><br/>
                        <a href="${paymentLink}" style="color: #7C3AFA;">${paymentLink || 'Lien non disponible'}</a>
                    </div>
                </div>
            `
        });

        // 2. Send payment link email to customer
        await transporter.sendMail({
            from: '"IPTV Plus France" <contact@iptvplusfrance.com>',
            to: customerEmail,
            replyTo: 'contact@iptvplusfrance.com',
            subject: `✅ Votre lien de paiement IPTV Plus France - ${plan}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0D1117; color: white; padding: 30px; border-radius: 12px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <h1 style="color: #7C3AFA; margin: 0;">IPTV Plus France</h1>
                    </div>
                    
                    <p style="font-size: 16px;">Bonjour,</p>
                    <p style="font-size: 16px;">Merci pour votre commande IPTV Plus France !</p>
                    
                    <div style="background: rgba(124, 58, 250, 0.1); border: 1px solid rgba(124, 58, 250, 0.3); border-radius: 12px; padding: 20px; margin: 20px 0;">
                        <h3 style="color: #7C3AFA; margin-top: 0;">📦 Récapitulatif de votre commande</h3>
                        <p style="margin: 5px 0;">• <strong>Offre:</strong> ${plan}</p>
                        <p style="margin: 5px 0;">• <strong>Appareils:</strong> ${devices}</p>
                        <p style="margin: 5px 0;">• <strong>Prix:</strong> ${price}€</p>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${paymentLink}" style="display: inline-block; background: linear-gradient(135deg, #7C3AFA 0%, #60A5FA 100%); color: white; padding: 15px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 16px;">
                            💳 Payer maintenant - ${price}€
                        </a>
                    </div>
                    
                    <p style="font-size: 14px; color: #888; text-align: center;">
                        Ou copiez ce lien : <a href="${paymentLink}" style="color: #7C3AFA;">${paymentLink}</a>
                    </p>
                    
                    <hr style="border: none; border-top: 1px solid #333; margin: 30px 0;">
                    
                    <p style="font-size: 14px; color: #888;">
                        ⚡ Après le paiement, vous recevrez vos identifiants d'accès par email dans les plus brefs délais.
                    </p>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333; font-size: 12px; color: #666;">
                        <p>Si vous avez des questions, contactez-nous :</p>
                        <p>📧 contact@iptvplusfrance.com</p>
                        <p>📱 WhatsApp: +33 7 49 93 15 69</p>
                    </div>
                </div>
            `
        });

        return NextResponse.json({ success: true, message: 'Emails envoyés avec succès' });

    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { success: false, message: 'Erreur lors de l\'envoi des emails', error: String(error) },
            { status: 500 }
        );
    }
}
