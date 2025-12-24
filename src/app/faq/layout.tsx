import { generateSEOMetadata } from '@/lib/seo-config';

// INDEX - Page FAQ
export const metadata = generateSEOMetadata(
    '/faq',
    'FAQ Streaming TV 2025 | Installation, Compatibilité, Support',
    'Réponses à vos questions : comment installer sur Smart TV, compatibilité appareils, résolution problèmes buffering, support technique 24/7.'
);

export default function FaqLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
