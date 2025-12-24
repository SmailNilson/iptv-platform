import { generateSEOMetadata } from '@/lib/seo-config';

// INDEX - Page blog (contenu informatif)
export const metadata = generateSEOMetadata(
    '/blog',
    'Blog & Tutoriels | Guides Streaming et Smart TV',
    'Guides et tutoriels complets pour configurer votre Smart TV, résoudre les problèmes de streaming et optimiser votre expérience.',
    {
        openGraph: {
            title: 'Blog & Tutoriels - Guides Streaming',
            description: 'Guides et tutoriels complets pour configurer votre Smart TV.',
            type: 'website',
        },
    }
);

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
