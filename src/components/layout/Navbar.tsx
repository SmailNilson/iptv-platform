
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                <img
                    src="/assets/logo.png?v=1734481768"
                    alt="Logo"
                    width={55}
                    height={55}
                />
            </Link>

            <div className={styles.links}>
                <Link href="/" className={styles.navLink}>Accueil</Link>
                <Link href="/#plans" className={styles.navLink}>Abonnements</Link>
                <Link href="/#channels" className={styles.navLink}>Chaînes</Link>
                <Link href="/blog" className={styles.navLink}>Blog</Link>
                <Link href="/contact" className={styles.navLink}>Contact</Link>
                <Link href="/#help" className={styles.navLink}>Aide</Link>
            </div>

            <div className={styles.actions}>
                <Button variant="primary" href="/trial">Essai Gratuit</Button>
            </div>
        </nav>
    );
};
