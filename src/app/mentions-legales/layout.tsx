import { generateSEOMetadata } from '@/lib/seo-config';

// INDEX - Page mentions légales
export const metadata = generateSEOMetadata(
    '/mentions-legales',
    'Mentions Légales',
    'Mentions légales et informations juridiques relatives à notre site web et nos services.'
);

export default function MentionsLegalesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
