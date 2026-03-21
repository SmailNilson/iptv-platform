import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Avis IPTVPlusePlayer.live : L'Illusion Parfaite ou le Piège de 2025 ? Analyse Technique",
    description: "Analyse technique approfondie de IPTVPlusePlayer.live. Test de la qualité de streaming, stabilité, sécurité et support. L'avis complet pour éviter les arnaques.",
    keywords: "avis iptvpluseplayer, iptvpluseplayer.live avis, test iptvpluseplayer, arnaque iptv 2025",
    openGraph: {
        title: "Avis IPTVPlusePlayer.live : Analyse Technique 2025",
        description: "Analyse technique approfondie de IPTVPlusePlayer.live. Le test vérité.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/avis-iptvpluseplayer/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Avis IPTVPlusePlayer.live : Le Test Vérité",
        description: "Analyse technique approfondie de IPTVPlusePlayer.live.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/avis-iptvpluseplayer/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
