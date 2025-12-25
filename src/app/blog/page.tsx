"use client";

import { Navbar } from "@/components/layout/Navbar";
import styles from "./blog.module.css";
import Link from 'next/link';

const articles = [
    {
        id: "abonnement-iptv-premium-2025",
        title: "Abonnement IPTV Premium en 2025 : Comment reconnaître la vraie qualité 4K ?",
        excerpt: "Découvrez comment distinguer un vrai abonnement IPTV Premium d'une offre bas de gamme. Stabilité 4K, anti-freeze et support réactif.",
        date: "25 Décembre 2024",
        readTime: "8 min",
        image: "🏆"
    },
    {
        id: "alternative-premium-iptv",
        title: "Déçu de votre fournisseur IPTV ? Voici l'alternative fiable",
        excerpt: "Vous cherchez à annuler votre abonnement ou déçu des coupures ? Découvrez l'alternative fiable avec support humain WhatsApp.",
        date: "25 Décembre 2024",
        readTime: "6 min",
        image: "🔄"
    },
    {
        id: "tuto-smarters-pro-iptv",
        title: "Tuto : Configurer IPTV Smarters Pro (Guide Complet)",
        excerpt: "Guide technique : Comment configurer IPTV Smarters Pro avec un abonnement premium stable. Obtenez vos codes Xtream valides.",
        date: "25 Décembre 2024",
        readTime: "5 min",
        image: "📱"
    },
    {
        id: "installer-iptv-smart-tv",
        title: "Comment installer une application sur Smart TV",
        excerpt: "Guide complet pour configurer des applications sur Samsung, LG, Android TV et autres Smart TV.",
        date: "18 Décembre 2024",
        readTime: "5 min",
        image: "📺"
    },
    {
        id: "smart-iptv-activation",
        title: "Activer Smart IPTV : Le Guide Complet 2025",
        excerpt: "Tutoriel étape par étape pour activer l'application Smart IPTV et y ajouter votre playlist.",
        date: "21 Décembre 2024",
        readTime: "4 min",
        image: "🔓"
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
        title: "SmartOne IPTV : Guide d'Installation",
        excerpt: "Comment installer et configurer l'application SmartOne sur Smart TV, Fire Stick et Box Android.",
        date: "22 Décembre 2024",
        readTime: "6 min",
        image: "📲"
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

export default function Blog() {
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

                <div className={styles.articlesGrid}>
                    {articles.map((article) => (
                        <Link
                            href={`/blog/${article.id}`}
                            key={article.id}
                            className={styles.articleCard}
                        >
                            <div className={styles.articleImage}>{article.image}</div>
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
            </div>
        </main>
    );
}
