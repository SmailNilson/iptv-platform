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

            {/* Desktop Links - Only indexable pages */}
            <div className={styles.links}>
                <Link href="/blog" className={styles.navLink}>Blog</Link>
                <Link href="/compatibilite" className={styles.navLink}>Compatibilité</Link>
                <Link href="/faq" className={styles.navLink}>FAQ</Link>
                <Link href="/contact" className={styles.navLink}>Contact</Link>
            </div>

            <div className={styles.actions}>
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

            {/* Mobile Menu Overlay - Only indexable pages */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <Link href="/blog" className={styles.navLink} onClick={closeMenu}>Blog</Link>
                <Link href="/compatibilite" className={styles.navLink} onClick={closeMenu}>Compatibilité</Link>
                <Link href="/faq" className={styles.navLink} onClick={closeMenu}>FAQ</Link>
                <Link href="/contact" className={styles.navLink} onClick={closeMenu}>Contact</Link>
            </div>
        </nav>
    );
};
