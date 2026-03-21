import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Test IPTV 24h via WhatsApp : Recevez Vos Accès Instantanément (Sans Coupure)",
    description: "Demandez votre test IPTV gratuit 24h via WhatsApp. Accès instantané, qualité 4K Premium, +20 000 chaînes. Sans engagement, sans carte bancaire requise.",
    keywords: "test iptv 24h gratuit, test iptv whatsapp, essai iptv gratuit, test iptv sans engagement",
    openGraph: {
        title: "Test IPTV 24h Gratuit via WhatsApp",
        description: "Recevez vos accès IPTV instantanément via WhatsApp. Test gratuit 24h sans engagement.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/test-iptv-24h-whatsapp/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Test IPTV 24h Gratuit via WhatsApp",
        description: "Accès instantané à +20 000 chaînes. Sans engagement.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/test-iptv-24h-whatsapp/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
