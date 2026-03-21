import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export default function SIPTVeuActivationGuidePage() {
    return (
        <main className={styles.main}>
            <Navbar />

            {/* Article Header */}
            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Tutoriel Officiel</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.8rem', marginTop: '1rem' }}>
                        SIPTV.eu : Le Guide Complet d'Activation Smart IPTV 2025
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Tout savoir sur siptv.eu, le site officiel pour activer l'application Smart IPTV sur votre Smart TV Samsung, LG ou Android.
                    </p>
                </div>
            </section>

            {/* Content Body */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>

                        <h2>C'est quoi SIPTV.eu ?</h2>
                        <p>
                            <strong>SIPTV.eu</strong> (désormais accessible via <strong>siptv.app</strong>) est le site web officiel de l'application <strong>Smart IPTV</strong>.
                            C'est à partir de ce site que vous pouvez :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>✅ Activer votre application Smart IPTV (5.49€ à vie)</li>
                            <li>✅ Ajouter votre playlist M3U à votre TV</li>
                            <li>✅ Gérer vos appareils activés</li>
                            <li>✅ Renouveler votre activation si nécessaire</li>
                        </ul>

                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#60a5fa', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>💡 Important à savoir</h3>
                            <p style={{ margin: 0, color: '#bfdbfe' }}>
                                Le site officiel a changé de nom : <strong>siptv.eu</strong> → <strong>siptv.app</strong>.
                                Les deux adresses fonctionnent, mais utilisez de préférence <a href="https://siptv.app" target="_blank" rel="nofollow noopener" style={{ color: 'var(--accent-2)' }}>siptv.app</a>.
                            </p>
                        </div>

                        <h2>Smart IPTV est-elle encore disponible en 2025 ?</h2>
                        <p>
                            <strong>Oui, mais avec des restrictions.</strong> L'application Smart IPTV a été retirée du Samsung App Store et LG Content Store dans plusieurs pays européens,
                            dont la France, en raison de pressions liées aux droits d'auteur.
                        </p>

                        <h3>🌍 Disponibilité par région</h3>
                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <p><strong>✅ Disponible :</strong> Certains pays hors UE, anciennes installations</p>
                            <p><strong>⛔ Retirée :</strong> France, Belgique, Suisse, plusieurs pays UE</p>
                            <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                Si vous aviez déjà installé Smart IPTV avant son retrait, elle continue de fonctionner normalement.
                            </p>
                        </div>

                        <h3>Alternatives si Smart IPTV n'est plus disponible</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>IBO Player</strong> : Activation 15€ à vie, très similaire à Smart IPTV (voir notre <Link href="/blog/activation-renouvellement-ibo-player" style={{ color: 'var(--accent-2)' }}>guide IBO Player</Link>)</li>
                            <li><strong>Nanomid IPTV</strong> : Gratuit, disponible sur Samsung et LG</li>
                            <li><strong>IPTV Smarters Pro</strong> : Gratuit, compatible Android/Samsung/LG (voir notre <Link href="/blog/iptv-plus-player-telechargement" style={{ color: 'var(--accent-2)' }}>guide complet</Link>)</li>
                        </ul>

                        <h2>Comment Activer Smart IPTV via SIPTV.eu (siptv.app)</h2>

                        <h3>Étape 1 : Récupérer votre adresse MAC</h3>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Lancez l'application <strong>Smart IPTV</strong> sur votre Smart TV</li>
                            <li>Sur l'écran d'accueil, notez l'<strong>adresse MAC</strong> affichée en haut</li>
                            <li>Format : <code>a1:b2:c3:d4:e5:f6</code></li>
                        </ol>

                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#f87171', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>⚠️ Attention</h3>
                            <p style={{ margin: 0, color: '#fecaca' }}>
                                Notez bien cette adresse MAC, vous ne pourrez activer Smart IPTV que pour <strong>un seul appareil</strong> par paiement.
                                Si vous changez de TV, vous devrez racheter une activation.
                            </p>
                        </div>

                        <h3>Étape 2 : Payer l'activation (5.49€)</h3>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Rendez-vous sur <a href="https://siptv.app/activation" target="_blank" rel="nofollow noopener" style={{ color: 'var(--accent-2)' }}>siptv.app/activation</a></li>
                            <li>Entrez votre <strong>adresse MAC</strong></li>
                            <li>Entrez votre <strong>email</strong> (pour recevoir la confirmation)</li>
                            <li>Cliquez sur <strong>Continue</strong></li>
                            <li>Payez les <strong>5.49€</strong> par carte bancaire ou PayPal</li>
                            <li>Vous recevrez un email de confirmation</li>
                        </ol>

                        <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#34d399', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>✅ Période d'essai gratuite</h3>
                            <p style={{ margin: 0, color: '#a7f3d0' }}>
                                Smart IPTV est gratuite pendant <strong>7 jours</strong>. Profitez-en pour tester avec votre
                                <Link href="/#plans" style={{ color: 'var(--accent-2)' }}> abonnement IPTV</Link> avant de payer l'activation.
                            </p>
                        </div>

                        <h3>Étape 3 : Ajouter votre playlist M3U</h3>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Allez sur <a href="https://siptv.app/mylist" target="_blank" rel="nofollow noopener" style={{ color: 'var(--accent-2)' }}>siptv.app/mylist</a></li>
                            <li>Dans le champ <strong>"MAC"</strong>, entrez votre adresse MAC</li>
                            <li>Dans le champ <strong>"URL"</strong>, collez le lien M3U fourni par votre <Link href="/#plans" style={{ color: 'var(--accent-2)' }}>fournisseur IPTV</Link></li>
                            <li>Cochez <strong>"Save online"</strong> (recommandé)</li>
                            <li>Cliquez sur <strong>Send</strong></li>
                        </ol>

                        <h3>Étape 4 : Recharger la playlist sur votre TV</h3>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Retournez sur votre Smart TV</li>
                            <li>Dans Smart IPTV, appuyez sur le bouton <strong>0</strong> (zéro) de votre télécommande</li>
                            <li>Alternative : Maintenez le bouton <strong>OK</strong> pendant quelques secondes</li>
                            <li>Les chaînes devraient apparaître dans quelques secondes !</li>
                        </ol>

                        <h2>Problèmes courants et solutions</h2>

                        <h3>❌ "MAC already registered"</h3>
                        <p>
                            <strong>Cause :</strong> Cette adresse MAC a déjà été activée.
                        </p>
                        <p>
                            <strong>Solution :</strong> Vérifiez vos emails pour retrouver votre confirmation d'activation.
                            Si vous ne la trouvez pas, contactez le support de Smart IPTV via leur site.
                        </p>

                        <h3>❌ "Playlist not loading"</h3>
                        <p>
                            <strong>Causes possibles :</strong>
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Lien M3U invalide ou expiré</li>
                            <li>Playlist trop volumineuse (limite : ~10 000 chaînes)</li>
                            <li>Connexion internet instable</li>
                        </ul>
                        <p>
                            <strong>Solution :</strong> Vérifiez votre lien M3U, testez-le sur VLC. Si le problème persiste,
                            contactez votre <Link href="/#plans" style={{ color: 'var(--accent-2)' }}>fournisseur IPTV</Link>.
                        </p>

                        <h3>❌ Smart IPTV ne se lance plus</h3>
                        <p>
                            <strong>Cause :</strong> L'application a été désinstallée ou corrompue.
                        </p>
                        <p>
                            <strong>Solution :</strong> Réinstallez Smart IPTV depuis votre App Store (si encore disponible) ou
                            utilisez une alternative comme <strong>IBO Player</strong> ou <strong>IPTV Smarters Pro</strong>.
                        </p>

                        <h2>SIPTV.eu vs SIPTV.app : Quelle différence ?</h2>
                        <p>
                            <strong>Aucune différence.</strong> Il s'agit du même service officiel. Le site a simplement changé d'extension de domaine :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Ancien :</strong> siptv.eu</li>
                            <li><strong>Nouveau :</strong> siptv.app</li>
                        </ul>
                        <p>Les deux URL redirigent vers le même site. Utilisez celle qui vous convient.</p>

                        <h2>Prix d'activation Smart IPTV : Attention aux arnaques</h2>
                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <p><strong>⚠️ Prix officiel : 5.49€ (paiement unique à vie)</strong></p>
                            <p style={{ marginTop: '1rem' }}>
                                Méfiez-vous des sites tiers qui proposent "l'activation Smart IPTV" à des prix différents (10€, 15€, abonnement mensuel...).
                                Ce sont des <strong>arnaques</strong>.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                Activez uniquement via le site officiel : <a href="https://siptv.app/activation" target="_blank" rel="nofollow noopener" style={{ color: 'var(--accent-2)' }}>siptv.app/activation</a>
                            </p>
                        </div>

                        <h2>Alternatives à Smart IPTV en 2025</h2>

                        <h3>1. IBO Player (Recommandé ⭐)</h3>
                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <p><strong>Prix :</strong> 15€ à vie (7 jours gratuit)</p>
                            <p><strong>Compatible :</strong> Samsung, LG, Android, iOS</p>
                            <p><strong>Format :</strong> Xtream Codes uniquement (pas de M3U)</p>
                            <p><strong>Avantages :</strong> Interface moderne, EPG complet, stable</p>
                            <p><Link href="/blog/activation-renouvellement-ibo-player" style={{ color: 'var(--accent-2)' }}>→ Voir notre guide d'activation IBO Player</Link></p>
                        </div>

                        <h3>2. IPTV Smarters Pro (Gratuit)</h3>
                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <p><strong>Prix :</strong> Gratuit (version Pro payante)</p>
                            <p><strong>Compatible :</strong> Android, iOS, Smart TV, FireStick</p>
                            <p><strong>Format :</strong> M3U et Xtream Codes</p>
                            <p><strong>Avantages :</strong> Gratuit, multi-profils, 4K HDR</p>
                            <p><Link href="/blog/iptv-plus-player-telechargement" style={{ color: 'var(--accent-2)' }}>→ Voir notre guide complet IPTV Players</Link></p>
                        </div>

                        <h3>3. TiviMate (Meilleur pour Android TV)</h3>
                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <p><strong>Prix :</strong> Gratuit (Premium : 5€/an)</p>
                            <p><strong>Compatible :</strong> Android TV, FireStick uniquement</p>
                            <p><strong>Format :</strong> M3U et Xtream Codes</p>
                            <p><strong>Avantages :</strong> Interface ultra-fluide, enregistrement, multi-playlists</p>
                            <p><Link href="/blog/reglage-tivimate-eviter-buffering" style={{ color: 'var(--accent-2)' }}>→ Voir notre guide TiviMate</Link></p>
                        </div>

                        <h2>Résumé : Faut-il activer Smart IPTV via SIPTV.eu ?</h2>
                        <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <p><strong>✅ Oui, si :</strong></p>
                            <ul style={{ marginBottom: '1rem' }}>
                                <li>Vous avez déjà Smart IPTV installée sur votre TV</li>
                                <li>Vous cherchez une solution simple et stable</li>
                                <li>Votre fournisseur IPTV fournit un lien M3U</li>
                                <li>Vous ne voulez pas payer d'abonnement annuel</li>
                            </ul>
                        </div>

                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <p><strong>❌ Non, si :</strong></p>
                            <ul style={{ marginBottom: '1rem' }}>
                                <li>Smart IPTV n'est plus disponible sur votre App Store</li>
                                <li>Vous voulez des fonctionnalités avancées (enregistrement, multi-profils)</li>
                                <li>Votre fournisseur ne fournit que du Xtream Codes</li>
                            </ul>
                            <p style={{ marginTop: '1rem' }}>
                                <strong>→ Dans ce cas, utilisez IBO Player ou IPTV Smarters Pro.</strong>
                            </p>
                        </div>

                    </article>

                    {/* CTA Box */}
                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(30, 26, 48, 0.9) 0%, rgba(124, 58, 237, 0.2) 100%)', padding: '3rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Vous n'avez pas encore de playlist M3U ?</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                            Obtenez un abonnement IPTV premium compatible Smart IPTV, IBO Player et toutes les applications.
                            Format M3U et Xtream Codes fournis, qualité 4K, serveurs anti-buffering.
                        </p>
                        <Button href="/#plans" variant="primary">Découvrir nos offres IPTV Premium</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
