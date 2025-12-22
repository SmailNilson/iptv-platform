import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div style={{ marginBottom: '1rem', fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>
                        IPTV <span style={{ color: '#7C3AFA' }}>PREMIUM</span>
                    </div>
                    <p className={styles.brandDesc}>
                        Profitez de +20 000 chaînes TV et +100 000 VOD en qualité 4K/FHD.
                        Compatible avec tous vos appareils. Support client réactif 7j/7.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link href="/">Accueil</Link></li>
                        <li><Link href="/#plans">Nos Offres</Link></li>
                        <li><Link href="/#channels">Liste des Chaînes</Link></li>
                        <li><Link href="/compatibilite">Compatibilité</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Support Client</h3>
                    <ul>
                        <li><Link href="/faq">FAQ / Aide</Link></li>
                        <li><Link href="/blog/installer-iptv-smart-tv">Guide d'installation</Link></li>
                        <li><Link href="/blog/smartone-iptv">Guide SmartOne IPTV</Link></li>
                        <li><Link href="/contact">Nous Contacter</Link></li>
                        <li><a href="https://wa.me/17575357760" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Informations</h3>
                    <ul>
                        <li><Link href="/mentions-legales">Mentions Légales</Link></li>
                        <li><Link href="/politique-de-confidentialite">Politique de Confidentialité</Link></li>
                        <li><Link href="/conditions">Conditions d'Utilisation</Link></li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div>
                    &copy; {currentYear} IPTV Premium. Tous droits réservés.
                </div>
                <div>
                    <span style={{ marginRight: '10px' }}>Paiement Sécurisé :</span>
                    💳 Visa • Mastercard • Crypto
                </div>
            </div>
        </footer>
    );
};
