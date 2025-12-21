import Link from 'next/link';
import styles from './admin.module.css';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.adminLayout}>
            <aside className={styles.sidebar}>
                <div className={styles.logo}>IPTV Admin</div>
                <nav className={styles.nav}>
                    <Link href="/admin" className={styles.navLink}>Dashboard</Link>
                    <Link href="/admin/users" className={styles.navLink}>Users</Link>
                    <Link href="/admin/subscriptions" className={styles.navLink}>Subscriptions</Link>
                    <Link href="/" className={styles.navLink} style={{ marginTop: 'auto' }}>Exit to Site</Link>
                </nav>
            </aside>
            <main className={styles.content}>
                {children}
            </main>
        </div>
    );
}
