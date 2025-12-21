"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export default function ActiverSmartIptvSamsungPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Tutoriel Samsung</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                        Activer Smart IPTV sur Samsung : Guide Complet
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Installation et configuration de Smart IPTV sur votre téléviseur Samsung étape par étape.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <h2>Prérequis</h2>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Une Smart TV Samsung (Tizen OS - modèle 2016 ou plus récent)</li>
                            <li>Une connexion Internet stable</li>
                            <li>Un <Link href="/#plans" style={{ color: 'var(--accent-2)' }}>abonnement IPTV</Link> avec lien M3U</li>
                        </ul>

                        <h2>Étape 1 : Installer Smart IPTV</h2>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Appuyez sur le bouton <strong>Home</strong> de votre télécommande</li>
                            <li>Naviguez vers <strong>Apps</strong></li>
                            <li>Allez dans la <strong>loupe</strong> (recherche)</li>
                            <li>Tapez <strong>"Smart IPTV"</strong></li>
                            <li>Sélectionnez l'application et cliquez sur <strong>Installer</strong></li>
                        </ol>

                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#f87171', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>⚠️ Application introuvable ?</h3>
                            <p style={{ margin: 0, color: '#fecaca' }}>
                                Smart IPTV a été retiré du Samsung Store dans certains pays. Alternatives : <strong>IBO Player</strong>,
                                <strong> Nanomid</strong> ou <strong>IPTV Smarters Pro</strong>.
                            </p>
                        </div>

                        <h2>Étape 2 : Récupérer votre adresse MAC</h2>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Lancez l'application Smart IPTV</li>
                            <li>Sur l'écran d'accueil, notez l'<strong>adresse MAC</strong> affichée</li>
                            <li>Elle ressemble à : <code>a1:b2:c3:d4:e5:f6</code></li>
                        </ol>

                        <h2>Étape 3 : Activer l'application (5.49€)</h2>
                        <p>
                            L'application est gratuite pendant 7 jours. Ensuite, vous devez l'activer :
                        </p>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Rendez-vous sur <a href="https://siptv.app/activation" target="_blank" rel="noopener" style={{ color: 'var(--accent-2)' }}>siptv.app/activation</a></li>
                            <li>Entrez votre adresse MAC</li>
                            <li>Payez les 5.49€ (paiement unique à vie)</li>
                        </ol>

                        <h2>Étape 4 : Ajouter votre playlist M3U</h2>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Allez sur <a href="https://siptv.app/mylist" target="_blank" rel="noopener" style={{ color: 'var(--accent-2)' }}>siptv.app/mylist</a></li>
                            <li>Entrez votre <strong>adresse MAC</strong></li>
                            <li>Collez le <strong>lien M3U</strong> fourni par votre <Link href="/#plans" style={{ color: 'var(--accent-2)' }}>fournisseur IPTV</Link></li>
                            <li>Cliquez sur <strong>Send</strong></li>
                        </ol>

                        <h2>Étape 5 : Recharger la playlist</h2>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Retournez sur votre TV Samsung</li>
                            <li>Dans Smart IPTV, appuyez sur le bouton <strong>0</strong> ou maintenez <strong>OK</strong></li>
                            <li>Les chaînes devraient apparaître !</li>
                        </ol>

                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#60a5fa', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>💡 Problème de chargement ?</h3>
                            <p style={{ margin: 0, color: '#bfdbfe' }}>
                                Si les chaînes ne s'affichent pas, vérifiez que votre lien M3U est valide et que votre
                                abonnement est actif. Contactez votre fournisseur si besoin.
                            </p>
                        </div>

                    </article>

                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(30, 26, 48, 0.9) 0%, rgba(124, 58, 237, 0.2) 100%)', padding: '3rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '4rem auto 0' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Vous n'avez pas encore d'abonnement ?</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Obtenez votre lien M3U compatible Samsung en quelques minutes.
                        </p>
                        <Button href="/#plans" variant="primary">Voir nos offres</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
