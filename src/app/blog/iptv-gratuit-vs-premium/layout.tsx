import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comment Choisir un Service de Streaming de Qualité en 2025",
    description: "Guide complet pour choisir un service de streaming de qualité. Critères de sélection, stabilité, qualité d'image et support client pour une expérience optimale.",
    keywords: "choisir streaming qualité, streaming stable, qualité streaming 4k, streaming sans coupure, meilleur streaming",
    openGraph: {
        title: "Comment Choisir un Service de Streaming de Qualité",
        description: "Guide complet pour choisir un service de streaming de qualité en 2025.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/iptv-gratuit-vs-premium/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Comment Choisir un Service de Streaming de Qualité",
        description: "Guide complet pour choisir un streaming de qualité.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/iptv-gratuit-vs-premium/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
