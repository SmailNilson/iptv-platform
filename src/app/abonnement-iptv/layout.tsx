import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Abonnement IPTV Premium : Le Meilleur en France 4K/FHD 2025",
    description: "Découvrez le meilleur abonnement IPTV Premium en France. Plus de 60 000 chaînes en 4K/FHD, VOD illimitée, stable sans coupure. Compatible Smart TV, Android, iOS.",
    keywords: "abonnement iptv, iptv france, iptv premium, iptv 4k, meilleur iptv, abonnement iptv france",
    openGraph: {
        title: "Abonnement IPTV Premium : Le Meilleur en France",
        description: "Plus de 60 000 chaînes en 4K/FHD, VOD illimitée, stable sans coupure.",
        type: "website",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/abonnement-iptv/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Abonnement IPTV Premium France",
        description: "Le meilleur abonnement IPTV en France - 4K sans coupure.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/abonnement-iptv/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
