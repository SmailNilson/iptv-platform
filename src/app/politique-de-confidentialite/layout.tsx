import { generateSEOMetadata } from '@/lib/seo-config';

// INDEX - Page politique de confidentialité
export const metadata = generateSEOMetadata(
    '/politique-de-confidentialite',
    'Politique de Confidentialité',
    'Notre politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos données personnelles.'
);

export default function PolitiqueLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
