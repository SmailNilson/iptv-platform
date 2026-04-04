import type { Metadata } from 'next';
import { HowToSchema, BreadcrumbSchema } from '@/components/seo/SchemaOrg';

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
    return (
        <>
            <BreadcrumbSchema items={[
                { name: 'Accueil', url: 'https://iptvplusfrance.com' },
                { name: 'Guide Installation', url: 'https://iptvplusfrance.com/guide-installation' },
            ]} />
            <HowToSchema
                title="Comment installer IPTV sur vos appareils"
                description="Guide complet pour configurer votre service IPTV sur Fire TV Stick, Android, iPhone, Smart TV Samsung/LG, MAG Box et Windows/Mac."
                steps={[
                    { name: "Installer l'application Downloader", text: "Depuis l'écran d'accueil, recherchez et installez Downloader depuis le Store de votre appareil." },
                    { name: "Activer les sources inconnues", text: "Dans Paramètres > Mon Fire TV > Options développeur, activez l'installation d'applications inconnues pour Downloader." },
                    { name: "Télécharger IPTV Smarters Pro", text: "Ouvrez Downloader et entrez l'URL https://bit.ly/mainsmart puis cliquez GO pour télécharger l'APK." },
                    { name: "Installer l'application", text: "Cliquez sur Installer une fois le téléchargement terminé, puis supprimez le fichier APK." },
                    { name: "Configurer vos identifiants", text: "Ouvrez IPTV Smarters, choisissez Login with Xtream Codes API, et entrez vos identifiants fournis par email." },
                    { name: "Profiter de vos chaînes", text: "Cliquez sur Live TV pour accéder à vos +60 000 chaînes, films et séries en 4K." },
                ]}
            />
            {children}
        </>
    );
}
