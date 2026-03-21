import { Metadata } from "next";

export const metadata: Metadata = {
    title: "IPTV Plus Player Téléchargement 2025 : Guide Installation & Configuration Complète",
    description: "📥 Télécharger IPTV Plus Player pour Android, Smart TV, FireStick. Guide installation complet, configuration M3U/Xtream, alternatives fiables. Tutoriel 2025.",
    keywords: "iptv plus player, telecharger iptv plus player, iptv plus player android, iptv plus player apk, configuration iptv player, iptv plus",
    openGraph: {
        title: "IPTV Plus Player : Téléchargement & Installation 2025",
        description: "📥 Guide complet : télécharger, installer et configurer IPTV Plus Player sur tous vos appareils. Tutoriel pas à pas.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/iptv-plus-player-telechargement/",
    },
    twitter: {
        card: "summary_large_image",
        title: "IPTV Plus Player : Téléchargement & Config 2025",
        description: "📥 Installez IPTV Plus Player facilement : Android, Smart TV, FireStick. Guide complet.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/iptv-plus-player-telechargement/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
