import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "IPTV Premium 4K 2025 : Le Guide Définitif (Arrêtez les Écrans Noirs)",
    description: "Découvrez pourquoi votre IPTV coupe sans cesse et comment un vrai service Premium 4K change tout. Guide complet : infrastructure, configuration IPTV Smarters Pro, et test gratuit 24h.",
    keywords: "IPTV Premium, IPTV 4K, abonnement IPTV 2025, IPTV Smarters Pro, anti-buffering IPTV, IPTV France, meilleure IPTV",
    openGraph: {
        title: "IPTV Premium 4K 2025 : Arrêtez de payer pour des écrans noirs",
        description: "Le guide définitif pour choisir un vrai service IPTV Premium en 4K. Fini le buffering !",
        type: "article",
        publishedTime: "2024-12-25T00:00:00.000Z",
        authors: ["IPTV Plus France"],
        images: [
            {
                url: "/images/blog/iptv-premium-4k-2025/hero.webp",
                width: 1200,
                height: 675,
                alt: "IPTV Premium 4K - Match en qualité cristalline"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "IPTV Premium 4K 2025 : Le Guide Définitif",
        description: "Découvrez comment profiter de la vraie 4K sans buffering. Test gratuit 24h inclus.",
        images: ["/images/blog/iptv-premium-4k-2025/hero.webp"]
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/iptv-premium-4k-2025"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
