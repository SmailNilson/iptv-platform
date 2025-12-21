
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../styles/shared.module.css';
import { Check, Tv, Signal } from 'lucide-react';

export const metadata: Metadata = {
    title: 'IPTV France - +180 Chaînes Françaises en 4K/FHD Stable',
    description: 'Le meilleur bouquet IPTV en France. Accédez à TF1, M6, Canal+, beIN Sports, RMC Sport et toutes les chaînes TNT en qualité UHD. Serveur stable sans coupure.',
    alternates: {
        canonical: '/iptv-france',
    },
};

export default function IptvFrancePage() {
    return (
        <main className={styles.main}>
            <Navbar />

            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '999px', background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                        Spécial France 🇫🇷
                    </span>
                    <h1 className={styles.heroTitle}>
                        La Télévision Française <br />
                        <span className={styles.highlight}>Réinventée</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Retrouvez toutes vos chaînes locales et nationales préférées en qualité native 4K.
                        Sans box, sans engagement, sans matériel supplémentaire.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Button href="/abonnement-iptv" variant="primary">Profiter de l'offre</Button>
                    </div>
                </div>
            </section>

            {/* Channels Grid */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Le Bouquet Français Complet</h2>

                    <div className={styles.grid3}>
                        {/* TNT */}
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle} style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', color: '#60a5fa' }}>TNT & Généralistes</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>TF1 4K</li>
                                <li className={styles.listItem}>France 2 UHD</li>
                                <li className={styles.listItem}>France 3 (Toutes régions)</li>
                                <li className={styles.listItem}>M6 4K / W9 / 6ter</li>
                                <li className={styles.listItem}>Arte / France 5</li>
                            </ul>
                        </div>

                        {/* Sport */}
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle} style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', color: '#34d399' }}>Sport Premium</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Canal+ Sport 360 / Foot</li>
                                <li className={styles.listItem}>beIN Sports 1-10 4K</li>
                                <li className={styles.listItem}>RMC Sport 1-4 UHD</li>
                                <li className={styles.listItem}>Eurosport 1 & 2</li>
                                <li className={styles.listItem}>L'Équipe TV</li>
                            </ul>
                        </div>

                        {/* Cinema */}
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle} style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', color: '#a78bfa' }}>Cinéma & Séries</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Canal+ Cinéma / Grand Écran</li>
                                <li className={styles.listItem}>Ciné+ Premier / Frisson</li>
                                <li className={styles.listItem}>OCS Max / Pulp / Géants</li>
                                <li className={styles.listItem}>Paramount Channel</li>
                                <li className={styles.listItem}>Action / RTL9</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Comparison */}
            <section className={styles.section} style={{ background: 'var(--bg-secondary)' }}>
                <div className={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Pourquoi choisir l'IPTV ?</h2>

                    <div className={styles.grid3}>
                        <div style={{ padding: '2rem', textAlign: 'center' }}>
                            <div style={{ width: '64px', height: '64px', background: 'rgba(96, 165, 250, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#60a5fa' }}>
                                <Tv size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Qualité 4K HDR</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Flux non compressés pour une image supérieure à la TNT et au câble classique.</p>
                        </div>
                        <div style={{ padding: '2rem', textAlign: 'center' }}>
                            <div style={{ width: '64px', height: '64px', background: 'rgba(52, 211, 153, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#34d399' }}>
                                <Signal size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Stabilité Maximale</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Infrastructure fibre dédiée. Latence minimale. Idéal pour le sport en direct.</p>
                        </div>
                        <div style={{ padding: '2rem', textAlign: 'center' }}>
                            <div style={{ width: '64px', height: '64px', background: 'rgba(167, 139, 250, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#a78bfa' }}>
                                <Check size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Prix Imbattable</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Économisez jusqu'à 800€ par an par rapport à un abonnement TV traditionnel.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.section}>
                <div className={styles.container} style={{ textAlign: 'center', background: 'rgba(59, 130, 246, 0.1)', padding: '4rem 2rem', borderRadius: '1rem', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Prêt à passer à la vitesse supérieure ?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Rejoignez plus de 15 000 foyers français qui ont déjà choisi notre solution.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Button href="/abonnement-iptv" variant="primary">Voir les Prix</Button>
                        <Button href="/smart-iptv" variant="outline">Guide d'installation</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
