/**
 * Dynamic Blog Post Page with SSG + ISR
 * Pages are pre-rendered and served instantly
 */

import { Navbar } from "@/components/layout/Navbar";
import { getPublishedArticleBySlug, getPublishedArticles, initDatabase } from "@/lib/db";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Revalidate every 60 seconds
export const revalidate = 60;

// Pre-generate pages for all published articles
export async function generateStaticParams() {
    try {
        await initDatabase();
        const articles = await getPublishedArticles();
        return articles.map((article: { slug: string }) => ({
            slug: article.slug,
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    try {
        await initDatabase();
        const article = await getPublishedArticleBySlug(slug);

        if (!article) {
            return {
                title: "Article non trouvé - IPTV Plus France",
                description: "L'article demandé n'existe pas ou n'est pas encore publié.",
            };
        }

        return {
            title: `${article.title} - IPTV Plus France`,
            description: article.meta_description || article.excerpt || "",
            robots: {
                index: true,
                follow: true,
                googleBot: {
                    index: true,
                    follow: true,
                    'max-video-preview': -1,
                    'max-image-preview': 'large',
                    'max-snippet': -1,
                }
            },
            alternates: {
                canonical: `https://iptvplusfrance.com/blog/${slug}`
            },
            openGraph: {
                title: `${article.title} - IPTV Plus France`,
                description: article.meta_description || article.excerpt || "",
                type: "article",
                url: `https://iptvplusfrance.com/blog/${slug}`,
                images: article.image_url ? [{ url: article.image_url }] : [],
                publishedTime: article.published_at?.toString(),
            },
            twitter: {
                card: "summary_large_image",
                title: article.title,
                description: article.meta_description || article.excerpt || "",
                images: article.image_url ? [article.image_url] : [],
            },
        };
    } catch (error) {
        return {
            title: "Blog - IPTV Plus France",
            description: "Découvrez nos articles et tutoriels IPTV.",
        };
    }
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

export default async function BlogDynamicPostPage({ params }: PageProps) {
    const { slug } = await params;

    await initDatabase();
    const article = await getPublishedArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return (
        <main style={{
            backgroundColor: "#0D1117",
            minHeight: "100vh",
            color: "#ffffff"
        }}>
            <Navbar />

            <article style={{
                maxWidth: "900px",
                margin: "0 auto",
                padding: "2rem 1.5rem"
            }}>
                {/* Header */}
                <div style={{ marginBottom: "2rem" }}>
                    <Link
                        href="/blog"
                        style={{
                            color: "#a78bfa",
                            textDecoration: "none",
                            marginBottom: "1rem",
                            display: "inline-block"
                        }}
                    >
                        ← Retour au blog
                    </Link>

                    <div style={{
                        color: "#888",
                        fontSize: "0.9rem",
                        marginBottom: "0.5rem"
                    }}>
                        <span>{formatDate(article.published_at?.toString() || '')}</span>
                        <span style={{ margin: "0 0.5rem" }}>•</span>
                        <span>{article.read_time} de lecture</span>
                    </div>

                    <h1 style={{
                        fontSize: "2.5rem",
                        fontWeight: "700",
                        marginBottom: "1rem",
                        lineHeight: "1.2"
                    }}>
                        {article.title}
                    </h1>

                    {article.excerpt && (
                        <p style={{
                            fontSize: "1.2rem",
                            color: "#aaa",
                            lineHeight: "1.6"
                        }}>
                            {article.excerpt}
                        </p>
                    )}
                </div>

                {/* Hero Image */}
                {article.image_url && (
                    <div style={{
                        marginBottom: "2rem",
                        borderRadius: "12px",
                        overflow: "hidden"
                    }}>
                        <Image
                            src={article.image_url}
                            alt={article.title}
                            width={900}
                            height={500}
                            sizes="(max-width: 768px) 100vw, 900px"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                )}

                {/* Content */}
                <div
                    style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.8",
                        color: "#e0e0e0"
                    }}
                    dangerouslySetInnerHTML={{ __html: article.content || '' }}
                />

                {/* CTA */}
                <div style={{
                    marginTop: "3rem",
                    padding: "2rem",
                    background: "linear-gradient(135deg, rgba(124, 58, 250, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)",
                    borderRadius: "16px",
                    textAlign: "center"
                }}>
                    <h2 style={{ marginBottom: "1rem" }}>🚀 Testez IPTV Plus France</h2>
                    <p style={{ marginBottom: "1.5rem", color: "#aaa" }}>
                        Découvrez la vraie qualité IPTV Premium avec un test gratuit de 24h.
                    </p>
                    <Link
                        href="https://wa.me/17575357760?text=Bonjour%2C%20je%20souhaite%20un%20test%20gratuit%2024h%20IPTV%20Premium"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-block",
                            padding: "1rem 2rem",
                            background: "linear-gradient(135deg, #7C3AFA 0%, #3B82F6 100%)",
                            color: "white",
                            borderRadius: "12px",
                            textDecoration: "none",
                            fontWeight: "600",
                            fontSize: "1.1rem"
                        }}
                    >
                        📱 Demander mon TEST 24H GRATUIT sur WhatsApp
                    </Link>
                </div>
            </article>
        </main>
    );
}
