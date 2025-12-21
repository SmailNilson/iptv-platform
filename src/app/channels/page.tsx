import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import styles from "./channels.module.css";
import Link from "next/link";

export default function Channels() {
    const categories = [
        {
            title: "Sports",
            icon: "⚽",
            count: "+500 Chaînes",
            list: "Ligue 1, Premier League, La Liga, NBA, NFL, UFC, F1, Canal+, Bein Sports..."
        },
        {
            title: "Films & Séries",
            icon: "🎬",
            count: "+60 000 VOD",
            list: "Netflix, Disney+, Amazon Prime, Dernières Sorties Cinéma, 4K HDR..."
        },
        {
            title: "Actualités",
            icon: "🌍",
            count: "+200 Chaînes",
            list: "BFM TV, CNEWS, LCI, France 24, CNN, BBC, Al Jazeera..."
        },
        {
            title: "Enfants",
            icon: "🧸",
            count: "+150 Chaînes",
            list: "Disney Channel, Cartoon Network, Piwi+, Boomerang, Nickelodeon..."
        },
        {
            title: "Documentaires",
            icon: "🦁",
            count: "+100 Chaînes",
            list: "National Geographic, Discovery Channel, Histoire, Ushuaïa TV..."
        },
        {
            title: "International",
            icon: "🌎",
            count: "+5 000 Chaînes",
            list: "USA, UK, Espagne, Italie, Allemagne, Pays-Bas, Maghreb, Portugal..."
        }
    ];

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.header}>
                <h1 className={styles.title}>Notre Bouquet TV</h1>
                <p className={styles.subtitle}>
                    Explorez notre immense bibliothèque de chaînes live et contenus à la demande.
                    Il y en a pour tous les goûts.
                </p>
            </div>

            <div className={styles.grid}>
                {categories.map((cat, idx) => (
                    <div key={idx} className={styles.categoryCard}>
                        <div className={styles.icon}>{cat.icon}</div>
                        <h3 className={styles.catTitle}>{cat.title}</h3>
                        <div className={styles.count}>{cat.count}</div>
                        <p className={styles.list}>{cat.list}</p>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Prêt à commencer ?</h2>
                <Button variant="primary" className="px-8 text-lg" href="/trial">Essai Gratuit</Button>
            </div>
        </main>
    );
}
