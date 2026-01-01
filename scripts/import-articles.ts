/**
 * Script d'import d'articles depuis JSON vers PostgreSQL (Supabase)
 * 
 * Usage: npx tsx scripts/import-articles.ts [fichier.json]
 */

import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

interface ArticleInput {
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    image_url?: string;
    meta_description?: string;
    read_time?: string;
    status?: 'draft' | 'published';
    published_at?: string;
}

async function main() {
    console.log('🔌 Connexion à Supabase PostgreSQL...');

    try {
        // Test connection
        const testResult = await pool.query('SELECT NOW()');
        console.log('✅ Connecté à Supabase :', testResult.rows[0].now);
        console.log('');
    } catch (error) {
        console.error('❌ Erreur de connexion:', error);
        process.exit(1);
    }

    // Create table if not exists
    console.log('📦 Création de la table articles (si nécessaire)...');
    await pool.query(`
    CREATE TABLE IF NOT EXISTS articles (
      id SERIAL PRIMARY KEY,
      title VARCHAR(500) NOT NULL,
      slug VARCHAR(255) UNIQUE NOT NULL,
      content TEXT NOT NULL,
      excerpt TEXT,
      image_url VARCHAR(500),
      meta_description VARCHAR(500),
      read_time VARCHAR(50) DEFAULT '5 min',
      status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
      published_at TIMESTAMP,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `);
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug)`);
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_articles_status_published ON articles(status, published_at)`);
    console.log('✅ Table prête\n');

    // Get JSON file path
    const jsonFilePath = process.argv[2] || path.join(process.cwd(), 'scripts', 'articles.json');

    if (!fs.existsSync(jsonFilePath)) {
        console.log('📝 Aucun fichier JSON trouvé à:', jsonFilePath);
        console.log('');
        console.log('Créez un fichier articles.json avec le format suivant:');
        console.log(`
[
  {
    "title": "Titre de l'article",
    "slug": "titre-de-larticle",
    "content": "<h2>Introduction</h2><p>Contenu...</p>",
    "excerpt": "Résumé court",
    "image_url": "/images/blog/mon-article/hero.jpg",
    "meta_description": "Description pour Google",
    "read_time": "5 min",
    "status": "published",
    "published_at": "2025-12-31T18:00:00"
  }
]
    `);
        await pool.end();
        process.exit(0);
    }

    try {
        const jsonContent = fs.readFileSync(jsonFilePath, 'utf-8');
        const articles: ArticleInput[] = JSON.parse(jsonContent);

        console.log(`📚 Import de ${articles.length} article(s)...\n`);

        let inserted = 0;
        let updated = 0;

        for (const article of articles) {
            // Check if article exists
            const existing = await pool.query(
                'SELECT id FROM articles WHERE slug = $1',
                [article.slug]
            );

            if (existing.rows.length > 0) {
                // Update
                await pool.query(`
          UPDATE articles SET
            title = $1,
            content = $2,
            excerpt = $3,
            image_url = $4,
            meta_description = $5,
            read_time = $6,
            status = $7,
            published_at = $8,
            updated_at = NOW()
          WHERE slug = $9
        `, [
                    article.title,
                    article.content,
                    article.excerpt || null,
                    article.image_url || null,
                    article.meta_description || null,
                    article.read_time || '5 min',
                    article.status || 'published',
                    article.published_at || null,
                    article.slug
                ]);
                updated++;
                console.log(`   🔄 Mis à jour: ${article.slug}`);
            } else {
                // Insert
                await pool.query(`
          INSERT INTO articles (title, slug, content, excerpt, image_url, meta_description, read_time, status, published_at)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        `, [
                    article.title,
                    article.slug,
                    article.content,
                    article.excerpt || null,
                    article.image_url || null,
                    article.meta_description || null,
                    article.read_time || '5 min',
                    article.status || 'published',
                    article.published_at || null
                ]);
                inserted++;
                console.log(`   ✨ Créé: ${article.slug}`);
            }
        }

        console.log('');
        console.log('✅ Import terminé !');
        console.log(`   - ${inserted} article(s) créé(s)`);
        console.log(`   - ${updated} article(s) mis à jour`);
        console.log('');

        // Show all articles in DB
        const allArticles = await pool.query(
            'SELECT slug, title, status, published_at FROM articles ORDER BY published_at DESC'
        );

        console.log('📋 Articles en base de données:');
        allArticles.rows.forEach((a: any) => {
            const status = a.status === 'published' ? '✅' : '📝';
            console.log(`   ${status} ${a.slug}`);
        });

    } catch (error) {
        console.error('❌ Erreur lors de l\'import:', error);
        process.exit(1);
    }

    await pool.end();
    console.log('\n🔌 Connexion fermée');
}

main();
