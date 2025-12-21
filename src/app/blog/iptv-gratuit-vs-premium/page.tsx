"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export default function IptvGratuitVsPremiumPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Comparatif</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                        IPTV Gratuit vs Premium : Le Comparatif Complet
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Pourquoi un abonnement IPTV payant vaut-il vraiment le coup face aux solutions gratuites ?
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <h2>Les solutions IPTV gratuites</h2>
                        <p>
                            Il existe de nombreuses listes M3U gratuites disponibles sur Internet. Voici leurs caractéristiques :
                        </p>

                        <h3 style={{ color: '#ef4444' }}>❌ Inconvénients</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Instabilité :</strong> Les liens changent constamment et cessent de fonctionner</li>
                            <li><strong>Qualité médiocre :</strong> Souvent en SD ou 480p maximum</li>
                            <li><strong>Buffering fréquent :</strong> Serveurs surchargés = coupures</li>
                            <li><strong>Pas de support :</strong> Aucune aide en cas de problème</li>
                            <li><strong>Risques de sécurité :</strong> Publicités malveillantes, malwares potentiels</li>
                            <li><strong>Catalogue limité :</strong> Peu de chaînes, pas de VOD</li>
                        </ul>

                        <h2>Les abonnements IPTV Premium</h2>

                        <h3 style={{ color: '#22c55e' }}>✅ Avantages</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Stabilité garantie :</strong> Serveurs dédiés et maintenus</li>
                            <li><strong>Qualité HD/4K :</strong> Image nette, son clair</li>
                            <li><strong>Pas de buffering :</strong> Streaming fluide 24/7</li>
                            <li><strong>Support client :</strong> Aide disponible en cas de souci</li>
                            <li><strong>Catalogue complet :</strong> +20 000 chaînes, +100 000 VOD</li>
                            <li><strong>Multi-appareils :</strong> Compatible TV, mobile, PC</li>
                            <li><strong>Guide EPG :</strong> Programme TV intégré</li>
                        </ul>

                        <h2>Comparatif en chiffres</h2>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid var(--glass-border)' }}>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Critère</th>
                                        <th style={{ padding: '1rem', textAlign: 'center', color: '#ef4444' }}>Gratuit</th>
                                        <th style={{ padding: '1rem', textAlign: 'center', color: '#22c55e' }}>Premium</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                        <td style={{ padding: '1rem' }}>Qualité vidéo</td>
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>SD/480p</td>
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>HD/4K</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                        <td style={{ padding: '1rem' }}>Nombre de chaînes</td>
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>~100</td>
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>+20 000</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                        <td style={{ padding: '1rem' }}>VOD (Films/Séries)</td>
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>❌</td>
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>+100 000</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                        <td style={{ padding: '1rem' }}>Support client</td>
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>❌</td>
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>24/7</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1rem' }}>Stabilité</td>
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>⚠️ Aléatoire</td>
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>✅ 99.9%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2>Notre verdict</h2>
                        <p>
                            Pour quelques euros par mois, un abonnement IPTV premium offre une expérience <strong>incomparablement supérieure</strong>.
                            Le temps perdu à chercher des liens fonctionnels et la frustration des coupures ne valent pas l'économie réalisée.
                        </p>

                    </article>

                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(30, 26, 48, 0.9) 0%, rgba(124, 58, 237, 0.2) 100%)', padding: '3rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '4rem auto 0' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Testez gratuitement pendant 24h</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Convaincu ? Essayez notre service premium sans engagement.
                        </p>
                        <Button href="/#plans" variant="primary">Voir nos offres</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
