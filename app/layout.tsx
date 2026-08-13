import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Manrope,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Magajis of Ibadan Land · Official Portal",
  description:
    "The official web platform of the Association of Mogajis of Ibadanland — safeguarding living heritage, family compounds (Agbo Ilé), and lineage leadership.",
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
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${cormorant.variable} ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}