
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../styles/shared.module.css';
import { CheckCircle, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Abonnement IPTV Premium - Le Meilleur en France (4K/FHD)',
    description: 'Découvrez le meilleur abonnement IPTV en France. Plus de 100 000 chaînes et VOD en 4K/FHD. Stable, sans coupure, et compatible Smart TV, Android, iOS.',
    alternates: {
        canonical: '/abonnement-iptv',
    },
};

export default function AbonnementIPTVPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>
                        Abonnement IPTV Premium <br />
                        <span className={styles.highlight}>Numéro 1 en France</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Profitez de plus de 60,000 chaînes TV et 100,000 films & séries en 4K/FHD sans coupure.
                        La meilleure stabilité du marché.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Button href="/plans" variant="primary">Voir les Offres</Button>
                        <Button href="https://wa.me/123456789" variant="secondary">Contact WhatsApp</Button>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="tarifs" className={styles.section}>
                <div className={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Nos Formules d'Abonnement</h2>

                    <div className={styles.grid3}>
                        {/* 3 Mois */}
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>3 Mois</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-2)', marginBottom: '1.5rem' }}>29.99€</div>
                            <ul className={styles.list} style={{ flex: 1 }}>
                                <li className={styles.listItem}><CheckCircle size={18} className={styles.icon} /> +60,000 Chaînes</li>
                                <li className={styles.listItem}><CheckCircle size={18} className={styles.icon} /> VOD Illimitée</li>
                                <li className={styles.listItem}><CheckCircle size={18} className={styles.icon} /> Anti-Buffer</li>
                            </ul>
                            <Button href="/checkout?plan=3m" variant="secondary" className="w-full">Commander</Button>
                        </div>

                        {/* 6 Mois */}
                        <div className={styles.card} style={{ borderColor: 'var(--accent-1)', boxShadow: '0 0 20px rgba(124, 58, 237, 0.2)' }}>
                            <div style={{ position: 'absolute', top: '-12px', right: '20px', background: 'var(--accent-1)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>POPULAIRE</div>
                            <h3 className={styles.cardTitle}>6 Mois</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-1)', marginBottom: '1.5rem' }}>49.99€</div>
                            <ul className={styles.list} style={{ flex: 1 }}>
                                <li className={styles.listItem}><CheckCircle size={18} className={styles.icon} /> +60,000 Chaînes</li>
                                <li className={styles.listItem}><CheckCircle size={18} className={styles.icon} /> VOD Illimitée</li>
                                <li className={styles.listItem}><CheckCircle size={18} className={styles.icon} /> Anti-Buffer</li>
                                <li className={styles.listItem}><CheckCircle size={18} className={styles.icon} /> Installation Offerte</li>
                            </ul>
                            <Button href="/checkout?plan=6m" variant="primary" className="w-full">Commander</Button>
                        </div>

                        {/* 12 Mois */}
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>12 Mois</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#a78bfa', marginBottom: '1.5rem' }}>79.99€</div>
                            <ul className={styles.list} style={{ flex: 1 }}>
                                <li className={styles.listItem}><CheckCircle size={18} className={styles.icon} /> Tout Inclus VIP</li>
                                <li className={styles.listItem}><CheckCircle size={18} className={styles.icon} /> 2 Écrans Simultanés</li>
                                <li className={styles.listItem}><CheckCircle size={18} className={styles.icon} /> Support Prioritaire</li>
                            </ul>
                            <Button href="/checkout?plan=12m" variant="secondary" className="w-full">Commander</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Schema */}
            <section className={styles.section} style={{ background: 'var(--bg-secondary)' }}>
                <div className={styles.container} style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Questions Fréquentes</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <details style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', cursor: 'pointer' }}>
                            <summary style={{ fontWeight: 'bold', fontSize: '1.1rem', listStyle: 'none' }}>Est-ce que l'abonnement fonctionne sur plusieurs appareils ?</summary>
                            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Oui, notre abonnement standard 12 mois inclut 2 connexions simultanées.</p>
                        </details>
                        <details style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', cursor: 'pointer' }}>
                            <summary style={{ fontWeight: 'bold', fontSize: '1.1rem', listStyle: 'none' }}>Comment installer l'IPTV sur ma Smart TV ?</summary>
                            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>C'est très simple. Installez Smart IPTV, IBO Player ou Nanomid. Nous vous envoyons le lien m3u par email.</p>
                        </details>
                    </div>
                </div>
            </section>
        </main>
    );
}
