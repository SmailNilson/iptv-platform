import { generateSEOMetadata } from '@/lib/seo-config';

// NOINDEX - Page offres/plans
export const metadata = generateSEOMetadata(
    '/plans',
    'Nos Offres',
    'Découvrez nos offres de streaming premium.'
);

export default function PlansLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
