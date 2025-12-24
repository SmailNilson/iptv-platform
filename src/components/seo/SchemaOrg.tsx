// Schema.org structured data components for SEO

export interface OrganizationSchemaProps {
    name: string;
    url: string;
    logo?: string;
    contactEmail?: string;
    contactPhone?: string;
}

export interface FAQSchemaProps {
    questions: Array<{
        question: string;
        answer: string;
    }>;
}

export interface ArticleSchemaProps {
    title: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
    image?: string;
}

export interface BreadcrumbSchemaProps {
    items: Array<{
        name: string;
        url: string;
    }>;
}

// Organization Schema (pour la page d'accueil/contact)
export function OrganizationSchema({ name, url, logo, contactEmail, contactPhone }: OrganizationSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": name,
        "url": url,
        ...(logo && { "logo": logo }),
        "contactPoint": {
            "@type": "ContactPoint",
            ...(contactEmail && { "email": contactEmail }),
            ...(contactPhone && { "telephone": contactPhone }),
            "contactType": "customer service",
            "availableLanguage": ["French", "English"]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// FAQ Schema (pour la page FAQ)
export function FAQSchema({ questions }: FAQSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions.map(q => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": q.answer
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// Article Schema (pour les articles de blog)
export function ArticleSchema({ title, description, url, datePublished, dateModified, author, image }: ArticleSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "url": url,
        "datePublished": datePublished,
        "dateModified": dateModified || datePublished,
        "author": {
            "@type": "Person",
            "name": author || "IPTV Plus France"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPTV Plus France",
            "url": "https://iptvplusfrance.com"
        },
        ...(image && { "image": image })
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// Breadcrumb Schema (pour la navigation)
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// WebSite Schema (pour la recherche interne)
export function WebSiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "IPTV Plus France",
        "url": "https://iptvplusfrance.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://iptvplusfrance.com/blog?search={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// HowTo Schema (pour les tutoriels)
export function HowToSchema({
    title,
    description,
    steps
}: {
    title: string;
    description: string;
    steps: Array<{ name: string; text: string }>
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": title,
        "description": description,
        "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.text
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
