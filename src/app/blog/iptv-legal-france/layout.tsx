import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comment Fonctionne le Streaming TV : Guide Technique Complet",
    description: "Comprendre la technologie derrière le streaming TV. Protocoles HLS, DASH, CDN, qualité d'image SD à 4K et optimisation de la connexion réseau.",
    keywords: "technologie streaming, comment fonctionne streaming, protocole hls, streaming cdn, qualité streaming 4k, streaming adaptatif",
    openGraph: {
        title: "Comment Fonctionne le Streaming TV",
        description: "Comprendre la technologie derrière la diffusion de contenus télévisuels sur Internet.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/iptv-legal-france/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Comment Fonctionne le Streaming TV",
        description: "Comprendre la technologie du streaming TV.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/iptv-legal-france/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
