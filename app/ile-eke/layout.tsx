import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commissioning of Gbọ̀ngàn Mògájì Ilé Ẹ̀kẹ́ · Official Opening by Olubadan",
  description:
    "Official opening and commissioning of ILE EKE (MOGAJIS HALL) Multipurpose Hall by His Imperial Majesty, Oba Senator Rashidi Adewolu Ladoja, FNSE, Arusa I, the Olubadan of Ibadanland on Saturday, 14th November 2026.",
  keywords: [
    "Ile Eke",
    "Gbongan Mogaji Ile Eke",
    "Commissioning of Ile Eke",
    "Olubadan Rashidi Ladoja",
    "Arusa I",
    "Oba Tajudeen Ajibola Balogun",
    "Oba Kola Daisi Ashipa Olubadan",
    "Olubadan Palace Complex Oke-Aremo",
    "Awards of Merit Mogajis",
    "Mogaji Secretariat Ibadan",
    "Association of Mogajis Assembly",
  ],
  alternates: {
    canonical: "/ile-eke",
  },
  openGraph: {
    title: "Commissioning of Gbọ̀ngàn Mògájì Ilé Ẹ̀kẹ́ · Official Opening by Olubadan",
    description:
      "A landmark achievement in unity and traditional leadership: the official commissioning of ILE EKE (MOGAJIS HALL) by His Imperial Majesty Oba Senator Rashidi Adewolu Ladoja, Arusa I.",
    url: "/ile-eke",
  },
};

export default function IleEkeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

