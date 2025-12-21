import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/widgets/WhatsAppButton";
import { TawkTo } from "@/components/widgets/TawkTo";

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
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
        <TawkTo />
      </body>
    </html>
  );
}
