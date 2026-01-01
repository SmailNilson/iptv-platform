"use client";

import { Navbar } from "@/components/layout/Navbar";
import styles from "./blog.module.css";
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Articles statiques existants (fallback)
const staticArticles = [
    {
        id: "avis-iptvplus-france",
        title: "Avis iptvplus-france.com : Copie, Usurpation ou Service Légitime ? Le Test Vérité de Fin 2025",
        excerpt: "Ce site joue sur la confusion avec les leaders du marché. Après 20 jours d'audit : infrastructure, sécurité, crash test en direct... Notre verdict sans appel.",
        date: "30 Décembre 2025",
        readTime: "22 min",
        image: "/images/blog/avis-iptvplus-france/hero.jpg"
    },
    {
        id: "avis-flash-stream-tv",
        title: "Avis Flash-Stream TV : Arnaque ou Pépite en 2025 ? Le test complet",
        excerpt: "Promesses de 4K, catalogue infini, stabilité à toute épreuve... Après 15 jours de test intensif, découvrez notre verdict sans concession sur ce fournisseur IPTV.",
        date: "29 Décembre 2025",
        readTime: "15 min",
        image: "/images/blog/avis-flash-stream-tv/hero.jpg"
    },
    {
        id: "avis-abonnement-iptvplus",
        title: "Avis Abonnement-IPTVPlus.fr : Copie Low-Cost ou Réelle Alternative ? Le Test Vérité",
        excerpt: "Son nom joue sur la confusion avec 'iptv plus'. Après 3 semaines d'audit : infrastructure, sécurité, fluidité... Notre verdict sans concession.",
        date: "29 Décembre 2025",
        readTime: "18 min",
        image: "/images/blog/avis-abonnement-iptvplus/hero.jpg"
    },
    {
        id: "avis-iptvpluseplayer",
        title: "Avis IPTVPlusePlayer.live : L'illusion parfaite ou le piège de 2025 ? Analyse Technique",
        excerpt: "Application propriétaire douteuse, fausse 4K, permissions abusives... Après analyse APK et crash test, notre verdict technique sans appel.",
        date: "29 Décembre 2025",
        readTime: "20 min",
        image: "/images/blog/avis-iptvpluseplayer/hero.jpg"
    },
    {
        id: "configurer-iptv-smarters-hisense-vidaa",
        title: "Tuto : Comment Configurer IPTV Smarters Pro sur TV Hisense (Vidaa) sans Bug ?",
        excerpt: "Le système Vidaa de Hisense est très fermé, mais nous avons deux solutions contournées : Web Player et applications natives.",
        date: "26 Décembre 2024",
        readTime: "8 min",
        image: "/images/blog/configurer-iptv-smarters-hisense-vidaa/hero.png"
    },
    {
        id: "test-iptv-24h-whatsapp",
        title: "Test IPTV 24h via WhatsApp : Recevez vos accès instantanément (Sans Coupure)",
        excerpt: "Arrêtez de remplir des formulaires interminables. Recevez votre test IPTV 24h gratuit directement sur WhatsApp en quelques minutes.",
        date: "26 Décembre 2024",
        readTime: "5 min",
        image: "/images/blog/test-iptv-24h-whatsapp/hero.png"
    },
    {
        id: "reglage-tivimate-eviter-buffering",
        title: "TiviMate Buffering : Les réglages secrets et le serveur qu'il vous faut",
        excerpt: "Découvrez les 3 réglages anti-lag secrets de TiviMate : Buffer Size, Video Decoder et User-Agent pour une expérience sans coupure.",
        date: "26 Décembre 2024",
        readTime: "7 min",
        image: "/images/blog/reglage-tivimate-eviter-buffering/hero.png"
    },
    {
        id: "meilleur-abonnement-formuler-z11",
        title: "Le Meilleur Abonnement Premium optimisé pour Formuler Z11 Pro Max",
        excerpt: "Votre Formuler Z11 mérite le carburant Premium. Découvrez la configuration Portal idéale pour MyTVOnline 3.",
        date: "26 Décembre 2024",
        readTime: "6 min",
        image: "/images/blog/meilleur-abonnement-formuler-z11/hero.png"
    },
    {
        id: "tuto-iptv-ps5-navigateur",
        title: "Comment regarder l'IPTV sur PS5 en 2025 ? (Solution Testée)",
        excerpt: "La PS5 n'a pas d'app IPTV, mais il existe une astuce. Découvrez le navigateur caché et notre Web Player compatible.",
        date: "26 Décembre 2024",
        readTime: "6 min",
        image: "/images/blog/tuto-iptv-ps5-navigateur/hero.png"
    },
    {
        id: "activation-renouvellement-ibo-player",
        title: "Renouvellement & Activation IBO Player : Pack Abonnement 12 mois inclus",
        excerpt: "Ne payez pas deux fois ! Pack Duo : Activation IBO Player OFFERTE + Abonnement Premium 12 mois.",
        date: "26 Décembre 2024",
        readTime: "5 min",
        image: "/images/blog/activation-renouvellement-ibo-player/hero.png"
    },
    {
        id: "iptv-premium-4k-2025",
        title: "IPTV Premium en 2025 : Arrêtez de payer pour des écrans noirs (Le Guide Définitif de la 4K)",
        excerpt: "Il est 21h45, c'est le match de l'année, et... l'image se fige. Découvrez ce qui différencie un vrai service Premium 4K d'une pâle copie.",
        date: "25 Décembre 2024",
        readTime: "8 min",
        image: "/images/blog/iptv-premium-4k-2025/hero.png"
    },
    {
        id: "abonnement-iptv-premium-2025",
        title: "Abonnement IPTV Premium en 2025 : Comment reconnaître la vraie qualité 4K ?",
        excerpt: "Découvrez comment distinguer un vrai abonnement IPTV Premium d'une offre bas de gamme. Stabilité 4K, anti-freeze et support réactif.",
        date: "25 Décembre 2024",
        readTime: "8 min",
        image: "/images/blog/iptv-premium-4k.jpg"
    },
    {
        id: "alternative-premium-iptv",
        title: "Déçu de votre fournisseur IPTV ? Voici l'alternative fiable",
        excerpt: "Vous cherchez à annuler votre abonnement ou déçu des coupures ? Découvrez l'alternative fiable avec support humain WhatsApp.",
        date: "25 Décembre 2024",
        readTime: "6 min",
        image: "/images/blog/support-whatsapp.jpg"
    },
    {
        id: "tuto-smarters-pro-iptv",
        title: "Tuto : Configurer IPTV Smarters Pro (Guide Complet)",
        excerpt: "Guide technique : Comment configurer IPTV Smarters Pro avec un abonnement premium stable. Obtenez vos codes Xtream valides.",
        date: "25 Décembre 2024",
        readTime: "5 min",
        image: "/images/blog/tuto-smarters-pro.jpg"
    },
    {
        id: "installer-iptv-smart-tv",
        title: "Comment installer IPTV sur Smart TV (Samsung, LG, Android TV)",
        excerpt: "Guide complet pour configurer IPTV Smarters Pro sur Samsung, LG, Android TV et autres Smart TV en quelques étapes simples.",
        date: "18 Décembre 2024",
        readTime: "5 min",
        image: "/images/blog/installer-iptv-smart-tv/hero.jpg"
    },
    {
        id: "smart-iptv-activation",
        title: "Activer Smart IPTV : Le Guide Complet 2025",
        excerpt: "Tutoriel étape par étape pour activer l'application Smart IPTV (5.49€) et y ajouter votre playlist M3U.",
        date: "21 Décembre 2024",
        readTime: "4 min",
        image: "/images/blog/smart-iptv-activation/hero.jpg"
    },
    {
        id: "activer-smart-iptv-samsung",
        title: "Activer Smart IPTV sur Samsung",
        excerpt: "Guide dédié pour les téléviseurs Samsung : installation et configuration de Smart IPTV.",
        date: "20 Décembre 2024",
        readTime: "3 min",
        image: "📱"
    },
    {
        id: "iptv-gratuit-vs-premium",
        title: "Comment Choisir un Service de Streaming de Qualité",
        excerpt: "Les critères essentiels pour évaluer et choisir un service de streaming fiable.",
        date: "19 Décembre 2024",
        readTime: "6 min",
        image: "⚖️"
    },
    {
        id: "iptv-legal-france",
        title: "Comment Fonctionne le Streaming TV ?",
        excerpt: "Comprendre la technologie derrière la diffusion de contenus télévisuels sur Internet.",
        date: "18 Décembre 2024",
        readTime: "4 min",
        image: "📡"
    },
    {
        id: "meilleure-iptv-2025",
        title: "Optimiser Votre Expérience de Streaming en 2025",
        excerpt: "Conseils pratiques pour profiter de la meilleure qualité de visionnage.",
        date: "17 Décembre 2024",
        readTime: "7 min",
        image: "🚀"
    },
    {
        id: "probleme-iptv-buffering",
        title: "Optimiser la Fluidité de Votre Streaming TV",
        excerpt: "Guide complet pour améliorer la qualité de votre expérience de visionnage.",
        date: "16 Décembre 2024",
        readTime: "5 min",
        image: "🔧"
    },
    {
        id: "smartone-iptv",
        title: "SmartOne IPTV : Le Guide Ultime pour l'Installer et le Configurer (2025)",
        excerpt: "Transformez votre téléviseur en centre de divertissement ultime en moins de 10 minutes avec SmartOne IPTV.",
        date: "25 Décembre 2024",
        readTime: "10 min",
        image: "/images/blog/smartone-iptv/ecosystem.jpg"
    },
    {
        id: "can-2025-regarder-matchs",
        title: "Guide Complet : Configurer Votre Smart TV",
        excerpt: "Apprenez à optimiser les paramètres de votre téléviseur connecté pour une meilleure expérience.",
        date: "22 Décembre 2024",
        readTime: "7 min",
        image: "📺"
    }
];

interface DynamicArticle {
    id: number;
    slug: string;
    title: string;
    excerpt: string | null;
    image_url: string | null;
    read_time: string;
    published_at: string;
}

export default function Blog() {
    const [dynamicArticles, setDynamicArticles] = useState<DynamicArticle[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch dynamic articles from API
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => {
                if (data.success && data.data.length > 0) {
                    setDynamicArticles(data.data);
                }
            })
            .catch(() => {
                // Silently fail - use static articles as fallback
            })
            .finally(() => setLoading(false));
    }, []);

    // Format date from ISO to French format
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    // Combine dynamic articles first, then static (avoid duplicates)
    const dynamicSlugs = new Set(dynamicArticles.map(a => a.slug));
    const filteredStaticArticles = staticArticles.filter(a => !dynamicSlugs.has(a.id));

    // Convert dynamic articles to display format
    const formattedDynamicArticles = dynamicArticles.map(a => ({
        id: a.slug,
        title: a.title,
        excerpt: a.excerpt || '',
        date: formatDate(a.published_at),
        readTime: a.read_time,
        image: a.image_url || '📄'
    }));

    // All articles: dynamic first, then static
    const allArticles = [...formattedDynamicArticles, ...filteredStaticArticles];

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Blog & Tutoriels</h1>
                    <p className={styles.subtitle}>
                        Guides et astuces pour profiter au maximum de votre abonnement IPTV
                    </p>
                </div>

                {loading ? (
                    <div className={styles.loading}>
                        <div className={styles.spinner}></div>
                        <p>Chargement des articles...</p>
                    </div>
                ) : (
                    <div className={styles.articlesGrid}>
                        {allArticles.map((article) => (
                            <Link
                                href={`/blog/${article.id}`}
                                key={article.id}
                                className={styles.articleCard}
                            >
                                <div className={styles.articleImage}>
                                    {article.image.startsWith('/') ? (
                                        <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                                    ) : (
                                        article.image
                                    )}
                                </div>
                                <div className={styles.articleContent}>
                                    <div className={styles.articleMeta}>
                                        <span>{article.date}</span>
                                        <span>•</span>
                                        <span>{article.readTime} de lecture</span>
                                    </div>
                                    <h2 className={styles.articleTitle}>{article.title}</h2>
                                    <p className={styles.articleExcerpt}>{article.excerpt}</p>
                                    <span className={styles.readMore}>Lire l'article →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
