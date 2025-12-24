"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import styles from "./checkout.module.css";
import Link from 'next/link';

// Stripe Payment Links
const stripeLinks: { [key: string]: string } = {
    // 1 Appareil
    "1 Mois_1": "https://buy.stripe.com/eVq00ifB9crI2negPT5Rm02",
    "3 Mois_1": "https://buy.stripe.com/fZu28qbkT9fw5zq6bf5Rm01",
    "6 Mois_1": "https://buy.stripe.com/bJe3cu9cL8bs8LCgPT5Rm03",
    "12 Mois_1": "https://buy.stripe.com/dRmdR8bkT4Zgd1S8jn5Rm04",
    // 2 Appareils
    "1 Mois_2": "",
    "3 Mois_2": "",
    "6 Mois_2": "",
    "12 Mois_2": "",
    // 3 Appareils
    "1 Mois_3": "",
    "3 Mois_3": "",
    "6 Mois_3": "",
    "12 Mois_3": "",
};

// Base prices for 1 device
const basePrices: { [key: string]: number } = {
    "1 Mois": 8.99,
    "3 Mois": 24.99,
    "6 Mois": 39.99,
    "12 Mois": 49.99
};

function CheckoutContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isReady, setIsReady] = useState(false);
    const [plan, setPlan] = useState('12 Mois');
    const [devices, setDevices] = useState(1);
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Hydration-safe params reading
    useEffect(() => {
        const planParam = searchParams.get('plan');
        const devicesParam = searchParams.get('devices');

        if (planParam) setPlan(planParam);
        if (devicesParam) setDevices(parseInt(devicesParam) || 1);

        setIsReady(true);
    }, [searchParams]);

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

        // Get the payment link
        const stripeKey = `${plan}_${devices}`;
        const stripeLink = stripeLinks[stripeKey];
        const checkoutUrl = stripeLink ? `${stripeLink}?prefilled_email=${encodeURIComponent(email)}` : '';

        try {
            // Send emails via our API (Zoho SMTP)
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customerEmail: email,
                    plan: plan,
                    devices: devices,
                    price: getPrice(),
                    note: note,
                    paymentLink: checkoutUrl || 'Lien non disponible'
                })
            });

            const result = await response.json();
            console.log('Email API response:', result);

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

                // Redirect to thank-you page
                router.push(`/thank-you?email=${encodeURIComponent(email)}&plan=${encodeURIComponent(plan)}&devices=${devices}&price=${getPrice()}&paymentLink=${encodeURIComponent(checkoutUrl)}`);
            } else {
                throw new Error(result.message || 'Erreur lors de l\'envoi');
            }

        } catch (err) {
            console.error('Error sending emails:', err);
            setError('Une erreur est survenue lors de l\'envoi des emails. Veuillez réessayer ou nous contacter via WhatsApp.');
            setIsLoading(false);
        }
    };

    // Show skeleton while hydrating
    if (!isReady) {
        return (
            <main className={styles.main}>
                <Navbar />
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Finaliser la Commande</h1>
                        <p className={styles.subtitle}>Chargement de votre commande...</p>
                    </div>
                    <div className={styles.card} style={{ opacity: 0.5 }}>
                        <div className={styles.planSummary}>
                            <div className={styles.planName} style={{ background: '#333', height: '24px', borderRadius: '4px' }}></div>
                            <div className={styles.planDetails} style={{ background: '#333', height: '16px', borderRadius: '4px', marginTop: '8px' }}></div>
                            <div className={styles.price} style={{ background: '#333', height: '32px', borderRadius: '4px', marginTop: '8px' }}></div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Finaliser la Commande</h1>
                    <p className={styles.subtitle}>Entrez votre email pour recevoir votre lien de paiement</p>
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
                            {isLoading ? 'Envoi en cours...' : 'Recevoir mon lien de paiement'}
                        </button>
                    </form>

                    <div className={styles.securityNote}>
                        📧 Vous recevrez votre lien de paiement par email
                    </div>
                </div>

                <div className={styles.backLink}>
                    <Link href="/#plans">← Retour aux offres</Link>
                </div>
            </div>
        </main>
    );
}

// Loading skeleton for Suspense
function CheckoutSkeleton() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Finaliser la Commande</h1>
                    <p className={styles.subtitle}>Préparation de votre commande...</p>
                </div>
                <div className={styles.card} style={{ opacity: 0.6 }}>
                    <div className={styles.planSummary}>
                        <div style={{ background: 'rgba(124, 58, 237, 0.3)', height: '28px', borderRadius: '6px', width: '120px' }}></div>
                        <div style={{ background: 'rgba(255,255,255,0.1)', height: '18px', borderRadius: '4px', width: '80px', marginTop: '8px' }}></div>
                        <div style={{ background: 'rgba(124, 58, 237, 0.3)', height: '40px', borderRadius: '6px', width: '100px', marginTop: '12px' }}></div>
                    </div>
                    <div style={{ marginTop: '2rem' }}>
                        <div style={{ background: 'rgba(255,255,255,0.1)', height: '48px', borderRadius: '8px', marginBottom: '1rem' }}></div>
                        <div style={{ background: 'rgba(255,255,255,0.1)', height: '80px', borderRadius: '8px', marginBottom: '1rem' }}></div>
                        <div style={{ background: 'rgba(124, 58, 237, 0.5)', height: '52px', borderRadius: '8px' }}></div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default function Checkout() {
    return (
        <Suspense fallback={<CheckoutSkeleton />}>
            <CheckoutContent />
        </Suspense>
    );
}
