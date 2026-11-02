import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cultural Heritage · 1829 Foundations to the Present Era",
  description:
    "Chronicles of Ibadan's republican chieftaincy ladder, the founding war camp of 1829, the meritocratic Olubadan stool, and the historic Council of Mogajis.",
  keywords: [
    "Ibadan Cultural Heritage",
    "Origins of Ibadan 1829",
    "Olubadan Succession Ladder",
    "Otun Line",
    "Balogun Line",
    "Yoruba Military State",
    "Mapo Hall History",
  ],
  alternates: {
    canonical: "/heritage",
  },
  openGraph: {
    title: "Cultural Heritage · 1829 Foundations to the Present Era",
    description:
      "Discover the unique republican throne, war camp history, and living chieftaincy traditions of Ibadanland.",
    url: "/heritage",
  },
};

export default function HeritageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
