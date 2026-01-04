/**
 * Blog page with static article list
 * Fast loading with static content
 */

import { Navbar } from "@/components/layout/Navbar";
import styles from "./blog.module.css";
import Link from 'next/link';
import Image from 'next/image';

// Static articles list
const staticArticles = [
    {
        id: "avis-iptvplus-france",
        title: "Avis iptvplus-france.com : Copie, Usurpation ou Service Légitime ? Le Test Vérité de Fin 2025",
        excerpt: "Ce site joue sur la confusion avec les leaders du marché. Après 20 jours d'audit : infrastructure, sécurité, crash test en direct... Notre verdict sans appel.",
        date: "30 Décembre 2025",
        readTime: "22 min",
        image: "/images/blog/avis-iptvplus-france/hero.webp"
    },
    {
        id: "avis-flash-stream-tv",
        title: "Avis Flash-Stream TV : Arnaque ou Pépite en 2025 ? Le test complet",
        excerpt: "Promesses de 4K, catalogue infini, stabilité à toute épreuve... Après 15 jours de test intensif, découvrez notre verdict sans concession sur ce fournisseur IPTV.",
        date: "29 Décembre 2025",
        readTime: "15 min",
        image: "/images/blog/avis-flash-stream-tv/hero.webp"
    },
    {
        id: "avis-abonnement-iptvplus",
        title: "Avis Abonnement-IPTVPlus.fr : Copie Low-Cost ou Réelle Alternative ? Le Test Vérité",
        excerpt: "Son nom joue sur la confusion avec 'iptv plus'. Après 3 semaines d'audit : infrastructure, sécurité, fluidité... Notre verdict sans concession.",
        date: "29 Décembre 2025",
        readTime: "18 min",
        image: "/images/blog/avis-abonnement-iptvplus/hero.webp"
    },
    {
        id: "avis-iptvpluseplayer",
        title: "Avis IPTVPlusePlayer.live : L'illusion parfaite ou le piège de 2025 ? Analyse Technique",
        excerpt: "Application propriétaire douteuse, fausse 4K, permissions abusives... Après analyse APK et crash test, notre verdict technique sans appel.",
        date: "29 Décembre 2025",
        readTime: "20 min",
        image: "/images/blog/avis-iptvpluseplayer/hero.webp"
    },
    {
        id: "configurer-iptv-smarters-hisense-vidaa",
        title: "Tuto : Comment Configurer IPTV Smarters Pro sur TV Hisense (Vidaa) sans Bug ?",
        excerpt: "Le système Vidaa de Hisense est très fermé, mais nous avons deux solutions contournées : Web Player et applications natives.",
        date: "26 Décembre 2024",
        readTime: "8 min",
        image: "/images/blog/configurer-iptv-smarters-hisense-vidaa/hero.webp"
    },
    {
        id: "test-iptv-24h-whatsapp",
        title: "Test IPTV 24h via WhatsApp : Recevez vos accès instantanément",
        excerpt: "Arrêtez de remplir des formulaires interminables. Recevez votre test IPTV 24h gratuit directement sur WhatsApp en quelques minutes.",
        date: "26 Décembre 2024",
        readTime: "5 min",
        image: "/images/blog/test-iptv-24h-whatsapp/hero.webp"
    },
    {
        id: "reglage-tivimate-eviter-buffering",
        title: "TiviMate Buffering : Les réglages secrets et le serveur qu'il vous faut",
        excerpt: "Découvrez les 3 réglages anti-lag secrets de TiviMate : Buffer Size, Video Decoder et User-Agent pour une expérience sans coupure.",
        date: "26 Décembre 2024",
        readTime: "7 min",
        image: "/images/blog/reglage-tivimate-eviter-buffering/hero.webp"
    },
    {
        id: "meilleur-abonnement-formuler-z11",
        title: "Le Meilleur Abonnement Premium optimisé pour Formuler Z11 Pro Max",
        excerpt: "Votre Formuler Z11 mérite le carburant Premium. Découvrez la configuration Portal idéale pour MyTVOnline 3.",
        date: "26 Décembre 2024",
        readTime: "6 min",
        image: "/images/blog/meilleur-abonnement-formuler-z11/hero.webp"
    },
    {
        id: "tuto-iptv-ps5-navigateur",
        title: "Comment regarder l'IPTV sur PS5 en 2025 ? (Solution Testée)",
        excerpt: "La PS5 n'a pas d'app IPTV, mais il existe une astuce. Découvrez le navigateur caché et notre Web Player compatible.",
        date: "26 Décembre 2024",
        readTime: "6 min",
        image: "/images/blog/tuto-iptv-ps5-navigateur/hero.webp"
    },
    {
        id: "activation-renouvellement-ibo-player",
        title: "Renouvellement & Activation IBO Player : Pack Abonnement 12 mois inclus",
        excerpt: "Ne payez pas deux fois ! Pack Duo : Activation IBO Player OFFERTE + Abonnement Premium 12 mois.",
        date: "26 Décembre 2024",
        readTime: "5 min",
        image: "/images/blog/activation-renouvellement-ibo-player/hero.webp"
    },
    {
        id: "iptv-premium-4k-2025",
        title: "IPTV Premium en 2025 : Arrêtez de payer pour des écrans noirs (Le Guide Définitif de la 4K)",
        excerpt: "Il est 21h45, c'est le match de l'année, et... l'image se fige. Découvrez ce qui différencie un vrai service Premium 4K d'une pâle copie.",
        date: "25 Décembre 2024",
        readTime: "8 min",
        image: "/images/blog/iptv-premium-4k-2025/hero.webp"
    },
    {
        id: "smartone-iptv",
        title: "SmartOne IPTV : Le Guide Ultime pour l'Installer et le Configurer (2025)",
        excerpt: "Transformez votre téléviseur en centre de divertissement ultime en moins de 10 minutes avec SmartOne IPTV.",
        date: "25 Décembre 2024",
        readTime: "10 min",
        image: "/images/blog/smartone-iptv/living-room.webp"
    },
    {
        id: "installer-iptv-smart-tv",
        title: "Comment installer IPTV sur Smart TV (Samsung, LG, Android TV)",
        excerpt: "Guide complet pour configurer IPTV Smarters Pro sur Samsung, LG, Android TV et autres Smart TV en quelques étapes simples.",
        date: "18 Décembre 2024",
        readTime: "5 min",
        image: "/images/blog/installer-iptv-smart-tv/hero.webp"
    }
];

export default function Blog() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.blogSection}>
                <div className={styles.container}>
                    <h1 className={styles.pageTitle}>Blog IPTV</h1>
                    <p className={styles.pageSubtitle}>
                        Guides et astuces pour profiter au maximum de votre abonnement IPTV
                    </p>

                    <div className={styles.articlesGrid}>
                        {staticArticles.map((article) => (
                            <Link
                                key={article.id}
                                href={`/blog/${article.id}`}
                                className={styles.articleCard}
                            >
                                <div className={styles.articleImage}>
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={400}
                                        height={225}
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.articleContent}>
                                    <div className={styles.articleMeta}>
                                        <span>{article.date}</span>
                                        <span>•</span>
                                        <span>{article.readTime} de lecture</span>
                                    </div>
                                    <h2 className={styles.articleTitle}>{article.title}</h2>
                                    <p className={styles.articleExcerpt}>{article.excerpt}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
