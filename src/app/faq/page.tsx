'use client';

import React, { useState } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import styles from "./faq.module.css";
import Link from 'next/link';

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.qHeader}>
                {question}
                <span>{isOpen ? '−' : '+'}</span>
            </div>
            {isOpen && <div className={styles.answer}>{answer}</div>}
        </div>
    );
};

export default function FAQ() {
    const faqs = [
        {
            q: "Quand vais-je recevoir mes codes ?",
            a: "Instantanément. Notre système est automatisé. Une fois votre paiement validé, vous recevez vos identifiants par email en 1 à 5 minutes."
        },
        {
            q: "Puis-je l'utiliser sur plusieurs appareils ?",
            a: "Oui. Lors de votre commande, vous pouvez sélectionner le nombre d'écrans simultanés souhaité (de 1 à 5 appareils)."
        },
        {
            q: "Ai-je besoin d'un VPN ?",
            a: "Non, notre service est sécurisé et ne nécessite pas de VPN. Cependant, si votre FAI bloque l'IPTV, un VPN peut être utile."
        },
        {
            q: "Quelle est la vitesse Internet requise ?",
            a: "Pour la qualité SD/HD, 8 Mbps suffisent. Pour la FHD/4K, nous recommandons une connexion stable d'au moins 20 Mbps (Fibre recommandée)."
        },
        {
            q: "Proposez-vous un remboursement ?",
            a: "Nous offrons une garantie de satisfaction de 7 jours. Si vous rencontrez des problèmes techniques que nous ne pouvons résoudre, nous vous remboursons."
        }
    ];

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.container}>
                <h1 className={styles.title}>Questions Fréquentes</h1>

                <div className={styles.faqList}>
                    {faqs.map((item, i) => (
                        <div key={i} className={styles.faqItem}>
                            <h3 className={styles.question}>{item.q}</h3>
                            <p className={styles.answer}>{item.a}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.contact}>
                    <p>Vous ne trouvez pas votre réponse ?</p>
                    <Button variant="outline" href="/contact">Contactez-nous</Button>
                </div>
            </div>
        </main>
    );
}
