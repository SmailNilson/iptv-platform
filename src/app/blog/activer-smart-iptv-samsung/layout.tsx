import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Activer Smart IPTV sur Samsung : Guide Complet 2025",
    description: "Tutoriel complet pour installer et activer Smart IPTV sur votre Smart TV Samsung. Configuration étape par étape avec lien M3U, adresse MAC et alternatives.",
    keywords: "smart iptv samsung, activer smart iptv, iptv samsung tizen, installer iptv samsung, smart iptv activation, ibo player samsung",
    openGraph: {
        title: "Activer Smart IPTV sur Samsung : Guide Complet 2025",
        description: "Tutoriel complet pour installer et activer Smart IPTV sur votre Smart TV Samsung.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/activer-smart-iptv-samsung/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Activer Smart IPTV sur Samsung : Guide Complet 2025",
        description: "Tutoriel complet pour installer et activer Smart IPTV sur Samsung.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/activer-smart-iptv-samsung/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
