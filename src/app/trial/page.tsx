import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import styles from "./trial.module.css";

export default function Trial() {
    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Démarrez Votre Essai Gratuit</h1>
                    <p className={styles.subtitle}>Testez notre service premium pendant 24h. Sans carte bancaire.</p>
                </div>

                <form className={styles.form}>
                    <Input label="Adresse Email" type="email" placeholder="votre@email.com" />

                    <div style={{ marginTop: '1rem' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)'
                        }}>
                            Note (optionnel)
                        </label>
                        <textarea
                            placeholder="Ex: Pays, appareil (Smart TV, Box Android, etc.)"
                            rows={3}
                            style={{
                                width: '100%',
                                padding: '0.875rem 1rem',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '12px',
                                color: 'white',
                                fontSize: '1rem',
                                resize: 'vertical',
                                outline: 'none',
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>

                    <Button variant="primary" fullWidth className="mt-4">
                        Demander mon Accès
                    </Button>

                    <p className={styles.disclaimer}>
                        Vos codes d'accès seront envoyés par email instantanément.
                    </p>
                </form>

                {/* Note + WhatsApp */}
                <div style={{
                    marginTop: '2rem',
                    padding: '1.5rem',
                    background: 'rgba(124, 58, 237, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(124, 58, 237, 0.3)',
                    textAlign: 'center'
                }}>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                        💡 <strong>Besoin d'aide ?</strong> Notre équipe est disponible 7j/7 pour vous accompagner.
                    </p>
                    <a
                        href="https://wa.me/17575357760?text=Bonjour%2C%20je%20souhaite%20obtenir%20un%20essai%20gratuit%20IPTV."
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
                            fontWeight: '600',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ fontSize: '1.2rem' }}>📱</span> Contacter via WhatsApp
                    </a>
                </div>
            </div>
        </main>
    );
}
