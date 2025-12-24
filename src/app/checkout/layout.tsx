import { generateSEOMetadata } from '@/lib/seo-config';

// NOINDEX - Page commerciale/transactionnelle
export const metadata = generateSEOMetadata(
    '/checkout',
    'Finaliser la Commande | IPTV Plus France',
    'Finalisez votre commande en toute sécurité. Paiement sécurisé via Stripe.'
);

export default function CheckoutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
