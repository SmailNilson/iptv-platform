
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../styles/shared.module.css';
import { Check, Tv, Zap, Shield, HelpCircle, AlertCircle, Signal, Server, Smartphone, Award } from 'lucide-react';

export const metadata: Metadata = {
    title: 'IPTV Premium - Abonnement Stable sans Coupure France 2025',
    description: 'Découvrez le meilleur abonnement IPTV Premium en France. Qualité 4K/FHD, stable et sans coupure. Compatible Smart TV, Android, iOS. Support 24/7.',
    alternates: {
        canonical: '/iptv-premium',
    },
};

export default function IptvPremiumPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '999px', background: 'rgba(124, 58, 237, 0.1)', color: '#a78bfa', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                        Solution Certifiée 2025 🚀
                    </span>
                    <h1 className={styles.heroTitle}>
                        IPTV Premium <br />
                        <span className={styles.highlight}>L'Excellence du Streaming</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        La solution définitive pour une télévision sans limite. Accédez à la meilleure qualité d'image 4K HDR,
                        une stabilité garantie sans coupure, et un catalogue riche de plus de 18 000 chaînes.
                        Conçu pour les utilisateurs exigeants en France.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Button href="/abonnement-iptv" variant="primary">Choisir mon abonnement</Button>
                        <Button href="#decouvrir" variant="outline">Découvrir les avantages</Button>
                    </div>
                </div>
            </section>

            {/* Introduction SEO */}
            <section id="decouvrir" className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.prose} style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Pourquoi choisir une offre IPTV Premium en 2025 ?</h2>
                        <p>
                            Dans un monde connecté où la technologie d'affichage évolue rapidement (OLED, QLED, 8K), votre source de divertissement se doit d'être à la hauteur.
                            L'<strong>IPTV Premium</strong> n'est pas simplement une alternative au câble ou aux box opérateurs classiques : c'est une évolution majeure de la consommation média.
                        </p>
                        <p>
                            Contrairement aux flux standards souvent instables, notre infrastructure <strong>IPTV Premium France</strong> repose sur des serveurs privés dédiés à haute bande passante,
                            optimisés pour garantir une fluidité parfaite, même lors des grands événements sportifs ou des soirées cinéma en ultra haute définition.
                            Fini le buffering incessant et les images pixelisées.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technical Advantages */}
            <section className={styles.section} style={{ background: 'var(--bg-secondary)' }}>
                <div className={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem', color: 'var(--text-primary)' }}>Les Piliers de la Qualité Premium</h2>
                    <div className={styles.grid3}>
                        <div className={styles.card}>
                            <div style={{ width: '64px', height: '64px', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#a78bfa', marginInline: 'auto' }}>
                                <Zap size={32} />
                            </div>
                            <h3 className={styles.cardTitle} style={{ textAlign: 'center' }}>Zéro Coupure & Anti-Buffer</h3>
                            <p className={styles.cardText} style={{ textAlign: 'center' }}>
                                Notre technologie de répartition de charge (Load Balancing) assure qu'aucun serveur n'est saturé.
                                Un flux <strong>iptv premium stable</strong> et continu, essentiel pour vivre les matchs en direct sans latence.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <div style={{ width: '64px', height: '64px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#60a5fa', marginInline: 'auto' }}>
                                <Tv size={32} />
                            </div>
                            <h3 className={styles.cardTitle} style={{ textAlign: 'center' }}>Ultra Haute Définition (4K)</h3>
                            <p className={styles.cardText} style={{ textAlign: 'center' }}>
                                Exploitez le plein potentiel de votre écran. Nous diffusons les flux originaux avec un bitrate élevé,
                                garantissant une image <strong>iptv premium hd</strong> cristalline et un son Dolby Digital immersif.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <div style={{ width: '64px', height: '64px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#34d399', marginInline: 'auto' }}>
                                <Shield size={32} />
                            </div>
                            <h3 className={styles.cardTitle} style={{ textAlign: 'center' }}>Sécurité & Anonymat</h3>
                            <p className={styles.cardText} style={{ textAlign: 'center' }}>
                                Votre vie privée est notre priorité absolue. Nos connexions sont chiffrées de bout en bout (SSL/TLS).
                                Aucune trace d'activité n'est conservée, vous garantissant une expérience sereine et privée.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compatibility Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem', color: 'var(--text-primary)' }}>Compatibilité Totale</h2>
                    <div className={styles.grid2}>
                        <div>
                            <h3 className={styles.cardTitle} style={{ color: '#60a5fa' }}>Sur tous vos écrans numériques</h3>
                            <p className={styles.cardText}>
                                L'un des atouts majeurs de notre offre <strong>meilleur iptv premium</strong> est sa flexibilité inégalée.
                                Plus besoin de décodeur propriétaire encombrant ou de location de matériel coûteux. Votre abonnement vous suit partout.
                            </p>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>
                                    <Check size={20} style={{ color: '#60a5fa' }} />
                                    <span><strong>Smart TV (Samsung, LG, Sony)</strong> : Compatible nativement. Applications recommandées : Smart IPTV, IBO Player, Nanomid.</span>
                                </li>
                                <li className={styles.listItem}>
                                    <Check size={20} style={{ color: '#60a5fa' }} />
                                    <span><strong>Boitiers Android & Firestick</strong> : Optimisé pour Nvidia Shield, Xiaomi Mi Box S, Amazon Fire TV Stick 4K.</span>
                                </li>
                                <li className={styles.listItem}>
                                    <Check size={20} style={{ color: '#60a5fa' }} />
                                    <span><strong>Apple (iOS & tvOS)</strong> : Fonctionne parfaitement sur Apple TV 4K, iPhone et iPad (via GSE IPTV, Smarters ou équivalents).</span>
                                </li>
                                <li className={styles.listItem}>
                                    <Check size={20} style={{ color: '#60a5fa' }} />
                                    <span><strong>PC & Mobiles</strong> : Accédez à vos contenus en déplacement via Web Player, VLC ou nos applications partenaires.</span>
                                </li>
                            </ul>
                        </div>
                        <div style={{ background: 'linear-gradient(135deg, rgba(30,26,48,0.8), rgba(15,11,30,0.9))', borderRadius: '1rem', padding: '2rem', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="flex gap-4 mb-6">
                                <div className="p-4 bg-white/5 rounded-full"><Tv size={40} className="text-purple-400" /></div>
                                <div className="p-4 bg-white/5 rounded-full"><Smartphone size={40} className="text-blue-400" /></div>
                                <div className="p-4 bg-white/5 rounded-full"><Server size={40} className="text-green-400" /></div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Une seule souscription. Une liberté totale.</p>
                                <div style={{ marginTop: '1.5rem', display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold' }}>
                                    Installation facile en moins de 5 minutes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className={styles.section} style={{ background: 'var(--bg-secondary)' }}>
                <div className={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>IPTV Premium vs Standard</h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Pourquoi la qualité Premium fait toute la différence au quotidien. Ne confiez pas vos soirées à des services instables.
                    </p>

                    <div style={{ overflowX: 'auto', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px', background: 'var(--card-bg)' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', color: 'var(--text-secondary)', width: '30%' }}>Fonctionnalité</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'center', color: '#f87171', background: 'rgba(248, 113, 113, 0.05)', width: '35%' }}>IPTV Gratuit / Low-Cost</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'center', color: '#34d399', background: 'rgba(52, 211, 153, 0.1)', borderTop: '4px solid #34d399', width: '35%', fontWeight: '800', fontSize: '1.1rem' }}>IPTV Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '1.25rem', fontWeight: 'bold' }}>Stabilité du flux</td>
                                    <td style={{ padding: '1.25rem', color: 'var(--text-secondary)', textAlign: 'center' }}>Coupures fréquentes, buffering</td>
                                    <td style={{ padding: '1.25rem', color: '#fff', background: 'rgba(52, 211, 153, 0.05)', textAlign: 'center', fontWeight: 'bold' }}>Load Balancing, 99.9% Uptime</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '1.25rem', fontWeight: 'bold' }}>Qualité d'Image</td>
                                    <td style={{ padding: '1.25rem', color: 'var(--text-secondary)', textAlign: 'center' }}>SD / 720p compressé</td>
                                    <td style={{ padding: '1.25rem', color: '#fff', background: 'rgba(52, 211, 153, 0.05)', textAlign: 'center', fontWeight: 'bold' }}>FHD / 4K HEVC Réel</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '1.25rem', fontWeight: 'bold' }}>Support Client</td>
                                    <td style={{ padding: '1.25rem', color: 'var(--text-secondary)', textAlign: 'center' }}>Inexistant ou automatisé</td>
                                    <td style={{ padding: '1.25rem', color: '#fff', background: 'rgba(52, 211, 153, 0.05)', textAlign: 'center', fontWeight: 'bold' }}>Humain & Réactif 7j/7</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '1.25rem', fontWeight: 'bold' }}>Catalogue VOD</td>
                                    <td style={{ padding: '1.25rem', color: 'var(--text-secondary)', textAlign: 'center' }}>Rarement mis à jour</td>
                                    <td style={{ padding: '1.25rem', color: '#fff', background: 'rgba(52, 211, 153, 0.05)', textAlign: 'center', fontWeight: 'bold' }}>+60 000 Films & Séries (Netflix, Prime...)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1.25rem', fontWeight: 'bold' }}>Publicités</td>
                                    <td style={{ padding: '1.25rem', color: 'var(--text-secondary)', textAlign: 'center' }}>Intrusives (Pop-ups)</td>
                                    <td style={{ padding: '1.25rem', color: '#fff', background: 'rgba(52, 211, 153, 0.05)', textAlign: 'center', fontWeight: 'bold' }}>0% Publicité, 100% Contenu</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* VOD & Content Highlight */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid2} style={{ alignItems: 'center' }}>
                        <div style={{ order: 2 }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Tout le cinéma chez vous</h2>
                            <p className={styles.cardText}>
                                Notre offre ne s'arrête pas au direct. Profitez d'une vidéothèque colossale incluse dans votre <strong>abonnement iptv premium</strong>.
                            </p>
                            <ul className={styles.list}>
                                <li className={styles.listItem}><Check size={18} className="text-green-400" /> Séries US et Françaises à J+1</li>
                                <li className={styles.listItem}><Check size={18} className="text-green-400" /> Films box-office en 4K HDR</li>
                                <li className={styles.listItem}><Check size={18} className="text-green-400" /> Documentaires, Concerts et Spectacles</li>
                                <li className={styles.listItem}><Check size={18} className="text-green-400" /> Contenu Jeunesse sécurisé</li>
                            </ul>
                        </div>
                        <div style={{ order: 1, padding: '2rem', background: 'var(--card-bg)', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                            <div style={{ textAlign: 'center' }}>
                                <Award size={48} style={{ color: '#fbbf24', margin: '0 auto 1rem' }} />
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contenu Premium Inclus</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Netflix, Disney+, Amazon Prime Video, Apple TV+, Canal+ Séries...</p>
                                <div style={{ marginTop: '1.5rem', fontSize: '3rem', fontWeight: '800', color: 'var(--text-primary)' }}>+60k</div>
                                <div style={{ color: 'var(--text-secondary)' }}>Titres disponibles</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem', color: 'var(--text-primary)' }}>Questions Fréquentes</h2>
                    <div className={styles.grid2}>
                        <div className={styles.card}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                                <HelpCircle size={24} color="#a78bfa" /> Qu'est-ce que l'IPTV Premium ?
                            </h3>
                            <p className={styles.cardText} style={{ marginBottom: 0 }}>
                                C'est un service de diffusion TV utilisant des serveurs privés haute performance pour garantir une stabilité et une qualité d'image (jusqu'à 4K) bien supérieures aux flux gratuits standards. C'est la garantie d'une expérience "zéro coupure".
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                                <Signal size={24} color="#a78bfa" /> Quelle vitesse internet est requise ?
                            </h3>
                            <p className={styles.cardText} style={{ marginBottom: 0 }}>
                                Nous recommandons un minimum de <strong>15 Mbps pour la HD (1080p)</strong> et <strong>25 Mbps pour la 4K UHD</strong>. La fibre optique est idéale, mais une bonne connexion ADSL stable ou 4G suffit largement.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                                <Tv size={24} color="#a78bfa" /> Est-ce compatible avec ma Smart TV ?
                            </h3>
                            <p className={styles.cardText} style={{ marginBottom: 0 }}>
                                Oui, notre service est universel. Il est parfaitement compatible avec les Smart TV Samsung (Tizen), LG (WebOS), Sony (Android TV) ainsi que toutes les box Android et Apple TV.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                                <AlertCircle size={24} color="#a78bfa" /> Ai-je besoin d'un VPN ?
                            </h3>
                            <p className={styles.cardText} style={{ marginBottom: 0 }}>
                                L'utilisation d'un VPN n'est pas obligatoire car notre service est sécurisé. Cependant, il est 100% compatible si vous souhaitez l'utiliser pour contourner d'éventuels bridages de votre opérateur internet.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                                <HelpCircle size={24} color="#a78bfa" /> Puis-je utiliser l'abonnement sur plusieurs écrans ?
                            </h3>
                            <p className={styles.cardText} style={{ marginBottom: 0 }}>
                                Oui, vous pouvez installer votre abonnement sur autant d'appareils que vous le souhaitez (TV, téléphone, tablette). Le visionnage simultané dépendra cependant de la formule choisie (généralement 1 écran à la fois, sauf option multi-écrans).
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                                <HelpCircle size={24} color="#a78bfa" /> Y a-t-il une période d'engagement ?
                            </h3>
                            <p className={styles.cardText} style={{ marginBottom: 0 }}>
                                Non, aucun engagement. Nos offres sont prépayées pour la durée choisie (1, 3, 6 ou 12 mois). Vous êtes libre de ne pas renouveler à la fin de votre période. Pas de prélèvement automatique surprise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className={styles.section} style={{ paddingBottom: '6rem' }}>
                <div className={styles.container} style={{ textAlign: 'center', background: 'rgba(124, 58, 237, 0.1)', padding: '5rem 2rem', borderRadius: '1.5rem', border: '1px solid rgba(124, 58, 237, 0.2)' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Ne faites plus de compromis.</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
                        Rejoignez l'élite du streaming dès aujourd'hui. Qualité 4K, +18 000 chaînes, VOD illimitée et Support 24/7.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Button href="/abonnement-iptv" variant="primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Commencer maintenant</Button>
                        <Button href="/contact" variant="outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Contacter le support</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
