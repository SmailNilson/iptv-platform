"use client";

import { Navbar } from "@/components/layout/Navbar";
import styles from "../iptv-premium-4k-2025/article.module.css";
import Link from 'next/link';
import Image from 'next/image';


export default function TutoIPTVPS5() {
    return (
        <main className={styles.main}>
            <Navbar />

            <article className={styles.article}>
                <div className={styles.header}>
                    <Link href="/blog" className={styles.backLink}>← Retour au blog</Link>
                    <div className={styles.meta}>
                        <span>26 Décembre 2024</span>
                        <span>•</span>
                        <span>6 min de lecture</span>
                    </div>
                    <h1 className={styles.title}>Comment regarder l'IPTV sur PS5 en 2025 ? (Solution Testée)</h1>
                    <p className={styles.intro}>
                        La PlayStation 5 est une bête de course, mais Sony verrouille tout. Contrairement à la Xbox, il n'y a pas d'application "IPTV Smarters" ou "VLC" sur le PlayStation Store. Beaucoup pensent que c'est impossible.
                    </p>
                </div>

                {/* Hero Image */}
                <div className={styles.heroImage}>
                    <Image
                        src="/images/blog/tuto-iptv-ps5-navigateur/hero.png"
                        alt="IPTV sur PS5 - Tutoriel complet"
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                    />
                </div>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <p>
                            <strong>C'est faux.</strong> Il existe une porte dérobée (backdoor) et une solution élégante pour transformer votre PS5 en décodeur TV.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>🎮 Méthode 1 : L'astuce du Navigateur Caché (Plex)</h2>
                        <p>
                            La PS5 a un navigateur web, mais il est caché. Voici comment faire :
                        </p>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>
                                <div className={styles.stepContent}>
                                    <h3>Envoyez un message à un ami</h3>
                                    <p>Ou à vous-même sur le PSN contenant le lien : <code>plex.tv</code></p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>
                                <div className={styles.stepContent}>
                                    <h3>Cliquez sur le lien dans la conversation</h3>
                                    <p>Le navigateur s'ouvre automatiquement.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>
                                <div className={styles.stepContent}>
                                    <h3>Connectez-vous à votre compte Plex</h3>
                                    <p>Il faut que votre fournisseur IPTV (nous !) soit compatible Plex.</p>
                                </div>
                            </div>
                        </div>
                        <p style={{ marginTop: '1.5rem' }}>
                            <strong>Le Secret :</strong> Nous vous donnons un accès qui s'intègre à votre serveur Plex, et hop, vous streamez les chaînes via l'interface Plex de la PS5.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>🌐 Méthode 2 : Le Web Player Direct</h2>
                        <p>
                            C'est la méthode la plus simple pour nos clients.
                        </p>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>
                                <div className={styles.stepContent}>
                                    <h3>Utilisez l'astuce du message</h3>
                                    <p>Pour ouvrir <code>google.com</code> dans le navigateur PS5.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>
                                <div className={styles.stepContent}>
                                    <h3>Entrez l'URL de notre Web Player Sécurisé</h3>
                                    <p>Nous vous fournirons l'adresse exacte lors de votre commande.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>
                                <div className={styles.stepContent}>
                                    <h3>Entrez vos identifiants</h3>
                                    <p>La PS5 gère très bien le décodage vidéo via le navigateur, à condition que le flux soit en format HLS (ce que nous proposons).</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>⚠️ Attention à la Surchauffe</h2>
                        <p>
                            Regarder de l'IPTV en 4K demande des ressources. La PS5 est puissante, mais assurez-vous qu'elle est bien ventilée.
                        </p>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <h3>🔌 Le Problème du Wifi</h3>
                                <p>La puce Wifi de la PS5 peut être instable pour le streaming continu (micro-coupures). Nous recommandons toujours le <strong>câble Ethernet</strong> pour l'IPTV sur console.</p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.ctaSection}>
                        <h2>🎮 Pas besoin d'acheter une FireStick</h2>
                        <p>
                            Si vous avez déjà une PS5. Il vous faut juste le bon lien Web Player.
                        </p>
                        <Link
                            href="https://wa.me/17575357760?text=Bonjour%2C%20je%20souhaite%20un%20accès%20Web%20Player%20compatible%20PS5"
                            className={styles.ctaButton}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            📱 Obtenir mon accès Web Player compatible PS5
                        </Link>
                        <p className={styles.ctaNote}>
                            Mentionnez "PS5" dans votre message et nous vous guiderons pas à pas.
                        </p>
                    </section>
                </div>
            </article>
        </main>
    );
}
