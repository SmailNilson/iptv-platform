import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Optimiser la Fluidité de Votre Streaming TV : Guide Dépannage 2025",
    description: "Guide complet pour résoudre les problèmes de buffering et optimiser la fluidité de votre streaming TV. Solutions étape par étape pour WiFi, Ethernet et config réseau.",
    keywords: "problème buffering iptv, résoudre buffering streaming, optimiser fluidité tv, dépannage iptv",
    openGraph: {
        title: "Optimiser la Fluidité de Votre Streaming TV",
        description: "Guide complet pour résoudre les problèmes de buffering et optimiser votre streaming.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/probleme-iptv-buffering/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Résoudre le Buffering Streaming TV",
        description: "Solutions étape par étape pour un streaming fluide.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/probleme-iptv-buffering/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
