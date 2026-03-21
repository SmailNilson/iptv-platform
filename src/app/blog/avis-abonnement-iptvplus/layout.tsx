import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Avis Abonnement-IPTVPlus.fr : Copie Low-Cost ou Réelle Alternative en 2025 ?",
    description: "Test complet et avis détaillé sur Abonnement-IPTVPlus.fr. Analyse technique, qualité de streaming, stabilité et support client. Le verdict sans concession.",
    keywords: "avis abonnement iptvplus, abonnement-iptvplus.fr avis, test iptv plus, comparatif iptv 2025",
    openGraph: {
        title: "Avis Abonnement-IPTVPlus.fr : Le Test Vérité 2025",
        description: "Test complet et avis détaillé sur Abonnement-IPTVPlus.fr. Analyse technique sans concession.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/avis-abonnement-iptvplus/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Avis Abonnement-IPTVPlus.fr : Le Test Vérité",
        description: "Test complet et avis détaillé sur Abonnement-IPTVPlus.fr.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/avis-abonnement-iptvplus/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
