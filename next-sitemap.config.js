/** @type {import('next-sitemap').IConfig} */

// PAGES INDEXABLES UNIQUEMENT - SAFE content only
// Synchronisé avec src/lib/seo-config.ts
const INDEXED_PAGES = [
    '/blog',
    '/blog/activer-smart-iptv-samsung',   // Safe: tutoriel activation
    '/blog/installer-iptv-smart-tv',      // Safe: tutoriel installation
    '/blog/smart-iptv-activation',        // Safe: tutoriel activation
    '/blog/smartone-iptv',                // Safe: guide application
    // REWRITTEN - Now safe content
    '/blog/can-2025-regarder-matchs',     // Rewritten: Smart TV config guide
    '/blog/iptv-gratuit-vs-premium',      // Rewritten: Choose quality streaming
    '/blog/iptv-legal-france',            // Rewritten: How streaming works
    '/blog/probleme-iptv-buffering',      // Rewritten: Network optimization
    '/blog/meilleure-iptv-2025',          // Rewritten: Optimize experience
    '/compatibilite',
    '/compatibilite/*',
    '/contact',
    '/faq',
    '/channels',
    '/mentions-legales',
    '/politique-de-confidentialite',
    '/conditions',
];

module.exports = {
    siteUrl: 'https://iptvplusfrance.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,

    // EXCLUSION STRICTE - Tout sauf les pages indexables
    exclude: [
        '/',                    // Homepage avec pricing
        '/checkout',
        '/checkout/*',
        '/trial',
        '/thank-you',
        '/plans',
        '/prix',
        '/login',
        '/dashboard',
        '/dashboard/*',
        '/admin',
        '/admin/*',
        '/api',
        '/api/*',
        '/abonnement-iptv',
        '/iptv-france',
        '/iptv-premium',
        '/smart-iptv',
        '/smart-iptv/*',
        '/404',
        '/500',
    ],

    // Configuration du robots.txt généré
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: [
                    '/blog',
                    '/blog/',
                    '/compatibilite',
                    '/contact',
                    '/faq',
                    '/channels',
                    '/mentions-legales',
                    '/politique-de-confidentialite',
                    '/conditions',
                ],
                disallow: [
                    '/',
                    '/checkout',
                    '/trial',
                    '/thank-you',
                    '/plans',
                    '/prix',
                    '/login',
                    '/dashboard',
                    '/admin',
                    '/api/',
                    '/_next/',
                ],
            },
            { userAgent: 'Googlebot', allow: '/' },
            { userAgent: 'Bingbot', allow: '/' },
            { userAgent: 'AhrefsBot', disallow: '/' },
            { userAgent: 'SemrushBot', disallow: '/' },
            { userAgent: 'MJ12bot', disallow: '/' },
        ],
    },

    // Transformation des URLs avec priorités
    transform: async (config, path) => {
        // Vérifier si la page est dans la liste des pages indexables
        const isIndexable = INDEXED_PAGES.some(pattern => {
            if (pattern.endsWith('/*')) {
                return path.startsWith(pattern.replace('/*', ''));
            }
            return path === pattern;
        });

        // Ne pas inclure les pages non-indexables
        if (!isIndexable) {
            return null;
        }

        // Blog = priorité maximale
        if (path === '/blog') {
            return {
                loc: path,
                changefreq: 'daily',
                priority: 1.0,
                lastmod: new Date().toISOString(),
            };
        }

        // Articles de blog = haute priorité
        if (path.startsWith('/blog/')) {
            return {
                loc: path,
                changefreq: 'weekly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            };
        }

        // Support pages
        if (['/faq', '/contact', '/channels'].includes(path)) {
            return {
                loc: path,
                changefreq: 'monthly',
                priority: 0.6,
                lastmod: new Date().toISOString(),
            };
        }

        // Compatibilité
        if (path.startsWith('/compatibilite')) {
            return {
                loc: path,
                changefreq: 'monthly',
                priority: 0.5,
                lastmod: new Date().toISOString(),
            };
        }

        // Pages légales = basse priorité
        if (['/mentions-legales', '/politique-de-confidentialite', '/conditions'].includes(path)) {
            return {
                loc: path,
                changefreq: 'yearly',
                priority: 0.2,
                lastmod: new Date().toISOString(),
            };
        }

        return null; // Exclure tout le reste
    },
};
