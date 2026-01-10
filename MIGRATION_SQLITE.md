# Migration de Supabase (PostgreSQL) vers SQLite

## ✅ Migration Complétée

La plateforme IPTV a été migrée avec succès de **Supabase (PostgreSQL)** vers **SQLite** en utilisant `better-sqlite3`.

## 📋 Changements Effectués

### 1. **Dépendances**
- ✅ Installé : `better-sqlite3` et `@types/better-sqlite3`
- ✅ Désinstallé : `pg` et `@types/pg`

### 2. **Base de Données**
- **Ancien système** : PostgreSQL hébergé sur Supabase (connexion via `DATABASE_URL`)
- **Nouveau système** : SQLite local stocké dans `data/iptv-platform.db`

### 3. **Fichier Modifié**
- **`src/lib/db.ts`** : Complètement réécrit pour utiliser SQLite au lieu de PostgreSQL

### 4. **Fonctionnalités Conservées**
Toutes les fonctionnalités ont été préservées :
- ✅ Gestion des articles (CRUD complet)
- ✅ Publication automatique des articles (basée sur `published_at`)
- ✅ Gestion des contacts/CRM
- ✅ Vérification des doublons de contacts
- ✅ Indexation pour les performances

## 🗄️ Structure de la Base de Données

### Tables

#### **articles**
```sql
CREATE TABLE articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    image_url TEXT,
    meta_description TEXT,
    read_time TEXT DEFAULT '5 min',
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
    published_at TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
)
```

#### **contacts**
```sql
CREATE TABLE contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    source TEXT NOT NULL CHECK (source IN ('email', 'whatsapp', 'form')),
    message TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'lost')),
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
)
```

## 📁 Emplacement de la Base de Données

La base de données SQLite est stockée dans :
```
/data/iptv-platform.db
```

**Note** : Le dossier `data/` est déjà dans `.gitignore`, donc la base de données ne sera pas versionnée.

## 🚀 Utilisation

### Initialisation Automatique
La base de données est initialisée automatiquement au premier démarrage de l'application via la fonction `initDatabase()`.

### Aucune Configuration Requise
Contrairement à Supabase, **aucune variable d'environnement n'est nécessaire** pour SQLite. La base de données est créée automatiquement dans le dossier `data/`.

## 🔄 Migration des Données Existantes (Si Nécessaire)

Si vous aviez des données dans Supabase que vous souhaitez migrer :

1. **Exporter depuis Supabase** :
   ```bash
   # Connectez-vous à votre base Supabase et exportez les données
   pg_dump -h <supabase-host> -U postgres -d postgres --table=articles --data-only > articles.sql
   pg_dump -h <supabase-host> -U postgres -d postgres --table=contacts --data-only > contacts.sql
   ```

2. **Convertir et Importer dans SQLite** :
   - Utilisez un outil comme `pgloader` ou convertissez manuellement les données
   - Ou créez un script Node.js pour lire les données de Supabase et les insérer dans SQLite

## ⚠️ Nettoyage du Fichier .env.local

Vous pouvez maintenant **supprimer** la variable `DATABASE_URL` de votre fichier `.env.local` car elle n'est plus nécessaire :

```bash
# Ancien .env.local (à supprimer)
DATABASE_URL=postgresql://...
```

## 🎯 Avantages de SQLite

1. **Simplicité** : Pas besoin de serveur de base de données externe
2. **Performance** : Très rapide pour les petites et moyennes applications
3. **Portabilité** : Un seul fichier contient toute la base de données
4. **Coût** : Gratuit, pas de frais d'hébergement de base de données
5. **Développement** : Parfait pour le développement local

## 🔍 Vérification

Pour vérifier que tout fonctionne :

```bash
# Démarrer le serveur de développement
npm run dev

# Tester l'API des contacts
curl -X POST http://localhost:3000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","source":"form"}'

# Récupérer tous les contacts
curl http://localhost:3000/api/contacts
```

## 📊 Outils pour Gérer SQLite

Vous pouvez utiliser ces outils pour visualiser et gérer votre base de données SQLite :

- **DB Browser for SQLite** : https://sqlitebrowser.org/
- **TablePlus** : https://tableplus.com/
- **DBeaver** : https://dbeaver.io/
- **VS Code Extension** : SQLite Viewer

## 🎉 Résultat

Votre plateforme IPTV utilise maintenant SQLite au lieu de Supabase ! Toutes les fonctionnalités sont préservées et l'application est maintenant complètement autonome sans dépendances externes.
