import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export default function IPTVPlusPlayerTelechargementPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            {/* Article Header */}
            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Guide Applications</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.8rem', marginTop: '1rem' }}>
                        IPTV Plus Player : Téléchargement et Configuration Complète 2025
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Tout ce que vous devez savoir pour télécharger, installer et configurer les meilleures applications IPTV Player sur vos appareils.
                    </p>
                </div>
            </section>

            {/* Content Body */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>

                        <h2>C'est quoi un IPTV Plus Player ?</h2>
                        <p>
                            Un <strong>IPTV Plus Player</strong> est une application qui permet de lire des flux IPTV sur vos appareils (Smart TV, Android, FireStick, etc.).
                            Le terme "Plus" signifie généralement une version améliorée avec des fonctionnalités premium comme :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Support 4K HDR et codec H.265 (HEVC)</li>
                            <li>EPG (Guide TV électronique) avancé</li>
                            <li>Enregistrement et timeshift</li>
                            <li>Multi-écrans et profils utilisateurs</li>
                            <li>Interface personnalisable</li>
                        </ul>

                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#f87171', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>⚠️ Attention aux Applications Douteuses</h3>
                            <p style={{ margin: 0, color: '#fecaca' }}>
                                Méfiez-vous des applications IPTV qui vous obligent à installer un APK depuis un site inconnu.
                                Privilégiez toujours les applications disponibles sur Google Play Store, Amazon App Store ou Samsung/LG Store.
                            </p>
                        </div>

                        <h2>Les Meilleures Applications IPTV Player en 2025</h2>

                        <h3>1. IPTV Smarters Pro (Recommandé ⭐)</h3>
                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <p><strong>Plateformes :</strong> Android, iOS, Smart TV, FireStick, Windows, macOS</p>
                            <p><strong>Prix :</strong> Gratuit (version Pro payante)</p>
                            <p><strong>Avantages :</strong></p>
                            <ul style={{ marginBottom: '0.5rem' }}>
                                <li>✅ Interface moderne et intuitive</li>
                                <li>✅ Support M3U et Xtream Codes</li>
                                <li>✅ EPG complet avec catch-up TV</li>
                                <li>✅ Multi-profils et contrôle parental</li>
                                <li>✅ Compatible 4K HDR</li>
                            </ul>
                            <p><strong>Téléchargement :</strong> Google Play Store, App Store, Amazon Store</p>
                        </div>

                        <h3>2. TiviMate (Meilleur pour Android TV)</h3>
                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <p><strong>Plateformes :</strong> Android, Android TV, FireStick</p>
                            <p><strong>Prix :</strong> Gratuit (Premium : 5€/an)</p>
                            <p><strong>Avantages :</strong></p>
                            <ul style={{ marginBottom: '0.5rem' }}>
                                <li>✅ Interface la plus fluide du marché</li>
                                <li>✅ Enregistrement illimité (version Premium)</li>
                                <li>✅ Multi-playlists</li>
                                <li>✅ Thèmes personnalisables</li>
                                <li>✅ EPG multi-sources</li>
                            </ul>
                            <p><strong>Téléchargement :</strong> Google Play Store, Downloader (FireStick)</p>
                        </div>

                        <h3>3. IBO Player (Meilleur pour Smart TV)</h3>
                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <p><strong>Plateformes :</strong> Samsung Tizen, LG WebOS, Android</p>
                            <p><strong>Prix :</strong> Gratuit 7 jours, puis 15€ à vie</p>
                            <p><strong>Avantages :</strong></p>
                            <ul style={{ marginBottom: '0.5rem' }}>
                                <li>✅ Optimisé pour Smart TV</li>
                                <li>✅ Compatible Xtream Codes uniquement</li>
                                <li>✅ Interface télécommande-friendly</li>
                                <li>✅ EPG intégré</li>
                            </ul>
                            <p><strong>Téléchargement :</strong> Samsung App Store, LG Content Store, Google Play</p>
                        </div>

                        <h3>4. Smart IPTV (SIPTV)</h3>
                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <p><strong>Plateformes :</strong> Samsung, LG, Android</p>
                            <p><strong>Prix :</strong> Gratuit 7 jours, puis 5.49€ à vie</p>
                            <p><strong>Avantages :</strong></p>
                            <ul style={{ marginBottom: '0.5rem' }}>
                                <li>✅ Simple et stable</li>
                                <li>✅ Compatible M3U</li>
                                <li>✅ Paiement unique</li>
                                <li>✅ EPG basique</li>
                            </ul>
                            <p><strong>Téléchargement :</strong> Voir notre <Link href="/blog/smart-iptv-activation" style={{ color: 'var(--accent-2)' }}>guide d'activation Smart IPTV</Link></p>
                        </div>

                        <h2>Comment Installer IPTV Smarters Pro (Tutoriel Complet)</h2>

                        <h3>Sur Android / Android TV / FireStick</h3>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Ouvrez le <strong>Google Play Store</strong> (ou Amazon App Store pour FireStick)</li>
                            <li>Recherchez <strong>"IPTV Smarters Pro"</strong></li>
                            <li>Cliquez sur <strong>Installer</strong></li>
                            <li>Une fois installé, ouvrez l'application</li>
                            <li>Sélectionnez <strong>"Login with Xtream Codes API"</strong></li>
                            <li>Entrez les identifiants fournis par votre <Link href="/#plans" style={{ color: 'var(--accent-2)' }}>fournisseur IPTV</Link> :
                                <ul style={{ marginTop: '0.5rem' }}>
                                    <li><strong>Username :</strong> votre nom d'utilisateur</li>
                                    <li><strong>Password :</strong> votre mot de passe</li>
                                    <li><strong>URL :</strong> l'adresse du serveur</li>
                                </ul>
                            </li>
                            <li>Cliquez sur <strong>Add User</strong></li>
                            <li>Vos chaînes s'affichent automatiquement !</li>
                        </ol>

                        <h3>Sur Smart TV Samsung (Tizen)</h3>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Appuyez sur <strong>Home</strong> de votre télécommande</li>
                            <li>Allez dans <strong>Apps</strong></li>
                            <li>Recherchez <strong>"IPTV Smarters"</strong></li>
                            <li>Installez et suivez les étapes ci-dessus</li>
                        </ol>

                        <h3>Sur Smart TV LG (WebOS)</h3>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Ouvrez le <strong>LG Content Store</strong></li>
                            <li>Recherchez <strong>"IPTV Smarters"</strong></li>
                            <li>Si indisponible, utilisez <strong>IBO Player</strong> ou <strong>Smart IPTV</strong> à la place</li>
                        </ol>

                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#60a5fa', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>💡 Astuce Pro</h3>
                            <p style={{ margin: 0, color: '#bfdbfe' }}>
                                Pour une expérience optimale, utilisez une connexion Ethernet plutôt que WiFi.
                                Cela réduit considérablement le buffering et améliore la qualité d'image.
                            </p>
                        </div>

                        <h2>Configuration M3U vs Xtream Codes : Quelle différence ?</h2>

                        <h3>M3U (Fichier Playlist)</h3>
                        <p><strong>Format :</strong> Un fichier ou URL contenant la liste de toutes les chaînes</p>
                        <p><strong>Compatible avec :</strong> Smart IPTV, VLC, TiviMate, Smarters Pro</p>
                        <p><strong>Avantages :</strong> Compatible avec presque toutes les applications</p>
                        <p><strong>Inconvénients :</strong> EPG souvent limité, pas de gestion multi-appareils</p>

                        <h3>Xtream Codes (API)</h3>
                        <p><strong>Format :</strong> Identifiants (username, password, server URL)</p>
                        <p><strong>Compatible avec :</strong> IPTV Smarters Pro, TiviMate, IBO Player</p>
                        <p><strong>Avantages :</strong> EPG intégré, gestion multi-appareils, catch-up TV</p>
                        <p><strong>Inconvénients :</strong> Nécessite une connexion internet permanente</p>

                        <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#34d399', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>✅ Recommandation</h3>
                            <p style={{ margin: 0, color: '#a7f3d0' }}>
                                Privilégiez toujours un <Link href="/#plans" style={{ color: 'var(--accent-2)' }}>abonnement IPTV</Link> qui fournit les deux formats (M3U et Xtream Codes).
                                Cela vous donne la flexibilité de choisir l'application qui vous convient le mieux.
                            </p>
                        </div>

                        <h2>Applications IPTV à Éviter</h2>
                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <p><strong>⛔ Applications propriétaires douteuses</strong></p>
                            <p>
                                Évitez les fournisseurs IPTV qui vous forcent à installer <strong>leur propre application</strong> téléchargée depuis un site web inconnu.
                                Ces APK peuvent contenir des malwares, collecter vos données personnelles ou installer des publicités intrusives.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                <strong>Exemple :</strong> IPTVPlusePlayer.live (voir notre <Link href="/blog/avis-iptvpluseplayer" style={{ color: 'var(--accent-2)' }}>analyse complète</Link>)
                            </p>
                        </div>

                        <h2>Optimiser les Performances de Votre IPTV Player</h2>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Utilisez une connexion filaire Ethernet</strong> (minimum 50 Mbps pour la 4K)</li>
                            <li><strong>Désactivez le VPN pendant le streaming</strong> (sauf si requis par votre fournisseur)</li>
                            <li><strong>Fermez les autres applications en arrière-plan</strong></li>
                            <li><strong>Utilisez le cache hardware</strong> dans les paramètres de votre player</li>
                            <li><strong>Mettez à jour régulièrement</strong> votre application IPTV</li>
                        </ol>

                        <p>
                            Pour des conseils avancés, consultez notre guide <Link href="/blog/reglage-tivimate-eviter-buffering" style={{ color: 'var(--accent-2)' }}>réglages TiviMate pour éviter le buffering</Link>.
                        </p>

                    </article>

                    {/* CTA Box */}
                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(30, 26, 48, 0.9) 0%, rgba(124, 58, 237, 0.2) 100%)', padding: '3rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Vous cherchez le meilleur abonnement IPTV compatible ?</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                            Obtenez un abonnement IPTV premium compatible avec toutes les applications :
                            Smarters Pro, TiviMate, IBO Player, Smart IPTV. Qualité 4K HDR, serveurs anti-buffering, EPG complet.
                        </p>
                        <Button href="/#plans" variant="primary">Découvrir nos offres IPTV Premium</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
