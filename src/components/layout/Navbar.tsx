"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

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

            {/* Desktop Links */}
            <div className={styles.links}>
                <Link href="/" className={styles.navLink}>Accueil</Link>
                <Link href="/#plans" className={styles.navLink}>Abonnements</Link>
                <Link href="/#channels" className={styles.navLink}>Chaînes</Link>
                <Link href="/blog" className={styles.navLink}>Blog</Link>
                <Link href="/contacts" className={styles.navLink}>Contact</Link>
                <Link href="/faq" className={styles.navLink}>FAQ / Aide</Link>
            </div>

            <div className={styles.actions}>
                <Button variant="primary" href="/trial">Essai Gratuit</Button>

                {/* Hamburger Button */}
                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <div />
                    <div />
                    <div />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <Link href="/" className={styles.navLink} onClick={closeMenu}>Accueil</Link>
                <Link href="/#plans" className={styles.navLink} onClick={closeMenu}>Abonnements</Link>
                <Link href="/#channels" className={styles.navLink} onClick={closeMenu}>Chaînes</Link>
                <Link href="/blog" className={styles.navLink} onClick={closeMenu}>Blog</Link>
                <Link href="/contacts" className={styles.navLink} onClick={closeMenu}>Contact</Link>
                <Link href="/faq" className={styles.navLink} onClick={closeMenu}>FAQ / Aide</Link>
                <div style={{ marginTop: '1rem' }} onClick={closeMenu}>
                    <Button variant="primary" href="/trial">Essai Gratuit</Button>
                </div>
            </div>
        </nav>
    );
};
