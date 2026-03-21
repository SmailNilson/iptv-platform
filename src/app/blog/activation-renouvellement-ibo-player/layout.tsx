import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Renouvellement & Activation IBO Player : Pack Abonnement 12 mois inclus",
    description: "Guide complet pour activer et renouveler IBO Player avec un pack abonnement IPTV 12 mois inclus. Tutoriel étape par étape pour Smart TV, Android et iOS.",
    keywords: "ibo player activation, renouvellement ibo player, ibo player iptv, pack ibo player abonnement",
    openGraph: {
        title: "Renouvellement & Activation IBO Player : Pack Abonnement 12 mois inclus",
        description: "Guide complet pour activer et renouveler IBO Player avec un pack abonnement IPTV 12 mois inclus.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/activation-renouvellement-ibo-player/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Renouvellement & Activation IBO Player",
        description: "Guide complet pour activer et renouveler IBO Player.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/activation-renouvellement-ibo-player/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
