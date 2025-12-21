"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import styles from "./thank-you.module.css";
import Link from 'next/link';

function ThankYouContent() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email') || '';
    const plan = searchParams.get('plan') || '12 Mois';

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.container}>
                <div className={styles.iconWrapper}>
                    <div className={styles.checkIcon}>✓</div>
                </div>

                <h1 className={styles.title}>Merci pour votre commande !</h1>

                <p className={styles.message}>
                    Votre commande a été reçue avec succès. Vous recevrez vos accès IPTV par email dans les prochaines minutes.
                </p>

                {email && (
                    <div className={styles.emailInfo}>
                        <span className={styles.emailLabel}>Email de confirmation envoyé à :</span>
                        <span className={styles.emailValue}>{email}</span>
                    </div>
                )}

                <div className={styles.planCard}>
                    <div className={styles.planTitle}>Votre abonnement</div>
                    <div className={styles.planName}>{plan}</div>
                </div>

                <div className={styles.nextSteps}>
                    <h3 className={styles.stepsTitle}>Prochaines étapes</h3>
                    <ul className={styles.stepsList}>
                        <li>📧 Vérifiez votre boîte email (et les spams)</li>
                        <li>📱 Téléchargez l'application IPTV Smarters</li>
                        <li>🔑 Entrez vos identifiants reçus par email</li>
                        <li>🎬 Profitez de vos chaînes préférées !</li>
                    </ul>
                </div>

                <div className={styles.support}>
                    <p>Besoin d'aide ? Contactez-nous via WhatsApp</p>
                </div>

                <div className={styles.actions}>
                    <Link href="/" className={styles.homeButton}>
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default function ThankYou() {
    return (
        <Suspense fallback={<div>Chargement...</div>}>
            <ThankYouContent />
        </Suspense>
    );
}
