import { Metadata } from "next";
import { BlogArticleLayoutWrapper } from '@/components/seo/BlogArticleLayoutWrapper';

export const metadata: Metadata = {
    title: "Optimiser Votre Expérience de Streaming en 2026 : Guide Complet",
    description: "Conseils pratiques pour optimiser votre streaming TV en 2026. Configuration réseau, équipement recommandé, paramètres du lecteur et diagnostic des problèmes.",
    keywords: "optimiser streaming 2026, meilleure qualité iptv, configuration streaming 4k, guide streaming",
    openGraph: {
        title: "Optimiser Votre Expérience de Streaming en 2026",
        description: "Conseils pratiques pour profiter de la meilleure qualité de visionnage.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/meilleure-iptv-2025/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Optimiser Votre Streaming en 2026",
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
    return (
        <BlogArticleLayoutWrapper
            title="Optimiser Votre Expérience de Streaming en 2026 : Guide Complet"
            description="Conseils pratiques pour optimiser votre streaming TV en 2026. Configuration réseau, équipement recommandé, paramètres du lecteur et diagnostic des problèmes."
            slug="meilleure-iptv-2025"
        >
            {children}
        </BlogArticleLayoutWrapper>
    );
}
