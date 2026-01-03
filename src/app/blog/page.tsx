"use client";

import { Navbar } from "@/components/layout/Navbar";
import styles from "./blog.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Article {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    image_url: string | null;
    read_time: string;
    published_at: string;
}

export default function Blog() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => {
                if (data.success && data.data) {
                    setArticles(data.data);
                } else {
                    setError('Erreur lors du chargement des articles');
                }
            })
            .catch(() => {
                setError('Erreur de connexion');
            })
            .finally(() => setLoading(false));
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.blogSection}>
                <div className={styles.container}>
                    <h1 className={styles.pageTitle}>Blog IPTV</h1>
                    <p className={styles.pageSubtitle}>
                        Guides et astuces pour profiter au maximum de votre abonnement IPTV
                    </p>

                    {loading && (
                        <div className={styles.loading}>
                            <p>Chargement des articles...</p>
                        </div>
                    )}

                    {error && (
                        <div className={styles.error}>
                            <p>{error}</p>
                        </div>
                    )}

                    {!loading && !error && articles.length === 0 && (
                        <div className={styles.empty}>
                            <p>Aucun article disponible pour le moment.</p>
                        </div>
                    )}

                    {!loading && !error && articles.length > 0 && (
                        <div className={styles.articlesGrid}>
                            {articles.map((article) => (
                                <Link
                                    key={article.id}
                                    href={`/blog-dynamic/${article.slug}`}
                                    className={styles.articleCard}
                                >
                                    <div className={styles.articleImage}>
                                        {article.image_url ? (
                                            <Image
                                                src={article.image_url}
                                                alt={article.title}
                                                width={400}
                                                height={225}
                                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <div className={styles.placeholderImage}>📄</div>
                                        )}
                                    </div>
                                    <div className={styles.articleContent}>
                                        <div className={styles.articleMeta}>
                                            <span>{formatDate(article.published_at)}</span>
                                            <span>•</span>
                                            <span>{article.read_time} de lecture</span>
                                        </div>
                                        <h2 className={styles.articleTitle}>{article.title}</h2>
                                        <p className={styles.articleExcerpt}>{article.excerpt}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
