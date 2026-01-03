import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SmartOne IPTV : Le Guide Ultime d'Installation 2025 (Tous Appareils)",
    description: "Guide complet pour installer et configurer SmartOne IPTV en 2025 sur Smart TV Samsung, LG, Fire Stick, Android TV. Configuration Xtream Codes pas à pas.",
    keywords: "SmartOne IPTV, installer SmartOne IPTV, configurer SmartOne, IPTV Samsung, IPTV LG, IPTV Fire Stick, Xtream Codes, IPTV 4K",
    openGraph: {
        title: "SmartOne IPTV : Le Guide Ultime d'Installation 2025",
        description: "Installez SmartOne IPTV sur tous vos appareils en moins de 10 minutes. Guide complet avec captures d'écran.",
        type: "article",
        publishedTime: "2024-12-25T00:00:00.000Z",
        authors: ["IPTV Plus France"],
        images: [
            {
                url: "/images/blog/smartone-iptv/ecosystem.webp",
                width: 1200,
                height: 675,
                alt: "SmartOne IPTV sur tous les appareils"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "SmartOne IPTV : Guide Complet 2025",
        description: "Installez SmartOne IPTV sur Smart TV, Fire Stick, Android TV en 10 minutes.",
        images: ["/images/blog/smartone-iptv/ecosystem.webp"]
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/smartone-iptv"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
