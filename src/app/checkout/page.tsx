"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import styles from "./checkout.module.css";
import Link from 'next/link';

// Web3Forms Access Key - REMPLACER PAR VOTRE CLÉ
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

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

declare global {
    interface Window {
        hcaptcha: {
            render: (container: string, options: { sitekey: string; callback: (token: string) => void; theme?: string }) => string;
            reset: (widgetId: string) => void;
        };
    }
}

function CheckoutContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const plan = searchParams.get('plan') || '12 Mois';
    const devices = parseInt(searchParams.get('devices') || '1');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [hcaptchaToken, setHcaptchaToken] = useState('');

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

    // Load hCaptcha script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hcaptcha.com/1/api.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (window.hcaptcha) {
                window.hcaptcha.render('hcaptcha-container', {
                    sitekey: '50b2fe65-b00b-4b9e-ad62-3ba471098be2', // Web3Forms hCaptcha sitekey
                    callback: (token: string) => setHcaptchaToken(token),
                    theme: 'dark'
                });
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!hcaptchaToken) {
            setError('Veuillez valider le captcha');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            // Send via Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `🛒 Nouvelle Commande IPTV - ${plan} (${devices} appareil${devices > 1 ? 's' : ''})`,
                    from_name: "IPTV Plus France",
                    email: email,
                    plan: plan,
                    appareils: devices,
                    prix: `${getPrice()}€`,
                    note: note || "Aucune note",
                    date: new Date().toLocaleString('fr-FR'),
                    "h-captcha-response": hcaptchaToken
                })
            });

            const result = await response.json();

            if (result.success) {
                // Save order to localStorage
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

                // Redirect to Stripe or Thank You page
                const stripeKey = `${plan}_${devices}`;
                const stripeLink = stripeLinks[stripeKey];

                if (stripeLink && !stripeLink.includes('test_')) {
                    const checkoutUrl = `${stripeLink}?prefilled_email=${encodeURIComponent(email)}`;
                    window.location.href = checkoutUrl;
                } else {
                    router.push(`/thank-you?email=${encodeURIComponent(email)}&plan=${encodeURIComponent(plan)}&devices=${devices}&price=${getPrice()}`);
                }
            } else {
                throw new Error(result.message || 'Erreur lors de l\'envoi');
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

                    <form className={styles.form} onSubmit={handleSubmit}>
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

                        {/* hCaptcha Widget */}
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
                            <div id="hcaptcha-container"></div>
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
