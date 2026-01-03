"use client";

import { Navbar } from "@/components/layout/Navbar";
import styles from "./article.module.css";
import Link from 'next/link';
import Image from 'next/image';

export default function InstallerIPTVSmartTV() {
    return (
        <main className={styles.main}>
            <Navbar />

            <article className={styles.article}>
                <div className={styles.header}>
                    <Link href="/blog" className={styles.backLink}>← Retour au blog</Link>
                    <div className={styles.meta}>
                        <span>18 Décembre 2024</span>
                        <span>•</span>
                        <span>5 min de lecture</span>
                    </div>
                    <h1 className={styles.title}>Comment installer IPTV sur Smart TV</h1>
                    <p className={styles.intro}>
                        Guide complet pour configurer votre service IPTV sur Samsung, LG, Android TV et autres Smart TV en quelques étapes simples.
                    </p>
                </div>

                {/* Hero Image */}
                <div className={styles.heroImage}>
                    <Image
                        src="/images/blog/installer-iptv-smart-tv/hero.webp"
                        alt="Installation IPTV Smarters Pro sur Smart TV Samsung et LG"
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>📱 Prérequis</h2>
                        <p>Avant de commencer l'installation, assurez-vous d'avoir :</p>
                        <ul>
                            <li>Une Smart TV connectée à Internet</li>
                            <li>Vos identifiants IPTV (reçus par email après l'achat)</li>
                            <li>L'application IPTV Smarters Pro ou similaire</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>📺 Installation sur Samsung Smart TV</h2>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>
                                <div className={styles.stepContent}>
                                    <h3>Ouvrir le Samsung App Store</h3>
                                    <p>Appuyez sur le bouton "Smart Hub" de votre télécommande et accédez à l'App Store.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>
                                <div className={styles.stepContent}>
                                    <h3>Rechercher l'application</h3>
                                    <p>Tapez "IPTV Smarters" ou "Smart IPTV" dans la barre de recherche.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>
                                <div className={styles.stepContent}>
                                    <h3>Installer l'application</h3>
                                    <p>Cliquez sur "Installer" et attendez que le téléchargement soit terminé.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>4</div>
                                <div className={styles.stepContent}>
                                    <h3>Configurer vos identifiants</h3>
                                    <p>Ouvrez l'application et entrez vos informations de connexion (URL, nom d'utilisateur, mot de passe).</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>📱 Installation sur LG Smart TV</h2>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>
                                <div className={styles.stepContent}>
                                    <h3>Accéder au LG Content Store</h3>
                                    <p>Appuyez sur le bouton "Home" et sélectionnez "LG Content Store".</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>
                                <div className={styles.stepContent}>
                                    <h3>Rechercher IPTV Smarters</h3>
                                    <p>Utilisez la fonction de recherche pour trouver "IPTV Smarters Pro".</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>
                                <div className={styles.stepContent}>
                                    <h3>Télécharger et installer</h3>
                                    <p>Cliquez sur l'application et appuyez sur "Installer".</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>4</div>
                                <div className={styles.stepContent}>
                                    <h3>Configurer l'application</h3>
                                    <p>Lancez l'app et saisissez vos identifiants IPTV.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>🤖 Installation sur Android TV (Sony, Philips, TCL...)</h2>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>
                                <div className={styles.stepContent}>
                                    <h3>Ouvrir Google Play Store</h3>
                                    <p>Depuis l'écran d'accueil, accédez au Google Play Store.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>
                                <div className={styles.stepContent}>
                                    <h3>Rechercher l'application</h3>
                                    <p>Tapez "IPTV Smarters Pro" dans la recherche.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>
                                <div className={styles.stepContent}>
                                    <h3>Installer</h3>
                                    <p>Appuyez sur "Installer" pour télécharger l'application.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>4</div>
                                <div className={styles.stepContent}>
                                    <h3>Se connecter</h3>
                                    <p>Ouvrez l'app et connectez-vous avec vos identifiants.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>🔧 Configuration de l'application</h2>
                        <p>Une fois l'application installée, suivez ces étapes pour la configurer :</p>
                        <div className={styles.configBox}>
                            <div className={styles.configItem}>
                                <span className={styles.configLabel}>Type de connexion :</span>
                                <span className={styles.configValue}>Xtream Codes API</span>
                            </div>
                            <div className={styles.configItem}>
                                <span className={styles.configLabel}>URL du serveur :</span>
                                <span className={styles.configValue}>(fourni par email)</span>
                            </div>
                            <div className={styles.configItem}>
                                <span className={styles.configLabel}>Nom d'utilisateur :</span>
                                <span className={styles.configValue}>(fourni par email)</span>
                            </div>
                            <div className={styles.configItem}>
                                <span className={styles.configLabel}>Mot de passe :</span>
                                <span className={styles.configValue}>(fourni par email)</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>❓ Problèmes courants</h2>
                        <div className={styles.faqList}>
                            <div className={styles.faqItem}>
                                <h3>L'application ne se connecte pas</h3>
                                <p>Vérifiez votre connexion Internet et assurez-vous que les identifiants sont corrects (attention aux espaces).</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Les chaînes ne chargent pas</h3>
                                <p>Essayez de redémarrer l'application ou changez de lecteur vidéo dans les paramètres.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Application introuvable sur l'App Store</h3>
                                <p>Certaines applications peuvent ne pas être disponibles dans votre région. Contactez le support pour des alternatives.</p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.ctaSection}>
                        <h2>🚀 Passez au niveau supérieur dès ce soir</h2>
                        <p>Ne gâchez plus votre soirée télé. Testez la différence entre un service qui coupe et un service conçu pour la performance.</p>
                        <Link
                            href="https://wa.me/17575357760?text=Bonjour%2C%20je%20souhaite%20un%20test%20gratuit%2024h%20IPTV%20Premium"
                            className={styles.ctaButton}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            📱 Demander mon TEST 24H GRATUIT sur WhatsApp
                        </Link>
                        <p className={styles.ctaNote}>
                            Notre équipe vous répond en moins de 5 minutes et vous active immédiatement. Zéro robot, que des humains.
                        </p>
                    </section>
                </div>
            </article>
        </main>
    );
}
