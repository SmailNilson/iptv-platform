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

    const plans = [
        {
            name: "1 Mois",
            period: "Tout ce qui est inclus dans le Premium. Plus :",
            features: ["+ 20k Chaînes TV Direct", "+ 120k Séries et Films", "Mises à jour Régulières", "SD / HD / FHD / 4K"],
            highlight: false
        },
        {
            name: "3 Mois",
            period: "Tout ce qui est inclus dans le Premium. Plus :",
            features: ["+ 20k Chaînes TV Direct", "+ 120k Séries et Films", "Mises à jour Régulières", "SD / HD / FHD / 4K"],
            highlight: false
        },
        {
            name: "12 Mois",
            period: "Tout ce qui est inclus dans le Premium. Plus :",
            features: ["+ 20k Chaînes TV Direct", "+ 120k Séries et Films", "Support Prioritaire", "2 Écrans Simultanés"],
            highlight: true
        },
        {
            name: "6 Mois",
            period: "Tout ce qui est inclus dans le Premium. Plus :",
            features: ["+ 20k Chaînes TV Direct", "+ 120k Séries et Films", "Mises à jour Régulières", "SD / HD / FHD / 4K"],
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
                    <div key={plan.name} className={styles.planCard} style={{
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '20px',
                        padding: '2rem 1.5rem',
                        backdropFilter: 'blur(10px)'
                    }}>
                        {plan.highlight && <div className={styles.bestValue}>Le plus populaire</div>}
                        <h2 className={styles.planName} style={{ color: 'white', textTransform: 'uppercase', fontSize: '1.5rem' }}>{plan.name}</h2>
                        <div className={styles.price} style={{ color: 'white', display: 'flex', gap: '5px', fontSize: '2.5rem' }}>
                            {getPrice(plan.name)} <span style={{ fontSize: '1.2rem', color: '#b3b3b3', marginTop: '10px' }}>€</span>
                        </div>
                        <div className={styles.period} style={{ color: 'var(--accent-2)' }}>{plan.period}</div>

                        <ul className={styles.planFeatures}>
                            {plan.features.map((f, i) => (
                                <li key={i}><span className={styles.check}>✓</span> {f}</li>
                            ))}
                        </ul>

                        <Link href={`/checkout?plan=${encodeURIComponent(plan.name)}&devices=${devices}`} style={{ width: '100%' }}>
                            <div style={{
                                background: 'var(--cta-gradient)',
                                color: 'white',
                                padding: '0.8rem',
                                borderRadius: '50px',
                                textAlign: 'center',
                                fontWeight: '600',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}>
                                Choisir ce plan
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};
