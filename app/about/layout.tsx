import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Association · Mission, Constitutional Mandate & Leadership",
  description:
    "Learn about the Association of Mogajis of Ibadanland, its institutional role alongside the Olubadan-in-Council, and its commitment to peace, cultural preservation, and civic progress.",
  keywords: [
    "About Association of Mogajis",
    "Mogaji Role in Ibadan",
    "Olubadan-in-Council",
    "Traditional Council Ibadan",
    "Mogaji Constitution",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About the Association of Mogajis of Ibadanland",
    description:
      "Upholding traditional family governance, arbitrating communal peace, and safeguarding ancient heritage across all 11 Local Governments of Ibadanland.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
