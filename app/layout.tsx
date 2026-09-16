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

export const metadata: Metadata = {
  title: "Magajis of Ibadan Land · Official Heritage Portal · Àwọn Mògájì Ilẹ̀ Ìbàdàn",
  description:
    "The official cultural and institutional portal of the Association of Mogajis of Ibadanland. Custodians of living heritage, ancestral family compounds (Agbo Ilé), and lineage leadership since 1829.",
  keywords: [
    "Magajis of Ibadan",
    "Mogaji",
    "Ibadan",
    "Agbo Ile",
    "Yoruba Heritage",
    "Oyo State",
    "Olubadan",
    "Ile Eke",
    "Ibadan History",
  ],
  icons: {
    icon: "/images/mogaji-logo.svg",
    shortcut: "/images/mogaji-logo.svg",
    apple: "/images/mogaji-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${manrope.variable} min-h-screen bg-[#07111f] text-[#f4f0e7] selection:bg-[#b89a5a] selection:text-[#07111f] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}