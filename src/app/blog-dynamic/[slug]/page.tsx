/**
 * Dynamic Blog Post Page
 * Fetches and displays a single article from the database API
 * 
 * For proper SEO with dynamic content, this page uses:
 * - Server-side metadata generation
 * - Client-side content rendering
 */

import { Navbar } from "@/components/layout/Navbar";
import { BlogPost } from "@/components/blog/BlogPost";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    try {
        // Fetch article data server-side for metadata
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const response = await fetch(`${baseUrl}/api/posts/${slug}`, {
            next: { revalidate: 60 }, // Revalidate every 60 seconds
        });

        if (!response.ok) {
            return {
                title: "Article non trouvé - IPTV Plus France",
                description: "L'article demandé n'existe pas ou n'est pas encore publié.",
            };
        }

        const data = await response.json();
        const article = data.data;

        return {
            title: `${article.title} - IPTV Plus France`,
            description: article.meta_description || article.excerpt || "",
            openGraph: {
                title: `${article.title} - IPTV Plus France`,
                description: article.meta_description || article.excerpt || "",
                type: "article",
                url: `https://iptvplusfrance.com/blog-dynamic/${slug}`,
                images: article.image_url ? [{ url: article.image_url }] : [],
                publishedTime: article.published_at,
                modifiedTime: article.updated_at,
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

export default async function BlogDynamicPostPage({ params }: PageProps) {
    const { slug } = await params;

    return (
        <main style={{
            backgroundColor: "#0D1117",
            minHeight: "100vh",
            color: "#ffffff"
        }}>
            <Navbar />
            <BlogPost slug={slug} />
        </main>
    );
}
