"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export default function TutoSmartersProIPTVPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Tutoriel</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                        Tuto : Configurer votre abonnement IPTV Premium sur Smarters Pro
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Guide complet pour configurer IPTV Smarters Pro avec un abonnement premium stable.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Vous avez sans doute entendu dire que <strong>IPTV Smarters Pro</strong> est la meilleure application du marché en 2025. C'est vrai. Son interface est fluide, elle gère parfaitement le Replay et le Multi-écran.
                        </p>

                        <p>
                            Cependant, il y a une confusion fréquente : l'application n'est qu'un lecteur. C'est comme avoir une télévision sans antenne ni décodeur. Pour que la magie opère, il vous faut le carburant : un <strong>abonnement IPTV Smarters Pro</strong> valide et performant.
                        </p>

                        <p>Suivez ce guide rapide pour configurer votre installation en moins de 3 minutes.</p>

                        <h2>Étape 1 : Installation de l'application</h2>
                        <p>L'installation dépend de votre appareil, mais reste très simple :</p>

                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Sur Android (Box, TV, Smartphone) :</strong> Rendez-vous sur le Google Play Store et cherchez "IPTV Smarters Pro". Si elle n'est pas disponible, vous pouvez télécharger l'APK via l'application "Downloader".</li>
                            <li><strong>Sur iOS (iPhone, iPad, Apple TV) :</strong> L'application se nomme <strong>Smarters Player Lite</strong> sur l'App Store. C'est exactement la même version.</li>
                            <li><strong>Sur Firestick :</strong> Utilisez "Downloader" pour récupérer la version compatible Amazon.</li>
                        </ul>

                        <p>Une fois l'application lancée, acceptez les conditions d'utilisation.</p>

                        <h2>Étape 2 : Connexion au serveur (Xtream Codes)</h2>
                        <p>C'est ici que les choses sérieuses commencent. L'application va vous demander comment vous connecter.</p>

                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Choisissez l'option <strong>"Login with Xtream Codes API"</strong>. C'est la méthode la plus stable et la plus rapide.</li>
                            <li>Vous allez voir apparaître 4 cases à remplir :
                                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                                    <li><strong>Any Name :</strong> Mettez ce que vous voulez (ex : "IPTV Plus France").</li>
                                    <li><strong>Username :</strong> Votre identifiant utilisateur.</li>
                                    <li><strong>Password :</strong> Votre mot de passe secret.</li>
                                    <li><strong>URL (Server Port) :</strong> L'adresse du serveur (souvent sous la forme <code style={{ background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>http://domaine.com:8080</code>).</li>
                                </ul>
                            </li>
                        </ol>

                        <h2>Le problème : Où trouver ces codes ?</h2>
                        <p>C'est ici que beaucoup d'utilisateurs bloquent. Vous avez l'application ouverte, les cases sont vides, et vous ne savez pas quoi mettre.</p>

                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                            <p style={{ margin: 0 }}>
                                <strong>⚠️ Attention :</strong> Ne perdez pas votre temps à chercher des "codes gratuits" sur Google ou Telegram. Ces listes sont publiques, utilisées par des milliers de personnes en même temps, et coupent toutes les 30 secondes.
                            </p>
                        </div>

                        <p>
                            Pour que Smarters Pro affiche une image 4K fluide sans coupure, il lui faut des identifiants privés, reliés à un serveur dédié sécurisé. C'est la base d'un vrai <strong>abonnement IPTV Smarters Pro</strong>.
                        </p>

                        <h2>Conclusion : Obtenez vos accès maintenant</h2>
                        <p>Vous avez l'application ? Il ne vous manque plus que la clé pour démarrer le moteur.</p>

                        <p>
                            Chez <strong>IPTV Plus France</strong>, nous générons des identifiants uniques compatibles à 100% avec Smarters Pro. Pas de configuration complexe, vous copiez-collez les codes que nous vous envoyons, et l'image apparaît instantanément.
                        </p>

                        <div style={{ marginTop: '2rem', textAlign: 'center', padding: '2rem', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '1rem' }}>
                            <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}><strong>Ne restez pas seul face à un écran de connexion vide.</strong></p>
                            <Button variant="primary" href="https://wa.me/17575357760?text=Test%20Smarters%20-%20Je%20souhaite%20obtenir%20mes%20identifiants">
                                💬 Obtenir mes identifiants Smarters Pro
                            </Button>
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                Envoyez-nous "Test Smarters", et nous vous répondons avec vos codes d'accès.
                            </p>
                        </div>

                        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                            <Link href="/blog" style={{ color: 'var(--accent-1)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                ← Retour aux articles
                            </Link>
                        </div>

                    </article>
                </div>
            </section>
        </main>
    );
}
