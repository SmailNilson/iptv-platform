"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/app/blog/blog.module.css";

interface Article {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    image_url: string | null;
    read_time: string;
    published_at: string;
}

interface BlogListProps {
    /** If true, fetches from admin endpoint (all articles) */
    isAdmin?: boolean;
}

export function BlogList({ isAdmin = false }: BlogListProps) {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setLoading(true);
                const endpoint = isAdmin ? "/api/admin/posts" : "/api/posts";
                const response = await fetch(endpoint);

                if (!response.ok) {
                    throw new Error("Failed to fetch articles");
                }

                const data = await response.json();

                if (data.success) {
                    setArticles(data.data);
                } else {
                    throw new Error(data.error);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, [isAdmin]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    if (loading) {
        return (
            <div className={styles.loading}>
                <div className={styles.spinner}></div>
                <p>Chargement des articles...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.error}>
                <p>Erreur: {error}</p>
            </div>
        );
    }

    if (articles.length === 0) {
        return (
            <div className={styles.empty}>
                <p>Aucun article publié pour le moment.</p>
            </div>
        );
    }

    return (
        <div className={styles.articlesGrid}>
            {articles.map((article) => (
                <Link
                    href={`/blog/${article.slug}`}
                    key={article.id}
                    className={styles.articleCard}
                >
                    <div className={styles.articleImage}>
                        {article.image_url && article.image_url.startsWith("/") ? (
                            <img
                                src={article.image_url}
                                alt={article.title}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "12px",
                                }}
                            />
                        ) : (
                            <span style={{ fontSize: "3rem" }}>
                                {article.image_url || "📄"}
                            </span>
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
                        <span className={styles.readMore}>Lire l'article →</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default BlogList;
