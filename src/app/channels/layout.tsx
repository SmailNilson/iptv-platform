import { generateSEOMetadata } from '@/lib/seo-config';

// INDEX - Page chaînes
export const metadata = generateSEOMetadata(
    '/channels',
    'Liste des Chaînes | Catalogue Complet',
    'Découvrez notre catalogue complet de chaînes TV : sport, cinéma, actualités, divertissement et contenus internationaux.'
);

export default function ChannelsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
