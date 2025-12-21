'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
    // Mock hook usage if needed, or simple link check
    // const pathname = usePathname(); 

    return (
        <aside className={styles.sidebar}>
            <Link href="/" className={styles.logo}>
                IPTV<span>Pro</span>
            </Link>

            <nav className={styles.nav}>
                <Link href="/dashboard" className={`${styles.navItem} ${styles.active}`}>
                    Overview
                </Link>
                <Link href="/dashboard/subscription" className={styles.navItem}>
                    My Subscription
                </Link>
                <Link href="/dashboard/playlist" className={styles.navItem}>
                    Download Playlist
                </Link>
                <Link href="/dashboard/support" className={styles.navItem}>
                    Support
                </Link>
            </nav>

            <div className={styles.logout}>
                Log Out
            </div>
        </aside>
    );
};
