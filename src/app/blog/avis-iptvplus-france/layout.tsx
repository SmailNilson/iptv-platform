import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Avis iptvplus-france.com : Copie, Usurpation ou Service Légitime ? Le Test Vérité 2025",
    description: "Test approfondi de 20 jours sur iptvplus-france.com. Analyse technique complète : infrastructure, qualité 4K, stabilité, sécurité des paiements. Verdict détaillé.",
    keywords: "avis iptvplus france, iptvplus-france.com avis, test iptv plus france, comparatif iptv 2025",
    openGraph: {
        title: "Avis iptvplus-france.com : Le Test Vérité de Fin 2025",
        description: "Test approfondi de 20 jours sur iptvplus-france.com. Analyse technique complète.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/avis-iptvplus-france/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Avis iptvplus-france.com : Le Test Vérité",
        description: "Test approfondi de 20 jours sur iptvplus-france.com.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/avis-iptvplus-france/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
