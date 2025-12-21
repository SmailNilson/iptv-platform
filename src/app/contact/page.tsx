
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from './contact.module.css';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contactez-Nous - Support IPTV France',
    description: 'Besoin d\'aide ? Contactez notre support technique disponible 7j/7 via WhatsApp ou Email.',
};

export default function ContactPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.header}>
                <h1 className={styles.title}>Contactez-Nous</h1>
                <p className={styles.subtitle}>
                    Une question sur nos abonnements ? Un problème technique ?<br />
                    Notre équipe d'experts vous répond en quelques minutes.
                </p>
            </section>

            <div className={styles.grid}>
                {/* WhatsApp Block */}
                <div className={styles.card}>
                    <div className={styles.cardIcon}>
                        <MessageCircle size={32} />
                    </div>
                    <h2 className={styles.cardTitle}>WhatsApp</h2>
                    <p className={styles.cardText}>
                        Pour une réponse instantanée. Idéal pour l'aide à l'installation et le support technique.
                    </p>
                    <div className={styles.button}>
                        <Button
                            variant="primary"
                            href="https://wa.me/123456789"
                            className="w-full flex justify-center items-center gap-2"
                        >
                            Discuter maintenant
                        </Button>
                    </div>
                </div>

                {/* Email Block */}
                <div className={styles.card}>
                    <div className={`${styles.cardIcon} ${styles.email}`}>
                        <Mail size={32} />
                    </div>
                    <h2 className={styles.cardTitle}>Email</h2>
                    <p className={styles.cardText}>
                        Pour les demandes commerciales ou si vous n'avez pas WhatsApp. Réponse sous 24h.
                    </p>
                    <div className={styles.button}>
                        <Button
                            variant="outline"
                            href="mailto:support@iptv-premium.fr"
                            className="w-full flex justify-center items-center gap-2"
                        >
                            Envoyer un email
                        </Button>
                    </div>
                </div>
            </div>

            <div className={styles.faqLink}>
                <h3>Avant de nous contacter...</h3>
                <p>La plupart des réponses se trouvent déjà dans notre Centre d'Aide.</p>
                <Link href="/smart-iptv/smart-iptv-activation" style={{ color: 'var(--accent-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                    Voir le guide d'activation Smart IPTV <ArrowRight size={16} />
                </Link>
            </div>
        </main>
    );
}
