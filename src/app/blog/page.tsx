/**
 * Blog page with Static Generation (SSG) + ISR for fast loading
 * Pages are pre-rendered at build time and revalidated every 60 seconds
 */

import { Navbar } from "@/components/layout/Navbar";
import styles from "./blog.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { getPublishedArticles, initDatabase } from '@/lib/db';

// Revalidate every 60 seconds
export const revalidate = 60;

interface Article {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    image_url: string | null;
    read_time: string;
    published_at: string;
}

async function getArticles(): Promise<Article[]> {
    try {
        await initDatabase();
        const articles = await getPublishedArticles();
        return articles as Article[];
    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
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

export default async function Blog() {
    const articles = await getArticles();

    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.blogSection}>
                <div className={styles.container}>
                    <h1 className={styles.pageTitle}>Blog IPTV</h1>
                    <p className={styles.pageSubtitle}>
                        Guides et astuces pour profiter au maximum de votre abonnement IPTV
                    </p>

                    {articles.length === 0 ? (
                        <div className={styles.empty}>
                            <p>Aucun article disponible pour le moment.</p>
                        </div>
                    ) : (
                        <div className={styles.articlesGrid}>
                            {articles.map((article) => (
                                <Link
                                    key={article.id}
                                    href={`/blog/${article.slug}`}
                                    className={styles.articleCard}
                                >
                                    <div className={styles.articleImage}>
                                        {article.image_url ? (
                                            <Image
                                                src={article.image_url}
                                                alt={article.title}
                                                width={400}
                                                height={225}
                                                loading="lazy"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
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
