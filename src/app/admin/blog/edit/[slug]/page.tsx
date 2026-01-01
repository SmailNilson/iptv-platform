"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";

interface ArticleForm {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    image_url: string;
    meta_description: string;
    read_time: string;
    status: "draft" | "published";
    published_at: string;
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function EditArticlePage({ params }: PageProps) {
    const { slug } = use(params);
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [form, setForm] = useState<ArticleForm>({
        title: "",
        slug: "",
        content: "",
        excerpt: "",
        image_url: "",
        meta_description: "",
        read_time: "5 min",
        status: "draft",
        published_at: "",
    });

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`/api/posts/${slug}?admin=true`);
                const data = await response.json();

                if (data.success) {
                    const article = data.data;
                    setForm({
                        title: article.title,
                        slug: article.slug,
                        content: article.content,
                        excerpt: article.excerpt || "",
                        image_url: article.image_url || "",
                        meta_description: article.meta_description || "",
                        read_time: article.read_time || "5 min",
                        status: article.status,
                        published_at: article.published_at
                            ? article.published_at.slice(0, 16)
                            : "",
                    });
                } else {
                    throw new Error(data.error);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "Article non trouvé");
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [slug]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setError(null);

        try {
            const response = await fetch(`/api/posts/${slug}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (data.success) {
                router.push("/admin/blog");
            } else {
                throw new Error(data.error);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Une erreur est survenue");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <main style={styles.main}>
                <Navbar />
                <div style={styles.loading}>
                    <p>Chargement...</p>
                </div>
            </main>
        );
    }

    return (
        <main style={styles.main}>
            <Navbar />

            <div style={styles.container}>
                <div style={styles.header}>
                    <Link href="/admin/blog" style={styles.backLink}>
                        ← Retour
                    </Link>
                    <h1 style={styles.title}>Modifier l'article</h1>
                </div>

                {error && (
                    <div style={styles.errorBox}>
                        <p>{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.grid}>
                        {/* Main Content */}
                        <div style={styles.mainColumn}>
                            <div style={styles.field}>
                                <label style={styles.label}>Titre *</label>
                                <input
                                    type="text"
                                    value={form.title}
                                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                                    style={styles.input}
                                    required
                                />
                            </div>

                            <div style={styles.field}>
                                <label style={styles.label}>Slug (URL)</label>
                                <div style={styles.slugContainer}>
                                    <span style={styles.slugPrefix}>/blog/</span>
                                    <input
                                        type="text"
                                        value={form.slug}
                                        onChange={(e) => setForm({ ...form, slug: e.target.value })}
                                        style={styles.slugInput}
                                    />
                                </div>
                            </div>

                            <div style={styles.field}>
                                <label style={styles.label}>Extrait</label>
                                <textarea
                                    value={form.excerpt}
                                    onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                                    style={styles.textarea}
                                    rows={3}
                                />
                            </div>

                            <div style={styles.field}>
                                <label style={styles.label}>Contenu (HTML) *</label>
                                <textarea
                                    value={form.content}
                                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                                    style={styles.contentTextarea}
                                    rows={20}
                                    required
                                />
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div style={styles.sidebar}>
                            {/* Publication Box */}
                            <div style={styles.box}>
                                <h3 style={styles.boxTitle}>Publication</h3>

                                <div style={styles.field}>
                                    <label style={styles.label}>Statut</label>
                                    <select
                                        value={form.status}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                status: e.target.value as "draft" | "published",
                                            })
                                        }
                                        style={styles.select}
                                    >
                                        <option value="draft">Brouillon</option>
                                        <option value="published">Publié</option>
                                    </select>
                                </div>

                                <div style={styles.field}>
                                    <label style={styles.label}>Date de publication</label>
                                    <input
                                        type="datetime-local"
                                        value={form.published_at}
                                        onChange={(e) =>
                                            setForm({ ...form, published_at: e.target.value })
                                        }
                                        style={styles.input}
                                    />
                                    <p style={styles.hint}>
                                        💡 Si la date est dans le futur, l'article sera visible
                                        uniquement après cette date.
                                    </p>
                                </div>
                            </div>

                            {/* SEO Box */}
                            <div style={styles.box}>
                                <h3 style={styles.boxTitle}>SEO & Meta</h3>

                                <div style={styles.field}>
                                    <label style={styles.label}>Image (URL)</label>
                                    <input
                                        type="text"
                                        value={form.image_url}
                                        onChange={(e) =>
                                            setForm({ ...form, image_url: e.target.value })
                                        }
                                        style={styles.input}
                                    />
                                    {form.image_url && form.image_url.startsWith("/") && (
                                        <img
                                            src={form.image_url}
                                            alt="Preview"
                                            style={styles.imagePreview}
                                        />
                                    )}
                                </div>

                                <div style={styles.field}>
                                    <label style={styles.label}>Meta Description</label>
                                    <textarea
                                        value={form.meta_description}
                                        onChange={(e) =>
                                            setForm({ ...form, meta_description: e.target.value })
                                        }
                                        style={styles.textarea}
                                        rows={3}
                                    />
                                    <p style={styles.hint}>
                                        {form.meta_description.length}/160 caractères
                                    </p>
                                </div>

                                <div style={styles.field}>
                                    <label style={styles.label}>Temps de lecture</label>
                                    <input
                                        type="text"
                                        value={form.read_time}
                                        onChange={(e) =>
                                            setForm({ ...form, read_time: e.target.value })
                                        }
                                        style={styles.input}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div style={styles.submitContainer}>
                        <button
                            type="submit"
                            disabled={saving}
                            style={{
                                ...styles.submitButton,
                                opacity: saving ? 0.7 : 1,
                            }}
                        >
                            {saving ? "Enregistrement..." : "Sauvegarder les modifications"}
                        </button>
                    </div>
                </form>
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
    loading: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        color: "#a0a0a0",
    },
    header: {
        marginBottom: "2rem",
    },
    backLink: {
        color: "#7C3AFA",
        textDecoration: "none",
        fontSize: "0.875rem",
        marginBottom: "0.5rem",
        display: "inline-block",
    },
    title: {
        fontSize: "2rem",
        fontWeight: "bold",
    },
    errorBox: {
        padding: "1rem",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        border: "1px solid rgba(239, 68, 68, 0.3)",
        borderRadius: "8px",
        marginBottom: "1.5rem",
        color: "#f87171",
    },
    form: {},
    grid: {
        display: "grid",
        gridTemplateColumns: "1fr 350px",
        gap: "2rem",
    },
    mainColumn: {},
    sidebar: {},
    field: {
        marginBottom: "1.5rem",
    },
    label: {
        display: "block",
        marginBottom: "0.5rem",
        fontWeight: "500",
        fontSize: "0.875rem",
    },
    input: {
        width: "100%",
        padding: "0.75rem 1rem",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        color: "#ffffff",
        fontSize: "1rem",
        outline: "none",
    },
    slugContainer: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        overflow: "hidden",
    },
    slugPrefix: {
        padding: "0.75rem",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        color: "#666",
        borderRight: "1px solid rgba(255, 255, 255, 0.1)",
    },
    slugInput: {
        flex: 1,
        padding: "0.75rem",
        backgroundColor: "transparent",
        border: "none",
        color: "#ffffff",
        fontSize: "1rem",
        outline: "none",
    },
    textarea: {
        width: "100%",
        padding: "0.75rem 1rem",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        color: "#ffffff",
        fontSize: "1rem",
        resize: "vertical",
        outline: "none",
        fontFamily: "inherit",
    },
    contentTextarea: {
        width: "100%",
        padding: "1rem",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        color: "#ffffff",
        fontSize: "0.875rem",
        resize: "vertical",
        outline: "none",
        fontFamily: "monospace",
    },
    hint: {
        marginTop: "0.5rem",
        fontSize: "0.75rem",
        color: "#666",
    },
    select: {
        width: "100%",
        padding: "0.75rem 1rem",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        color: "#ffffff",
        fontSize: "1rem",
        outline: "none",
    },
    box: {
        padding: "1.5rem",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "12px",
        marginBottom: "1.5rem",
    },
    boxTitle: {
        fontSize: "1rem",
        fontWeight: "600",
        marginBottom: "1rem",
        paddingBottom: "0.75rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    },
    imagePreview: {
        marginTop: "0.75rem",
        width: "100%",
        borderRadius: "8px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    submitContainer: {
        marginTop: "2rem",
        paddingTop: "2rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    },
    submitButton: {
        padding: "1rem 2rem",
        background: "linear-gradient(135deg, #7C3AFA 0%, #5B21B6 100%)",
        color: "#ffffff",
        fontWeight: "600",
        fontSize: "1rem",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
    },
};
