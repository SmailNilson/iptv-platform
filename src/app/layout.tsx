import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { WhatsAppButton } from "@/components/widgets/WhatsAppButton";
import { TawkTo } from "@/components/widgets/TawkTo";

import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abonnement IPTV Smarters Pro - N°1 en France",
  description: "Accédez à +20 000 Chaînes et 50 000 VOD. Sans Contrat. Activation Instantanée. Compatible Smart TV, Box Android, FireStick.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
