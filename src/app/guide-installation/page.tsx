"use client";

import { useState } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import styles from "./guide.module.css";
import Image from 'next/image';

type TabKey = 'firestick' | 'android' | 'ios' | 'smarttv' | 'mag' | 'windows';

export default function GuideInstallation() {
    const [activeTab, setActiveTab] = useState<TabKey>('firestick');

    const tabs: { key: TabKey; label: string; icon: string }[] = [
        { key: 'firestick', label: 'Fire TV Stick', icon: '🔥' },
        { key: 'android', label: 'Android', icon: '🤖' },
        { key: 'ios', label: 'iPhone/iPad', icon: '🍎' },
        { key: 'smarttv', label: 'Smart TV', icon: '📺' },
        { key: 'mag', label: 'MAG Box', icon: '📦' },
        { key: 'windows', label: 'Windows/Mac', icon: '💻' },
    ];

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Guide d'Installation</h1>
                    <p className={styles.subtitle}>
                        Suivez nos tutoriels étape par étape pour configurer votre service IPTV sur tous vos appareils.
                    </p>
                    <div className={styles.note}>
                        <strong>💡 Note :</strong> Pour accéder à notre service IPTV 4K, vous pouvez utiliser différentes applications.
                        Dans ce guide, nous utilisons <strong>IPTV Smarters Pro</strong>, <strong>IBO Player</strong> et <strong>TiviMate</strong>.
                    </div>
                </div>

                {/* Tabs */}
                <div className={styles.tabs}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            <span className={styles.tabIcon}>{tab.icon}</span>
                            <span className={styles.tabLabel}>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className={styles.content}>
                    {activeTab === 'firestick' && <FirestickGuide />}
                    {activeTab === 'android' && <AndroidGuide />}
                    {activeTab === 'ios' && <IosGuide />}
                    {activeTab === 'smarttv' && <SmartTvGuide />}
                    {activeTab === 'mag' && <MagGuide />}
                    {activeTab === 'windows' && <WindowsGuide />}
                </div>

                {/* Support */}
                <div className={styles.support}>
                    <h3>Besoin d'aide ?</h3>
                    <p>Si vous rencontrez des problèmes lors de l'installation, contactez-nous :</p>
                    <div className={styles.supportButtons}>
                        <a
                            href="https://wa.me/17575357760?text=Bonjour,%20j'ai%20besoin%20d'aide%20pour%20l'installation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappBtn}
                        >
                            💬 WhatsApp
                        </a>
                        <a href="/contact" className={styles.emailBtn}>
                            ✉️ Email
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

// FireStick Guide Component
function FirestickGuide() {
    return (
        <div className={styles.guide}>
            <h2>🔥 Installation sur Fire TV Stick</h2>

            <div className={styles.section}>
                <h3>Partie 1 : Installer l'application Downloader</h3>
                <p>Cette application vous permettra d'installer IPTV Smarters sur votre FireStick.</p>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                        <p>Depuis l'écran d'accueil, allez sur <strong>Rechercher</strong> (loupe)</p>
                        <img src="/assets/uploads/t1.jpeg" alt="Recherche FireStick" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                        <p>Tapez <strong>"Downloader"</strong> et sélectionnez l'application</p>
                        <img src="/assets/uploads/t2.jpeg" alt="Downloader App" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                        <p>Cliquez sur <strong>Télécharger</strong> pour installer Downloader</p>
                        <img src="/assets/uploads/t3.jpeg" alt="Télécharger Downloader" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                        <p>Retournez à l'accueil, allez dans <strong>Paramètres</strong> → <strong>Mon Fire TV</strong></p>
                        <img src="/assets/uploads/t4.jpeg" alt="Paramètres FireStick" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>5</div>
                    <div className={styles.stepContent}>
                        <p>Sélectionnez <strong>Options pour les développeurs</strong></p>
                        <img src="/assets/uploads/t5.jpeg" alt="Developer Options" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>6</div>
                    <div className={styles.stepContent}>
                        <p>Activez <strong>"Installation d'applications inconnues"</strong> → Downloader → <strong>ON</strong></p>
                        <img src="/assets/uploads/t6.jpeg" alt="Unknown Apps" className={styles.stepImage} />
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h3>Partie 2 : Installer IPTV Smarters Pro</h3>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>7</div>
                    <div className={styles.stepContent}>
                        <p>Ouvrez <strong>Downloader</strong> et entrez cette URL :</p>
                        <div className={styles.codeBox}>https://bit.ly/mainsmart</div>
                        <p>Puis cliquez <strong>GO</strong></p>
                        <img src="/assets/uploads/t7.jpeg" alt="Downloader URL" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>8</div>
                    <div className={styles.stepContent}>
                        <p>Attendez le téléchargement...</p>
                        <img src="/assets/uploads/t8.png" alt="Downloading" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>9</div>
                    <div className={styles.stepContent}>
                        <p>Cliquez sur <strong>Installer</strong></p>
                        <img src="/assets/uploads/t9.jpeg" alt="Install APK" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>10</div>
                    <div className={styles.stepContent}>
                        <p>Une fois installé, cliquez <strong>Terminé</strong> puis <strong>Supprimer</strong> le fichier APK</p>
                        <img src="/assets/uploads/t10.jpeg" alt="Installation Complete" className={styles.stepImage} />
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h3>Partie 3 : Configurer IPTV Smarters</h3>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>11</div>
                    <div className={styles.stepContent}>
                        <p>Ouvrez IPTV Smarters et acceptez les conditions d'utilisation</p>
                        <img src="/assets/uploads/t11.jpeg" alt="Accept Terms" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>12</div>
                    <div className={styles.stepContent}>
                        <p>Cliquez sur <strong>Ajouter un utilisateur</strong></p>
                        <img src="/assets/uploads/t12.jpeg" alt="Add User" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>13</div>
                    <div className={styles.stepContent}>
                        <p>Choisissez <strong>"Login with Xtream Codes API"</strong></p>
                        <img src="/assets/uploads/t13.jpeg" alt="Xtream Codes" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>14</div>
                    <div className={styles.stepContent}>
                        <p>Entrez vos identifiants :</p>
                        <ul>
                            <li><strong>Nom :</strong> Votre nom</li>
                            <li><strong>Username :</strong> Fourni par email</li>
                            <li><strong>Password :</strong> Fourni par email</li>
                            <li><strong>URL :</strong> Fourni par email</li>
                        </ul>
                        <img src="/assets/uploads/t14.jpeg" alt="Enter Details" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>15</div>
                    <div className={styles.stepContent}>
                        <p>Cliquez <strong>Ajouter</strong> et patientez pendant le chargement</p>
                        <img src="/assets/uploads/t15.jpeg" alt="Loading Channels" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>✅</div>
                    <div className={styles.stepContent}>
                        <p><strong>C'est terminé !</strong> Vous pouvez maintenant accéder à Live TV, Films et Séries.</p>
                        <img src="/assets/uploads/t16.jpeg" alt="Done" className={styles.stepImage} />
                    </div>
                </div>
            </div>

            {/* IBO Player Section */}
            <div className={styles.section}>
                <h3>Alternative : Installer IBO Player Pro</h3>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                        <p>Dans Downloader, entrez cette URL :</p>
                        <div className={styles.codeBox}>http://ibodesk.com/media.apk</div>
                        <p>Ou le code : <strong>532837</strong></p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                        <p>Installez l'application et ouvrez-la</p>
                        <p>Notez l'<strong>adresse MAC</strong> et la <strong>clé de l'appareil</strong> affichées</p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                        <p>Sur votre téléphone ou PC, allez sur :</p>
                        <div className={styles.codeBox}>https://iboplayer.com/device/login</div>
                        <p>Entrez le MAC et la clé pour connecter l'application</p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                        <p>Ajoutez votre playlist M3U ou les codes Xtream fournis par email</p>
                        <p>Redémarrez l'application sur la TV et profitez !</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Android Guide Component
function AndroidGuide() {
    return (
        <div className={styles.guide}>
            <h2>🤖 Installation sur Android</h2>

            <div className={styles.section}>
                <h3>IPTV Smarters Player</h3>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                        <p>Téléchargez IPTV Smarters depuis :</p>
                        <div className={styles.codeBox}>https://www.iptvsmarters.com/smarters.apk</div>
                        <img src="/assets/uploads/t17.jpeg" alt="Download Android" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                        <p>Ouvrez l'application et acceptez les conditions</p>
                        <img src="/assets/uploads/t18.png" alt="Open App" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                        <p>Entrez vos identifiants (fournis par email après achat)</p>
                        <p>Cliquez sur <strong>"ADD USER"</strong></p>
                        <img src="/assets/uploads/t19.jpeg" alt="Add User Android" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                        <p>Patientez pendant le chargement des chaînes</p>
                        <img src="/assets/uploads/t20.png" alt="Loading" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>5</div>
                    <div className={styles.stepContent}>
                        <p>Cliquez sur <strong>"Live TV"</strong> pour accéder aux chaînes</p>
                        <img src="/assets/uploads/t21.png" alt="Live TV" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>✅</div>
                    <div className={styles.stepContent}>
                        <p><strong>C'est terminé !</strong> Sélectionnez une catégorie et profitez de vos chaînes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// iOS Guide Component
function IosGuide() {
    return (
        <div className={styles.guide}>
            <h2>🍎 Installation sur iPhone / iPad</h2>

            <div className={styles.section}>
                <h3>IPTV Smarters Player</h3>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                        <p>Téléchargez <strong>Smarters Player Lite</strong> depuis l'App Store :</p>
                        <a
                            href="https://apps.apple.com/in/app/smarters-player-lite/id1628995509"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.downloadBtn}
                        >
                            📱 Télécharger sur App Store
                        </a>
                        <img src="/assets/uploads/t22.jpeg" alt="App Store" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                        <p>Ouvrez l'application et acceptez les conditions</p>
                        <img src="/assets/uploads/t23.jpeg" alt="Open iOS App" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                        <p>Entrez vos identifiants (fournis par email)</p>
                        <p>Cliquez sur <strong>"ADD USER"</strong></p>
                        <img src="/assets/uploads/t24.jpeg" alt="Add User iOS" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                        <p>Patientez pendant le chargement</p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>5</div>
                    <div className={styles.stepContent}>
                        <p>Cliquez sur <strong>"Live TV"</strong> pour accéder aux chaînes</p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>6</div>
                    <div className={styles.stepContent}>
                        <p>Pour ajouter l'EPG, cliquez simplement sur <strong>"Install EPG"</strong></p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>✅</div>
                    <div className={styles.stepContent}>
                        <p><strong>C'est terminé !</strong> Profitez de vos chaînes sur iOS.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Smart TV Guide Component
function SmartTvGuide() {
    return (
        <div className={styles.guide}>
            <h2>📺 Installation sur Smart TV (Samsung / LG)</h2>

            <div className={styles.section}>
                <h3>Méthode 1 : IPTV Smarters</h3>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                        <p>Ouvrez le <strong>Store</strong> de votre Smart TV (Samsung Apps / LG Content Store)</p>
                        <img src="/assets/uploads/t25.webp" alt="TV Store" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                        <p>Recherchez <strong>"IPTV Smarters"</strong> et installez l'application</p>
                        <img src="/assets/uploads/t26.png" alt="Search Smarters" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                        <p>Ouvrez l'application et entrez vos identifiants (fournis par email)</p>
                        <img src="/assets/uploads/t27.png" alt="Enter Details TV" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>✅</div>
                    <div className={styles.stepContent}>
                        <p><strong>C'est terminé !</strong></p>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h3>Méthode 2 : IBO Player (si Smarters n'est pas disponible)</h3>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                        <p>Recherchez <strong>"IBO Player"</strong> dans le Store de votre TV et installez-le</p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                        <p>Ouvrez l'application et notez l'<strong>adresse MAC</strong> et la <strong>clé</strong></p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                        <p>Sur votre téléphone/PC, allez sur :</p>
                        <div className={styles.codeBox}>https://iboplayer.com/device/login</div>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                        <p>Entrez le MAC et la clé, puis ajoutez votre playlist M3U</p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>5</div>
                    <div className={styles.stepContent}>
                        <p>Redémarrez l'app sur la TV et profitez !</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// MAG Box Guide Component
function MagGuide() {
    return (
        <div className={styles.guide}>
            <h2>📦 Installation sur MAG Box</h2>

            <div className={styles.section}>
                <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                        <p>Envoyez-nous l'<strong>adresse MAC</strong> de votre MAG via :</p>
                        <ul>
                            <li>WhatsApp</li>
                            <li>Email</li>
                            <li>Chat du site</li>
                        </ul>
                        <img src="/assets/uploads/t28.png" alt="MAG MAC Address" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                        <p>Après le paiement, nous vous enverrons le <strong>lien du portail</strong></p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                        <p>Sur votre MAG, allez dans <strong>Paramètres</strong> → <strong>Portails</strong></p>
                        <p>Entrez le lien du portail fourni</p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                        <p>Redémarrez votre MAG et profitez !</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Windows/Mac Guide Component
function WindowsGuide() {
    return (
        <div className={styles.guide}>
            <h2>💻 Installation sur Windows / Mac</h2>

            <div className={styles.section}>
                <h3>Windows</h3>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                        <p>Téléchargez IPTV Smarters pour Windows :</p>
                        <a
                            href="https://www.iptvsmarters.com/download?download=windows_ap"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.downloadBtn}
                        >
                            🖥️ Télécharger pour Windows
                        </a>
                        <img src="/assets/uploads/t29.png" alt="Windows Download" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                        <p>Installez l'application et ouvrez-la</p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                        <p>Entrez vos identifiants (fournis par email)</p>
                        <img src="/assets/uploads/t30.png" alt="Windows Setup" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>✅</div>
                    <div className={styles.stepContent}>
                        <p><strong>C'est terminé !</strong></p>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h3>Mac</h3>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                        <p>Téléchargez IPTV Smarters pour Mac :</p>
                        <a
                            href="https://www.iptvsmarters.com/download?download=mac"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.downloadBtn}
                        >
                            🍎 Télécharger pour Mac
                        </a>
                        <img src="/assets/uploads/t31.png" alt="Mac Download" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                        <p>Installez et ouvrez l'application</p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                        <p>Entrez vos identifiants (fournis par email)</p>
                        <img src="/assets/uploads/t32.png" alt="Mac Setup" className={styles.stepImage} />
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepNumber}>✅</div>
                    <div className={styles.stepContent}>
                        <p><strong>C'est terminé !</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
