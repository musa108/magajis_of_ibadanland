import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ancestral Compounds (Agbo Ilé) & Historic Quarters",
  description:
    "Explore over 2,500 historic family compounds (Agbo Ilé) across Mapo, Bere, Kudeti, Ayeye, and Oke Ado with interactive cartography and genealogical records.",
  keywords: [
    "Agbo Ile Ibadan",
    "Ibadan Compounds",
    "Agbede Adodo Compound",
    "Oladimeji Compound",
    "Inalende Quarter",
    "Olorisa Compound",
    "Odugade Compound",
    "Ile Toki",
    "Historic Quarters Ibadan",
    "Mapo Hill",
    "Bere",
  ],
  alternates: {
    canonical: "/compounds",
  },
  openGraph: {
    title: "Ancestral Compounds (Agbo Ilé) & Historic Quarters of Ibadanland",
    description:
      "Explore the living landscape of over 2,500 family compounds carrying centuries of warrior heritage, artisan pride, and civic leadership.",
    url: "/compounds",
  },
};

export default function CompoundsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

