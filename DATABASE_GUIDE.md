# 🗄️ Guide d'Utilisation de la Base de Données SQLite

## 📋 Vue d'Ensemble

La plateforme IPTV utilise maintenant **SQLite** comme base de données locale. Toutes les données sont stockées dans un seul fichier : `data/iptv-platform.db`.

---

## 🚀 Démarrage Rapide

### 1. Initialisation Automatique
La base de données est **initialisée automatiquement** au premier démarrage de l'application. Aucune configuration n'est nécessaire !

```bash
npm run dev
```

### 2. Vérifier la Base de Données
Pour vérifier la structure et le contenu de la base de données :

```bash
npm run db:verify
```

---

## 📊 Structure de la Base de Données

### Table : `articles`
Stocke tous les articles de blog de la plateforme.

| Colonne | Type | Description |
|---------|------|-------------|
| `id` | INTEGER | Identifiant unique (auto-incrémenté) |
| `title` | TEXT | Titre de l'article |
| `slug` | TEXT | URL-friendly slug (unique) |
| `content` | TEXT | Contenu complet de l'article |
| `excerpt` | TEXT | Extrait/résumé de l'article |
| `image_url` | TEXT | URL de l'image principale |
| `meta_description` | TEXT | Description pour le SEO |
| `read_time` | TEXT | Temps de lecture estimé |
| `status` | TEXT | Statut : 'draft' ou 'published' |
| `published_at` | TEXT | Date de publication |
| `created_at` | TEXT | Date de création |
| `updated_at` | TEXT | Date de dernière modification |

### Table : `contacts`
Stocke tous les contacts/leads de la plateforme (CRM).

| Colonne | Type | Description |
|---------|------|-------------|
| `id` | INTEGER | Identifiant unique (auto-incrémenté) |
| `name` | TEXT | Nom du contact |
| `email` | TEXT | Adresse email |
| `phone` | TEXT | Numéro de téléphone |
| `source` | TEXT | Source : 'email', 'whatsapp', ou 'form' |
| `message` | TEXT | Message du contact |
| `status` | TEXT | Statut : 'new', 'contacted', 'converted', 'lost' |
| `created_at` | TEXT | Date de création |
| `updated_at` | TEXT | Date de dernière modification |

---

## 🔧 Utilisation dans le Code

### Importer les Fonctions
```typescript
import { 
  createContact, 
  getAllContacts, 
  createArticle,
  getPublishedArticles 
} from '@/lib/db';
```

### Exemples d'Utilisation

#### Créer un Contact
```typescript
const contact = await createContact({
  name: "Jean Dupont",
  email: "jean@example.com",
  phone: "+33612345678",
  source: "form",
  message: "Intéressé par l'abonnement Premium"
});
```

#### Récupérer Tous les Contacts
```typescript
const contacts = await getAllContacts();
console.log(`Total contacts: ${contacts.length}`);
```

#### Créer un Article
```typescript
const article = await createArticle({
  title: "Guide IPTV 2026",
  slug: "guide-iptv-2026",
  content: "Contenu complet de l'article...",
  excerpt: "Découvrez notre guide complet",
  image_url: "/images/guide-iptv.jpg",
  meta_description: "Guide complet IPTV pour 2026",
  read_time: "8 min",
  status: "published",
  published_at: new Date().toISOString()
});
```

#### Récupérer les Articles Publiés
```typescript
const articles = await getPublishedArticles();
// Retourne uniquement les articles avec status='published' 
// et published_at <= maintenant
```

---

## 🛠️ Outils de Gestion

### Outils Recommandés

1. **DB Browser for SQLite** (Gratuit)
   - Site : https://sqlitebrowser.org/
   - Interface graphique complète
   - Parfait pour visualiser et éditer les données

2. **TablePlus** (Gratuit/Payant)
   - Site : https://tableplus.com/
   - Interface moderne et élégante
   - Support multi-bases de données

3. **DBeaver** (Gratuit)
   - Site : https://dbeaver.io/
   - Très complet et open-source

4. **VS Code Extension : SQLite Viewer**
   - Directement dans VS Code
   - Pratique pour le développement

### Ouvrir la Base de Données

**Avec DB Browser for SQLite :**
1. Ouvrir l'application
2. File → Open Database
3. Sélectionner : `data/iptv-platform.db`

**Avec la ligne de commande :**
```bash
sqlite3 data/iptv-platform.db
```

---

## 📝 Commandes SQLite Utiles

### Ligne de Commande SQLite

```bash
# Ouvrir la base de données
sqlite3 data/iptv-platform.db

# Afficher les tables
.tables

# Afficher la structure d'une table
.schema contacts

# Exécuter une requête
SELECT * FROM contacts LIMIT 5;

# Quitter
.quit
```

---

## 🔄 Backup et Restauration

### Créer un Backup
```bash
# Copie simple
cp data/iptv-platform.db data/backup-$(date +%Y%m%d).db

# Ou avec SQLite
sqlite3 data/iptv-platform.db ".backup data/backup.db"
```

### Restaurer un Backup
```bash
# Remplacer la base de données actuelle
cp data/backup.db data/iptv-platform.db

# Ou avec SQLite
sqlite3 data/iptv-platform.db ".restore data/backup.db"
```

---

## 🚨 Dépannage

### La base de données n'existe pas
**Solution** : Démarrez l'application avec `npm run dev`. La base sera créée automatiquement.

### Erreur de permissions
**Solution** : Vérifiez que le dossier `data/` a les permissions d'écriture :
```bash
chmod 755 data/
chmod 644 data/iptv-platform.db
```

### Base de données verrouillée
**Solution** : Fermez toutes les connexions à la base de données et redémarrez l'application.

### Données corrompues
**Solution** : Restaurez depuis un backup ou recréez la base :
```bash
rm data/iptv-platform.db
npm run dev  # Recrée la base automatiquement
```

---

## 📈 Performance

### Mode WAL (Write-Ahead Logging)
SQLite est configuré en mode WAL pour de meilleures performances :
- ✅ Lectures et écritures simultanées
- ✅ Meilleure performance en écriture
- ✅ Moins de blocages

### Index
Tous les index sont créés automatiquement pour optimiser les requêtes :
- Index sur `slug` pour les articles
- Index sur `email` et `phone` pour les contacts
- Index sur `status` et `created_at`

---

## 🔐 Sécurité

### Bonnes Pratiques

1. **Backup Réguliers**
   - Créez des backups automatiques de `data/iptv-platform.db`
   - Stockez les backups dans un endroit sécurisé

2. **Permissions**
   - Le dossier `data/` est dans `.gitignore`
   - Ne commitez JAMAIS la base de données dans Git

3. **Validation**
   - Toutes les entrées sont validées avant insertion
   - Les contraintes CHECK empêchent les données invalides

---

## 📚 Ressources

- [Documentation SQLite](https://www.sqlite.org/docs.html)
- [better-sqlite3 Documentation](https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md)
- [SQLite Tutorial](https://www.sqlitetutorial.net/)

---

## 🎯 Résumé

✅ **Simple** - Un seul fichier pour toute la base de données  
✅ **Rapide** - Performances excellentes pour les petites/moyennes applications  
✅ **Fiable** - Mode WAL pour la concurrence  
✅ **Portable** - Facile à sauvegarder et déplacer  
✅ **Gratuit** - Aucun coût d'hébergement  

**Besoin d'aide ?** Consultez les fichiers `MIGRATION_SQLITE.md` et `MIGRATION_SUCCESS.md` pour plus d'informations.
