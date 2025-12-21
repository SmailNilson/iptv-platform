
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../styles/shared.module.css';
import { PlayCircle, Settings, Tv } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Smart IPTV - L\'Application Incontournable pour votre TV',
    description: 'Tout savoir sur l\'application Smart IPTV : installation, configuration et activation. Profitez de votre abonnement IPTV directement sur votre Samsung ou LG.',
};

export default function SmartIptvPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                        <h1 className={styles.heroTitle}>
                            Smart IPTV : <br />
                            Votre Téléviseur <span className={styles.highlight}>Libéré</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Smart IPTV (SIPTV) est l'application la plus populaire pour lire vos flux M3U sur Smart TV Samsung et LG.
                            Légère, rapide et ergonomique.
                        </p>
                        <div className={styles.ctaGroup}>
                            <Button href="/smart-iptv/smart-iptv-activation" variant="primary">Guide d'Activation</Button>
                            <Button href="/abonnement-iptv" variant="outline">Obtenir un Abonnement</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid3}>
                        <div className={styles.card} style={{ alignItems: 'center', textAlign: 'center' }}>
                            <Settings size={48} color="#3b82f6" style={{ marginBottom: '1.5rem' }} />
                            <h3 className={styles.cardTitle}>Configuration Simple</h3>
                            <p className={styles.cardText}>Pas besoin de boîtier externe. Tout se passe via l'adresse MAC de votre TV.</p>
                        </div>
                        <div className={styles.card} style={{ alignItems: 'center', textAlign: 'center' }}>
                            <PlayCircle size={48} color="#10b981" style={{ marginBottom: '1.5rem' }} />
                            <h3 className={styles.cardTitle}>Lecture Fluide</h3>
                            <p className={styles.cardText}>Supporte les flux HLS, MPEG-TS. Idéal pour notre abonnement Premium.</p>
                        </div>
                        <div className={styles.card} style={{ alignItems: 'center', textAlign: 'center' }}>
                            <Tv size={48} color="#a855f7" style={{ marginBottom: '1.5rem' }} />
                            <h3 className={styles.cardTitle}>Multi-Écrans</h3>
                            <p className={styles.cardText}>Gérez vos playlists et favoris facilement sur l'interface web.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps Teaser */}
            <section className={styles.section} style={{ background: 'var(--bg-secondary)' }}>
                <div className={styles.container} style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Comment ça marche ?</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', alignItems: 'center' }}>
                        <div style={{ padding: '1rem 2rem', background: 'var(--card-bg)', borderRadius: '99px', border: '1px solid var(--glass-border)' }}>1. Installer l'app</div>
                        <div style={{ color: 'var(--text-secondary)' }}>➜</div>
                        <div style={{ padding: '1rem 2rem', background: 'var(--card-bg)', borderRadius: '99px', border: '1px solid var(--glass-border)' }}>2. Récupérer l'adresse MAC</div>
                        <div style={{ color: 'var(--text-secondary)' }}>➜</div>
                        <div style={{ padding: '1rem 2rem', background: 'var(--accent-1)', color: 'white', borderRadius: '99px', fontWeight: 'bold' }}>3. Activer l'application</div>
                    </div>
                </div>
            </section>
        </main>
    );
}
