"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";

interface Article {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    image_url: string | null;
    status: "draft" | "published";
    published_at: string | null;
    created_at: string;
}

export default function AdminBlogPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            setLoading(true);
            const response = await fetch("/api/admin/posts");
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

    const handleDelete = async (slug: string) => {
        if (!confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) {
            return;
        }

        try {
            const response = await fetch(`/api/posts/${slug}`, {
                method: "DELETE",
            });

            if (response.ok) {
                fetchArticles();
            } else {
                alert("Erreur lors de la suppression");
            }
        } catch (err) {
            alert("Erreur lors de la suppression");
        }
    };

    const formatDate = (dateString: string | null) => {
        if (!dateString) return "Non planifié";
        const date = new Date(dateString);
        return date.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const getStatusBadge = (article: Article) => {
        if (article.status === "draft") {
            return <span style={styles.badgeDraft}>Brouillon</span>;
        }

        if (article.published_at) {
            const publishDate = new Date(article.published_at);
            const now = new Date();

            if (publishDate > now) {
                return <span style={styles.badgeScheduled}>Planifié</span>;
            }
        }

        return <span style={styles.badgePublished}>Publié</span>;
    };

    return (
        <main style={styles.main}>
            <Navbar />

            <div style={styles.container}>
                <div style={styles.header}>
                    <div>
                        <h1 style={styles.title}>Gestion du Blog</h1>
                        <p style={styles.subtitle}>
                            Gérez vos articles et planifiez vos publications
                        </p>
                    </div>
                    <Link href="/admin/blog/new" style={styles.createButton}>
                        + Nouvel Article
                    </Link>
                </div>

                {loading ? (
                    <div style={styles.loading}>
                        <p>Chargement...</p>
                    </div>
                ) : error ? (
                    <div style={styles.error}>
                        <p>Erreur: {error}</p>
                    </div>
                ) : (
                    <div style={styles.tableContainer}>
                        <table style={styles.table}>
                            <thead>
                                <tr>
                                    <th style={styles.th}>Titre</th>
                                    <th style={styles.th}>Statut</th>
                                    <th style={styles.th}>Publication</th>
                                    <th style={styles.th}>Créé le</th>
                                    <th style={styles.th}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map((article) => (
                                    <tr key={article.id} style={styles.tr}>
                                        <td style={styles.td}>
                                            <div style={styles.titleCell}>
                                                {article.image_url &&
                                                    article.image_url.startsWith("/") ? (
                                                    <img
                                                        src={article.image_url}
                                                        alt=""
                                                        style={styles.thumbnail}
                                                    />
                                                ) : (
                                                    <div style={styles.thumbnailPlaceholder}>📄</div>
                                                )}
                                                <div>
                                                    <div style={styles.articleTitle}>{article.title}</div>
                                                    <div style={styles.articleSlug}>/blog/{article.slug}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={styles.td}>{getStatusBadge(article)}</td>
                                        <td style={styles.td}>
                                            {formatDate(article.published_at)}
                                        </td>
                                        <td style={styles.td}>{formatDate(article.created_at)}</td>
                                        <td style={styles.td}>
                                            <div style={styles.actions}>
                                                <Link
                                                    href={`/admin/blog/edit/${article.slug}`}
                                                    style={styles.editButton}
                                                >
                                                    ✏️ Modifier
                                                </Link>
                                                <Link
                                                    href={`/blog-dynamic/${article.slug}`}
                                                    target="_blank"
                                                    style={styles.viewButton}
                                                >
                                                    👁️ Voir
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(article.slug)}
                                                    style={styles.deleteButton}
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {articles.length === 0 && (
                            <div style={styles.empty}>
                                <p>Aucun article. Créez votre premier article !</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Info Box about Scheduled Publishing */}
                <div style={styles.infoBox}>
                    <h3 style={styles.infoTitle}>💡 Publication planifiée sans Cron Jobs</h3>
                    <p style={styles.infoText}>
                        Ce système utilise une approche intelligente : au lieu d'exécuter des
                        tâches planifiées sur le serveur, la logique de publication est
                        intégrée directement dans les requêtes SQL.
                    </p>
                    <p style={styles.infoText}>
                        <strong>Comment ça marche ?</strong> Lorsqu'un article est marqué
                        "published" avec une date future, il reste invisible. L'API filtre
                        automatiquement avec <code>published_at &lt;= NOW()</code>. Dès que
                        la date passe, l'article apparaît instantanément !
                    </p>
                </div>
            </div>
        </main>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    main: {
        backgroundColor: "#0D1117",
        minHeight: "100vh",
        color: "#ffffff",
    },
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2rem",
        flexWrap: "wrap",
        gap: "1rem",
    },
    title: {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "0.5rem",
    },
    subtitle: {
        color: "#a0a0a0",
    },
    createButton: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.75rem 1.5rem",
        background: "linear-gradient(135deg, #7C3AFA 0%, #5B21B6 100%)",
        color: "#ffffff",
        fontWeight: "600",
        borderRadius: "8px",
        textDecoration: "none",
        transition: "transform 0.2s, box-shadow 0.2s",
    },
    loading: {
        textAlign: "center",
        padding: "3rem",
        color: "#a0a0a0",
    },
    error: {
        textAlign: "center",
        padding: "3rem",
        color: "#ef4444",
    },
    tableContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
    },
    th: {
        textAlign: "left",
        padding: "1rem",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        fontWeight: "600",
        fontSize: "0.875rem",
        color: "#a0a0a0",
    },
    tr: {
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    },
    td: {
        padding: "1rem",
        verticalAlign: "middle",
    },
    titleCell: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    thumbnail: {
        width: "48px",
        height: "48px",
        borderRadius: "8px",
        objectFit: "cover",
    },
    thumbnailPlaceholder: {
        width: "48px",
        height: "48px",
        borderRadius: "8px",
        backgroundColor: "rgba(124, 58, 250, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
    },
    articleTitle: {
        fontWeight: "500",
        marginBottom: "0.25rem",
    },
    articleSlug: {
        fontSize: "0.75rem",
        color: "#666",
    },
    badgeDraft: {
        padding: "0.25rem 0.75rem",
        borderRadius: "999px",
        fontSize: "0.75rem",
        fontWeight: "500",
        backgroundColor: "rgba(107, 114, 128, 0.2)",
        color: "#9ca3af",
    },
    badgeScheduled: {
        padding: "0.25rem 0.75rem",
        borderRadius: "999px",
        fontSize: "0.75rem",
        fontWeight: "500",
        backgroundColor: "rgba(251, 191, 36, 0.2)",
        color: "#fbbf24",
    },
    badgePublished: {
        padding: "0.25rem 0.75rem",
        borderRadius: "999px",
        fontSize: "0.75rem",
        fontWeight: "500",
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        color: "#22c55e",
    },
    actions: {
        display: "flex",
        gap: "0.5rem",
        alignItems: "center",
    },
    editButton: {
        padding: "0.5rem 0.75rem",
        borderRadius: "6px",
        fontSize: "0.75rem",
        backgroundColor: "rgba(124, 58, 250, 0.2)",
        color: "#a78bfa",
        textDecoration: "none",
        border: "none",
        cursor: "pointer",
    },
    viewButton: {
        padding: "0.5rem 0.75rem",
        borderRadius: "6px",
        fontSize: "0.75rem",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        color: "#60a5fa",
        textDecoration: "none",
    },
    deleteButton: {
        padding: "0.5rem",
        borderRadius: "6px",
        fontSize: "0.75rem",
        backgroundColor: "rgba(239, 68, 68, 0.2)",
        color: "#f87171",
        border: "none",
        cursor: "pointer",
    },
    empty: {
        textAlign: "center",
        padding: "3rem",
        color: "#a0a0a0",
    },
    infoBox: {
        marginTop: "2rem",
        padding: "1.5rem",
        background: "linear-gradient(135deg, rgba(124, 58, 250, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
        border: "1px solid rgba(124, 58, 250, 0.3)",
        borderRadius: "12px",
    },
    infoTitle: {
        fontSize: "1.125rem",
        fontWeight: "600",
        marginBottom: "1rem",
    },
    infoText: {
        color: "#a0a0a0",
        lineHeight: "1.6",
        marginBottom: "0.5rem",
    },
};
