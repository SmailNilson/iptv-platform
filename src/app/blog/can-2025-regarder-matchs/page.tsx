"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export default function CanAfrique2025Page() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>⚽ Football</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                        CAN 2025 : Comment Regarder Tous les Matchs en Direct
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Guide complet pour suivre la Coupe d'Afrique des Nations 2025 au Maroc en streaming HD.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <h2>🏆 CAN 2025 : Tout ce qu'il faut savoir</h2>
                        <p>
                            La <strong>Coupe d'Afrique des Nations 2025</strong> se déroule au <strong>Maroc</strong> du
                            <strong> 21 décembre 2025 au 18 janvier 2026</strong>. C'est l'événement football le plus attendu
                            du continent africain, avec 24 équipes nationales en compétition.
                        </p>

                        <div style={{ background: 'rgba(0, 207, 255, 0.1)', padding: '1.5rem', borderRadius: '12px', margin: '2rem 0', border: '1px solid rgba(0, 207, 255, 0.2)' }}>
                            <h3 style={{ color: '#00CFFF', marginTop: 0 }}>📅 Informations clés</h3>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
                                <li><strong>Dates</strong> : 21 décembre 2025 - 18 janvier 2026</li>
                                <li><strong>Pays hôte</strong> : Maroc 🇲🇦</li>
                                <li><strong>Équipes</strong> : 24 nations africaines</li>
                                <li><strong>Stades</strong> : Casablanca, Rabat, Marrakech, Tanger, Agadir, Fès</li>
                                <li><strong>Tenant du titre</strong> : Côte d'Ivoire 🇨🇮</li>
                            </ul>
                        </div>

                        <h2>🏟️ Les équipes favorites</h2>
                        <p>Plusieurs nations sont pressenties pour remporter le trophée :</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>🇲🇦 <strong>Maroc</strong> - Pays hôte, demi-finaliste de la Coupe du Monde 2022</li>
                            <li>🇳🇬 <strong>Nigeria</strong> - Super Eagles, finaliste de la dernière édition</li>
                            <li>🇸🇳 <strong>Sénégal</strong> - Champions 2022, toujours redoutables</li>
                            <li>🇪🇬 <strong>Égypte</strong> - Record de victoires (7), Mohamed Salah en leader</li>
                            <li>🇩🇿 <strong>Algérie</strong> - Les Fennecs, champions 2019</li>
                            <li>🇨🇮 <strong>Côte d'Ivoire</strong> - Tenants du titre</li>
                            <li>🇨🇲 <strong>Cameroun</strong> - Lions Indomptables, 5 fois champions</li>
                        </ul>

                        <h2>📺 Comment regarder la CAN 2025 ?</h2>
                        <p>
                            Suivre tous les matchs de la CAN peut être compliqué selon votre pays.
                            Voici les différentes options disponibles :
                        </p>

                        <h3>Option 1 : Chaînes TV traditionnelles</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>France</strong> : beIN Sports, Canal+</li>
                            <li><strong>Afrique</strong> : beIN Sports MENA, Arryadia (Maroc)</li>
                            <li><strong>Problème</strong> : Abonnements coûteux, tous les matchs ne sont pas diffusés</li>
                        </ul>

                        <h3>Option 2 : Streaming gratuit</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Qualité souvent médiocre</li>
                            <li>Coupures et buffering fréquent</li>
                            <li>Publicités intrusives</li>
                            <li>Risques de sécurité</li>
                        </ul>

                        <div style={{ background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(0, 207, 255, 0.1) 100%)', padding: '2rem', borderRadius: '16px', margin: '2rem 0', border: '1px solid rgba(124, 58, 237, 0.3)' }}>
                            <h3 style={{ color: '#A855F7', marginTop: 0 }}>✅ Option 3 : IPTV Premium (Recommandé)</h3>
                            <p>
                                Un <strong>abonnement IPTV premium</strong> vous donne accès à :
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li>✅ <strong>Toutes les chaînes sport</strong> : beIN Sports, Canal+, RMC Sport, Arryadia...</li>
                                <li>✅ <strong>Qualité HD/4K</strong> sans buffering</li>
                                <li>✅ <strong>Tous les matchs</strong> de la phase de groupes à la finale</li>
                                <li>✅ <strong>Multi-écrans</strong> : TV, smartphone, tablette, PC</li>
                                <li>✅ <strong>Prix abordable</strong> : à partir de 9,99€/mois</li>
                            </ul>
                            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                                <Button href="/#plans" variant="primary">Voir nos offres IPTV</Button>
                            </div>
                        </div>

                        <h2>🎯 Pourquoi choisir l'IPTV pour la CAN 2025 ?</h2>
                        <p>
                            Avec un service IPTV de qualité, vous avez accès à plus de <strong>200 chaînes sport</strong> incluant :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>🇫🇷 beIN Sports 1, 2, 3 (France)</li>
                            <li>🇫🇷 Canal+ Sport, Canal+ Foot</li>
                            <li>🇲🇦 Arryadia, 2M, Al Aoula</li>
                            <li>🇸🇦 beIN Sports MENA (arabe)</li>
                            <li>🇬🇧 Sky Sports, TNT Sports</li>
                            <li>🇺🇸 ESPN, Fox Sports</li>
                        </ul>

                        <h2>📱 Sur quels appareils regarder ?</h2>
                        <p>
                            Notre service IPTV est compatible avec tous vos appareils :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>📺 Smart TV (Samsung, LG, Android TV)</li>
                            <li>📱 Smartphone et tablette (iOS, Android)</li>
                            <li>🔥 Amazon Fire Stick</li>
                            <li>📦 Box Android (X96, Nvidia Shield...)</li>
                            <li>💻 PC et Mac</li>
                        </ul>

                        <h2>🗓️ Calendrier de la CAN 2025</h2>
                        <p>
                            Voici les dates importantes à retenir :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>21 décembre 2025</strong> : Match d'ouverture (Maroc)</li>
                            <li><strong>22 déc - 8 jan</strong> : Phase de groupes</li>
                            <li><strong>10-12 janvier</strong> : Huitièmes de finale</li>
                            <li><strong>14-15 janvier</strong> : Quarts de finale</li>
                            <li><strong>17 janvier</strong> : Demi-finales</li>
                            <li><strong>18 janvier 2026</strong> : Finale à Casablanca</li>
                        </ul>

                        <div style={{ background: 'rgba(255, 193, 7, 0.1)', borderLeft: '4px solid #ffc107', padding: '1.5rem', margin: '2rem 0', borderRadius: '0 8px 8px 0' }}>
                            <h3 style={{ color: '#ffc107', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>💡 Conseil</h3>
                            <p style={{ margin: 0 }}>
                                Abonnez-vous avant le début de la compétition pour être sûr de ne manquer aucun match !
                                Nous offrons un <Link href="/trial" style={{ color: 'var(--accent-2)' }}>essai gratuit de 24h</Link> pour tester notre service.
                            </p>
                        </div>

                        <h2>🎬 Ne manquez rien de la CAN 2025</h2>
                        <p>
                            Que vous supportiez le Maroc, l'Algérie, le Sénégal, le Nigeria ou toute autre équipe,
                            profitez de chaque match en qualité HD avec notre service IPTV premium.
                        </p>

                    </article>

                    <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(30, 26, 48, 0.9) 0%, rgba(124, 58, 237, 0.2) 100%)', padding: '3rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '4rem auto 0' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>⚽ Prêt pour la CAN 2025 ?</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Accédez à tous les matchs en direct avec notre abonnement IPTV premium.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button href="/#plans" variant="primary">Voir les offres</Button>
                            <Button href="/trial" variant="secondary">Essai gratuit 24h</Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
