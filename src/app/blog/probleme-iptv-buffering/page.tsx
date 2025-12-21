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
                        Problème IPTV Buffering : Toutes les Solutions
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Votre IPTV rame, coupe ou charge en permanence ? Voici comment résoudre le problème.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <h2>Qu'est-ce que le buffering ?</h2>
                        <p>
                            Le buffering se produit lorsque votre appareil ne reçoit pas les données assez vite pour lire la vidéo en continu.
                            Résultat : l'image se fige, une icône de chargement apparaît, et la frustration monte.
                        </p>

                        <h2>Les causes principales</h2>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Connexion Internet lente</strong> : Moins de 20 Mbps pour la HD</li>
                            <li><strong>WiFi instable</strong> : Signal faible ou interférences</li>
                            <li><strong>Serveur surchargé</strong> : Trop d'utilisateurs simultanés</li>
                            <li><strong>FAI qui bloque l'IPTV</strong> : Certains fournisseurs limitent le trafic</li>
                            <li><strong>Application mal configurée</strong> : Paramètres inadaptés</li>
                        </ol>

                        <h2>Solutions étape par étape</h2>

                        <h3>1. Vérifiez votre vitesse Internet</h3>
                        <p>
                            Allez sur <a href="https://fast.com" target="_blank" rel="noopener" style={{ color: 'var(--accent-2)' }}>fast.com</a> et
                            vérifiez votre débit. Vous avez besoin de :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>8 Mbps minimum</strong> pour la SD</li>
                            <li><strong>20 Mbps</strong> pour la HD (1080p)</li>
                            <li><strong>50 Mbps+</strong> pour la 4K</li>
                        </ul>

                        <h3>2. Passez en Ethernet (câble)</h3>
                        <p>
                            Le WiFi est pratique mais instable. Si possible, connectez votre appareil
                            directement à la box avec un <strong>câble Ethernet</strong>. C'est LA solution la plus efficace.
                        </p>

                        <h3>3. Rapprochez-vous du routeur</h3>
                        <p>
                            Si le câble n'est pas possible, rapprochez votre appareil du routeur WiFi
                            ou utilisez un <strong>répéteur WiFi</strong> / système <strong>Mesh</strong>.
                        </p>

                        <h3>4. Redémarrez tout</h3>
                        <p>
                            Simple mais efficace : éteignez et rallumez votre box Internet, votre TV/box IPTV,
                            et attendez 2 minutes entre chaque redémarrage.
                        </p>

                        <h3>5. Utilisez un VPN</h3>
                        <p>
                            Certains FAI (Orange, Free, SFR) limitent le trafic IPTV. Un VPN peut contourner
                            ce blocage. Recommandations : NordVPN, ExpressVPN, Surfshark.
                        </p>

                        <h3>6. Changez les paramètres du lecteur</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Dans votre application IPTV, cherchez les paramètres de <strong>buffer</strong></li>
                            <li>Augmentez la taille du buffer à 5-10 secondes</li>
                            <li>Activez le <strong>hardware decoding</strong> si disponible</li>
                        </ul>

                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#60a5fa', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>💡 Astuce Pro</h3>
                            <p style={{ margin: 0, color: '#bfdbfe' }}>
                                Si le buffering persiste malgré tout, le problème vient peut-être de votre fournisseur IPTV.
                                Testez un autre service avec une période d'essai gratuite.
                            </p>
                        </div>

                    </article>

                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(30, 26, 48, 0.9) 0%, rgba(124, 58, 237, 0.2) 100%)', padding: '3rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '4rem auto 0' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Marre du buffering ?</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Notre service utilise des serveurs anti-freeze pour un streaming fluide. Testez gratuitement.
                        </p>
                        <Button href="/#plans" variant="primary">Essai gratuit 24h</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
