import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Magajis · Certified Compound Heads of Ibadanland",
  description:
    "Directory of certified compound heads (Àwọn Mògájì) across Ibadanland, including executive council leadership, chieftaincy profiles, and interactive lineage trees.",
  keywords: [
    "Magajis of Ibadan",
    "Mogaji Profiles",
    "Mogaji Asimiyu Ariori",
    "Oloye Allen Odugade",
    "Mogaji Agbede Adodo",
    "Chief Samsudeen Akinkunmi Ramoni",
    "Mogaji Toki",
    "Mogaji Gbadamosi",
    "Ibadan Compound Heads",
    "Lineage Leaders Ibadan",
  ],
  alternates: {
    canonical: "/magajis",
  },
  openGraph: {
    title: "The Magajis · Certified Compound Heads of Ibadanland",
    description:
      "Meet the distinguished compound heads (Àwọn Mògájì) steering the traditional council, resolving family matters, and preserving Ibadan's lineages.",
    url: "/magajis",
  },
};

export default function MagajisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
