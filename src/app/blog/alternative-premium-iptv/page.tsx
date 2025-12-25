"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../../styles/shared.module.css';

export default function AlternativePremiumIPTVPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <span style={{ color: 'var(--accent-1)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Alternative</span>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                        Impossible d'annuler ou déçu de Premium IPTV ? Voici l'alternative fiable.
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Découvrez l'alternative fiable avec support humain WhatsApp.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <img
                            src="/images/blog/support-whatsapp.jpg"
                            alt="Support WhatsApp en direct"
                            style={{ width: '100%', borderRadius: '12px', marginBottom: '2rem' }}
                        />

                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Vous tournez en rond sur le site à la recherche du bouton "Annuler" ? Vous avez envoyé trois emails au support parce que votre match a coupé à la mi-temps, et le silence radio est total ?
                        </p>

                        <p>
                            Rassurez-vous, vous n'êtes pas seul. Nous recevons chaque semaine des messages d'utilisateurs fatigués par ces plateformes automatisées. C'est le scénario classique : l'achat est facile, mais dès qu'il y a un problème ou une volonté de stopper les prélèvements, il n'y a plus personne.
                        </p>

                        <p>
                            Si vous cherchez <strong>comment annuler votre abonnement</strong> ou si vous en avez simplement assez des écrans noirs, lisez ce qui suit. Il existe une autre façon de profiter de l'IPTV.
                        </p>

                        <h2>Les pièges des abonnements sans support</h2>
                        <p>Le problème majeur de certains fournisseurs, ce n'est pas seulement la qualité du flux qui peut laisser à désirer, c'est l'absence d'humain derrière la machine.</p>

                        <p>Ces fournisseurs fonctionnent sur le volume :</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Automatisation totale :</strong> De l'encaissement à la livraison des codes, tout est géré par des robots.</li>
                            <li><strong>Service client fantôme :</strong> En cas de bug, vous devez remplir un formulaire obscur. La réponse, si elle arrive, prend souvent 48 à 72 heures.</li>
                            <li><strong>Difficulté de résiliation :</strong> Les procédures sont souvent complexes à dessein pour vous décourager.</li>
                        </ul>

                        <p>Payer pour un service qui ne fonctionne pas, c'est frustrant. Mais ne pas pouvoir parler à quelqu'un pour régler le problème, c'est inacceptable.</p>

                        <h2>Pourquoi un support WhatsApp change tout</h2>
                        <p>
                            Chez <strong>iptvplusfrance.com</strong>, nous avons pris le contre-pied total de ces usines à gaz. Nous savons que la technologie peut parfois être capricieuse. C'est pourquoi nous avons tout misé sur l'humain.
                        </p>

                        <p>Pourquoi notre approche est différente ?</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Zéro Robot :</strong> Quand vous nous écrivez, c'est un expert réel qui vous répond.</li>
                            <li><strong>Réactivité Immédiate :</strong> Pas de ticket support. Tout se passe sur <strong>WhatsApp</strong>. Vous avez un souci de configuration ? Nous vous guidons pas à pas, en direct.</li>
                            <li><strong>Transparence :</strong> Nous ne cachons pas nos conditions. Notre objectif est de fidéliser nos clients par la qualité de notre IPTV Premium.</li>
                        </ul>

                        <p>Nous remplaçons l'anonymat par la proximité.</p>

                        <h2>Conclusion : Ne restez pas bloqué, changez pour le mieux</h2>
                        <p>
                            Ne perdez plus votre temps à vous battre avec un site qui ne vous répond pas. Si votre fournisseur actuel vous a déçu, ne restez pas sur une mauvaise expérience.
                        </p>

                        <p>
                            L'IPTV, quand c'est bien géré, c'est une liberté totale et une qualité d'image exceptionnelle. Mais pour cela, il faut le bon partenaire.
                        </p>

                        <div style={{ marginTop: '2rem', textAlign: 'center', padding: '2rem', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '1rem' }}>
                            <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}><strong>Testez la différence dès maintenant.</strong></p>
                            <Button variant="primary" href="https://wa.me/17575357760?text=Bonjour,%20je%20viens%20d'un%20autre%20fournisseur%20et%20souhaite%20tester">
                                💬 Tester Gratuitement 24h via WhatsApp
                            </Button>
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                Dites-nous simplement quel appareil vous utilisez, et nous activons votre accès immédiatement.
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
