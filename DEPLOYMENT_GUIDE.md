# 🚀 Guide de Déploiement - Plateforme IPTV

## 📋 Vue d'Ensemble

La plateforme IPTV utilise un **système hybride** :
- **Développement local** : SQLite (base de données locale)
- **Production (Vercel)** : Fichiers JSON (statiques)

---

## 🔄 Système Hybride Automatique

### Mode Local (SQLite)
```bash
npm run dev
# Utilise automatiquement SQLite (src/lib/db.ts)
# Base de données : data/iptv-platform.db
```

### Mode Production (JSON)
```bash
# Sur Vercel, utilise automatiquement JSON (src/lib/db-json.ts)
# Articles : src/data/articles.json
# Contacts : Envoyés à un service externe (Web3Forms, etc.)
```

---

## 🚀 Déploiement sur Vercel

### Prérequis
- Compte Vercel (gratuit)
- Repository GitHub connecté

### Étape 1 : Préparer le Déploiement

```bash
# 1. Vérifier que tout fonctionne localement
npm run dev

# 2. Tester le build de production
npm run build

# 3. Vérifier les articles JSON
cat src/data/articles.json
```

### Étape 2 : Déployer sur Vercel

#### Option A : Via l'Interface Vercel (Recommandé)

1. **Connecter le Repository**
   - Aller sur [vercel.com](https://vercel.com)
   - Cliquer sur "New Project"
   - Importer votre repository GitHub

2. **Configuration Automatique**
   - Vercel détecte automatiquement Next.js
   - La configuration `vercel.json` est appliquée automatiquement

3. **Variables d'Environnement** (Optionnel)
   - Ajouter `NEXT_PUBLIC_USE_JSON_DB=true` (déjà configuré dans vercel.json)
   - Ajouter vos autres variables si nécessaire

4. **Déployer**
   - Cliquer sur "Deploy"
   - Attendre 2-3 minutes

#### Option B : Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Ou déployer en production directement
vercel --prod
```

### Étape 3 : Vérifier le Déploiement

```bash
# Tester l'API des articles
curl https://votre-site.vercel.app/api/articles

# Tester une page d'article
curl https://votre-site.vercel.app/blog/iptv-premium-4k-2025
```

---

## 📝 Gestion des Articles

### En Local (SQLite)
Vous pouvez utiliser l'API pour créer/modifier des articles :

```typescript
// Via l'API ou scripts
await createArticle({
  title: "Nouvel Article",
  slug: "nouvel-article",
  content: "...",
  status: "published",
  published_at: new Date().toISOString()
});
```

### En Production (JSON)
Modifiez directement le fichier `src/data/articles.json` :

```bash
# 1. Éditer le fichier
code src/data/articles.json

# 2. Ajouter votre nouvel article dans le tableau JSON

# 3. Commit et push
git add src/data/articles.json
git commit -m "Ajout nouvel article"
git push

# 4. Vercel redéploie automatiquement
```

---

## 📧 Gestion des Contacts

### Configuration Web3Forms (Recommandé)

1. **Obtenir une clé API**
   - Aller sur [web3forms.com](https://web3forms.com)
   - Créer un compte gratuit
   - Obtenir votre Access Key

2. **Ajouter la clé dans Vercel**
   ```bash
   # Dans Vercel Dashboard > Settings > Environment Variables
   WEB3FORMS_ACCESS_KEY=votre-clé-ici
   ```

3. **Le formulaire de contact est déjà configuré**
   - Les contacts sont envoyés directement par email
   - Pas besoin de base de données

---

## 🔧 Configuration Avancée

### Variables d'Environnement

#### Local (.env.local)
```bash
# Aucune variable requise pour SQLite
# Optionnel :
# NEXT_PUBLIC_WHATSAPP_NUMBER=+33123456789
```

#### Production (Vercel)
```bash
# Automatiquement configuré via vercel.json :
NEXT_PUBLIC_USE_JSON_DB=true

# À ajouter manuellement :
WEB3FORMS_ACCESS_KEY=votre-clé
NEXT_PUBLIC_WHATSAPP_NUMBER=+33123456789
```

### Fichier vercel.json
```json
{
  "buildCommand": "npm run build",
  "env": {
    "NEXT_PUBLIC_USE_JSON_DB": "true"
  },
  "regions": ["cdg1"]
}
```

---

## 🎯 Workflow de Développement

### 1. Développement Local
```bash
# Utilise SQLite automatiquement
npm run dev

# Tester les articles
curl http://localhost:3000/api/articles

# Vérifier la base de données
npm run db:verify
```

### 2. Ajouter un Article

**Option A : Via SQLite (Local)**
```bash
# Utiliser l'API ou un script
node scripts/add-article.js
```

**Option B : Via JSON (Pour Production)**
```bash
# Éditer directement
code src/data/articles.json
```

### 3. Déployer

```bash
# Commit et push
git add .
git commit -m "Ajout nouvel article"
git push origin main

# Vercel déploie automatiquement
```

---

## 📊 Monitoring et Logs

### Vercel Dashboard
- **Deployments** : Voir l'historique des déploiements
- **Logs** : Consulter les logs en temps réel
- **Analytics** : Statistiques de trafic

### Logs en Production
```bash
# Via Vercel CLI
vercel logs

# Logs en temps réel
vercel logs --follow
```

---

## 🐛 Dépannage

### Erreur : "Module not found: Can't resolve '@/data/articles.json'"

**Solution** :
```bash
# Vérifier que le fichier existe
ls -la src/data/articles.json

# Si absent, le créer
mkdir -p src/data
cp scripts/static-articles.json src/data/articles.json
```

### Erreur : "Database is locked" en Production

**Cause** : Vous utilisez SQLite en production (pas supporté sur Vercel)

**Solution** :
```bash
# Vérifier que NEXT_PUBLIC_USE_JSON_DB=true dans Vercel
# Ou ajouter dans vercel.json
```

### Articles ne s'affichent pas

**Vérifications** :
1. Le fichier `src/data/articles.json` existe
2. Le JSON est valide (pas d'erreurs de syntaxe)
3. Les articles ont `status: "published"`
4. La date `published_at` est dans le passé

---

## 🔐 Sécurité

### Bonnes Pratiques

1. **Ne jamais committer les secrets**
   ```bash
   # .env.local est déjà dans .gitignore
   # Utiliser les variables d'environnement Vercel
   ```

2. **Protéger les API sensibles**
   ```typescript
   // Ajouter une authentification si nécessaire
   if (!isAuthorized(request)) {
     return new Response('Unauthorized', { status: 401 });
   }
   ```

3. **Valider les entrées utilisateur**
   ```typescript
   // Toujours valider les données du formulaire
   if (!email || !isValidEmail(email)) {
     return { error: 'Email invalide' };
   }
   ```

---

## 📈 Performance

### Optimisations Vercel

1. **Edge Functions** : Déjà configuré pour CDG1 (Paris)
2. **Image Optimization** : Utiliser `next/image`
3. **Static Generation** : Articles générés au build
4. **Caching** : Headers de cache optimisés

### Métriques à Surveiller

- **Time to First Byte (TTFB)** : < 200ms
- **First Contentful Paint (FCP)** : < 1.5s
- **Largest Contentful Paint (LCP)** : < 2.5s

---

## 🎉 Checklist de Déploiement

Avant de déployer en production :

- [ ] ✅ Tests locaux réussis (`npm run dev`)
- [ ] ✅ Build de production réussi (`npm run build`)
- [ ] ✅ Articles JSON valides (`src/data/articles.json`)
- [ ] ✅ Variables d'environnement configurées dans Vercel
- [ ] ✅ Web3Forms configuré pour les contacts
- [ ] ✅ Images optimisées et présentes dans `/public`
- [ ] ✅ SEO : sitemap.xml généré
- [ ] ✅ Tests de performance (Lighthouse > 90)

---

## 🆘 Support

### Ressources
- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Next.js](https://nextjs.org/docs)
- [Web3Forms Docs](https://docs.web3forms.com)

### Commandes Utiles

```bash
# Vérifier le mode de base de données
npm run dev  # Affiche "SQLite (Local)" ou "JSON (Production)"

# Tester le build
npm run build

# Analyser le bundle
npm run build -- --analyze

# Vérifier les articles
cat src/data/articles.json | jq length
```

---

**Votre plateforme est maintenant prête pour le déploiement sur Vercel !** 🚀

Pour déployer maintenant :
```bash
git add .
git commit -m "Configuration déploiement Vercel avec JSON"
git push origin main
```

Vercel déploiera automatiquement votre site en quelques minutes !
