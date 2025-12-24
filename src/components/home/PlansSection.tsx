"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import styles from "@/app/home.module.css";
import Link from "next/link";

export const PlansSection = () => {
    const [devices, setDevices] = useState(1);

    // Base prices for 1 device
    const basePrices = {
        "1 Mois": 8.99,
        "3 Mois": 24.99,
        "6 Mois": 39.99,
        "12 Mois": 49.99
    };

    const getPrice = (plan: string) => {
        const base = basePrices[plan as keyof typeof basePrices];
        const multiplier = 1 + ((devices - 1) * 0.8);
        const finalPrice = (base * multiplier).toFixed(2);
        return parseFloat(finalPrice) < 10 ? `0${finalPrice}` : finalPrice;
    };

    const commonFeatures = [
        "📡 +20 000 Chaînes (Monde)",
        "🎬 +100 000 VOD (Films/Séries)",
        "🏆 Sports (PPV, Ligue 1, NBA, F1)",
        "🎮 Multi-Appareils (TV/PC/Mobile)",
        "⚡ 4K/FHD (Anti-Lag)",
        "⏪ Replay 7 Jours",
        "📅 Guide EPG",
        "🛡️ Support 24/7",
        "💰 Satisfait ou Remboursé 7j",
        "🔞 Option Adulte"
    ];

    const plans = [
        {
            name: "1 Mois",
            period: "Sans engagement",
            features: commonFeatures,
            highlight: false
        },
        {
            name: "12 Mois",
            period: "Meilleure Offre",
            features: commonFeatures,
            highlight: true
        },
        {
            name: "6 Mois",
            period: "Populaire",
            features: commonFeatures,
            highlight: false
        },
        {
            name: "3 Mois",
            period: "Économique",
            features: commonFeatures,
            highlight: false
        }
    ];

    return (
        <>
            <h2 className={styles.sectionTitle}>Nos Offres Premium</h2>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                {[1, 2, 3, 4, 5].map((num) => (
                    <button
                        key={num}
                        onClick={() => setDevices(num)}
                        style={{
                            background: 'transparent',
                            border: '1px solid var(--accent-1)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: devices === num ? '0 0 20px rgba(124, 58, 237, 0.4)' : 'none',
                            backgroundColor: devices === num ? 'var(--accent-1)' : 'transparent'
                        }}
                    >
                        {num} APPAREIL{num > 1 ? 'S' : ''}
                    </button>
                ))}
            </div>

            <div className={styles.plansGrid}>
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={styles.planCard}
                        style={{
                            backgroundColor: plan.highlight ? 'rgba(124, 58, 237, 0.15)' : 'var(--bg-secondary)',
                            border: plan.highlight ? '2px solid var(--accent-1)' : '1px solid var(--glass-border)',
                            borderRadius: '20px',
                            padding: plan.highlight ? '2.5rem 1.75rem' : '2rem 1.5rem',
                            backdropFilter: 'blur(10px)',
                            transform: plan.highlight ? 'scale(1.05)' : 'scale(1)',
                            boxShadow: plan.highlight ? '0 0 40px rgba(124, 58, 237, 0.3), 0 0 80px rgba(124, 58, 237, 0.15)' : 'none',
                            position: 'relative' as const,
                            zIndex: plan.highlight ? 10 : 1,
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {plan.highlight && (
                            <div style={{
                                position: 'absolute',
                                top: '-14px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                                color: 'white',
                                padding: '0.5rem 1.5rem',
                                borderRadius: '50px',
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
                                whiteSpace: 'nowrap',
                                animation: 'pulse 2s infinite'
                            }}>
                                🔥 Meilleur Choix
                            </div>
                        )}
                        <h2 className={styles.planName} style={{
                            color: 'white',
                            textTransform: 'uppercase',
                            fontSize: plan.highlight ? '1.75rem' : '1.5rem',
                            marginTop: plan.highlight ? '0.5rem' : '0'
                        }}>
                            {plan.name}
                        </h2>
                        <div className={styles.price} style={{
                            color: 'white',
                            display: 'flex',
                            gap: '5px',
                            fontSize: plan.highlight ? '3rem' : '2.5rem',
                            fontWeight: plan.highlight ? '800' : '700'
                        }}>
                            {getPrice(plan.name)} <span style={{ fontSize: '1.2rem', color: '#b3b3b3', marginTop: '10px' }}>€</span>
                        </div>
                        <div className={styles.period} style={{
                            color: plan.highlight ? '#22c55e' : 'var(--accent-2)',
                            fontWeight: plan.highlight ? '600' : '500',
                            fontSize: plan.highlight ? '0.9rem' : '1.1rem'
                        }}>
                            {plan.highlight ? '💰 Meilleure Offre' : plan.period}
                        </div>

                        <ul className={styles.planFeatures}>
                            {plan.features.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>

                        <Link href={`/checkout?plan=${encodeURIComponent(plan.name)}&devices=${devices}`} style={{ width: '100%' }}>
                            <div style={{
                                background: plan.highlight
                                    ? 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'
                                    : 'var(--cta-gradient)',
                                color: 'white',
                                padding: '0.8rem',
                                borderRadius: '50px',
                                textAlign: 'center',
                                fontWeight: '600',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                boxShadow: plan.highlight ? '0 4px 20px rgba(245, 158, 11, 0.4)' : 'none',
                                transition: 'all 0.3s ease'
                            }}>
                                {plan.highlight ? '🚀 Commander Maintenant' : 'Finaliser la Commande'}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};
