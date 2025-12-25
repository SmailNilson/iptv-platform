import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Abonnement IPTV Premium 2025 : Reconnaître la vraie qualité 4K",
    description: "Découvrez comment distinguer un vrai abonnement IPTV Premium d'une offre bas de gamme. Stabilité 4K, anti-freeze et support réactif. Testez gratuitement.",
    keywords: "abonnement iptv premium, iptv 4k, iptv premium france, meilleur iptv 2025, iptv qualité",
    openGraph: {
        title: "Abonnement IPTV Premium 2025 : Reconnaître la vraie qualité 4K",
        description: "Découvrez comment distinguer un vrai abonnement IPTV Premium d'une offre bas de gamme.",
        images: ["/images/blog/iptv-premium-4k.jpg"],
        type: "article",
        locale: "fr_FR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Abonnement IPTV Premium 2025 : Reconnaître la vraie qualité 4K",
        description: "Découvrez comment distinguer un vrai abonnement IPTV Premium d'une offre bas de gamme.",
        images: ["/images/blog/iptv-premium-4k.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/abonnement-iptv-premium-2025",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
