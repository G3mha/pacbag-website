import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const APP_STORE_URL =
  "https://apps.apple.com/br/app/pacbag-digital-luggage/id6749021887";

const DESCRIPTION =
  "A packing list app for iPhone and iPad. List your bags, put items in them, and check them off as you pack. PacBag adds up the weight of each bag so you know before the airport.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#a855f7" },
    { media: "(prefers-color-scheme: dark)", color: "#a855f7" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pacbag.app"),
  title: {
    default: "PacBag - Travel Packing Lists for iOS",
    template: "%s | PacBag",
  },
  description: DESCRIPTION,
  keywords: [
    "packing list",
    "travel packing",
    "luggage weight",
    "packing checklist",
    "trip planner",
    "iOS app",
  ],
  authors: [{ name: "Enricco Gemha" }],
  creator: "Enricco Gemha",
  publisher: "Enricco Gemha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PacBag - Travel Packing Lists for iOS",
    description: DESCRIPTION,
    url: "https://pacbag.app",
    siteName: "PacBag",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PacBag - travel packing lists for iOS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PacBag - Travel Packing Lists for iOS",
    description: DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@gemhadventures",
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
  icons: {
    icon: [
      { url: "/icon-raw.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-raw.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icon-raw.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/icon-raw.png",
        color: "#a855f7",
      },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://pacbag.app",
  },
  category: "travel",
  classification: "Travel & Tourism",
  referrer: "origin-when-cross-origin",
  appLinks: {
    ios: {
      url: APP_STORE_URL,
      app_store_id: "6749021887",
    },
    web: {
      url: "https://pacbag.app",
      should_fallback: true,
    },
  },
};

// Search engines read this. Every entry in featureList has to be something the
// app actually ships -- see "Keeping it honest" in the README.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PacBag",
  applicationCategory: "TravelApplication",
  operatingSystem: "iOS 18.5",
  description: DESCRIPTION,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Enricco Gemha",
  },
  datePublished: "2025-07-24",
  softwareVersion: "1.0",
  screenshot: "https://pacbag.app/app-screenshot-hero.png",
  featureList: [
    "Multiple bags and sub-bags per trip",
    "Weight tracking against a per-bag limit",
    "Eight ready-made packing lists, plus your own",
    "Custom categories and subcategories",
    "Local reminders before a trip",
    "Export a trip as text, Markdown or rich text",
    "iCloud sync across your own devices",
  ],
  url: "https://pacbag.app",
  downloadUrl: APP_STORE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased font-sans bg-black text-white">
        {children}
      </body>
    </html>
  );
}
