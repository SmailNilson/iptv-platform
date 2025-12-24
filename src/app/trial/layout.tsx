import { generateSEOMetadata } from '@/lib/seo-config';

// NOINDEX - Page essai gratuit
export const metadata = generateSEOMetadata(
    '/trial',
    'Essai Gratuit',
    'Testez notre service gratuitement pendant 24h.'
);

export default function TrialLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
