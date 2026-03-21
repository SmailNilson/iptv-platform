import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SIPTV.eu Activation 2025 : Guide Complet Smart IPTV App (5.49€)",
    description: "🔑 Guide officiel SIPTV.eu : activation Smart IPTV, récupération MAC, paiement 5.49€, ajout playlist M3U. Alternative si Smart IPTV ne fonctionne plus.",
    keywords: "siptv.eu, siptv eu activation, siptv app, smart iptv activation, siptv.app, siptv samsung, siptv lg, activation smart iptv",
    openGraph: {
        title: "SIPTV.eu : Activation Smart IPTV - Guide 2025",
        description: "🔑 Activez Smart IPTV via siptv.eu : MAC, paiement, playlist. Guide complet + alternatives si indisponible.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/siptv-eu-activation-guide/",
    },
    twitter: {
        card: "summary_large_image",
        title: "SIPTV.eu : Activation Smart IPTV 2025",
        description: "🔑 Guide complet : activez Smart IPTV facilement. Samsung, LG, Android compatible.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/siptv-eu-activation-guide/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
