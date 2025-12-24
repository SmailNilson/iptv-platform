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
  title: "IPTV Premium France - Streaming HD & 4K",
  description: "Service de streaming premium. Accédez à des milliers de contenus en HD et 4K. Compatible Smart TV, Box Android, FireStick.",
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
