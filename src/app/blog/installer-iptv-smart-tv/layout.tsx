import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comment Installer IPTV sur Smart TV : Guide Complet Samsung, LG, Android TV",
    description: "Guide complet pour installer IPTV sur Smart TV Samsung, LG et Android TV. Configuration IPTV Smarters Pro étape par étape avec identifiants Xtream Codes.",
    keywords: "installer iptv smart tv, iptv samsung, iptv lg, iptv android tv, iptv smarters pro, configurer iptv tv",
    openGraph: {
        title: "Comment Installer IPTV sur Smart TV : Guide Complet",
        description: "Guide complet pour installer IPTV sur Samsung, LG et Android TV.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/installer-iptv-smart-tv/",
        images: [
            {
                url: "/images/blog/installer-iptv-smart-tv/hero.webp",
                width: 1200,
                height: 675,
                alt: "Installation IPTV Smarters Pro sur Smart TV"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Comment Installer IPTV sur Smart TV",
        description: "Guide complet pour installer IPTV sur Samsung, LG et Android TV.",
        images: ["/images/blog/installer-iptv-smart-tv/hero.webp"]
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/installer-iptv-smart-tv/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
