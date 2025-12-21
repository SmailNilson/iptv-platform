"use client";

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import styles from '../styles/shared.module.css';

export default function PolitiqueConfidentialitePage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem' }}>
                        Politique de Confidentialité
                    </h1>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <h2>1. Introduction</h2>
                        <p>
                            IPTV Premium s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité explique
                            comment nous collectons, utilisons et protégeons vos données personnelles conformément au Règlement Général sur
                            la Protection des Données (RGPD).
                        </p>

                        <h2>2. Données Collectées</h2>
                        <p>Nous pouvons collecter les données suivantes :</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Données d'identification :</strong> adresse email</li>
                            <li><strong>Données de connexion :</strong> adresse IP, type de navigateur, pages visitées</li>
                            <li><strong>Données de transaction :</strong> historique des commandes</li>
                        </ul>

                        <h2>3. Utilisation des Données</h2>
                        <p>Vos données sont utilisées pour :</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Fournir et gérer votre abonnement IPTV</li>
                            <li>Vous envoyer vos identifiants d'accès</li>
                            <li>Répondre à vos demandes de support</li>
                            <li>Améliorer nos services et notre site web</li>
                            <li>Respecter nos obligations légales</li>
                        </ul>

                        <h2>4. Cookies</h2>
                        <p>
                            Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre
                            navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne plus être disponibles.
                        </p>
                        <p>Types de cookies utilisés :</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                            <li><strong>Cookies analytiques :</strong> Google Analytics pour comprendre l'utilisation du site</li>
                        </ul>

                        <h2>5. Partage des Données</h2>
                        <p>
                            Nous ne vendons ni ne louons vos données personnelles à des tiers. Vos données peuvent être partagées uniquement avec :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Nos prestataires de paiement sécurisé</li>
                            <li>Les autorités compétentes si la loi l'exige</li>
                        </ul>

                        <h2>6. Sécurité des Données</h2>
                        <p>
                            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données
                            contre tout accès non autorisé, modification, divulgation ou destruction.
                        </p>

                        <h2>7. Vos Droits</h2>
                        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                            <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                            <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                            <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                            <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                        </ul>
                        <p>
                            Pour exercer ces droits, contactez-nous à : <strong>contact@iptvplusfrance.com</strong>
                        </p>

                        <h2>8. Conservation des Données</h2>
                        <p>
                            Vos données sont conservées pendant la durée de votre abonnement et jusqu'à 3 ans après sa résiliation
                            pour respecter nos obligations légales.
                        </p>

                        <h2>9. Modifications</h2>
                        <p>
                            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                            Les modifications seront publiées sur cette page avec une date de mise à jour.
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
