/**
 * Script to extract content from static blog TSX files and convert to JSON for Supabase import
 * Usage: npx tsx scripts/extract-static-articles.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const BLOG_DIR = path.join(__dirname, '../src/app/blog');
const OUTPUT_FILE = path.join(__dirname, 'extracted-articles.json');

interface ExtractedArticle {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    image_url: string;
    meta_description: string;
    read_time: string;
    status: string;
    published_at: string;
}

// Parse date from French format to ISO
function parseFrenchDate(dateStr: string): string {
    const months: { [key: string]: string } = {
        'janvier': '01', 'février': '02', 'mars': '03', 'avril': '04',
        'mai': '05', 'juin': '06', 'juillet': '07', 'août': '08',
        'septembre': '09', 'octobre': '10', 'novembre': '11', 'décembre': '12'
    };

    // Match patterns like "30 Décembre 2025" or "25 Décembre 2024"
    const match = dateStr.match(/(\d{1,2})\s+([a-zéû]+)\s+(\d{4})/i);
    if (match) {
        const day = match[1].padStart(2, '0');
        const month = months[match[2].toLowerCase()] || '01';
        const year = match[3];
        return `${year}-${month}-${day}T00:00:00`;
    }
    return '2025-01-01T00:00:00';
}

// Convert JSX-like content to HTML
function jsxToHtml(content: string): string {
    // Remove React imports and component wrappers
    let html = content;

    // Remove className and convert to class (though we'll strip these for clean HTML)
    html = html.replace(/className=\{[^}]+\}/g, '');
    html = html.replace(/className="[^"]+"/g, '');

    // Remove style objects (we'll add inline styles where needed)
    html = html.replace(/style=\{\{[^}]+\}\}/g, '');

    // Convert Link components to <a>
    html = html.replace(/<Link\s+href="([^"]+)"[^>]*>([^<]+)<\/Link>/g, '<a href="$1">$2</a>');

    // Remove Image components (we reference images in image_url)
    html = html.replace(/<Image[^/]*\/>/g, '');
    html = html.replace(/<Image[^>]*>[\s\S]*?<\/Image>/g, '');

    // Clean up div wrappers
    html = html.replace(/<div[^>]*>/g, '<div>');
    html = html.replace(/<section[^>]*>/g, '');
    html = html.replace(/<\/section>/g, '');

    return html.trim();
}

// Extract article data from TSX file
function extractArticle(filePath: string, slug: string): ExtractedArticle | null {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');

        // Extract title from h1
        const titleMatch = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
        const title = titleMatch ? titleMatch[1].trim() : slug;

        // Extract date from meta section
        const dateMatch = content.match(/<span>(\d{1,2}\s+[a-zéû]+\s+\d{4})<\/span>/i);
        const dateStr = dateMatch ? dateMatch[1] : '1 Janvier 2025';
        const published_at = parseFrenchDate(dateStr);

        // Extract read time
        const readTimeMatch = content.match(/(\d+)\s*min\s*de\s*lecture/);
        const read_time = readTimeMatch ? `${readTimeMatch[1]} min` : '5 min';

        // Extract hero image
        const imageMatch = content.match(/src="(\/images\/blog\/[^"]+)"/);
        const image_url = imageMatch ? imageMatch[1].replace(/\.(jpg|png)$/, '.webp') : `/images/blog/${slug}/hero.webp`;

        // Extract intro/excerpt
        const introMatch = content.match(/<p className=\{styles\.intro\}>\s*([\s\S]*?)\s*<\/p>/);
        let excerpt = '';
        if (introMatch) {
            excerpt = introMatch[1].replace(/<[^>]+>/g, '').trim();
        }

        // Extract main content - everything inside <div className={styles.content}>
        const contentMatch = content.match(/<div className=\{styles\.content\}>([\s\S]*?)<\/div>\s*<\/article>/);
        let mainContent = '';

        if (contentMatch) {
            mainContent = contentMatch[1];

            // Convert JSX to HTML
            // Remove className attributes
            mainContent = mainContent.replace(/className=\{styles\.[^}]+\}/g, '');
            mainContent = mainContent.replace(/className="[^"]+"/g, '');

            // Convert style={{ ... }} to style="..."
            mainContent = mainContent.replace(/style=\{\{([^}]+)\}\}/g, (match, styleContent) => {
                // Simple conversion - just remove it for now as it's complex
                return '';
            });

            // Convert <Link href="...">text</Link> to <a href="...">text</a>
            mainContent = mainContent.replace(/<Link\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/Link>/g, '<a href="$1">$2</a>');

            // Remove Image components but keep a reference
            mainContent = mainContent.replace(/<Image[\s\S]*?\/>/g, '');

            // Remove empty divs and clean up
            mainContent = mainContent.replace(/<div\s*>\s*<\/div>/g, '');
            mainContent = mainContent.replace(/<section\s*>/g, '');
            mainContent = mainContent.replace(/<\/section>/g, '');

            // Clean up section divs
            mainContent = mainContent.replace(/<div\s*>\s*(<h[23])/g, '$1');
            mainContent = mainContent.replace(/(<\/p>)\s*<\/div>/g, '$1');

            // Remove {/* comments */}
            mainContent = mainContent.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

            // Clean up whitespace
            mainContent = mainContent.replace(/\n\s*\n/g, '\n');
            mainContent = mainContent.trim();
        }

        // If no excerpt, take first paragraph
        if (!excerpt && mainContent) {
            const firstP = mainContent.match(/<p>([\s\S]*?)<\/p>/);
            if (firstP) {
                excerpt = firstP[1].replace(/<[^>]+>/g, '').substring(0, 200) + '...';
            }
        }

        return {
            title,
            slug,
            content: mainContent,
            excerpt: excerpt || `Article sur ${title}`,
            image_url,
            meta_description: excerpt.substring(0, 160) || title,
            read_time,
            status: 'published',
            published_at
        };
    } catch (error) {
        console.error(`Error extracting ${slug}:`, error);
        return null;
    }
}

// Main function
async function main() {
    console.log('🔍 Scanning blog directory...');

    const articles: ExtractedArticle[] = [];
    const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });

    for (const entry of entries) {
        if (entry.isDirectory() && entry.name !== 'blog-dynamic') {
            const pageFile = path.join(BLOG_DIR, entry.name, 'page.tsx');

            if (fs.existsSync(pageFile)) {
                console.log(`📄 Extracting: ${entry.name}`);
                const article = extractArticle(pageFile, entry.name);

                if (article && article.content) {
                    articles.push(article);
                    console.log(`   ✅ Extracted: ${article.title.substring(0, 50)}...`);
                } else {
                    console.log(`   ⚠️ Skipped (no content): ${entry.name}`);
                }
            }
        }
    }

    // Write to JSON file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(articles, null, 2), 'utf-8');
    console.log(`\n✅ Extracted ${articles.length} articles to ${OUTPUT_FILE}`);
    console.log('\n📝 Next steps:');
    console.log('   1. Review the extracted-articles.json file');
    console.log('   2. Run: npm run import-articles -- scripts/extracted-articles.json');
}

main().catch(console.error);
