#!/usr/bin/env node

/**
 * Script de vérification de la base de données SQLite
 * Affiche la structure des tables et quelques statistiques
 */

const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '../data/iptv-platform.db');

try {
    const db = new Database(dbPath, { readonly: true });

    console.log('📊 Vérification de la base de données SQLite\n');
    console.log('📁 Emplacement:', dbPath);
    console.log('');

    // Liste des tables
    console.log('📋 Tables disponibles:');
    const tables = db.prepare(`
        SELECT name FROM sqlite_master 
        WHERE type='table' 
        ORDER BY name
    `).all();

    tables.forEach(table => {
        console.log(`  - ${table.name}`);
    });
    console.log('');

    // Structure de la table articles
    if (tables.some(t => t.name === 'articles')) {
        console.log('📰 Structure de la table "articles":');
        const articlesSchema = db.prepare(`PRAGMA table_info(articles)`).all();
        articlesSchema.forEach(col => {
            console.log(`  - ${col.name}: ${col.type}${col.notnull ? ' NOT NULL' : ''}${col.pk ? ' PRIMARY KEY' : ''}`);
        });

        const articlesCount = db.prepare(`SELECT COUNT(*) as count FROM articles`).get();
        console.log(`  📊 Nombre d'articles: ${articlesCount.count}`);
        console.log('');
    }

    // Structure de la table contacts
    if (tables.some(t => t.name === 'contacts')) {
        console.log('👥 Structure de la table "contacts":');
        const contactsSchema = db.prepare(`PRAGMA table_info(contacts)`).all();
        contactsSchema.forEach(col => {
            console.log(`  - ${col.name}: ${col.type}${col.notnull ? ' NOT NULL' : ''}${col.pk ? ' PRIMARY KEY' : ''}`);
        });

        const contactsCount = db.prepare(`SELECT COUNT(*) as count FROM contacts`).get();
        console.log(`  📊 Nombre de contacts: ${contactsCount.count}`);

        if (contactsCount.count > 0) {
            console.log('\n  📋 Derniers contacts:');
            const recentContacts = db.prepare(`
                SELECT id, name, email, source, status, created_at 
                FROM contacts 
                ORDER BY created_at DESC 
                LIMIT 5
            `).all();

            recentContacts.forEach(contact => {
                console.log(`    • [${contact.id}] ${contact.name} (${contact.email || 'pas d\'email'}) - ${contact.source} - ${contact.status}`);
            });
        }
        console.log('');
    }

    // Index
    console.log('🔍 Index disponibles:');
    const indexes = db.prepare(`
        SELECT name, tbl_name 
        FROM sqlite_master 
        WHERE type='index' AND name NOT LIKE 'sqlite_%'
        ORDER BY tbl_name, name
    `).all();

    indexes.forEach(idx => {
        console.log(`  - ${idx.name} (sur ${idx.tbl_name})`);
    });

    // Taille de la base de données
    const fs = require('fs');
    const stats = fs.statSync(dbPath);
    const sizeInKB = (stats.size / 1024).toFixed(2);
    console.log(`\n💾 Taille de la base de données: ${sizeInKB} KB`);

    db.close();
    console.log('\n✅ Vérification terminée avec succès!');

} catch (error) {
    console.error('❌ Erreur lors de la vérification:', error.message);
    process.exit(1);
}
