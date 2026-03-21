import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Smart IPTV Activation : Comment Activer Smart IPTV en 2025 ? Guide Complet",
    description: "✅ Guide complet activation Smart IPTV (SIPTV) 2025 : adresse MAC, paiement 5.49€, ajout playlist M3U. Tutoriel étape par étape pour TV Samsung, LG et Android.",
    keywords: "smart iptv activation, siptv activation, activer smart iptv, smart iptv adresse mac, activation siptv.eu, smart iptv 5.49",
    openGraph: {
        title: "Smart IPTV Activation : Guide Complet 2025",
        description: "✅ Activez Smart IPTV facilement : MAC, paiement, playlist M3U. Tutoriel complet pour toutes les Smart TV.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/smart-iptv-activation/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Smart IPTV Activation : Le Guide Complet 2025",
        description: "✅ Activez Smart IPTV pas à pas : MAC, paiement, M3U. Compatible Samsung, LG, Android.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/smart-iptv-activation/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
