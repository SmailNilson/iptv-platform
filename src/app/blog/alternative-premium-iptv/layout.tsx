import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Déçu de votre fournisseur IPTV ? L'alternative fiable avec support WhatsApp",
    description: "Vous cherchez à annuler votre abonnement ou déçu des coupures ? Découvrez l'alternative fiable avec support humain WhatsApp 24/7.",
    keywords: "alternative iptv, annuler abonnement iptv, support whatsapp iptv, iptv fiable, meilleur fournisseur iptv",
    openGraph: {
        title: "Déçu de votre fournisseur IPTV ? L'alternative fiable",
        description: "Découvrez l'alternative fiable avec support humain WhatsApp 24/7.",
        images: ["/images/blog/support-whatsapp.jpg"],
        type: "article",
        locale: "fr_FR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Déçu de votre fournisseur IPTV ? L'alternative fiable",
        description: "Découvrez l'alternative fiable avec support humain WhatsApp 24/7.",
        images: ["/images/blog/support-whatsapp.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/alternative-premium-iptv",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
