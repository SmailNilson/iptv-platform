
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export const metadata: Metadata = {
    title: 'Activer Smart IPTV : Le Guide Complet 2025',
    description: 'Problème d\'activation Smart IPTV ? Suivez notre tutoriel étape par étape pour activer l\'application Smart IPTV à vie (5.49€) et y ajouter votre playlist M3U.',
    alternates: {
        canonical: '/smart-iptv/smart-iptv-activation',
    },
};

export default function SmartIptvActivationPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            {/* Article Header */}
            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Tutoriel</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '3rem', marginTop: '1rem' }}>
                        Comment Activer Smart IPTV et Ajouter sa Playlist
                    </h1>
                    <p className={styles.heroSubtitle}>
                        L'application Smart IPTV est gratuite pendant 7 jours. Passé ce délai, vous devez l'activer pour 5.49€ à vie. Voici la méthode exacte pour ne pas se tromper.
                    </p>
                </div>
            </section>

            {/* Content Body */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                        <h2>C'est quoi Smart IPTV ?</h2>
                        <p>
                            Smart IPTV (souvent appelée SIPTV) est un lecteur de flux. <strong>Elle ne fournit aucune chaîne</strong>.
                            Pour l'utiliser, vous avez besoin de deux choses :
                        </p>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>L'application installée sur votre TV.</li>
                            <li>Un <Link href="/abonnement-iptv" style={{ color: 'var(--accent-2)' }}>abonnement IPTV premium</Link> (fichier M3U ou lien).</li>
                        </ol>

                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#60a5fa', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>💡 Astuce Pro</h3>
                            <p style={{ margin: 0, color: '#bfdbfe' }}>
                                N'activez l'application qu'après avoir testé que votre lien M3U fonctionne bien pendant la période d'essai de 7 jours.
                            </p>
                        </div>

                        <h2>Étape 1 : Trouver son adresse MAC</h2>
                        <p>
                            L'adresse MAC est l'identifiant unique de votre TV. Pour la trouver :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Lancez l'application Smart IPTV sur votre téléviseur.</li>
                            <li>Sur l'écran d'accueil, vous verrez s'afficher <strong>TV MAC address</strong> (ex : a1:b2:c3:d4:e5:f6).</li>
                            <li>Notez-la, vous en aurez besoin.</li>
                        </ul>

                        <h2>Étape 2 : Payer l'activation (5.49€)</h2>
                        <p>
                            Rendez-vous sur le site officiel de l'application : <a href="https://siptv.app/activation" target="_blank" rel="nofollow noopener" style={{ color: 'var(--accent-2)' }}>siptv.app/activation</a>.
                        </p>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Entrez votre <strong>TV MAC</strong> dans le champ requis.</li>
                            <li>Entrez votre email (pour recevoir la confirmation).</li>
                            <li>Payez les 5.49€ par carte bancaire ou PayPal.</li>
                        </ol>
                        <p><em>Attention : Méfiez-vous des sites tiers qui vous demandent plus cher. Le seul prix officiel est 5.49€.</em></p>

                        <h2>Étape 3 : Injecter la Playlist M3U</h2>
                        <p>
                            Une fois l'application activée, elle est vide. Il faut y mettre les chaînes de votre abonnement.
                        </p>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Allez sur l'onglet <strong>My List</strong> du site siptv.app.</li>
                            <li>Dans "MAC", remettez l'adresse MAC de votre TV.</li>
                            <li>Dans "URL", collez le lien M3U fourni par votre <Link href="/abonnement-iptv" style={{ color: 'var(--accent-2)' }}>fournisseur IPTV</Link>.</li>
                            <li>Cochez la case "Save online" si disponible.</li>
                            <li>Cliquez sur <strong>Send</strong>.</li>
                        </ol>

                        <h2>Étape 4 : Redémarrer l'application</h2>
                        <p>
                            Retournez sur votre TV. Appuyez sur le bouton "0" ou "Reload" (parfois il faut maintenir "OK" ou redémarrer la TV).
                            Si tout s'est bien passé, la liste des chaînes apparaît !
                        </p>
                    </article>

                    {/* CTA Box */}
                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(30, 26, 48, 0.9) 0%, rgba(124, 58, 237, 0.2) 100%)', padding: '3rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Vous n'avez pas encore de lien M3U ?</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                            Ne perdez pas votre argent avec des abonnements qui coupent.
                            Obtenez le meilleur lien M3U du marché, parfaitement compatible Smart IPTV.
                        </p>
                        <Button href="/abonnement-iptv" variant="primary">Découvrir nos offres</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
