---
description: Protection du fichier deploy.yml - NE JAMAIS MODIFIER SANS DOUBLE CONFIRMATION
---

# ⚠️ RÈGLE CRITIQUE : Fichier deploy.yml protégé

## Fichier concerné
`.github/workflows/deploy.yml`

## Règle absolue
**NE JAMAIS modifier ce fichier sans demander DEUX FOIS la confirmation à l'utilisateur.**

## Processus obligatoire avant toute modification

1. **Première demande** : Expliquer clairement quelle modification est proposée et pourquoi
2. **Attendre la confirmation explicite de l'utilisateur**
3. **Deuxième demande** : Confirmer une seconde fois avant d'exécuter la modification
4. **Attendre la deuxième confirmation explicite**
5. **Seulement après les deux confirmations** : Procéder à la modification

## Configuration actuelle validée (25 Dec 2024)

```yaml
name: Deploy to Namecheap

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        run: npm run build

      - name: Deploy to FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./out/
          server-dir: ./
          dangerous-clean-slate: true
```

## Secrets GitHub requis
- `FTP_SERVER`: ftp.rabbitaitv.com
- `FTP_USERNAME`: iptvplatform@iptvplusfrance.com
- `FTP_PASSWORD`: (mot de passe FTP)

## Historique des problèmes résolus
- Le compte FTP pointe déjà vers `/home/rabbvuzf/iptvplusfrance.com/iptvplatform/`
- `server-dir: ./` est correct (pas de chemin supplémentaire)
- Configurations incorrectes précédentes créaient des dossiers imbriqués