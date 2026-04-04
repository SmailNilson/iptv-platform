import { Metadata } from "next";
import { BlogArticleLayoutWrapper } from '@/components/seo/BlogArticleLayoutWrapper';

export const metadata: Metadata = {
    title: "IPTVPlusePlayer Avis 2026 : Arnaque ou Fiable ? Test Complet + Meilleure Alternative",
    description: "⚠️ Test IPTVPlusePlayer.live : qualité 4K mensongère, coupures fréquentes, app dangereuse. Note 2.5/10. Découvrez la vraie alternative premium testée.",
    keywords: "iptvpluseplayer, avis iptvpluseplayer, iptvpluseplayer.live, test iptvpluseplayer, arnaque iptv 2026, iptv plus player",
    openGraph: {
        title: "IPTVPlusePlayer Avis 2026 : Arnaque ou Fiable ? Test Complet",
        description: "⚠️ Test complet IPTVPlusePlayer.live : fausse 4K, coupures, sécurité douteuse. Note 2.5/10. Alternative premium recommandée.",
        type: "article",
        locale: "fr_FR",
        url: "https://iptvplusfrance.com/blog/avis-iptvpluseplayer/",
    },
    twitter: {
        card: "summary_large_image",
        title: "IPTVPlusePlayer : Arnaque ou Fiable ? Le Test 2026",
        description: "⚠️ Test complet : fausse 4K, coupures, app dangereuse. Note 2.5/10. Alternative testée incluse.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://iptvplusfrance.com/blog/avis-iptvpluseplayer/",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <BlogArticleLayoutWrapper
            title="IPTVPlusePlayer Avis 2026 : Arnaque ou Fiable ? Test Complet + Meilleure Alternative"
            description="⚠️ Test IPTVPlusePlayer.live : qualité 4K mensongère, coupures fréquentes, app dangereuse. Note 2.5/10. Découvrez la vraie alternative premium testée."
            slug="avis-iptvpluseplayer"
        >
            {children}
        </BlogArticleLayoutWrapper>
    );
}
