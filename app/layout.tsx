import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07111F",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://magajisofibadanland.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Magajis of Ibadan Land · Official Heritage Portal · Àwọn Mògájì Ilẹ̀ Ìbàdàn",
    template: "%s | Magajis of Ibadan Land",
  },
  description:
    "The official cultural and institutional portal of the Association of Mogajis of Ibadanland. Custodians of living heritage, over 2,500 ancestral family compounds (Agbo Ilé), lineage leadership, and historical archives since 1829.",
  keywords: [
    "Magajis of Ibadan",
    "Mogaji",
    "Association of Mogajis of Ibadanland",
    "Àwọn Mògájì Ilẹ̀ Ìbàdàn",
    "Ibadan Heritage",
    "Agbo Ile",
    "Ancestral Family Compounds",
    "Olubadan of Ibadanland",
    "Olubadan Chieftaincy Ladder",
    "Balogun Line",
    "Otun Line",
    "Mapo Hall",
    "Agbede Adodo",
    "Ile Eke Secretariat",
    "Gbongan Mogaji Ile Eke",
    "Yoruba History and Culture",
    "Oyo State Traditional Council",
    "Ibadan Traditional Chieftains",
    "Kiriji War History",
    "Ibadan North-West Ward 2",
  ],
  authors: [{ name: "Association of Mogajis of Ibadanland", url: siteUrl }],
  creator: "Association of Mogajis of Ibadanland",
  publisher: "Association of Mogajis of Ibadanland",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Magajis of Ibadan Land",
    title: "Magajis of Ibadan Land · Official Heritage Portal · Àwọn Mògájì Ilẹ̀ Ìbàdàn",
    description:
      "The official cultural and institutional portal of the Association of Mogajis of Ibadanland. Custodians of living heritage, ancestral family compounds (Agbo Ilé), and lineage leadership since 1829.",
    images: [
      {
        url: "/images/ibadan-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Magajis of Ibadan Land - Official Heritage Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magajis of Ibadan Land · Official Heritage Portal",
    description:
      "Custodians of living heritage, ancestral family compounds (Agbo Ilé), and lineage leadership since 1829.",
    images: ["/images/ibadan-hero.jpg"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": `${siteUrl}/#organization`,
      name: "Association of Mogajis of Ibadanland",
      alternateName: ["Àwọn Mògájì Ilẹ̀ Ìbàdàn", "Mogajis of Ibadan"],
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      image: `${siteUrl}/images/ibadan-hero.jpg`,
      description:
        "The official traditional institution of family compound heads (Mogajis) preserving the ancestral lineages, civic harmony, and cultural heritage of Ibadanland.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ibadan",
        addressRegion: "Oyo State",
        addressCountry: "NG",
      },
      foundingDate: "1829",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Ibadanland, Oyo State, Nigeria",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Magajis of Ibadan Land",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: ["en-NG", "yo-NG"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${manrope.variable} min-h-screen bg-[#07111f] text-[#f4f0e7] selection:bg-[#b89a5a] selection:text-[#07111f] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
