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
    const devices = searchParams.get('devices') || '1';
    const price = searchParams.get('price') || '';

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.container}>
                <div className={styles.iconWrapper}>
                    <div className={styles.checkIcon}>✓</div>
                </div>

                <h1 className={styles.title}>Merci pour votre commande !</h1>

                <p className={styles.message}>
                    Votre demande a été enregistrée avec succès.
                </p>

                {email && (
                    <div className={styles.emailInfo}>
                        <span className={styles.emailLabel}>Adresse email enregistrée :</span>
                        <span className={styles.emailValue}>{email}</span>
                    </div>
                )}

                <div className={styles.planCard}>
                    <div className={styles.planTitle}>Votre abonnement</div>
                    <div className={styles.planName}>{plan}</div>
                    {devices && <div style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.25rem' }}>{devices} Appareil{parseInt(devices) > 1 ? 's' : ''}</div>}
                    {price && <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.5rem', color: '#7C3AFA' }}>{price}€</div>}
                </div>

                {/* EMAIL NOTIFICATION SECTION */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(124, 58, 250, 0.15) 0%, rgba(96, 165, 250, 0.15) 100%)',
                    border: '2px solid rgba(124, 58, 250, 0.4)',
                    borderRadius: '16px',
                    padding: '2rem',
                    marginTop: '2rem',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
                    <h3 style={{
                        color: '#ffffff',
                        fontSize: '1.3rem',
                        marginBottom: '1rem'
                    }}>
                        Un lien de paiement a été envoyé à votre boîte email
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        Veuillez vérifier votre boîte de réception à l'adresse <strong style={{ color: '#7C3AFA' }}>{email}</strong>
                    </p>

                    <div style={{
                        background: 'rgba(251, 191, 36, 0.15)',
                        border: '1px solid rgba(251, 191, 36, 0.4)',
                        borderRadius: '12px',
                        padding: '1rem',
                        marginTop: '1rem'
                    }}>
                        <p style={{ color: '#fbbf24', fontSize: '0.95rem', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            ⚠️ <strong>Important :</strong> Pensez à vérifier votre dossier Spam / Indésirables
                        </p>
                    </div>
                </div>

                <div className={styles.nextSteps} style={{ marginTop: '2rem' }}>
                    <h3 className={styles.stepsTitle}>Prochaines étapes</h3>
                    <ul className={styles.stepsList}>
                        <li>📧 Ouvrez l'email que nous venons de vous envoyer</li>
                        <li>💳 Cliquez sur le lien de paiement sécurisé Stripe</li>
                        <li>✅ Après paiement, vos identifiants d'accès vous seront envoyés immédiatement</li>
                    </ul>
                </div>

                <div className={styles.support}>
                    <p style={{ marginBottom: '1rem', fontWeight: '500' }}>Vous n'avez pas reçu l'email ?</p>
                    <a
                        href={`https://wa.me/33749931569?text=${encodeURIComponent("Bonjour, je viens de passer commande mais je n'ai pas reçu l'email avec le lien de paiement.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: '#25D366',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            transition: 'transform 0.2s ease'
                        }}
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '24px', height: '24px' }}>
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Contactez-nous via WhatsApp
                    </a>
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
