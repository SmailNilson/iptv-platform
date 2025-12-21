"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import styles from "./home.module.css";
import Link from "next/link";
import { PlansSection } from "@/components/home/PlansSection";

// Sports channels list - French channels first
const sportsChannels = [
  // 🇫🇷 French Channels
  { name: "beIN Sports 1", country: "🇫🇷" },
  { name: "beIN Sports 2", country: "🇫🇷" },
  { name: "beIN Sports 3", country: "🇫🇷" },
  { name: "RMC Sport 1", country: "🇫🇷" },
  { name: "RMC Sport 2", country: "🇫🇷" },
  { name: "Canal+ Sport", country: "🇫🇷" },
  { name: "Canal+ Foot", country: "🇫🇷" },
  { name: "Canal+ Sport 360", country: "🇫🇷" },
  { name: "Eurosport 1", country: "🇫🇷" },
  { name: "Eurosport 2", country: "🇫🇷" },
  { name: "L'Équipe", country: "🇫🇷" },
  { name: "Infosport+", country: "🇫🇷" },
  { name: "Sport en France", country: "🇫🇷" },
  { name: "Equidia", country: "🇫🇷" },
  { name: "France 3 Régions Sport", country: "🇫🇷" },
  { name: "France 4 Sport", country: "🇫🇷" },
  { name: "TV5 Monde Sport", country: "🇫🇷" },
  // 🇬🇧 UK Channels
  { name: "Sky Sports Main Event", country: "🇬🇧" },
  { name: "Sky Sports Premier League", country: "🇬🇧" },
  { name: "Sky Sports Football", country: "🇬🇧" },
  { name: "Sky Sports F1", country: "🇬🇧" },
  { name: "TNT Sports 1", country: "🇬🇧" },
  { name: "TNT Sports 2", country: "🇬🇧" },
  { name: "TNT Sports 3", country: "🇬🇧" },
  { name: "TNT Sports 4", country: "🇬🇧" },
  { name: "BT Sport", country: "🇬🇧" },
  { name: "Premier Sports", country: "🇬🇧" },
  { name: "BBC Sport", country: "🇬🇧" },
  { name: "ITV Sport", country: "🇬🇧" },
  { name: "Channel 4 Sport", country: "🇬🇧" },
  { name: "BoxNation", country: "🇬🇧" },
  // 🇺🇸 USA Channels
  { name: "ESPN", country: "🇺🇸" },
  { name: "ESPN 2", country: "🇺🇸" },
  { name: "ESPN News", country: "🇺🇸" },
  { name: "ESPN Deportes", country: "🇺🇸" },
  { name: "Fox Sports 1", country: "🇺🇸" },
  { name: "Fox Sports 2", country: "🇺🇸" },
  { name: "NBC Sports", country: "🇺🇸" },
  { name: "CBS Sports", country: "🇺🇸" },
  { name: "NBA TV", country: "🇺🇸" },
  { name: "NFL Network", country: "🇺🇸" },
  { name: "MLB Network", country: "🇺🇸" },
  { name: "NHL Network", country: "🇺🇸" },
  { name: "Golf Channel", country: "🇺🇸" },
  { name: "Tennis Channel", country: "🇺🇸" },
  // 🌍 Arabic Channels
  { name: "beIN Sports MENA 1", country: "🇸🇦" },
  { name: "beIN Sports MENA 2", country: "🇸🇦" },
  { name: "beIN Sports MENA 3", country: "🇸🇦" },
  { name: "Al Kass Sports 1", country: "🇶🇦" },
  { name: "Al Kass Sports 2", country: "🇶🇦" },
  { name: "Arryadia", country: "🇲🇦" },
  { name: "Dubai Sports 1", country: "🇦🇪" },
  { name: "Abu Dhabi Sports 1", country: "🇦🇪" },
  { name: "Abu Dhabi Sports 2", country: "🇦🇪" },
  { name: "Sharjah Sports", country: "🇦🇪" },
  { name: "KSA Sports 1", country: "🇸🇦" },
  { name: "KSA Sports 2", country: "🇸🇦" },
  { name: "OnTime Sports 1", country: "🇪🇬" },
  { name: "OnTime Sports 2", country: "🇪🇬" },
  { name: "Jordan Sport", country: "🇯🇴" },
  { name: "Kuwait Sports", country: "🇰🇼" },
  // 🇪🇺 European Channels
  { name: "DAZN 1", country: "🇪🇺" },
  { name: "DAZN 2", country: "🇪🇺" },
  { name: "Viaplay Sports", country: "🇸🇪" },
  { name: "Setanta Sports", country: "🇮🇪" },
  { name: "Eleven Sports 1", country: "🇧🇪" },
  { name: "Eleven Sports 2", country: "🇧🇪" },
  { name: "Ziggo Sport", country: "🇳🇱" },
  { name: "RTS Sport", country: "🇨🇭" },
  { name: "RSI Sport", country: "🇨🇭" },
  { name: "SRF Sport", country: "🇨🇭" },
  { name: "ORF Sport+", country: "🇦🇹" },
  { name: "Rai Sport", country: "🇮🇹" },
  { name: "Sky Sport Italia", country: "🇮🇹" },
  { name: "Movistar Deportes", country: "🇪🇸" },
  { name: "Gol TV", country: "🇪🇸" },
  { name: "Sport TV 1", country: "🇵🇹" },
  { name: "Sport TV 2", country: "🇵🇹" },
  { name: "Canal 11", country: "🇵🇹" },
  { name: "Polsat Sport", country: "🇵🇱" },
  { name: "Nova Sport", country: "🇨🇿" },
  { name: "Sport Klub", country: "🇷🇸" },
  { name: "Digi Sport 1", country: "🇷🇴" },
  { name: "Arena Sport 1", country: "🇭🇷" },
  { name: "Match TV", country: "🇷🇺" },
  // 🌎 Latin America
  { name: "TUDN", country: "🇲🇽" },
  { name: "Fox Deportes", country: "🇲🇽" },
  { name: "Claro Sports", country: "🇲🇽" },
  { name: "TyC Sports", country: "🇦🇷" },
  { name: "Win Sports", country: "🇨🇴" },
  { name: "ESPN Brasil", country: "🇧🇷" },
  { name: "SporTV", country: "🇧🇷" },
  { name: "BandSports", country: "🇧🇷" },
  // 🌏 Asia & Others
  { name: "SuperSport", country: "🇿🇦" },
  { name: "Star Sports 1", country: "🇮🇳" },
  { name: "Sony Sports", country: "🇮🇳" },
  { name: "CCTV Sports", country: "🇨🇳" },
  { name: "J Sports 1", country: "🇯🇵" },
  { name: "SPOTV", country: "🇰🇷" },
  { name: "True Sports", country: "🇹🇭" },
  // ⚡ Specialty
  { name: "Red Bull TV", country: "🌍" },
  { name: "UFC Fight Pass", country: "🌍" },
  { name: "F1 TV", country: "🌍" },
  { name: "MotoGP", country: "🌍" },
  { name: "Extreme Sports", country: "🌍" },
  { name: "MotorTrend", country: "🌍" },
  { name: "Fight Network", country: "🌍" },
];

export default function Home() {
  const [showSportsModal, setShowSportsModal] = useState(false);

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
          <span className={styles.highlight}>Streaming premium.</span> Accès Immédiat.
        </h1>
        <p className={styles.subtitle}>
          Le service IPTV N°1 en France &amp; Europe. Regardez vos Sports, Films et Séries favoris en 4K/FHD.
        </p>
        <div className={styles.ctaGroup}>
          <Button variant="primary" href="/#plans">Voir les Offres</Button>
          <Button variant="secondary" href="/trial">Essai Gratuit 24h</Button>
        </div>
      </section>

      <section className={styles.features}>
        <Card className={styles.featureCard}>
          <span className={styles.featureIcon}>📺</span>
          <h3>+20 000 Chaînes</h3>
          <p>Tous les pays, toutes les langues.</p>
        </Card>
        <Card className={styles.featureCard}>
          <span className={styles.featureIcon}>🎬</span>
          <h3>VOD Illimitée</h3>
          <p>+100 000 films et séries.</p>
        </Card>
        <Card className={styles.featureCard}>
          <span className={styles.featureIcon}>⚡</span>
          <h3>Qualité 4K/FHD</h3>
          <p>Serveurs rapides et stables.</p>
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
            { title: "Pack Sport", icon: "⚽", count: "+500 Chaînes", color: "#00CFFF", onClick: () => setShowSportsModal(true) },
            { title: "Cinéma 4K", icon: "🎬", count: "+10 000 Films", color: "#FF3C57" },
            { title: "Infos Monde", icon: "🌍", count: "+200 Chaînes", color: "#00FFB2" },
            { title: "Zone Enfants", icon: "🧸", count: "+150 Chaînes", color: "#FFD700" },
            { title: "Documentaires", icon: "🦁", count: "+100 Chaînes", color: "#A855F7" },
            { title: "Adulte", icon: "🔒", count: "Optionnel", color: "#F472B6" }
          ].map((cat, i) => (
            <div
              key={i}
              className={styles.channelCard}
              style={{ borderColor: `rgba(${cat.color}, 0.1)`, cursor: cat.onClick ? 'pointer' : 'default' }}
              onClick={cat.onClick}
            >
              <div className={styles.channelIcon} style={{ textShadow: `0 0 20px ${cat.color}` }}>{cat.icon}</div>
              <h3 className={styles.channelTitle}>{cat.title}</h3>
              <div className={styles.channelCount} style={{ color: cat.color }}>{cat.count}</div>
              {cat.onClick && <span style={{ fontSize: '0.8rem', color: 'var(--accent-2)', marginTop: '0.5rem' }}>Cliquez pour voir la liste</span>}
            </div>
          ))}
        </div>
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <Button variant="secondary" href="/#channels">Voir les 20 000+ Chaînes</Button>
        </div>
      </section>

      {/* FAQ Preview */}
      <section id="faq" className={styles.faqSection}>
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

      {/* Sports Channels Modal - Enhanced */}
      {showSportsModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setShowSportsModal(false)}
        >
          <div
            style={{
              background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%)',
              borderRadius: '1.5rem',
              maxWidth: '1000px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'hidden',
              border: '1px solid rgba(0, 207, 255, 0.2)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 207, 255, 0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{
              padding: '2rem 2.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'linear-gradient(135deg, rgba(0, 207, 255, 0.15) 0%, rgba(124, 58, 237, 0.1) 100%)'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>⚽</span>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: '700', background: 'linear-gradient(135deg, #00CFFF, #7C3AFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Pack Sport Premium
                  </h2>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}>
                  🔴 <strong style={{ color: '#00CFFF' }}>{sportsChannels.length}+ chaînes</strong> • Toutes les compétitions mondiales en direct
                </p>
              </div>
              <button
                onClick={() => setShowSportsModal(false)}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  fontSize: '1.25rem',
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>
            </div>

            {/* Category Tags */}
            <div style={{
              padding: '1rem 2.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              background: 'rgba(0,0,0,0.2)'
            }}>
              {['🇫🇷 France', '🇬🇧 UK', '🇺🇸 USA', '🌍 Monde', '⚽ Football', '🏀 NBA', '🎾 Tennis', '🏎️ F1'].map((tag, i) => (
                <span key={i} style={{
                  background: 'rgba(0, 207, 255, 0.1)',
                  border: '1px solid rgba(0, 207, 255, 0.2)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Channels Grid */}
            <div style={{
              padding: '1.5rem 2.5rem',
              maxHeight: 'calc(90vh - 280px)',
              overflowY: 'auto'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '0.75rem'
              }}>
                {sportsChannels.map((channel, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                      padding: '0.875rem 1rem',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.875rem',
                      border: '1px solid rgba(255,255,255,0.05)'
                    }}
                  >
                    <span style={{
                      fontSize: '1.5rem',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0,0,0,0.3)',
                      borderRadius: '8px'
                    }}>
                      {channel.country}
                    </span>
                    <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{channel.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer CTA */}
            <div style={{
              padding: '1.5rem 2.5rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)'
            }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', margin: 0 }}>
                Accès illimité à toutes les chaînes sport
              </p>
              <Button variant="primary" href="/#plans" onClick={() => setShowSportsModal(false)}>
                S'abonner maintenant →
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
