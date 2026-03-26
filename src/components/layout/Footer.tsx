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
                        Service de streaming premium compatible avec tous vos appareils.
                        Support client réactif 7j/7.
                    </p>
                </div>

                {/* Navigation - Only indexable pages */}
                <div className={styles.column}>
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link href="/blog">Blog & Tutoriels</Link></li>
                        <li><Link href="/compatibilite">Compatibilité</Link></li>
                        <li><Link href="/channels">Liste des Chaînes</Link></li>
                        <li><Link href="/faq">FAQ / Aide</Link></li>
                    </ul>
                </div>

                {/* Support - Only indexable pages */}
                <div className={styles.column}>
                    <h3>Support Client</h3>
                    <ul>
                        <li><Link href="/blog/installer-iptv-smart-tv">Guide d'installation</Link></li>
                        <li><Link href="/blog/smartone-iptv">Guide SmartOne</Link></li>
                        <li><Link href="/blog/smart-iptv-activation">Activer Smart IPTV</Link></li>
                        <li><Link href="/contact">Nous Contacter</Link></li>
                    </ul>
                </div>

                {/* Legal - Indexable pages */}
                <div className={styles.column}>
                    <h3>Informations</h3>
                    <ul>
                        <li><Link href="/about">À propos de nous</Link></li>
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
            </div>
        </footer>
    );
};
