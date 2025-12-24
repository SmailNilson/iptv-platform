"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export default function OptimiserExperienceStreamingPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Guide</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                        Optimiser Votre Expérience de Streaming en 2025
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Conseils pratiques pour profiter de la meilleure qualité de visionnage.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <h2>Les Clés d'une Bonne Expérience</h2>
                        <p>
                            Pour profiter pleinement de vos contenus préférés, plusieurs éléments doivent être optimisés.
                        </p>

                        <h3>1. Votre Connexion Internet</h3>
                        <p>
                            C'est le fondement de toute bonne expérience de streaming.
                            Assurez-vous d'avoir un débit suffisant :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>HD (720p)</strong> : minimum 5 Mbps</li>
                            <li><strong>Full HD (1080p)</strong> : minimum 10 Mbps</li>
                            <li><strong>4K UHD</strong> : minimum 25 Mbps</li>
                        </ul>

                        <h3>2. Votre Équipement</h3>
                        <p>
                            L'appareil de lecture influence grandement la qualité :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Smart TV récente</strong> : Décodage matériel optimisé</li>
                            <li><strong>Box Android performante</strong> : Processeur adapté au 4K</li>
                            <li><strong>Écran adapté</strong> : Résolution native correspondante</li>
                        </ul>

                        <h3>3. Votre Configuration Réseau</h3>
                        <p>
                            Pour une connexion stable et rapide :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Privilégiez la <strong>connexion filaire (Ethernet)</strong></li>
                            <li>Utilisez la bande <strong>WiFi 5 GHz</strong> si sans fil</li>
                            <li>Placez votre routeur de manière optimale</li>
                            <li>Limitez les appareils connectés simultanément</li>
                        </ul>

                        <h3>4. Les Paramètres de Votre Lecteur</h3>
                        <p>
                            Optimisez les réglages de votre application :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Activez le <strong>décodage matériel</strong></li>
                            <li>Ajustez la taille du <strong>buffer</strong></li>
                            <li>Sélectionnez le bon <strong>codec vidéo</strong></li>
                        </ul>

                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#60a5fa', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>💡 Conseil Pro</h3>
                            <p style={{ margin: 0, color: '#bfdbfe' }}>
                                Redémarrez régulièrement votre routeur et vos appareils de lecture.
                                Cela libère la mémoire et améliore les performances.
                            </p>
                        </div>

                        <h2>Diagnostic des Problèmes Courants</h2>
                        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--glass-border)' }}>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Symptôme</th>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Solution</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '1rem' }}>Image qui se fige</td>
                                    <td style={{ padding: '1rem' }}>Augmenter le buffer</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '1rem' }}>Qualité pixelisée</td>
                                    <td style={{ padding: '1rem' }}>Vérifier le débit Internet</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '1rem' }}>Audio désynchronisé</td>
                                    <td style={{ padding: '1rem' }}>Changer le décodeur audio</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1rem' }}>Connexion perdue</td>
                                    <td style={{ padding: '1rem' }}>Passer en Ethernet</td>
                                </tr>
                            </tbody>
                        </table>

                    </article>

                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(30, 26, 48, 0.9) 0%, rgba(124, 58, 237, 0.2) 100%)', padding: '3rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '4rem auto 0' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Besoin d'Aide ?</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Notre équipe technique peut vous aider à optimiser votre configuration.
                        </p>
                        <Button href="/contact" variant="primary">Contacter le Support</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
