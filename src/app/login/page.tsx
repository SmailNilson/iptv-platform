import Link from 'next/link';
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import styles from "./login.module.css";

export default function Login() {
    return (
        <div className={styles.page}>
            <div className={styles.loginCard}>
                <h1 className={styles.title}>Espace Client</h1>

                <form className={styles.form}>
                    <Input label="Email" type="email" placeholder="jean@exemple.com" />
                    <Input label="Mot de passe" type="password" placeholder="••••••••" />

                    <div className={styles.forgot}>Mot de passe oublié ?</div>

                    <Button variant="primary" fullWidth className="mt-2" href="/dashboard">Se Connecter</Button>
                </form>

                <div className={styles.divider}>
                    <span>OU</span>
                </div>

                <Button variant="secondary" fullWidth href="/trial">Demander un Essai Gratuit</Button>
            </div>
        </div>
    );
}
