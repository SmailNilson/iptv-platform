"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import styles from "./checkout.module.css";
import Link from 'next/link';

function CheckoutContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const plan = searchParams.get('plan') || '12 Mois';
    const devices = parseInt(searchParams.get('devices') || '1');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');

    // Base prices for 1 device
    const basePrices: { [key: string]: number } = {
        "1 Mois": 8.99,
        "3 Mois": 24.99,
        "6 Mois": 39.99,
        "12 Mois": 49.99
    };

    const getPrice = () => {
        const base = basePrices[plan] || 49.99;
        const multiplier = 1 + ((devices - 1) * 0.8);
        const finalPrice = (base * multiplier).toFixed(2);
        return parseFloat(finalPrice) < 10 ? `0${finalPrice}` : finalPrice;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle the order submission (send to backend, payment, etc.)
        // For now, redirect to thank you page
        router.push(`/thank-you?email=${encodeURIComponent(email)}&plan=${encodeURIComponent(plan)}`);
    };

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Finaliser la Commande</h1>
                    <p className={styles.subtitle}>Entrez votre email pour recevoir vos accès</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.planSummary}>
                        <div className={styles.planName}>{plan}</div>
                        <div className={styles.planDetails}>{devices} Appareil{devices > 1 ? 's' : ''}</div>
                        <div className={styles.price}>{getPrice()} <span>€</span></div>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Adresse Email</label>
                            <input
                                type="email"
                                className={styles.input}
                                placeholder="votre@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Note (optionnel)</label>
                            <textarea
                                className={styles.textarea}
                                placeholder="Ajouter une note ou instruction spéciale..."
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                rows={3}
                            />
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Confirmer la Commande
                        </button>
                    </form>

                    <div className={styles.securityNote}>
                        🔒 Paiement sécurisé - Vos données sont protégées
                    </div>
                </div>

                <div className={styles.backLink}>
                    <Link href="/#plans">← Retour aux offres</Link>
                </div>
            </div>
        </main>
    );
}

export default function Checkout() {
    return (
        <Suspense fallback={<div>Chargement...</div>}>
            <CheckoutContent />
        </Suspense>
    );
}
