import { generateSEOMetadata } from '@/lib/seo-config';

// INDEX - Page conditions
export const metadata = generateSEOMetadata(
    '/conditions',
    'Conditions Générales de Vente',
    'Conditions générales de vente et d\'utilisation de nos services. Lisez attentivement avant de souscrire.'
);

export default function ConditionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
