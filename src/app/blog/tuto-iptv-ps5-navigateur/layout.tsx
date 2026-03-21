import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comment Regarder l'IPTV sur PS5 en 2025 ? (Solution Testée)",
    description: "Tutoriel complet pour regarder l'IPTV sur PlayStation 5 via le navigateur web. Solution testée et fonctionnelle en 2025 avec guide étape par étape.",
    keywords: "iptv ps5, iptv playstation 5, regarder iptv ps5, navigateur ps5 iptv, tuto iptv ps5",
    openGraph: {
        title: "Comment Regarder l'IPTV sur PS5 en 2025 ?",
        description: "Tutoriel complet pour regarder l'IPTV sur PS5 via le navigateur. Solution testée.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/tuto-iptv-ps5-navigateur/",
    },
    twitter: {
        card: "summary_large_image",
        title: "IPTV sur PS5 : Solution Testée 2025",
        description: "Tutoriel complet pour l'IPTV sur PlayStation 5.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/tuto-iptv-ps5-navigateur/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
