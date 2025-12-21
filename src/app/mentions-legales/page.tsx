"use client";

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import styles from '../styles/shared.module.css';

export default function MentionsLegalesPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem' }}>
                        Mentions Légales
                    </h1>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <article className={styles.prose} style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', maxWidth: '800px', margin: '0 auto' }}>

                        <h2>1. Éditeur du Site</h2>
                        <p>
                            <strong>Nom du site :</strong> IPTV Premium<br />
                            <strong>URL :</strong> https://iptvplusfrance.com<br />
                            <strong>Email de contact :</strong> contact@iptvplusfrance.com
                        </p>

                        <h2>2. Hébergement</h2>
                        <p>
                            <strong>Hébergeur :</strong> Namecheap, Inc.<br />
                            <strong>Adresse :</strong> 4600 East Washington Street, Suite 305, Phoenix, AZ 85034, USA<br />
                            <strong>Site web :</strong> https://www.namecheap.com
                        </p>

                        <h2>3. Propriété Intellectuelle</h2>
                        <p>
                            L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, images, vidéos, sons, plans, logos, marques, etc.)
                            sont la propriété exclusive de l'éditeur ou de ses partenaires. Toute reproduction, représentation, modification, publication
                            ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans
                            autorisation écrite préalable.
                        </p>

                        <h2>4. Responsabilité</h2>
                        <p>
                            L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, il ne peut
                            garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. En conséquence, l'éditeur
                            décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.
                        </p>

                        <h2>5. Liens Hypertextes</h2>
                        <p>
                            Le site peut contenir des liens vers d'autres sites internet. L'éditeur n'exerce aucun contrôle sur ces sites et décline
                            toute responsabilité quant à leur contenu ou aux dommages qui pourraient résulter de leur utilisation.
                        </p>

                        <h2>6. Droit Applicable</h2>
                        <p>
                            Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut de résolution amiable,
                            les tribunaux français seront seuls compétents.
                        </p>

                        <p style={{ marginTop: '3rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <em>Dernière mise à jour : Décembre 2024</em>
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}
