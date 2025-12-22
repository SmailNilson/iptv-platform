"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export default function SmartOneIptvGuidePage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Tutoriel</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                        SmartOne IPTV : Guide d'Installation Complet
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Comment installer et configurer l'application SmartOne IPTV sur tous vos appareils.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <h2>Qu'est-ce que SmartOne IPTV ?</h2>
                        <p>
                            <strong>SmartOne IPTV</strong> est une application de lecture IPTV moderne et performante.
                            Elle permet de regarder vos chaînes TV et VOD directement sur votre Smart TV,
                            Box Android, Fire Stick ou smartphone.
                        </p>
                        <p>Avantages de SmartOne IPTV :</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Interface moderne et intuitive</li>
                            <li>Guide des programmes (EPG) intégré</li>
                            <li>Support des sous-titres</li>
                            <li>Fonction enregistrement (selon appareil)</li>
                            <li>Compatible 4K et Dolby</li>
                        </ul>

                        <h2>Appareils Compatibles</h2>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Smart TV</strong> : Samsung (Tizen), LG (webOS), Android TV</li>
                            <li><strong>Box Android</strong> : Nvidia Shield, X96, H96, Mecool...</li>
                            <li><strong>Amazon</strong> : Fire TV Stick, Fire TV Cube</li>
                            <li><strong>Mobile</strong> : Android et iOS</li>
                            <li><strong>PC/Mac</strong> : Via émulateur Android</li>
                        </ul>

                        <h2>Étape 1 : Télécharger SmartOne IPTV</h2>

                        <h3>Sur Smart TV Samsung</h3>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Appuyez sur le bouton <strong>Home</strong> de votre télécommande</li>
                            <li>Allez dans <strong>Apps</strong></li>
                            <li>Recherchez <strong>"SmartOne IPTV"</strong></li>
                            <li>Cliquez sur <strong>Installer</strong></li>
                        </ol>

                        <h3>Sur Smart TV LG</h3>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Appuyez sur le bouton <strong>Home</strong></li>
                            <li>Ouvrez le <strong>LG Content Store</strong></li>
                            <li>Recherchez <strong>"SmartOne IPTV"</strong></li>
                            <li>Installez l'application</li>
                        </ol>

                        <h3>Sur Fire Stick / Android TV</h3>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Allez dans <strong>Paramètres → Sécurité</strong></li>
                            <li>Activez <strong>"Sources inconnues"</strong></li>
                            <li>Téléchargez l'APK depuis le site officiel ou via <strong>Downloader</strong></li>
                            <li>Installez l'application</li>
                        </ol>

                        <h2>Étape 2 : Activer SmartOne IPTV</h2>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Ouvrez l'application SmartOne IPTV</li>
                            <li>Notez le <strong>code d'activation</strong> affiché à l'écran</li>
                            <li>Rendez-vous sur <strong>smartone-iptv.com/activation</strong></li>
                            <li>Entrez votre code et activez l'application</li>
                        </ol>

                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#60a5fa', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>💡 Astuce</h3>
                            <p style={{ margin: 0, color: '#bfdbfe' }}>
                                L'application offre généralement une période d'essai gratuite.
                                Profitez-en pour tester avant d'acheter la licence.
                            </p>
                        </div>

                        <h2>Étape 3 : Ajouter votre Playlist IPTV</h2>
                        <p>
                            Une fois l'application activée, vous devez y ajouter votre abonnement IPTV :
                        </p>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Dans l'application, allez dans <strong>Paramètres</strong> ou <strong>Settings</strong></li>
                            <li>Cherchez l'option <strong>"Add Playlist"</strong> ou <strong>"Ajouter une liste"</strong></li>
                            <li>Choisissez <strong>M3U URL</strong> ou <strong>Xtream Codes</strong></li>
                            <li>Entrez les informations fournies par votre <Link href="/#plans" style={{ color: 'var(--accent-2)' }}>fournisseur IPTV</Link></li>
                            <li>Validez et attendez le chargement des chaînes</li>
                        </ol>

                        <h3>Configuration avec Xtream Codes (recommandé)</h3>
                        <p>Si votre fournisseur vous donne des identifiants Xtream :</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Host/Server URL</strong> : L'adresse du serveur (ex: http://exemple.com:8080)</li>
                            <li><strong>Username</strong> : Votre nom d'utilisateur</li>
                            <li><strong>Password</strong> : Votre mot de passe</li>
                        </ul>

                        <h2>Étape 4 : Profiter de vos chaînes</h2>
                        <p>
                            Une fois la playlist chargée, vous pouvez :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Parcourir les catégories de chaînes</li>
                            <li>Ajouter des chaînes en favoris</li>
                            <li>Consulter le guide des programmes (EPG)</li>
                            <li>Accéder à la VOD (films et séries)</li>
                        </ul>

                        <h2>Problèmes fréquents et solutions</h2>

                        <h3>L'application ne se lance pas</h3>
                        <p>Redémarrez votre appareil et réessayez. Vérifiez aussi que vous avez suffisamment d'espace de stockage.</p>

                        <h3>Les chaînes ne chargent pas</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Vérifiez votre connexion Internet</li>
                            <li>Assurez-vous que votre abonnement est actif</li>
                            <li>Vérifiez que les identifiants sont corrects</li>
                            <li>Contactez votre fournisseur IPTV</li>
                        </ul>

                        <h3>Problème de buffering</h3>
                        <p>
                            Consultez notre <Link href="/blog/probleme-iptv-buffering" style={{ color: 'var(--accent-2)' }}>guide complet sur le buffering</Link> pour résoudre ce problème.
                        </p>

                    </article>

                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(30, 26, 48, 0.9) 0%, rgba(124, 58, 237, 0.2) 100%)', padding: '3rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '4rem auto 0' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Vous n'avez pas encore d'abonnement ?</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Obtenez votre lien M3U ou identifiants Xtream compatibles SmartOne IPTV.
                        </p>
                        <Button href="/#plans" variant="primary">Voir nos offres</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
