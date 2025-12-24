import { generateSEOMetadata } from '@/lib/seo-config';

// INDEX - Page FAQ
export const metadata = generateSEOMetadata(
    '/faq',
    'FAQ | Questions Fréquentes',
    'Réponses à toutes vos questions : installation, compatibilité, paiement, support technique et plus encore.'
);

export default function FaqLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
