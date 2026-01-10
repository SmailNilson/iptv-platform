# 📺 Plateforme IPTV - Next.js

Plateforme web moderne pour la gestion et la vente d'abonnements IPTV, construite avec Next.js 16 et TypeScript.

## 🚀 Démarrage Rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir l'application.

### Build Production

```bash
npm run build
npm start
```

## 🗄️ Base de Données

Cette application utilise des **fichiers JSON statiques** pour stocker les articles.

### Caractéristiques
- ✅ **Simple et rapide** - Fichiers JSON statiques
- ✅ **Parfait pour Vercel** - Déploiement instantané
- ✅ **16 articles** - Prêts dans `src/data/articles.json`
- ✅ **Facile à éditer** - Modifiez directement le JSON

### Gestion des Articles

Pour ajouter un nouvel article, éditez `src/data/articles.json` :

```json
{
  "title": "Titre de votre article",
  "slug": "titre-de-votre-article",
  "content": "<h2>Introduction</h2><p>Contenu...</p>",
  "excerpt": "Résumé court",
  "image_url": "/images/blog/mon-article/hero.webp",
  "meta_description": "Description SEO",
  "read_time": "5 min",
  "status": "published",
  "published_at": "2026-01-10T00:00:00"
}
```

### Documentation Complète
- 📖 **[Guide de Déploiement](DEPLOYMENT_GUIDE.md)** - Guide complet Vercel
- ✅ **[Résumé Déploiement](DEPLOY_READY.md)** - Checklist et statut


## 📁 Structure du Projet

```
iptv-platform/
├── src/
│   ├── app/              # Pages et routes Next.js
│   ├── components/       # Composants React réutilisables
│   └── lib/
│       └── db.ts         # Configuration SQLite et fonctions DB
├── data/                 # Base de données SQLite (gitignored)
│   └── iptv-platform.db
├── public/               # Assets statiques
├── scripts/              # Scripts utilitaires
│   └── verify-db.js      # Script de vérification DB
└── package.json
```

## 🛠️ Technologies

- **Framework** : Next.js 16 (App Router)
- **Language** : TypeScript
- **Base de Données** : SQLite (better-sqlite3)
- **Styling** : CSS Modules
- **Icons** : Lucide React
- **SEO** : next-sitemap

## 📊 Fonctionnalités

### Frontend
- ✅ Page d'accueil avec vidéo hero
- ✅ Système de tarification dynamique
- ✅ Blog avec articles SEO-optimisés
- ✅ Formulaires de contact
- ✅ Intégration WhatsApp et Tawk.to
- ✅ Responsive design

### Backend
- ✅ API REST pour les contacts
- ✅ Gestion des articles de blog
- ✅ Publication programmée d'articles
- ✅ Système de CRM basique
- ✅ Détection de doublons

## 🔧 Scripts NPM

| Script | Description |
|--------|-------------|
| `npm run dev` | Démarre le serveur de développement |
| `npm run build` | Build de production |
| `npm start` | Démarre le serveur de production |
| `npm run lint` | Vérifie le code avec ESLint |
| `npm run db:verify` | Vérifie la structure de la base de données |
| `npm run import-articles` | Importe des articles dans la DB |

## 🌐 Déploiement

### Via GitHub Actions
Le projet est configuré pour le déploiement automatique via GitHub Actions.

### Déploiement Manuel
1. Build de production : `npm run build`
2. Le dossier `out/` contient les fichiers statiques
3. Déployez le contenu sur votre hébergeur

**Important** : Assurez-vous que le dossier `data/` est inclus dans votre déploiement pour conserver la base de données.

## 📝 Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
# Aucune variable requise pour SQLite !
# La base de données est créée automatiquement dans data/

# Optionnel : Configuration email, WhatsApp, etc.
# NEXT_PUBLIC_WHATSAPP_NUMBER=...
```

## 🔐 Sécurité

- ✅ Le dossier `data/` est dans `.gitignore`
- ✅ Validation des entrées utilisateur
- ✅ Contraintes de base de données (CHECK)
- ✅ Protection contre les doublons

## 📚 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)

## 🎯 Roadmap

- [ ] Panel d'administration
- [ ] Authentification utilisateur
- [ ] Système de paiement intégré
- [ ] Dashboard analytics
- [ ] Export de données

## 📄 Licence

Projet privé - Tous droits réservés

---

**Développé avec ❤️ pour IPTV Plus France**

