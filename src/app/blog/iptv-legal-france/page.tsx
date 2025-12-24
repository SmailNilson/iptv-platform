"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export default function CommentFonctionneStreamingPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Technologie</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                        Comment Fonctionne le Streaming TV ?
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Comprendre la technologie derrière la diffusion de contenus télévisuels sur Internet.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <h2>La Technologie de Streaming</h2>
                        <p>
                            Le streaming est une méthode de diffusion de contenu audio ou vidéo via Internet.
                            Contrairement au téléchargement, le contenu est lu en temps réel pendant qu'il est transmis.
                        </p>

                        <h3>Comment ça marche ?</h3>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Encodage</strong> : Le contenu est compressé pour une transmission efficace</li>
                            <li><strong>Distribution</strong> : Les serveurs CDN répartissent la charge</li>
                            <li><strong>Mise en mémoire tampon</strong> : Votre appareil stocke quelques secondes d'avance</li>
                            <li><strong>Décodage</strong> : L'image et le son sont reconstitués sur votre écran</li>
                        </ol>

                        <h2>Les Protocoles Utilisés</h2>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>HLS (HTTP Live Streaming)</strong> : Développé par Apple, très répandu</li>
                            <li><strong>DASH (Dynamic Adaptive Streaming)</strong> : Standard ouvert, adaptatif</li>
                            <li><strong>RTMP</strong> : Protocole plus ancien, encore utilisé</li>
                            <li><strong>WebRTC</strong> : Pour les flux en temps réel à faible latence</li>
                        </ul>

                        <h2>La Qualité d'Image</h2>
                        <p>La résolution dépend de plusieurs facteurs :</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>SD (480p)</strong> : ~3 Mbps - Qualité basique</li>
                            <li><strong>HD (720p)</strong> : ~5 Mbps - Bonne qualité</li>
                            <li><strong>Full HD (1080p)</strong> : ~10 Mbps - Excellente qualité</li>
                            <li><strong>4K UHD</strong> : ~25 Mbps - Qualité maximale</li>
                        </ul>

                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#60a5fa', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>💡 Streaming Adaptatif</h3>
                            <p style={{ margin: 0, color: '#bfdbfe' }}>
                                Les technologies modernes ajustent automatiquement la qualité en fonction de votre
                                connexion Internet pour éviter les interruptions.
                            </p>
                        </div>

                        <h2>Les Réseaux de Distribution (CDN)</h2>
                        <p>
                            Les CDN (Content Delivery Networks) sont des réseaux de serveurs répartis géographiquement.
                            Ils permettent de :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Réduire la latence en rapprochant le contenu de l'utilisateur</li>
                            <li>Gérer les pics de trafic</li>
                            <li>Assurer une disponibilité constante</li>
                            <li>Améliorer les temps de chargement</li>
                        </ul>

                        <h2>L'Avenir du Streaming</h2>
                        <p>Les tendances émergentes :</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>8K</strong> : Résolution ultra-haute définition</li>
                            <li><strong>HDR</strong> : Plage dynamique étendue pour des couleurs plus riches</li>
                            <li><strong>Faible latence</strong> : Pour les événements en temps réel</li>
                            <li><strong>5G</strong> : Connexions mobiles plus rapides</li>
                        </ul>

                    </article>

                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(30, 26, 48, 0.9) 0%, rgba(124, 58, 237, 0.2) 100%)', padding: '3rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '4rem auto 0' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Des Questions Techniques ?</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Notre équipe peut vous aider à comprendre et optimiser votre configuration.
                        </p>
                        <Button href="/contact" variant="primary">Contacter le Support</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
