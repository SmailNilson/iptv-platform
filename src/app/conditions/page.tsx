"use client";

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import styles from '../styles/shared.module.css';

export default function ConditionsPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem' }}>
                        Conditions Générales d'Utilisation
                    </h1>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <h2>1. Objet</h2>
                        <p>
                            Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités
                            d'accès et d'utilisation des services proposés par IPTV Premium. En utilisant notre site et nos services,
                            vous acceptez sans réserve les présentes conditions.
                        </p>

                        <h2>2. Description des Services</h2>
                        <p>
                            IPTV Premium propose des abonnements permettant l'accès à des flux de streaming IPTV.
                            Nos services comprennent :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Accès à plus de 20 000 chaînes TV internationales</li>
                            <li>Catalogue VOD de plus de 100 000 films et séries</li>
                            <li>Support technique 24/7</li>
                            <li>Compatibilité multi-appareils</li>
                        </ul>

                        <h2>3. Inscription et Accès</h2>
                        <p>
                            Pour accéder à nos services, vous devez fournir une adresse email valide.
                            Après validation du paiement, vos identifiants de connexion vous seront envoyés par email
                            dans un délai de 1 à 5 minutes.
                        </p>

                        <h2>4. Tarifs et Paiement</h2>
                        <p>
                            Les tarifs de nos abonnements sont indiqués en euros (€) TTC. Le paiement s'effectue en ligne
                            via nos partenaires de paiement sécurisé. L'abonnement prend effet dès la confirmation du paiement.
                        </p>

                        <h2>5. Durée et Renouvellement</h2>
                        <p>
                            L'abonnement est valable pour la durée choisie lors de la commande (1, 3, 6 ou 12 mois).
                            L'abonnement n'est pas renouvelé automatiquement. À son expiration, vous devrez procéder à un nouvel achat.
                        </p>

                        <h2>6. Utilisation Autorisée</h2>
                        <p>L'utilisateur s'engage à :</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Utiliser le service à des fins personnelles et non commerciales</li>
                            <li>Ne pas partager ses identifiants avec des tiers</li>
                            <li>Ne pas tenter de contourner les mesures de sécurité</li>
                            <li>Ne pas redistribuer ou revendre le contenu</li>
                        </ul>

                        <h2>7. Limitation de Responsabilité</h2>
                        <p>
                            IPTV Premium met tout en œuvre pour garantir la disponibilité de ses services.
                            Toutefois, nous ne pouvons garantir un fonctionnement sans interruption. En cas de panne prolongée,
                            une extension de votre abonnement pourra être accordée.
                        </p>
                        <p>
                            Nous ne sommes pas responsables du contenu diffusé par les chaînes tierces accessibles via notre service.
                        </p>

                        <h2>8. Garantie et Remboursement</h2>
                        <p>
                            Nous offrons une garantie de satisfaction de 7 jours. Si vous rencontrez des problèmes techniques
                            que notre support ne peut résoudre, un remboursement intégral pourra être accordé sur demande
                            dans les 7 jours suivant votre achat.
                        </p>

                        <h2>9. Résiliation</h2>
                        <p>
                            IPTV Premium se réserve le droit de suspendre ou résilier l'accès d'un utilisateur en cas de
                            violation des présentes CGU, sans préavis ni remboursement.
                        </p>

                        <h2>10. Support Client</h2>
                        <p>
                            Notre équipe de support est disponible 7j/7 pour répondre à vos questions :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Email :</strong> contact@iptvplusfrance.com</li>
                            <li><strong>WhatsApp :</strong> +1 757 535 7760</li>
                            <li><strong>Chat en direct :</strong> disponible sur le site</li>
                        </ul>

                        <h2>11. Modification des CGU</h2>
                        <p>
                            IPTV Premium se réserve le droit de modifier les présentes CGU à tout moment.
                            Les modifications entrent en vigueur dès leur publication sur le site.
                        </p>

                        <h2>12. Droit Applicable</h2>
                        <p>
                            Les présentes CGU sont soumises au droit français. Tout litige sera de la compétence
                            exclusive des tribunaux français.
                        </p>

                        <p style={{ marginTop: '3rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <em>Dernière mise à jour : Décembre 2024</em>
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}
