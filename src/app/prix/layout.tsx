import { generateSEOMetadata } from '@/lib/seo-config';

// NOINDEX - Page tarifs
export const metadata = generateSEOMetadata(
    '/prix',
    'Tarifs',
    'Consultez nos tarifs de streaming.'
);

export default function PrixLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
