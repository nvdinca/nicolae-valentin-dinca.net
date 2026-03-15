import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import ThemeProvider from "@/components/ThemeProvider";
import BackToTop from "@/components/BackToTop";
import JsonLd from "@/app/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_NAME = "Nicolae-Valentin Dinca - Portfolio";
const SITE_DESCRIPTION =
  "Portfolio of Nicolae-Valentin Dinca. Custom digital identities for luxury real estate. Design, branding, and strategic digital architecture.";

const SITE_URL = "https://nicolae-valentin-dinca.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SITE_NAME,
    template: `%s | Nicolae-Valentin Dinca`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Nicolae-Valentin Dinca",
    "portfolio",
    "web design",
    "luxury digital identities",
    "real estate",
    "branding",
    "frontend",
  ],
  authors: [{ name: "Nicolae-Valentin Dinca" }],
  creator: "Nicolae-Valentin Dinca",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    // Default OG image from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "/" },
  category: "portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f8f5f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d))document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');})();`,
          }}
        />
        <JsonLd />
      </head>
      <body className="min-h-screen antialiased overflow-x-hidden bg-[var(--bg-secondary)] text-[var(--text-primary)]">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <CookieConsentBanner />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
