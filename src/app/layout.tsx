import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/landing/header";
import { StickyMobileCTA } from "@/components/landing/sticky-mobile-cta";
import { StructuredData } from "@/components/seo/structured-data";
import { SkipToContent } from "@/components/ui/skip-to-content";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { BackToTop } from "@/components/ui/back-to-top";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentic Cash Pipelines — AI-Powered Marketplace Arbitrage System",
  description: "Build an AI scanner that finds £50-£200 profit deals on Vinted, eBay, and 10+ marketplaces while you sleep. Complete system with 54K words of content, working TypeScript code, and proven strategies.",
  keywords: ["marketplace arbitrage", "reselling", "AI scanner", "automated deals", "Vinted", "eBay", "side hustle", "passive income"],
  authors: [{ name: "Agentic Systems" }],
  creator: "Agentic Systems",
  publisher: "Agentic Systems",
  metadataBase: new URL("https://agenticsystems.cash"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agenticsystems.cash",
    title: "Agentic Cash Pipelines — AI-Powered Marketplace Arbitrage",
    description: "Build an AI scanner that finds £50-£200 profit deals on Vinted, eBay, and 10+ marketplaces while you sleep.",
    siteName: "Agentic Cash Pipelines",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Agentic Cash Pipelines" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Cash Pipelines — AI-Powered Marketplace Arbitrage",
    description: "Build an AI scanner that finds £50-£200 profit deals on Vinted, eBay, and 10+ marketplaces while you sleep.",
    images: ["/og-image.png"],
    creator: "@agenticsystems",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "https://agenticsystems.cash" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <SkipToContent />
        <StructuredData />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <StickyMobileCTA />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
