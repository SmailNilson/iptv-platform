import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Abonnement IPTV Premium : Le Meilleur en France 4K/FHD 2026",
    description: "Découvrez le meilleur abonnement IPTV Premium en France. Plus de 60 000 chaînes en 4K/FHD, VOD illimitée, stable sans coupure. Compatible Smart TV, Android, iOS.",
    keywords: "abonnement iptv, iptv france, iptv premium, iptv 4k, meilleur iptv 2026, abonnement iptv france",
    openGraph: {
        title: "Abonnement IPTV Premium : Le Meilleur en France 2026",
        description: "Plus de 60 000 chaînes en 4K/FHD, VOD illimitée, stable sans coupure.",
        type: "website",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/abonnement-iptv",
        images: [{ url: 'https://iptvplusfrance.com/assets/hero-bg.png', width: 1200, height: 630, alt: 'Abonnement IPTV Premium France' }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Abonnement IPTV Premium France 2026",
        description: "Le meilleur abonnement IPTV en France - 4K sans coupure.",
        images: ['https://iptvplusfrance.com/assets/hero-bg.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/abonnement-iptv",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
