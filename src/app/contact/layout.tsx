import { generateSEOMetadata } from '@/lib/seo-config';

// INDEX - Page contact
export const metadata = generateSEOMetadata(
    '/contact',
    'Contact | Support Client 24/7',
    'Contactez notre équipe de support. Disponibles 24/7 par WhatsApp, email ou chat pour répondre à vos questions.'
);

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
