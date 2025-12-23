"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState, useRef } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import styles from "./checkout.module.css";
import Link from 'next/link';

// Stripe Payment Links - REMPLACER PAR VOS VRAIS LIENS STRIPE
const stripeLinks: { [key: string]: string } = {
    // 1 Appareil
    "1 Mois_1": "https://buy.stripe.com/test_1mois_1ecran",
    "3 Mois_1": "https://buy.stripe.com/test_3mois_1ecran",
    "6 Mois_1": "https://buy.stripe.com/test_6mois_1ecran",
    "12 Mois_1": "https://buy.stripe.com/test_12mois_1ecran",
    // 2 Appareils
    "1 Mois_2": "https://buy.stripe.com/test_1mois_2ecran",
    "3 Mois_2": "https://buy.stripe.com/test_3mois_2ecran",
    "6 Mois_2": "https://buy.stripe.com/test_6mois_2ecran",
    "12 Mois_2": "https://buy.stripe.com/test_12mois_2ecran",
    // 3 Appareils
    "1 Mois_3": "https://buy.stripe.com/test_1mois_3ecran",
    "3 Mois_3": "https://buy.stripe.com/test_3mois_3ecran",
    "6 Mois_3": "https://buy.stripe.com/test_6mois_3ecran",
    "12 Mois_3": "https://buy.stripe.com/test_12mois_3ecran",
};

function CheckoutContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);
    const plan = searchParams.get('plan') || '12 Mois';
    const devices = parseInt(searchParams.get('devices') || '1');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            // 1. Send email via FormSubmit.co
            const formData = new FormData();
            formData.append('email', email);
            formData.append('_subject', `🛒 Nouvelle Commande IPTV - ${plan} (${devices} appareil${devices > 1 ? 's' : ''})`);
            formData.append('Plan', plan);
            formData.append('Appareils', devices.toString());
            formData.append('Prix', `${getPrice()}€`);
            formData.append('Note', note || 'Aucune note');
            formData.append('_template', 'table');
            formData.append('_captcha', 'false');

            await fetch('https://formsubmit.co/ajax/contact@iptvplusfrance.com', {
                method: 'POST',
                body: formData,
            });

            // 2. Save order to localStorage
            const orders = JSON.parse(localStorage.getItem('iptv_orders') || '[]');
            orders.push({
                id: Date.now(),
                email,
                plan,
                devices,
                price: getPrice(),
                note,
                date: new Date().toISOString(),
                status: 'pending_payment'
            });
            localStorage.setItem('iptv_orders', JSON.stringify(orders));

            // 3. Redirect to Stripe or Thank You page
            const stripeKey = `${plan}_${devices}`;
            const stripeLink = stripeLinks[stripeKey];

            if (stripeLink && !stripeLink.includes('test_')) {
                // Real Stripe link - redirect with prefilled email
                const checkoutUrl = `${stripeLink}?prefilled_email=${encodeURIComponent(email)}`;
                window.location.href = checkoutUrl;
            } else {
                // Test mode - redirect to thank you page
                router.push(`/thank-you?email=${encodeURIComponent(email)}&plan=${encodeURIComponent(plan)}&devices=${devices}&price=${getPrice()}`);
            }

        } catch (err) {
            console.error('Error processing order:', err);
            setError('Une erreur est survenue. Veuillez réessayer ou nous contacter via WhatsApp.');
            setIsLoading(false);
        }
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

                    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Adresse Email *</label>
                            <input
                                type="email"
                                name="email"
                                className={styles.input}
                                placeholder="votre@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Note (optionnel)</label>
                            <textarea
                                name="note"
                                className={styles.textarea}
                                placeholder="Ex: Pays, appareil, instructions spéciales..."
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                rows={3}
                                disabled={isLoading}
                            />
                        </div>

                        {error && (
                            <div style={{
                                background: 'rgba(239, 68, 68, 0.1)',
                                border: '1px solid rgba(239, 68, 68, 0.3)',
                                borderRadius: '8px',
                                padding: '1rem',
                                color: '#ef4444',
                                fontSize: '0.9rem'
                            }}>
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isLoading}
                            style={{ opacity: isLoading ? 0.7 : 1 }}
                        >
                            {isLoading ? 'Traitement en cours...' : 'Procéder au Paiement'}
                        </button>
                    </form>

                    <div className={styles.securityNote}>
                        🔒 Paiement sécurisé via Stripe - Vos données sont protégées
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
