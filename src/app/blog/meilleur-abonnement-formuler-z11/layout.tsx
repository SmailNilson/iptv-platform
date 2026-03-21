import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Le Meilleur Abonnement Premium pour Formuler Z11 Pro Max en 2025",
    description: "Découvrez le meilleur abonnement IPTV optimisé pour Formuler Z11 Pro Max. Guide complet avec configuration MyTVOnline, qualité 4K HDR et zéro buffering.",
    keywords: "formuler z11 pro max, abonnement iptv formuler, meilleur iptv formuler z11, mytvonline iptv",
    openGraph: {
        title: "Le Meilleur Abonnement Premium pour Formuler Z11 Pro Max",
        description: "Découvrez le meilleur abonnement IPTV optimisé pour Formuler Z11 Pro Max.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/meilleur-abonnement-formuler-z11/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Meilleur Abonnement IPTV pour Formuler Z11 Pro Max",
        description: "Guide complet pour optimiser votre Formuler Z11 avec le meilleur abonnement IPTV.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/meilleur-abonnement-formuler-z11/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
