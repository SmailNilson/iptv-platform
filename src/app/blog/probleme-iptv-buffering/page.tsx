"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export default function ProblemeIptvBufferingPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Dépannage</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                        Optimiser la Fluidité de Votre Streaming TV
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Guide complet pour améliorer la qualité de votre expérience de visionnage.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <h2>Comprendre les Ralentissements</h2>
                        <p>
                            Les ralentissements lors du visionnage de contenus TV peuvent avoir plusieurs causes techniques.
                            Voici comment optimiser votre configuration pour une meilleure expérience.
                        </p>

                        <h2>Les Causes Principales</h2>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Bande passante insuffisante</strong> : Votre connexion nécessite un débit adapté à la qualité souhaitée</li>
                            <li><strong>Connexion WiFi instable</strong> : Signal faible ou interférences avec d'autres appareils</li>
                            <li><strong>Configuration réseau</strong> : Paramètres non optimisés pour le streaming</li>
                            <li><strong>Charge du réseau domestique</strong> : Trop d'appareils connectés simultanément</li>
                            <li><strong>Paramètres de l'application</strong> : Configuration inadaptée du lecteur</li>
                        </ol>

                        <h2>Solutions Étape par Étape</h2>

                        <h3>1. Vérifiez Votre Vitesse Internet</h3>
                        <p>
                            Utilisez <a href="https://fast.com" target="_blank" rel="noopener" style={{ color: 'var(--accent-2)' }}>fast.com</a> pour
                            mesurer votre débit. Débits recommandés :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>8 Mbps minimum</strong> pour la qualité standard</li>
                            <li><strong>20 Mbps</strong> pour la HD (1080p)</li>
                            <li><strong>50 Mbps+</strong> pour la 4K Ultra HD</li>
                        </ul>

                        <h3>2. Privilégiez la Connexion Filaire</h3>
                        <p>
                            Le WiFi est pratique mais peut être instable. Si possible, connectez votre appareil
                            directement à votre box avec un <strong>câble Ethernet</strong>. C'est la solution la plus efficace pour une connexion stable.
                        </p>

                        <h3>3. Optimisez Votre WiFi</h3>
                        <p>
                            Si le câble n'est pas possible, rapprochez votre appareil du routeur WiFi
                            ou utilisez un <strong>répéteur WiFi</strong> ou un système <strong>Mesh</strong> pour étendre la couverture.
                        </p>

                        <h3>4. Redémarrez Vos Équipements</h3>
                        <p>
                            Simple mais efficace : éteignez et rallumez votre box Internet ainsi que votre appareil de lecture,
                            et attendez 2 minutes entre chaque redémarrage pour permettre la réinitialisation complète.
                        </p>

                        <h3>5. Optimisez les Paramètres du Lecteur</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Dans votre application, cherchez les paramètres de <strong>mise en mémoire tampon</strong></li>
                            <li>Augmentez la taille du tampon à 5-10 secondes</li>
                            <li>Activez le <strong>décodage matériel</strong> si disponible pour de meilleures performances</li>
                        </ul>

                        <h3>6. Vérifiez la Charge Réseau</h3>
                        <p>
                            Réduisez le nombre d'appareils utilisant votre connexion simultanément. Les téléchargements,
                            jeux en ligne et autres activités peuvent affecter la qualité du streaming.
                        </p>

                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#60a5fa', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>💡 Conseil</h3>
                            <p style={{ margin: 0, color: '#bfdbfe' }}>
                                La qualité de votre expérience dépend en grande partie de la qualité de votre infrastructure réseau.
                                Investir dans un bon routeur peut faire une grande différence.
                            </p>
                        </div>

                    </article>

                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(30, 26, 48, 0.9) 0%, rgba(124, 58, 237, 0.2) 100%)', padding: '3rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '4rem auto 0' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Besoin d'Assistance ?</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Notre équipe technique est disponible pour vous aider à optimiser votre configuration.
                        </p>
                        <Button href="/contact" variant="primary">Contacter le Support</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
