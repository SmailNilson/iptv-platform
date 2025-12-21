import { Sidebar } from "@/components/layout/Sidebar";
import styles from "./dashboard.module.css";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <main className={styles.content}>
                {children}
            </main>
        </div>
    );
}
