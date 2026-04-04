import { ArticleSchema, BreadcrumbSchema } from './SchemaOrg';

interface BlogArticleLayoutWrapperProps {
    title: string;
    description: string;
    slug: string;
    datePublished?: string;
    image?: string;
    children: React.ReactNode;
}

export function BlogArticleLayoutWrapper({
    title,
    description,
    slug,
    datePublished,
    image,
    children,
}: BlogArticleLayoutWrapperProps) {
    const url = `https://iptvplusfrance.com/blog/${slug}`;
    return (
        <>
            <ArticleSchema
                title={title}
                description={description}
                url={url}
                datePublished={datePublished || '2025-01-01T00:00:00Z'}
                image={image ? `https://iptvplusfrance.com${image}` : undefined}
            />
            <BreadcrumbSchema items={[
                { name: 'Accueil', url: 'https://iptvplusfrance.com' },
                { name: 'Blog', url: 'https://iptvplusfrance.com/blog' },
                { name: title, url },
            ]} />
            {children}
        </>
    );
}
