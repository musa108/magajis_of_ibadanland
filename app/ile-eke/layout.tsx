import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gbọ̀ngàn Mògájì Ilé Ẹ̀kẹ́ · Monumental Assembly & Heritage Secretariat",
  description:
    "The official secretariat project and assembly hall for the Association of Mogajis of Ibadanland, featuring the royal visit and blessing of the Olubadan of Ibadanland.",
  keywords: [
    "Ile Eke",
    "Gbongan Mogaji Ile Eke",
    "Olubadan Visit Ile Eke",
    "Mogaji Secretariat Ibadan",
    "Association of Mogajis Assembly",
  ],
  alternates: {
    canonical: "/ile-eke",
  },
  openGraph: {
    title: "Gbọ̀ngàn Mògájì Ilé Ẹ̀kẹ́ · Monumental Assembly & Heritage Secretariat",
    description:
      "A permanent civic monument and assembly hall for the Mogajis of Ibadanland, blessed by His Imperial Majesty the Olubadan.",
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
