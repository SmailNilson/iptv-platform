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

                    <Button variant="primary" fullWidth className="mt-4">
                        Demander mon Accès
                    </Button>

                    <p className={styles.disclaimer}>
                        Vos codes d'accès seront envoyés par email instantanément.
                    </p>
                </form>
            </div>
        </main>
    );
}
