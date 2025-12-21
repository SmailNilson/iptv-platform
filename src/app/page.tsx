import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import styles from "./home.module.css";
import Link from "next/link";
import { PlansSection } from "@/components/home/PlansSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.videoContainer}>
        <div className={styles.videoOverlay} />
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        >
          <source src="/assets/112024-motionwall-corner-extendttttttttttt.mp4" type="video/mp4" />
        </video>
      </div>
      <Navbar />

      <section className={styles.hero}>
        <h1 className={styles.title}>
          +20 000 Chaînes TV.<br />
          <span className={styles.highlight}>Sans Engagement.</span> Accès Immédiat.
        </h1>
        <p className={styles.subtitle}>
          Le service IPTV N°1 en France & Europe. Regardez vos Sports, Films et Séries favoris en 4K/FHD.
          Compatible avec Smart TV, FireStick, iOS & Android.
        </p>

        <div className={styles.ctaGroup}>
          <Button variant="primary" className="text-lg px-8" href="/trial">Essai Gratuit 24h</Button>
          <Button variant="outline" className="text-lg px-8" href="/plans">Voir les Offres</Button>
        </div>
      </section>

      <section className={styles.features}>
        <Card highlight>
          <h3 className={styles.featureTitle}>⚡ Activation Instantanée</h3>
          <p className={styles.featureText}>
            Recevez vos accès immédiatement après paiement. Pas d'attente.
          </p>
        </Card>

        <Card>
          <h3 className={styles.featureTitle}>📺 Qualité 4K & FHD</h3>
          <p className={styles.featureText}>
            Image cristalline avec technologie Anti-Freeze pour un visionnage sans coupure.
          </p>
        </Card>

        <Card>
          <h3 className={styles.featureTitle}>📱 Multi-Écrans</h3>
          <p className={styles.featureText}>
            Fonctionne sur Smart TV, Amazon FireStick, Box Android, PC et Mobiles.
          </p>
        </Card>
      </section>

      {/* Plans Section */}
      <section id="plans">
        <PlansSection />
      </section>

      {/* Channels Preview */}
      <section id="channels">
        <h2 className={styles.sectionTitle}>Bibliothèque de Contenu</h2>
        <div className={styles.channelsGrid}>
          {[
            { title: "Pack Sport", icon: "⚽", count: "+500 Chaînes", color: "#00CFFF" },
            { title: "Cinéma 4K", icon: "🎬", count: "+10 000 Films", color: "#FF3C57" },
            { title: "Infos Monde", icon: "🌍", count: "+200 Chaînes", color: "#00FFB2" },
            { title: "Zone Enfants", icon: "🧸", count: "+150 Chaînes", color: "#FFD700" },
            { title: "Documentaires", icon: "🦁", count: "+100 Chaînes", color: "#A855F7" },
            { title: "Adulte", icon: "🔒", count: "Optionnel", color: "#F472B6" }
          ].map((cat, i) => (
            <div key={i} className={styles.channelCard} style={{ borderColor: `rgba(${cat.color}, 0.1)` }}>
              <div className={styles.channelIcon} style={{ textShadow: `0 0 20px ${cat.color}` }}>{cat.icon}</div>
              <h3 className={styles.channelTitle}>{cat.title}</h3>
              <div className={styles.channelCount} style={{ color: cat.color }}>{cat.count}</div>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: '4rem' }}>
          <Button variant="secondary" href="/channels">Voir les 20 000+ Chaînes</Button>
        </div>
      </section>

      {/* FAQ Preview */}
      <section id="help" className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Questions Fréquentes</h2>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Quand vais-je recevoir mes codes ?</h3>
          <p className={styles.faqAnswer}>Instantanément. Une fois votre paiement validé, vous recevez vos identifiants par email en 1 à 5 minutes.</p>
        </div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Puis-je l'utiliser sur plusieurs appareils ?</h3>
          <p className={styles.faqAnswer}>Oui, mais le visionnage simultané dépend de votre abonnement (généralement 1 écran par défaut).</p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button variant="outline" href="/faq">Lire toute la FAQ</Button>
        </div>
      </section>
    </main>
  );
}
