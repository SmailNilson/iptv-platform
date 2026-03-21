import { Metadata } from "next";

export const metadata: Metadata = {
    title: "TiviMate Buffering : Les Réglages Secrets et le Serveur Qu'il Vous Faut",
    description: "Guide expert pour éliminer le buffering sur TiviMate. Réglages secrets, configuration avancée du buffer, décodage matériel et choix du meilleur serveur IPTV.",
    keywords: "tivimate buffering, réglage tivimate, configuration tivimate, tivimate iptv settings",
    openGraph: {
        title: "TiviMate Buffering : Les Réglages Secrets",
        description: "Guide expert pour éliminer le buffering sur TiviMate et optimiser vos réglages.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/reglage-tivimate-eviter-buffering/",
    },
    twitter: {
        card: "summary_large_image",
        title: "TiviMate : Éliminer le Buffering",
        description: "Les réglages secrets pour un streaming fluide sur TiviMate.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/reglage-tivimate-eviter-buffering/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
