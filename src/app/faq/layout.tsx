import { generateSEOMetadata } from '@/lib/seo-config';
import { FAQSchema, BreadcrumbSchema } from '@/components/seo/SchemaOrg';

// INDEX - Page FAQ
export const metadata = generateSEOMetadata(
    '/faq',
    'FAQ IPTV 2026 | Installation, Compatibilité, Support',
    'Réponses à vos questions : comment installer sur Smart TV, compatibilité appareils, résolution problèmes buffering, support technique 24/7.'
);

export default function FaqLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: 'Accueil', url: 'https://iptvplusfrance.com' },
                { name: 'FAQ', url: 'https://iptvplusfrance.com/faq' },
            ]} />
            <FAQSchema questions={[
                { question: "Quand vais-je recevoir mes codes ?", answer: "Instantanément. Notre système est automatisé. Une fois votre paiement validé, vous recevez vos identifiants par email en 1 à 5 minutes." },
                { question: "Puis-je l'utiliser sur plusieurs appareils ?", answer: "Oui. Lors de votre commande, vous pouvez sélectionner le nombre d'écrans simultanés souhaité (de 1 à 5 appareils)." },
                { question: "Ai-je besoin d'un VPN ?", answer: "Non, notre service est sécurisé et ne nécessite pas de VPN. Cependant, si votre FAI bloque l'IPTV, un VPN peut être utile." },
                { question: "Quelle est la vitesse Internet requise ?", answer: "Pour la qualité SD/HD, 8 Mbps suffisent. Pour la FHD/4K, nous recommandons une connexion stable d'au moins 20 Mbps (Fibre recommandée)." },
                { question: "Proposez-vous un remboursement ?", answer: "Nous offrons une garantie de satisfaction de 7 jours. Si vous rencontrez des problèmes techniques que nous ne pouvons résoudre, nous vous remboursons." },
            ]} />
            {children}
        </>
    );
}
