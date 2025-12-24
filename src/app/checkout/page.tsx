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
                            {isLoading ? 'Envoi en cours...' : '📧 Recevoir par Email'}
                        </button>
                    </form>

                    {/* Divider */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        margin: '1.5rem 0',
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.85rem'
                    }}>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                        <span>ou</span>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                    </div>

                    {/* WhatsApp Option */}
                    <a
                        href={`https://wa.me/17575357760?text=${encodeURIComponent(`Bonjour, je souhaite commander :\n\n📦 Offre: ${plan}\n📱 Appareils: ${devices}\n💰 Prix: ${getPrice()}€\n\nMerci de me confirmer la commande.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            width: '100%',
                            padding: '1rem',
                            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                            border: 'none',
                            borderRadius: '12px',
                            color: 'white',
                            fontWeight: '600',
                            fontSize: '1rem',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '24px', height: '24px' }}>
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Commander via WhatsApp
                    </a>

                    <div style={{
                        marginTop: '1rem',
                        padding: '0.75rem',
                        background: 'rgba(37, 211, 102, 0.1)',
                        border: '1px solid rgba(37, 211, 102, 0.2)',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        color: 'rgba(255,255,255,0.7)',
                        textAlign: 'center'
                    }}>
                        💬 Réponse en moins de 5 minutes !
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
