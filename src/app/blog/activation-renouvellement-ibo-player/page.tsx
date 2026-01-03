"use client";

import { Navbar } from "@/components/layout/Navbar";
import styles from "../iptv-premium-4k-2025/article.module.css";
import Link from 'next/link';
import Image from 'next/image';


export default function ActivationIBOPlayer() {
    return (
        <main className={styles.main}>
            <Navbar />

            <article className={styles.article}>
                <div className={styles.header}>
                    <Link href="/blog" className={styles.backLink}>← Retour au blog</Link>
                    <div className={styles.meta}>
                        <span>26 Décembre 2024</span>
                        <span>•</span>
                        <span>5 min de lecture</span>
                    </div>
                    <h1 className={styles.title}>Renouvellement & Activation IBO Player : Pack Abonnement 12 mois inclus</h1>
                    <p className={styles.intro}>
                        Vous utilisez l'application <strong>IBO Player</strong> ? Excellent choix. C'est l'une des plus stables et rapides du moment. Mais vous arrivez à la fin de votre période d'essai de 7 jours, ou votre abonnement actuel a expiré.
                    </p>
                </div>

                {/* Hero Image */}
                <div className={styles.heroImage}>
                    <Image
                        src="/images/blog/activation-renouvellement-ibo-player/hero.webp"
                        alt="IBO Player Activation - Pack tout-en-un"
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                    />
                </div>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>🤔 Le dilemme classique</h2>
                        <p>
                            Vous êtes face à un dilemme :
                        </p>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <h3>💳 Payer l'activation de l'application</h3>
                                <p>Environ 8€ sur le site officiel d'IBO Player.</p>
                            </div>
                            <div className={styles.featureItem}>
                                <h3>🔍 Chercher un vendeur pour l'abonnement TV</h3>
                                <p>Environ 50-60€ ailleurs, avec le risque de tomber sur un mauvais fournisseur.</p>
                            </div>
                        </div>
                        <p style={{ marginTop: '1.5rem' }}>
                            Pourquoi se compliquer la vie et sortir la carte bancaire deux fois ?
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>❌ L'Erreur Classique</h2>
                        <p>
                            Beaucoup de gens paient l'activation sur le site officiel d'IBO Player, puis se retrouvent avec une application vide (<strong>"Playlist is empty"</strong>). Ils doivent ensuite chercher un fournisseur IPTV...
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>✅ La Solution "Tout-en-un" IPTV Plus France</h2>
                        <p>
                            Nous sommes <strong>revendeurs officiels agréés</strong>. Nous proposons un <strong>Pack Duo</strong> :
                        </p>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <h3>🎁 Activation de l'App IBO Player</h3>
                                <p>Licence à vie ou annuelle : <strong>OFFERTE/INCLUSE</strong> dans le pack.</p>
                            </div>
                            <div className={styles.featureItem}>
                                <h3>📺 Abonnement Premium 12 Mois</h3>
                                <p>Accès complet à 15 000+ chaînes et 50 000+ films/séries VOD.</p>
                            </div>
                        </div>
                        <div className={styles.steps} style={{ marginTop: '2rem' }}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>
                                <div className={styles.stepContent}>
                                    <h3>Donnez-nous votre Device ID et Key</h3>
                                    <p>Visible dans les paramètres de l'application IBO Player.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>
                                <div className={styles.stepContent}>
                                    <h3>Nous gérons tout en 10 minutes</h3>
                                    <p>L'application est activée ET les chaînes sont chargées.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>
                                <div className={styles.stepContent}>
                                    <h3>C'est parti pour 12 mois de tranquillité</h3>
                                    <p>Un seul paiement, une seule activation. Simple et efficace.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>🚀 Pourquoi IBO Player avec nos serveurs ?</h2>
                        <p>
                            IBO Player gère remarquablement bien les flux lourds (4K HDR). Combiné à nos serveurs français à haut débit, c'est l'assurance d'une <strong>expérience fluide</strong>, sans l'interface lourde des autres applications.
                        </p>
                    </section>

                    <section className={styles.ctaSection}>
                        <h2>📦 Simplifiez-vous la vie</h2>
                        <p>
                            Un seul paiement, une seule activation, et c'est parti pour un an de tranquillité.
                        </p>
                        <Link
                            href="https://wa.me/17575357760?text=Bonjour%2C%20je%20souhaite%20activer%20le%20Pack%20IBO%20Player%20%2B%20Abonnement%2012%20mois"
                            className={styles.ctaButton}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            📱 Activer mon Pack IBO Player + Abonnement sur WhatsApp
                        </Link>
                        <p className={styles.ctaNote}>
                            Mentionnez votre Device ID et nous vous activerons en moins de 10 minutes.
                        </p>
                    </section>
                </div>
            </article>
        </main>
    );
}
