
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import styles from '../styles/shared.module.css';
import { Smartphone, Tv, Tablet, Box } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Compatibilité IPTV - Guide des Appareils (Smart TV, Android, iOS)',
    description: 'Notre abonnement IPTV est compatible avec tous vos appareils : Samsung, LG, Android TV, Apple TV, iPhone, MAG, et Fire Stick.',
    alternates: {
        canonical: '/compatibilite',
    },
};

const devices = [
    {
        name: 'Smart TV',
        slug: 'iptv-smart-tv',
        icon: Tv,
        desc: 'Samsung Tizen, LG WebOS, Sony Bravia...'
    },
    {
        name: 'Android TV / Box',
        slug: 'iptv-android',
        icon: Box,
        desc: 'Nvidia Shield, Xiaomi Mi Box, Google TV...'
    },
    {
        name: 'iPhone / iPad',
        slug: 'iptv-iphone',
        icon: Tablet,
        desc: 'iOS, Apple TV, iPadOS...'
    },
    {
        name: 'Fire Stick',
        slug: 'iptv-firestick',
        icon: Smartphone,
        desc: 'Amazon Fire TV Stick 4K, Cube...'
    },
    {
        name: 'Boîtiers MAG',
        slug: 'iptv-mag',
        icon: Box,
        desc: 'MAG 250, 254, 322, Infomir...'
    }
];

export default function CompatibiliteHubPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>
                        IPTV Compatible Avec <span className={styles.highlight}>TOUS</span> Vos Appareils
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Que vous soyez sur votre télévision, votre téléphone ou votre ordinateur,
                        notre service vous suit partout. Sélectionnez votre appareil pour le guide d'installation.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid3}>
                        {devices.map((device) => (
                            <Link key={device.slug} href={`/compatibilite/${device.slug}`} className={styles.card} style={{ textDecoration: 'none' }}>
                                <device.icon size={48} style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }} />
                                <h2 className={styles.cardTitle}>{device.name}</h2>
                                <p className={styles.cardText}>{device.desc}</p>
                                <div style={{ marginTop: 'auto', color: 'var(--accent-2)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    Voir le guide <span>→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section} style={{ background: 'var(--bg-secondary)' }}>
                <div className={styles.container} style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Besoin d'aide pour l'installation ?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        Notre support technique vous accompagne pas à pas pour configurer votre appareil.
                        Installation à distance possible via WhatsApp.
                    </p>
                    <Button href="/contact" variant="outline">Contacter le Support</Button>
                </div>
            </section>
        </main>
    );
}
