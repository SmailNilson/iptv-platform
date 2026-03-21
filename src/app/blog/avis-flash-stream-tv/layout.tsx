import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Avis Flash-Stream TV : Arnaque ou Pépite en 2025 ? Le Test Complet",
    description: "Test complet et avis détaillé sur Flash-Stream TV. Analyse technique de la qualité 4K, stabilité, support client et rapport qualité-prix. Verdict sans concession.",
    keywords: "avis flash stream tv, flash-stream tv avis, test flash stream, comparatif iptv 2025",
    openGraph: {
        title: "Avis Flash-Stream TV : Arnaque ou Pépite en 2025 ?",
        description: "Test complet et avis détaillé sur Flash-Stream TV. Analyse technique sans concession.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/avis-flash-stream-tv/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Avis Flash-Stream TV : Le Test Complet 2025",
        description: "Test complet et avis détaillé sur Flash-Stream TV.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/avis-flash-stream-tv/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
