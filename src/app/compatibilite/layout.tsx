import { generateSEOMetadata } from '@/lib/seo-config';

// INDEX - Page compatibilité
export const metadata = generateSEOMetadata(
    '/compatibilite',
    'Compatibilité | Appareils Supportés',
    'Découvrez tous les appareils compatibles : Smart TV Samsung, LG, Android TV, Fire Stick, Box Android, Apple TV, smartphones.'
);

export default function CompatibiliteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
