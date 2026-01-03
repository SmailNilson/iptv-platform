"use client";

import { Navbar } from "@/components/layout/Navbar";
import styles from "../installer-iptv-smart-tv/article.module.css";
import Link from 'next/link';
import Image from 'next/image';

export default function SmartOneIPTVGuide() {
    return (
        <main className={styles.main}>
            <Navbar />

            <article className={styles.article}>
                <div className={styles.header}>
                    <Link href="/blog" className={styles.backLink}>← Retour au blog</Link>
                    <div className={styles.meta}>
                        <span>25 Décembre 2024</span>
                        <span>•</span>
                        <span>10 min de lecture</span>
                    </div>
                    <h1 className={styles.title}>SmartOne IPTV : Le Guide Ultime pour l'Installer et le Configurer sur Tous vos Appareils (2025)</h1>
                    <p className={styles.intro}>
                        Vous cherchez le lecteur IPTV parfait pour votre Smart TV ? Ne cherchez plus.
                    </p>
                </div>

                {/* Hero Image */}
                <div className={styles.heroImage}>
                    <Image
                        src="/images/blog/smartone-iptv/living-room.webp"
                        alt="SmartOne IPTV sur grand écran dans un salon moderne avec éclairage ambiant"
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                    />
                </div>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <p>
                            En 2025, <strong>SmartOne IPTV</strong> s'est imposée comme l'application de référence pour sa fluidité, son interface moderne et sa compatibilité 4K native. Mais comment l'installer et la configurer sans erreur ?
                        </p>
                        <p>
                            Dans ce guide complet, nous allons vous montrer, étape par étape, comment transformer votre téléviseur en un centre de divertissement ultime en moins de 10 minutes.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>🌟 Pourquoi tout le monde parle de SmartOne IPTV ?</h2>
                        <p>
                            SmartOne n'est pas juste une autre application, c'est <strong>l'une des plus stables du marché actuellement</strong>. Conçue pour gérer des playlists volumineuses (plus de 20 000 chaînes et VOD) sans ralentir votre processeur, elle offre une expérience utilisateur premium.
                        </p>

                        <h3>Ses points forts en 2025 :</h3>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <h3>🚀 Interface Ultra-Moderne</h3>
                                <p>Une navigation fluide et intuitive, capable de rivaliser avec Netflix ou Disney+.</p>
                            </div>
                            <div className={styles.featureItem}>
                                <h3>📅 Guide des Programmes (EPG)</h3>
                                <p>Visualisez ce qui passe ce soir en un coup d'œil avec une mise à jour automatique.</p>
                            </div>
                            <div className={styles.featureItem}>
                                <h3>🎬 Compatible 4K et Dolby</h3>
                                <p>Profitez de la meilleure qualité d'image et de son si votre équipement le permet.</p>
                            </div>
                            <div className={styles.featureItem}>
                                <h3>🛠 Fonctions Avancées</h3>
                                <p>Support multilingue, gestion des favoris, et enregistrement (PVR) sur les appareils compatibles.</p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>📱 Une compatibilité universelle</h2>
                        <p>
                            C'est la grande force de SmartOne : <strong>elle fonctionne partout</strong>. Que vous soyez dans l'écosystème Amazon, Android ou sur une TV propriétaire, l'application est disponible.
                        </p>
                        <p>L'application est optimisée pour :</p>
                        <ul>
                            <li><strong>Smart TV</strong> : Samsung (Tizen OS), LG (webOS), Sony, Philips, TCL.</li>
                            <li><strong>Boîtiers & Sticks</strong> : Amazon Fire TV Stick 4K, Nvidia Shield, Xiaomi Mi Box.</li>
                            <li><strong>Mobile</strong> : Smartphones Android et iOS pour regarder en déplacement.</li>
                        </ul>

                        {/* Image 1 - Ecosystem */}
                        <div className={styles.imageContainer}>
                            <Image
                                src="/images/blog/smartone-iptv/ecosystem.webp"
                                alt="SmartOne IPTV sur Smart TV, FireStick, Android TV Box et smartphone"
                                width={800}
                                height={450}
                                style={{ width: '100%', height: 'auto', borderRadius: '12px', margin: '24px 0' }}
                            />
                            <p style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                                SmartOne offre une expérience unifiée, que ce soit sur votre Smart TV, votre FireStick ou votre smartphone.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>📥 Étape 1 : Télécharger et Installer SmartOne IPTV</h2>
                        <p>L'installation est très simple car l'application est disponible sur la plupart des magasins officiels.</p>

                        <h3>📺 Sur Smart TV Samsung & LG</h3>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>
                                <div className={styles.stepContent}>
                                    <h3>Appuyez sur Home</h3>
                                    <p>Utilisez le bouton Home (Maison) de votre télécommande.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>
                                <div className={styles.stepContent}>
                                    <h3>Ouvrez la boutique</h3>
                                    <p>Allez dans APPs sur Samsung ou LG Content Store sur LG.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>
                                <div className={styles.stepContent}>
                                    <h3>Recherchez l'application</h3>
                                    <p>Utilisez la loupe de recherche et tapez "SmartOne IPTV".</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>4</div>
                                <div className={styles.stepContent}>
                                    <h3>Installez</h3>
                                    <p>Sélectionnez l'application et cliquez sur <strong>Installer</strong>.</p>
                                </div>
                            </div>
                        </div>

                        <h3>🔥 Sur Amazon Fire Stick & Android TV</h3>
                        <p>Si l'application n'est pas directement visible sur le store, voici la méthode rapide :</p>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>
                                <div className={styles.stepContent}>
                                    <h3>Paramètres</h3>
                                    <p>Allez dans Paramètres → Ma Fire TV.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>
                                <div className={styles.stepContent}>
                                    <h3>Options développeur</h3>
                                    <p>Activez les Options pour les développeurs (si cachées, cliquez 7 fois sur "À propos").</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>
                                <div className={styles.stepContent}>
                                    <h3>Sources inconnues</h3>
                                    <p>Autorisez "Apps de sources inconnues".</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>4</div>
                                <div className={styles.stepContent}>
                                    <h3>Téléchargez l'APK</h3>
                                    <p>Ouvrez l'application <strong>Downloader</strong> et entrez l'URL officielle de l'APK SmartOne.</p>
                                </div>
                            </div>
                        </div>

                        {/* Image 2 - App Store */}
                        <div className={styles.imageContainer}>
                            <Image
                                src="/images/blog/smartone-iptv/app-store.webp"
                                alt="Téléchargement de l'application IPTV depuis l'App Store de la Smart TV"
                                width={800}
                                height={450}
                                style={{ width: '100%', height: 'auto', borderRadius: '12px', margin: '24px 0' }}
                            />
                            <p style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                                L'installation se fait en quelques clics directement depuis le store de votre téléviseur.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>🔑 Étape 2 : Activer la licence (Important)</h2>
                        <p><strong>Note :</strong> SmartOne est un lecteur (player), il ne fournit pas de contenu.</p>
                        <ul>
                            <li>Au premier lancement, l'application vous affichera une <strong>Adresse MAC</strong> (ex: 00:1A:79:XX:XX:XX). Notez-la précieusement.</li>
                            <li>SmartOne offre généralement <strong>7 à 14 jours d'essai gratuit</strong>. Passé ce délai, vous devrez activer une licence à vie (environ 12€) sur leur site officiel <strong>smartone-iptv.com/activation</strong>.</li>
                        </ul>

                        <div className={styles.configBox}>
                            <div className={styles.configItem}>
                                <span className={styles.configLabel}>💡 Conseil de Pro :</span>
                                <span className={styles.configValue}>Profitez de la période d'essai pour vérifier que l'application tourne bien sur votre TV avant de payer la licence.</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>⚙️ Étape 3 : Configurer votre abonnement (Le moment crucial)</h2>
                        <p>
                            C'est ici que la magie opère. Une fois l'application lancée, elle est "vide". <strong>Vous devez la connecter à votre serveur.</strong>
                        </p>
                        <ol>
                            <li>Dans l'application, allez dans <strong>Settings</strong> (Paramètres) ou cliquez sur <strong>Setup Playlists</strong>.</li>
                            <li>Choisissez la méthode de connexion. Nous recommandons vivement la méthode <strong>"Xtream Codes API"</strong>. C'est la plus fiable et celle qui garantit l'affichage du guide des programmes et des logos de chaînes.</li>
                        </ol>

                        <h3>Configuration via Xtream Codes :</h3>
                        <p>Votre fournisseur vous a envoyé 3 informations clés. Entrez-les exactement dans les champs correspondants de l'interface :</p>

                        <div className={styles.configBox}>
                            <div className={styles.configItem}>
                                <span className={styles.configLabel}>Playlist Name :</span>
                                <span className={styles.configValue}>Choisissez un nom (ex: "TV Salon")</span>
                            </div>
                            <div className={styles.configItem}>
                                <span className={styles.configLabel}>Server URL :</span>
                                <span className={styles.configValue}>L'adresse du serveur (commence par http://)</span>
                            </div>
                            <div className={styles.configItem}>
                                <span className={styles.configLabel}>Username :</span>
                                <span className={styles.configValue}>Votre identifiant unique</span>
                            </div>
                            <div className={styles.configItem}>
                                <span className={styles.configLabel}>Password :</span>
                                <span className={styles.configValue}>Votre mot de passe</span>
                            </div>
                        </div>

                        {/* Image 3 - Living Room */}
                        <div className={styles.imageContainer}>
                            <Image
                                src="/images/blog/smartone-iptv/living-room.webp"
                                alt="SmartOne IPTV sur grand écran dans un salon moderne avec éclairage ambiant"
                                width={800}
                                height={450}
                                style={{ width: '100%', height: 'auto', borderRadius: '12px', margin: '24px 0' }}
                            />
                            <p style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                                L'interface de connexion moderne de SmartOne. Remplissez simplement les champs URL, Utilisateur et Mot de passe.
                            </p>
                        </div>

                        <p>
                            Une fois validé, cliquez sur <strong>Login</strong>. Si les informations sont correctes, l'application chargera le contenu. <em>Cela peut prendre environ 60 secondes la première fois.</em>
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>🔧 Problèmes fréquents et Solutions</h2>

                        <div className={styles.faqList}>
                            <div className={styles.faqItem}>
                                <h3>⚠️ L'application ne se lance pas</h3>
                                <p>Débranchez électriquement votre TV pendant 30 secondes pour vider le cache, puis réessayez.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>🚫 "Playlist Error"</h3>
                                <p>Vérifiez minutieusement vos identifiants Xtream Codes. Une simple erreur de majuscule ou un espace invisible suffit à bloquer la connexion.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>🔄 Buffering (L'image fige)</h3>
                                <p>Si l'app est bien configurée, le problème vient souvent de votre connexion (passez en câble Ethernet RJ45 si possible) ou de la qualité de votre serveur.</p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.ctaSection}>
                        <h2>📺 Vous n'avez pas encore d'abonnement fiable ?</h2>
                        <p>
                            Avoir la meilleure application du monde comme SmartOne ne sert à rien si vous avez un serveur IPTV bas de gamme qui coupe pendant les matchs ou les films.
                        </p>
                        <p>
                            Pour exploiter le plein potentiel de votre TV 4K, il vous faut un <strong>flux Premium Stable</strong>.
                        </p>
                        <Link
                            href="https://wa.me/17575357760?text=Bonjour%2C%20je%20souhaite%20un%20test%20gratuit%2024h%20IPTV%20Premium"
                            className={styles.ctaButton}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            📱 Demander mon TEST 24H GRATUIT sur WhatsApp
                        </Link>
                        <p className={styles.ctaNote}>
                            Recevez vos codes Xtream immédiatement et testez la stabilité de nos serveurs Premium.
                        </p>
                    </section>
                </div>
            </article>
        </main>
    );
}
