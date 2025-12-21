
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export const metadata: Metadata = {
    title: 'IPTV sur Smart TV Samsung & LG - Guide d\'Installation',
    description: 'Comment installer facilement notre abonnement IPTV sur votre Smart TV Samsung ou LG. Compatible Smart IPTV, IBO Player.',
};

export default function IptvSmartTvPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.section} style={{ paddingTop: '6rem' }}>
                <div className={styles.container}>
                    <article className={styles.prose}>
                        <h1 className={styles.heroTitle} style={{ textAlign: 'left', marginBottom: '2rem' }}>Installation IPTV sur Smart TV (Samsung / LG)</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Les téléviseurs intelligents (Smart TV) sont la meilleure façon de profiter de notre abonnement Premium.
                            Voici comment configurer votre accès en quelques minutes.
                        </p>

                        <h2>Applications Recommandées</h2>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Smart IPTV (SIPTV)</strong> : La plus classique. <Link href="/smart-iptv" style={{ color: 'var(--accent-2)' }}>Voir le guide dédié</Link>.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>IBO Player</strong> : Une excellente alternative moderne et rapide.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Nanomid</strong> : Très stable pour les connexions plus lentes.</li>
                        </ul>

                        <h2>Tutoriel Rapide</h2>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Allez dans le Store d'applications de votre TV (Samsung Hub ou LG Content Store).</li>
                            <li style={{ marginBottom: '0.5rem' }}>Cherchez "Smart IPTV" ou "IBO Player" et installez l'application.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Ouvrez l'application et notez l'adresse <strong>Device ID</strong> ou <strong>MAC Address</strong> affichée.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Envoyez-nous cette adresse lors de votre commande ou configurez-la sur le site de l'application.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Redémarrez l'application : vos chaînes sont là !</li>
                        </ol>

                        <div style={{ marginTop: '3rem', background: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Prêt à visionner ?</h3>
                            <Button href="/abonnement-iptv" variant="primary">Choisir mon abonnement Smart TV</Button>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}
