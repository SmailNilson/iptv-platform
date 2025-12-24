import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { WhatsAppButton } from "@/components/widgets/WhatsAppButton";
import { TawkTo } from "@/components/widgets/TawkTo";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/SchemaOrg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abonnement IPTV Premium 4K - Stable & Sans Coupure | Essai 24h",
  description: "Service IPTV stable et fiable. +20 000 chaînes en 4K/HD, VOD illimitée, zéro buffering. Compatible Smart TV, FireStick, Android. Essai gratuit 24h.",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'IPTV Plus France',
    title: 'IPTV Premium 4K - Stable & Sans Coupure',
    description: 'Service IPTV stable. +20 000 chaînes, VOD illimitée, qualité 4K. Essai gratuit 24h.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Schema.org Structured Data */}
        <OrganizationSchema
          name="IPTV Plus France"
          url="https://iptvplusfrance.com"
          contactEmail="contact@iptvplusfrance.com"
          contactPhone="+33749931569"
        />
        <WebSiteSchema />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TQZMMLZ8DE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TQZMMLZ8DE');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <WhatsAppButton />
        <TawkTo />
      </body>
    </html>
  );
}
