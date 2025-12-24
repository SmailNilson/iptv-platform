import { generateSEOMetadata } from '@/lib/seo-config';

// INDEX - Page blog (contenu informatif)
export const metadata = generateSEOMetadata(
    '/blog',
    'Tutoriels Smart TV & Streaming 2025 | Installation, Configuration, Dépannage',
    'Guides pratiques pour installer et configurer votre Smart TV Samsung, LG, Android. Résolvez les problèmes de buffering et optimisez votre streaming.',
    {
        openGraph: {
            title: 'Tutoriels Smart TV & Streaming 2025',
            description: 'Guides pratiques installation Smart TV, configuration streaming, dépannage buffering.',
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
