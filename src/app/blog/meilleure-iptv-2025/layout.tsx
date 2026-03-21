import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Optimiser Votre Expérience de Streaming en 2025 : Guide Complet",
    description: "Conseils pratiques pour optimiser votre streaming TV en 2025. Configuration réseau, équipement recommandé, paramètres du lecteur et diagnostic des problèmes.",
    keywords: "optimiser streaming 2025, meilleure qualité iptv, configuration streaming 4k, guide streaming",
    openGraph: {
        title: "Optimiser Votre Expérience de Streaming en 2025",
        description: "Conseils pratiques pour profiter de la meilleure qualité de visionnage.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/meilleure-iptv-2025/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Optimiser Votre Streaming en 2025",
        description: "Guide complet pour une expérience de streaming optimale.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/meilleure-iptv-2025/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
