/**
 * Blog page with Static Generation (SSG) + ISR for fast loading
 * Pages are pre-rendered at build time and revalidated every 60 seconds
 */

import { Navbar } from "@/components/layout/Navbar";
import styles from "./blog.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { getPublishedArticles, initDatabase } from '@/lib/db';
import type { Metadata } from 'next';

// SEO Metadata
export const metadata: Metadata = {
    title: 'Blog IPTV - Guides et Astuces | IPTV Plus France',
    description: 'Découvrez nos guides complets, tutoriels et astuces pour profiter au maximum de votre abonnement IPTV Premium. Installation, configuration et optimisation.',
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
        canonical: 'https://iptvplusfrance.com/blog'
    },
    openGraph: {
        title: 'Blog IPTV - Guides et Astuces | IPTV Plus France',
        description: 'Découvrez nos guides complets, tutoriels et astuces pour profiter au maximum de votre abonnement IPTV Premium.',
        url: 'https://iptvplusfrance.com/blog',
        type: 'website',
        siteName: 'IPTV Plus France',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog IPTV - Guides et Astuces | IPTV Plus France',
        description: 'Découvrez nos guides complets, tutoriels et astuces pour profiter au maximum de votre abonnement IPTV Premium.',
    }
};

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

export default async function Blog({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const rawSearchParams = await searchParams;
    const currentPage = Number(rawSearchParams.page) || 1;
    const itemsPerPage = 6;

    const allArticles = await getArticles();
    const totalArticles = allArticles.length;
    const totalPages = Math.ceil(totalArticles / itemsPerPage);

    // Filter articles for current page
    const articles = allArticles.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.blogSection}>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <h1 className={styles.pageTitle}>Blog IPTV</h1>
                        <p className={styles.pageSubtitle}>
                            Guides et astuces pour profiter au maximum de votre abonnement IPTV
                        </p>
                    </header>

                    {articles.length === 0 ? (
                        <div className={styles.empty}>
                            <p>Aucun article disponible pour le moment.</p>
                        </div>
                    ) : (
                        <>
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

                            {/* Pagination UI */}
                            {totalPages > 1 && (
                                <div className={styles.pagination}>
                                    {/* Previous Button */}
                                    <Link
                                        href={`/blog?page=${currentPage - 1}`}
                                        className={`${styles.pageButton} ${currentPage === 1 ? styles.disabled : ''}`}
                                        aria-disabled={currentPage === 1}
                                        style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto' }}
                                    >
                                        ← Précédent
                                    </Link>

                                    {/* Page Numbers */}
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                        <Link
                                            key={pageNum}
                                            href={`/blog?page=${pageNum}`}
                                            className={`${styles.pageButton} ${pageNum === currentPage ? styles.activePage : ''}`}
                                        >
                                            {pageNum}
                                        </Link>
                                    ))}

                                    {/* Next Button */}
                                    <Link
                                        href={`/blog?page=${currentPage + 1}`}
                                        className={`${styles.pageButton} ${currentPage === totalPages ? styles.disabled : ''}`}
                                        aria-disabled={currentPage === totalPages}
                                        style={{ pointerEvents: currentPage === totalPages ? 'none' : 'auto' }}
                                    >
                                        Suivant →
                                    </Link>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}

