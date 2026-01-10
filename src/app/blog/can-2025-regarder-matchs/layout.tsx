import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Guide Complet : Configurer Votre Smart TV pour un Affichage Optimal",
    description: "Apprenez à optimiser les paramètres de votre téléviseur connecté Samsung, LG ou Android TV. Guide complet avec conseils réseau et qualité d'image.",
    keywords: "configurer smart tv, paramètres smart tv, optimiser image tv, smart tv samsung lg, connexion tv internet, paramètres image 4k",
    openGraph: {
        title: "Guide Complet : Configurer Votre Smart TV",
        description: "Apprenez à optimiser les paramètres de votre téléviseur connecté pour une meilleure expérience.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/can-2025-regarder-matchs/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Guide Complet : Configurer Votre Smart TV",
        description: "Optimisez les paramètres de votre téléviseur connecté.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/can-2025-regarder-matchs/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
