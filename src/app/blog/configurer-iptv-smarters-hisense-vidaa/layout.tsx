import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Configurer IPTV Smarters Pro sur TV Hisense Vidaa : Guide Complet 2025",
    description: "Tutoriel complet pour configurer IPTV Smarters Pro sur votre TV Hisense avec système Vidaa. Solutions Web Player et applications alternatives IBO Player, Smart One.",
    keywords: "iptv smarters hisense, vidaa iptv, configurer iptv hisense, ibo player hisense, smart one vidaa, iptv tv hisense",
    openGraph: {
        title: "Configurer IPTV Smarters Pro sur TV Hisense Vidaa",
        description: "Tutoriel complet pour configurer IPTV sur votre TV Hisense avec système Vidaa.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/configurer-iptv-smarters-hisense-vidaa/",
        images: [
            {
                url: "/images/blog/configurer-iptv-smarters-hisense-vidaa/hero.webp",
                width: 1200,
                height: 675,
                alt: "TV Hisense avec IPTV Smarters Pro"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Configurer IPTV Smarters Pro sur TV Hisense Vidaa",
        description: "Tutoriel complet pour configurer IPTV sur Hisense Vidaa.",
        images: ["/images/blog/configurer-iptv-smarters-hisense-vidaa/hero.webp"]
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/configurer-iptv-smarters-hisense-vidaa/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
