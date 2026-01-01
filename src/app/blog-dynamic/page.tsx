/**
 * Dynamic Blog Page
 * Fetches and displays articles from the database API
 */

import { Navbar } from "@/components/layout/Navbar";
import { BlogList } from "@/components/blog/BlogList";
import styles from "../blog/blog.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog & Tutoriels IPTV - IPTV Plus France",
    description:
        "Guides, tutoriels et actualités IPTV. Découvrez nos conseils pour profiter au maximum de votre abonnement IPTV Premium.",
    openGraph: {
        title: "Blog & Tutoriels IPTV - IPTV Plus France",
        description:
            "Guides, tutoriels et actualités IPTV. Découvrez nos conseils pour profiter au maximum de votre abonnement IPTV Premium.",
        type: "website",
        url: "https://iptvplusfrance.com/blog-dynamic",
    },
};

export default function BlogDynamicPage() {
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

                {/* Dynamic Articles from Database */}
                <BlogList />
            </div>
        </main>
    );
}
