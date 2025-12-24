import { generateSEOMetadata } from '@/lib/seo-config';

// NOINDEX - Page de confirmation
export const metadata = generateSEOMetadata(
    '/thank-you',
    'Merci pour votre commande',
    'Votre commande a été enregistrée avec succès.'
);

export default function ThankYouLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
