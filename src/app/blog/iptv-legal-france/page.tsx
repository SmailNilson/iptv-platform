"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export default function IptvLegalFrancePage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Guide Légal</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                        L'IPTV est-il Légal en France ?
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Comprendre la législation française sur l'IPTV et les risques encourus.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <h2>L'IPTV en soi n'est pas illégal</h2>
                        <p>
                            <strong>L'IPTV (Internet Protocol Television)</strong> est simplement une technologie de diffusion de contenu télévisuel via Internet.
                            En soi, cette technologie est parfaitement légale. De nombreux services officiels l'utilisent :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Molotov TV</strong> : Service français légal</li>
                            <li><strong>myCANAL</strong> : L'application officielle de Canal+</li>
                            <li><strong>France.tv</strong> : Les chaînes du groupe France Télévisions</li>
                            <li><strong>Netflix, Disney+, Amazon Prime</strong> : Plateformes de streaming légales</li>
                        </ul>

                        <h2>Ce qui est illégal</h2>
                        <p>
                            Ce qui pose problème, c'est <strong>l'accès à des contenus protégés par le droit d'auteur sans autorisation</strong>.
                            Sont considérés comme illégaux :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Les services IPTV qui diffusent des chaînes payantes (Canal+, beIN Sports, RMC Sport) sans licence</li>
                            <li>L'accès à des films et séries sous copyright sans payer les ayants droit</li>
                            <li>La revente d'abonnements à des flux piratés</li>
                        </ul>

                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#f87171', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>⚠️ Risques encourus</h3>
                            <p style={{ margin: 0, color: '#fecaca' }}>
                                En France, le visionnage de contenus piratés peut entraîner jusqu'à 3 ans d'emprisonnement et 300 000€ d'amende
                                (article L335-2 du Code de la propriété intellectuelle). En pratique, les poursuites visent surtout les revendeurs.
                            </p>
                        </div>

                        <h2>Comment rester dans la légalité ?</h2>
                        <p>Pour profiter de l'IPTV légalement :</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Utilisez des services officiels (Molotov, myCANAL, etc.)</li>
                            <li>Vérifiez que votre fournisseur possède les droits de diffusion</li>
                            <li>Méfiez-vous des offres "trop belles pour être vraies" à quelques euros par mois</li>
                            <li>Privilégiez les services qui offrent une période d'essai gratuite</li>
                        </ul>

                        <h2>Notre position</h2>
                        <p>
                            Nous recommandons toujours à nos utilisateurs de se renseigner sur la provenance des contenus
                            et de respecter le droit d'auteur. La technologie IPTV offre de nombreuses possibilités légales
                            pour accéder à du contenu de qualité.
                        </p>

                    </article>

                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(30, 26, 48, 0.9) 0%, rgba(124, 58, 237, 0.2) 100%)', padding: '3rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '4rem auto 0' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Découvrez nos offres</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Profitez de notre période d'essai gratuite de 24h pour tester notre service.
                        </p>
                        <Button href="/#plans" variant="primary">Voir nos abonnements</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
