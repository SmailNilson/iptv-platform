
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../styles/shared.module.css';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Tarifs Abonnements IPTV - Prix Transparents (3, 6, 12 Mois)',
    description: 'Consultez nos tarifs officiels pour l\'abonnement IPTV Premium France. À partir de 4.99€/mois. Paiement sécurisé et activation immédiate.',
    alternates: {
        canonical: '/prix',
    },
};

export default function PrixPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Nos Tarifs IPTV</h1>
                    <p className={styles.heroSubtitle}>
                        La qualité Premium au meilleur prix du marché. Satisfait ou remboursé sous 24h.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid3}>
                        {/* 3 Mois */}
                        <div className={styles.card}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Découverte</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>29.99€ <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>/ 3 mois</span></div>
                            <Button href="/checkout?plan=3m" variant="outline" className="w-full" style={{ marginBottom: '2rem' }}>Choisir</Button>
                            <ul className={styles.list}>
                                <li className={styles.listItem}><Check className={styles.icon} /> Accès Complet</li>
                                <li className={styles.listItem}><Check className={styles.icon} /> Qualité 4K/FHD</li>
                                <li className={styles.listItem}><Check className={styles.icon} /> Support Standard</li>
                            </ul>
                        </div>

                        {/* 12 Mois */}
                        <div className={styles.card} style={{ borderColor: 'var(--accent-2)', transform: 'scale(1.05)', zIndex: 1 }}>
                            <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--accent-2)', color: 'white', fontSize: '0.75rem', fontWeight: 'bold', padding: '0.25rem 0.75rem', borderRadius: '0 1rem 0 1rem' }}>BESTSELLER</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-2)', marginBottom: '0.5rem' }}>Premium Annuel</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>79.99€ <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>/ an</span></div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Soit seulement <strong style={{ color: 'white' }}>6.66€ / mois</strong></div>
                            <Button href="/checkout?plan=12m" variant="primary" className="w-full" style={{ marginBottom: '2rem' }}>Choisir 12 Mois</Button>
                            <ul className={styles.list}>
                                <li className={styles.listItem}><Check className={styles.icon} /> Accès Illimité VIP</li>
                                <li className={styles.listItem}><Check className={styles.icon} /> <span style={{ color: 'white', fontWeight: 'bold' }}>2 Écrans Simultanés</span></li>
                                <li className={styles.listItem}><Check className={styles.icon} /> Priorité Support WhatsApp</li>
                                <li className={styles.listItem}><Check className={styles.icon} /> Protection Anti-Buffer Avancée</li>
                            </ul>
                        </div>

                        {/* 6 Mois */}
                        <div className={styles.card}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Confort</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>49.99€ <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>/ 6 mois</span></div>
                            <Button href="/checkout?plan=6m" variant="outline" className="w-full" style={{ marginBottom: '2rem' }}>Choisir</Button>
                            <ul className={styles.list}>
                                <li className={styles.listItem}><Check className={styles.icon} /> Accès Complet</li>
                                <li className={styles.listItem}><Check className={styles.icon} /> Qualité 4K/FHD</li>
                                <li className={styles.listItem}><Check className={styles.icon} /> Support 7j/7</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
