"use client";

import { useState } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import styles from "./plans.module.css";
import Link from 'next/link';

export default function Plans() {
    const [devices, setDevices] = useState(1);

    // Base prices for 1 device
    const basePrices = {
        "1 Mois": 8.99,
        "3 Mois": 24.99,
        "6 Mois": 39.99,
        "12 Mois": 49.99
    };

    const getPrice = (plan: string) => {
        // Simple multiplier logic for demo purposes
        const base = basePrices[plan as keyof typeof basePrices];
        const multiplier = 1 + ((devices - 1) * 0.8); // 80% cost for each additional device
        const finalPrice = (base * multiplier).toFixed(2);

        // Add leading zero if less than 10
        return parseFloat(finalPrice) < 10 ? `0${finalPrice}` : finalPrice;
    };

    const commonFeatures = [
        "📡 +20 000 Chaînes Live (Monde)",
        "🎬 +100 000 VOD (Films & Séries)",
        "🏆 Sports (PPV, Ligue 1, NBA, F1, UFC)",
        "🎮 Multi-Support (Smart TV, Box, PC, Mobile)",
        "⚡ Qualité 4K / FHD / HD (Anti-Lag)",
        "⏪ Replay / Catch-Up (7 Jours)",
        "📅 Guide EPG Complet",
        "🛡️ Support 24/7 (WhatsApp / Email)",
        "💰 Satisfait ou Remboursé 7 Jours",
        "🔞 Option Adulte Incluse"
    ];

    const plans = [
        {
            name: "1 Mois",
            period: "Accès complet sans engagement",
            features: commonFeatures,
            highlight: false
        },
        {
            name: "3 Mois",
            period: "Économique • Trimestriel",
            features: commonFeatures,
            highlight: false
        },
        {
            name: "6 Mois",
            period: "Populaire • Semestriel",
            features: commonFeatures,
            highlight: false
        },
        {
            name: "12 Mois",
            period: "Meilleure Offre • Annuel",
            features: commonFeatures,
            highlight: true
        }
    ];

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.header}>
                <h1 className={styles.title}>Nos Offres Premium</h1>
                <p className={styles.subtitle}>Sélectionnez votre abonnement ci-dessous.</p>
            </div>

            <div className={styles.toggleContainer}>
                {[1, 2, 3, 4, 5].map((num) => (
                    <button
                        key={num}
                        className={`${styles.deviceToggle} ${devices === num ? styles.deviceToggleActive : ''}`}
                        onClick={() => setDevices(num)}
                    >
                        {num} APPAREIL{num > 1 ? 'S' : ''}
                    </button>
                ))}
            </div>

            <div className={styles.plansGrid}>
                {plans.map((plan) => (
                    <div key={plan.name} className={styles.planCard}>
                        {plan.highlight && <div className={styles.bestValue}>Le plus populaire</div>}

                        <h2 className={styles.planName}>{plan.name}</h2>
                        <div className={styles.price}>{getPrice(plan.name)} <span>€</span></div>
                        <div className={styles.period}>{plan.period}</div>

                        <ul className={styles.features}>
                            {plan.features.map((feature, idx) => (
                                <li key={idx}>
                                    <span className={styles.check}>✓</span> {feature}
                                </li>
                            ))}
                        </ul>

                        <Link href={`/checkout?plan=${encodeURIComponent(plan.name)}&devices=${devices}`} style={{ width: '100%' }}>
                            <button className={styles.selectButton}>
                                Finaliser la Commande
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}
