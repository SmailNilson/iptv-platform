"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export default function QualiteStreamingPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Guide</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                        Comment Choisir un Service de Streaming de Qualité
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Les critères essentiels pour évaluer et choisir un service de streaming fiable.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <h2>Les Critères de Qualité</h2>
                        <p>
                            Face à la multitude de services disponibles, voici les critères importants à considérer
                            pour faire le bon choix.
                        </p>

                        <h3>1. Stabilité et Fiabilité</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Infrastructure serveur</strong> : Des serveurs dédiés et bien maintenus</li>
                            <li><strong>Temps de disponibilité</strong> : Viser 99% de disponibilité minimum</li>
                            <li><strong>Redondance</strong> : Serveurs de secours en cas de problème</li>
                        </ul>

                        <h3>2. Qualité d'Image</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Résolution HD/4K</strong> : Image nette et détaillée</li>
                            <li><strong>Encodage moderne</strong> : H.265/HEVC pour une meilleure compression</li>
                            <li><strong>Adaptation automatique</strong> : Ajustement selon votre connexion</li>
                        </ul>

                        <h3>3. Support Client</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Disponibilité</strong> : Support accessible et réactif</li>
                            <li><strong>Canaux multiples</strong> : Email, chat, téléphone</li>
                            <li><strong>Documentation</strong> : Guides et tutoriels disponibles</li>
                        </ul>

                        <h3>4. Compatibilité</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Multi-appareils</strong> : TV, mobile, tablette, ordinateur</li>
                            <li><strong>Applications dédiées</strong> : Apps natives pour chaque plateforme</li>
                            <li><strong>Facilité d'installation</strong> : Configuration simple et guidée</li>
                        </ul>

                        <h2>Points de Vigilance</h2>
                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#f87171', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>⚠️ À éviter</h3>
                            <ul style={{ margin: 0, color: '#fecaca', paddingLeft: '1.5rem' }}>
                                <li>Services sans aucun moyen de contact</li>
                                <li>Prix anormalement bas (qualité souvent médiocre)</li>
                                <li>Pas de période d'essai proposée</li>
                                <li>Paiement uniquement en cryptomonnaie</li>
                            </ul>
                        </div>

                        <h2>Conclusion</h2>
                        <p>
                            Un service de qualité se distingue par sa <strong>stabilité</strong>, son <strong>support réactif</strong>
                            et sa <strong>transparence</strong>. Prenez le temps de tester avant de vous engager sur une longue durée.
                        </p>

                    </article>

                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(30, 26, 48, 0.9) 0%, rgba(124, 58, 237, 0.2) 100%)', padding: '3rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '4rem auto 0' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Des Questions ?</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Notre équipe est disponible pour vous conseiller et répondre à vos questions.
                        </p>
                        <Button href="/contact" variant="primary">Nous Contacter</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
