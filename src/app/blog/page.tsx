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
