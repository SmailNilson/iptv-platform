"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Article {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string | null;
    image_url: string | null;
    meta_description: string | null;
    read_time: string;
    status: "draft" | "published";
    published_at: string;
    created_at: string;
    updated_at: string;
}

interface BlogPostProps {
    slug: string;
    isAdmin?: boolean;
}

export function BlogPost({ slug, isAdmin = false }: BlogPostProps) {
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setLoading(true);
                const adminParam = isAdmin ? "?admin=true" : "";
                const response = await fetch(`/api/posts/${slug}${adminParam}`);

                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error("Article non trouvé");
                    }
                    throw new Error("Failed to fetch article");
                }

                const data = await response.json();

                if (data.success) {
                    setArticle(data.data);

                    // Update document title for SEO (Next.js handles meta tags via metadata)
                    document.title = `${data.data.title} - IPTV Plus France`;
                } else {
                    throw new Error(data.error);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [slug, isAdmin]);

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
            <div style={styles.loading}>
                <div style={styles.spinner}></div>
                <p>Chargement de l'article...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={styles.errorContainer}>
                <h1 style={styles.errorTitle}>404</h1>
                <p style={styles.errorText}>{error}</p>
                <Link href="/blog" style={styles.backLink}>
                    ← Retour au blog
                </Link>
            </div>
        );
    }

    if (!article) {
        return null;
    }

    return (
        <article style={styles.article}>
            {/* Hero Section */}
            <header style={styles.header}>
                <div style={styles.breadcrumb}>
                    <Link href="/blog" style={styles.breadcrumbLink}>
                        Blog
                    </Link>
                    <span style={styles.breadcrumbSeparator}>/</span>
                    <span style={styles.breadcrumbCurrent}>{article.title}</span>
                </div>

                <h1 style={styles.title}>{article.title}</h1>

                <div style={styles.meta}>
                    <span style={styles.metaItem}>
                        📅 {formatDate(article.published_at)}
                    </span>
                    <span style={styles.metaSeparator}>•</span>
                    <span style={styles.metaItem}>⏱️ {article.read_time} de lecture</span>
                </div>

                {article.image_url && article.image_url.startsWith("/") && (
                    <div style={styles.heroImage}>
                        <img
                            src={article.image_url}
                            alt={article.title}
                            style={styles.heroImg}
                        />
                    </div>
                )}
            </header>

            {/* Content */}
            <div
                style={styles.content}
                dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* CTA WhatsApp */}
            <div style={styles.cta}>
                <h3 style={styles.ctaTitle}>Intéressé par un abonnement IPTV Premium ?</h3>
                <p style={styles.ctaText}>
                    Contactez-nous sur WhatsApp pour un test gratuit de 24h
                </p>
                <a
                    href="https://wa.me/17575357760"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.ctaButton}
                >
                    💬 Demander un test gratuit
                </a>
            </div>

            {/* Back Link */}
            <div style={styles.footer}>
                <Link href="/blog" style={styles.backLink}>
                    ← Retour au blog
                </Link>
            </div>
        </article>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    article: {
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem 1rem",
    },
    loading: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        gap: "1rem",
        color: "#a0a0a0",
    },
    spinner: {
        width: "40px",
        height: "40px",
        border: "3px solid rgba(124, 58, 250, 0.2)",
        borderTopColor: "#7C3AFA",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
    },
    errorContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        textAlign: "center",
        padding: "2rem",
    },
    errorTitle: {
        fontSize: "6rem",
        fontWeight: "bold",
        background: "linear-gradient(135deg, #7C3AFA 0%, #5B21B6 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        margin: 0,
    },
    errorText: {
        fontSize: "1.25rem",
        color: "#a0a0a0",
        marginTop: "1rem",
    },
    header: {
        marginBottom: "2rem",
    },
    breadcrumb: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        marginBottom: "1.5rem",
        fontSize: "0.875rem",
    },
    breadcrumbLink: {
        color: "#7C3AFA",
        textDecoration: "none",
        transition: "opacity 0.2s",
    },
    breadcrumbSeparator: {
        color: "#4a4a4a",
    },
    breadcrumbCurrent: {
        color: "#a0a0a0",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxWidth: "200px",
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        lineHeight: "1.2",
        marginBottom: "1rem",
        background: "linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },
    meta: {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        color: "#a0a0a0",
        marginBottom: "1.5rem",
    },
    metaItem: {
        display: "flex",
        alignItems: "center",
        gap: "0.25rem",
    },
    metaSeparator: {
        color: "#4a4a4a",
    },
    heroImage: {
        borderRadius: "16px",
        overflow: "hidden",
        marginTop: "1.5rem",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
    },
    heroImg: {
        width: "100%",
        height: "auto",
        display: "block",
    },
    content: {
        fontSize: "1.125rem",
        lineHeight: "1.8",
        color: "#e0e0e0",
    },
    cta: {
        marginTop: "3rem",
        padding: "2rem",
        background: "linear-gradient(135deg, rgba(124, 58, 250, 0.1) 0%, rgba(91, 33, 182, 0.1) 100%)",
        border: "1px solid rgba(124, 58, 250, 0.3)",
        borderRadius: "16px",
        textAlign: "center",
    },
    ctaTitle: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "0.5rem",
        color: "#ffffff",
    },
    ctaText: {
        color: "#a0a0a0",
        marginBottom: "1.5rem",
    },
    ctaButton: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "1rem 2rem",
        background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        color: "#ffffff",
        fontWeight: "600",
        borderRadius: "12px",
        textDecoration: "none",
        transition: "transform 0.2s, box-shadow 0.2s",
        boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
    },
    footer: {
        marginTop: "3rem",
        paddingTop: "2rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    },
    backLink: {
        color: "#7C3AFA",
        textDecoration: "none",
        fontSize: "1rem",
        transition: "opacity 0.2s",
    },
};

export default BlogPost;
