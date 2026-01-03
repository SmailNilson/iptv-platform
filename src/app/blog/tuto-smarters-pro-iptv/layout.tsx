import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tuto : Configurer IPTV Smarters Pro - Guide Complet 2025",
    description: "Guide technique complet : Comment configurer IPTV Smarters Pro avec un abonnement premium stable. Obtenez vos codes Xtream valides pour éviter les coupures.",
    keywords: "iptv smarters pro, configurer smarters pro, tuto smarters pro, xtream codes, abonnement smarters pro",
    openGraph: {
        title: "Tuto : Configurer IPTV Smarters Pro - Guide Complet 2025",
        description: "Guide technique pour configurer IPTV Smarters Pro avec un abonnement premium stable.",
        images: ["/images/blog/tuto-smarters-pro.webp"],
        type: "article",
        locale: "fr_FR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tuto : Configurer IPTV Smarters Pro - Guide Complet 2025",
        description: "Guide technique pour configurer IPTV Smarters Pro avec un abonnement premium stable.",
        images: ["/images/blog/tuto-smarters-pro.webp"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/tuto-smarters-pro-iptv",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
