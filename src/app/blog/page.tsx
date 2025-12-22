"use client";

import { Navbar } from "@/components/layout/Navbar";
import styles from "./blog.module.css";
import Link from 'next/link';

const articles = [
    {
        id: "installer-iptv-smart-tv",
        title: "Comment installer IPTV sur Smart TV",
        excerpt: "Guide complet pour configurer votre service IPTV sur Samsung, LG, Android TV et autres Smart TV.",
        date: "18 Décembre 2024",
        readTime: "5 min",
        image: "📺"
    },
    {
        id: "smart-iptv-activation",
        title: "Activer Smart IPTV : Le Guide Complet 2025",
        excerpt: "Tutoriel étape par étape pour activer l'application Smart IPTV à vie (5.49€) et y ajouter votre playlist M3U.",
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
        title: "IPTV Gratuit vs Premium : Le Comparatif",
        excerpt: "Découvrez les différences entre les services IPTV gratuits et premium, et pourquoi investir dans un abonnement payant.",
        date: "19 Décembre 2024",
        readTime: "6 min",
        image: "⚖️"
    },
    {
        id: "iptv-legal-france",
        title: "L'IPTV est-il légal en France ?",
        excerpt: "Tout comprendre sur la légalité de l'IPTV en France : ce qui est autorisé et ce qui ne l'est pas.",
        date: "18 Décembre 2024",
        readTime: "4 min",
        image: "⚖️"
    },
    {
        id: "meilleure-iptv-2025",
        title: "Meilleure IPTV 2025 : Notre Sélection",
        excerpt: "Comparatif des meilleurs services IPTV en 2025. Qualité, stabilité, prix : on vous dit tout.",
        date: "17 Décembre 2024",
        readTime: "7 min",
        image: "🏆"
    },
    {
        id: "probleme-iptv-buffering",
        title: "Problème IPTV Buffering : Solutions",
        excerpt: "Votre IPTV rame ou coupe ? Voici toutes les solutions pour résoudre les problèmes de buffering.",
        date: "16 Décembre 2024",
        readTime: "5 min",
        image: "🔧"
    },
    {
        id: "smartone-iptv",
        title: "SmartOne IPTV : Guide d'Installation",
        excerpt: "Comment installer et configurer l'application SmartOne IPTV sur Smart TV, Fire Stick et Box Android.",
        date: "22 Décembre 2024",
        readTime: "6 min",
        image: "📲"
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
