"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export default function MeilleureIptv2025Page() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Guide 2025</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                        Meilleure IPTV 2025 : Comment Choisir ?
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Les critères essentiels pour sélectionner le meilleur service IPTV cette année.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <h2>Les critères d'un bon service IPTV</h2>
                        <p>
                            Avec la multitude d'offres disponibles, voici les points clés à vérifier avant de s'abonner :
                        </p>

                        <h3>1. La stabilité du service</h3>
                        <p>
                            C'est LE critère numéro 1. Un service instable qui coupe en plein match ou film est inutilisable.
                            Recherchez un fournisseur avec un <strong>uptime de 99%+</strong> et des serveurs anti-freeze.
                        </p>

                        <h3>2. La qualité d'image</h3>
                        <p>
                            En 2025, le minimum acceptable est le <strong>Full HD (1080p)</strong>. Les meilleurs services proposent
                            également des chaînes en <strong>4K UHD</strong> pour les événements sportifs et les films récents.
                        </p>

                        <h3>3. Le catalogue de chaînes</h3>
                        <p>
                            Un bon service IPTV doit proposer :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Les chaînes françaises (TF1, M6, Canal+, beIN Sports...)</li>
                            <li>Les chaînes internationales (UK, US, Espagne, Italie...)</li>
                            <li>Les chaînes sportives (PPV, Ligue 1, Premier League, NBA...)</li>
                            <li>Un catalogue VOD conséquent (films et séries)</li>
                        </ul>

                        <h3>4. Le support client</h3>
                        <p>
                            Un support réactif est essentiel. Privilégiez les fournisseurs avec :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Chat en direct ou WhatsApp</li>
                            <li>Réponse en moins de 24h</li>
                            <li>Support en français</li>
                        </ul>

                        <h3>5. La compatibilité</h3>
                        <p>
                            Votre service doit fonctionner sur tous vos appareils :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Smart TV (Samsung, LG, Sony...)</li>
                            <li>Box Android / Fire Stick</li>
                            <li>Smartphone et tablette (iOS/Android)</li>
                            <li>PC et Mac</li>
                        </ul>

                        <h3>6. L'essai gratuit</h3>
                        <p>
                            Un fournisseur sérieux propose toujours une <strong>période d'essai gratuite</strong> (24h minimum)
                            pour tester le service avant de payer.
                        </p>

                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#60a5fa', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>💡 Notre recommandation</h3>
                            <p style={{ margin: 0, color: '#bfdbfe' }}>
                                Évitez les offres "à vie" ou anormalement bon marché. Un service de qualité a un coût
                                de maintenance (serveurs, support, mises à jour) qui justifie un abonnement mensuel raisonnable.
                            </p>
                        </div>

                    </article>

                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(30, 26, 48, 0.9) 0%, rgba(124, 58, 237, 0.2) 100%)', padding: '3rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '4rem auto 0' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Testez notre service</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Nous cochons toutes les cases mentionnées ci-dessus. Essayez gratuitement pendant 24h.
                        </p>
                        <Button href="/#plans" variant="primary">Découvrir nos offres</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
