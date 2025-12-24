"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export default function ConfigurerSmartTVPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Tutoriel</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                        Guide Complet : Configurer Votre Smart TV
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Apprenez à optimiser les paramètres de votre téléviseur connecté pour une meilleure expérience.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <h2>Les Smart TV Compatibles</h2>
                        <p>
                            Les téléviseurs modernes offrent de nombreuses fonctionnalités connectées.
                            Voici un aperçu des marques et systèmes principaux.
                        </p>

                        <h3>Samsung Tizen</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Système</strong> : Tizen OS</li>
                            <li><strong>Store</strong> : Samsung Apps</li>
                            <li><strong>Avantages</strong> : Interface fluide, nombreuses applications</li>
                        </ul>

                        <h3>LG webOS</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Système</strong> : webOS</li>
                            <li><strong>Store</strong> : LG Content Store</li>
                            <li><strong>Avantages</strong> : Magic Remote, interface intuitive</li>
                        </ul>

                        <h3>Android TV / Google TV</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Marques</strong> : Sony, TCL, Philips, Xiaomi</li>
                            <li><strong>Store</strong> : Google Play Store</li>
                            <li><strong>Avantages</strong> : Vaste catalogue d'applications, Chromecast intégré</li>
                        </ul>

                        <h2>Optimiser les Paramètres Image</h2>
                        <p>Pour profiter de la meilleure qualité d'image :</p>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Désactivez le <strong>mode éco</strong> qui réduit la luminosité</li>
                            <li>Activez le <strong>mode cinéma</strong> ou <strong>film</strong></li>
                            <li>Ajustez le <strong>niveau de noir</strong> selon votre environnement</li>
                            <li>Activez le <strong>HDR</strong> si votre contenu le supporte</li>
                        </ol>

                        <h2>Connexion Réseau</h2>
                        <p>Pour une connexion stable :</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Ethernet recommandé</strong> : Connexion filaire pour une stabilité maximale</li>
                            <li><strong>WiFi 5 GHz</strong> : Préférez cette bande si vous utilisez le sans-fil</li>
                            <li><strong>Débit minimum</strong> : 20 Mbps pour le contenu HD, 50 Mbps pour la 4K</li>
                        </ul>

                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#60a5fa', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>💡 Conseil</h3>
                            <p style={{ margin: 0, color: '#bfdbfe' }}>
                                Si vous rencontrez des problèmes de connexion, essayez de redémarrer votre routeur
                                et votre téléviseur. Cela résout souvent les problèmes de cache réseau.
                            </p>
                        </div>

                        <h2>Applications Utiles</h2>
                        <p>Voici les catégories d'applications disponibles sur les Smart TV :</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Lecteurs multimédias</strong> : VLC, Kodi, Plex</li>
                            <li><strong>Navigateurs web</strong> : Chrome, Firefox</li>
                            <li><strong>Stockage cloud</strong> : Google Drive, Dropbox</li>
                            <li><strong>Utilitaires</strong> : Gestionnaires de fichiers, télécommandes</li>
                        </ul>

                        <h2>Maintenance</h2>
                        <p>Pour garder votre Smart TV en bon état :</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Mettez à jour régulièrement le <strong>firmware</strong></li>
                            <li>Videz le <strong>cache des applications</strong> de temps en temps</li>
                            <li>Désinstallez les <strong>applications inutilisées</strong></li>
                            <li>Redémarrez la TV une fois par semaine</li>
                        </ul>

                    </article>

                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(30, 26, 48, 0.9) 0%, rgba(124, 58, 237, 0.2) 100%)', padding: '3rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '4rem auto 0' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Besoin d'Aide ?</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Notre équipe support peut vous aider à configurer votre appareil.
                        </p>
                        <Button href="/contact" variant="primary">Contacter le Support</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
