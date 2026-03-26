import { Navbar } from "@/components/layout/Navbar";
import styles from "./about.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "À propos de nous - IPTV Premium France",
    description: "Découvrez l'histoire de IPTV Premium France, notre mission et notre engagement pour vous fournir la meilleure qualité de streaming 4K à un prix abordable.",
};

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>À propos de <span className={styles.highlight}>nous</span></h1>
                    <p className={styles.subtitle}>
                        La référence du streaming premium en France depuis plus de 5 ans.
                    </p>
                </header>

                <section className={styles.section}>
                    <div className={styles.content}>
                        <h2>Notre Mission</h2>
                        <p>
                            Chez <strong>IPTV Premium France</strong>, notre mission est simple : briser le monopole des prix abusifs des opérateurs traditionnels en offrant un accès universel, stable et abordable au divertissement mondial.
                        </p>
                        <p>
                            Nous croyons que tout le monde devrait pouvoir regarder ses sports préférés, les derniers films et les actualités internationales en haute définition, sans se ruiner.
                        </p>
                    </div>
                </section>

                <section className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.icon}>🚀</div>
                        <h3>Technologie</h3>
                        <p>
                            Nous investissons massivement dans des serveurs de dernière génération pour garantir une expérience sans buffering (anti-freeze) et une qualité 4K native.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>🤝</div>
                        <h3>Transparence</h3>
                        <p>
                            Pas de frais cachés. Pas d'engagement. Vous payez pour ce que vous utilisez. Notre réputation s'est construite sur la confiance de milliers d'abonnés.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>📱</div>
                        <h3>Service Client</h3>
                        <p>
                            Une question ? Notre support WhatsApp est disponible 7j/7 pour vous accompagner dans l'installation et la configuration de vos appareils.
                        </p>
                    </div>
                </section>

                <section className={styles.values}>
                    <h2>Pourquoi nous choisir ?</h2>
                    <div className={styles.valueRow}>
                        <div className={styles.valueItem}>
                            <strong>+20 000 Chaînes</strong>
                            <span>Un catalogue mondial complet.</span>
                        </div>
                        <div className={styles.valueItem}>
                            <strong>Zéro Coupure</strong>
                            <span>Stabilité serveur de 99.9%.</span>
                        </div>
                        <div className={styles.valueItem}>
                            <strong>Activation Rapide</strong>
                            <span>Vos codes en moins de 5 minutes.</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
