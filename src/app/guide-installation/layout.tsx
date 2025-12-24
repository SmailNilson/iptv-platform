import type { Metadata } from 'next';

// NOINDEX - Page guide installation (contenu à risque SEO)
export const metadata: Metadata = {
    title: 'Guide Installation IPTV | FireStick, Smart TV, Android, iOS',
    description: 'Tutoriel complet pour installer votre service IPTV sur FireStick, Smart TV Samsung/LG, Android, iPhone.',
    robots: {
        index: false,
        follow: true,
        googleBot: {
            index: false,
            follow: true,
        },
    },
};

export default function GuideLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
