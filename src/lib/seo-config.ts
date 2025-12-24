import { Metadata } from 'next';

// SEO Indexing Rules Configuration
// A) INDEX (index, follow) - Pages to be indexed by search engines
// B) NOINDEX (noindex, follow) - Pages to NOT index but follow links

type IndexRule = {
    index: boolean;
    follow: boolean;
};

// Default: noindex for safety
export const defaultIndexRule: IndexRule = { index: false, follow: true };

// Pages to INDEX (appear in Google) - SAFE content only
export const indexedPages: string[] = [
    '/blog',
    '/blog/activer-smart-iptv-samsung',      // Safe: tutoriel activation app
    '/blog/installer-iptv-smart-tv',         // Safe: tutoriel installation
    '/blog/smart-iptv-activation',           // Safe: tutoriel activation
    '/blog/smartone-iptv',                   // Safe: guide application
    // REWRITTEN - Now safe content
    '/blog/can-2025-regarder-matchs',        // Rewritten: Smart TV configuration guide
    '/blog/iptv-gratuit-vs-premium',         // Rewritten: How to choose quality streaming
    '/blog/iptv-legal-france',               // Rewritten: How streaming works
    '/blog/probleme-iptv-buffering',         // Rewritten: Network optimization
    '/blog/meilleure-iptv-2025',             // Rewritten: Optimize streaming experience
    '/compatibilite',
    '/compatibilite/iptv-smart-tv',
    '/contact',
    '/mentions-legales',
    '/politique-de-confidentialite',
    '/conditions',
    '/faq',
    '/channels',
];

// Pages to NOINDEX (hide from Google but follow links)
export const noindexPages: string[] = [
    '/', // Homepage has pricing
    '/trial',
    '/checkout',
    '/plans',
    '/prix',
    '/thank-you',
    '/login',
    '/dashboard',
    '/admin',
    '/admin/subscriptions',
    '/admin/users',
    '/abonnement-iptv',
    '/iptv-france',
    '/iptv-premium',
    '/smart-iptv',
    '/smart-iptv/smart-iptv-activation',
];

// Helper function to get robots meta for a page
export function getRobotsForPage(pathname: string): { index: boolean; follow: boolean } {
    if (indexedPages.includes(pathname)) {
        return { index: true, follow: true };
    }
    return { index: false, follow: true };
}

// Helper to generate metadata with proper robots directive
export function generateSEOMetadata(
    pathname: string,
    title: string,
    description: string,
    additionalMetadata?: Partial<Metadata>
): Metadata {
    const robots = getRobotsForPage(pathname);

    return {
        title,
        description,
        robots: {
            index: robots.index,
            follow: robots.follow,
            googleBot: {
                index: robots.index,
                follow: robots.follow,
            },
        },
        ...additionalMetadata,
    };
}
