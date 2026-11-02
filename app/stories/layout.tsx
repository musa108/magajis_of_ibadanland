import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historical Chronicles, Oral Traditions & Compound Stories",
  description:
    "Transcribed oral archives, chieftaincy chronicles, the legend of Agbede Adodo, and compound histories of Ibadanland passed down through generations.",
  keywords: [
    "Ibadan Stories",
    "Oral Traditions Ibadan",
    "Agbede Adodo History",
    "Oriki Ibadan",
    "Lamidi Adedibu Story",
    "Chieftaincy Chronicles",
  ],
  alternates: {
    canonical: "/stories",
  },
  openGraph: {
    title: "Historical Chronicles, Oral Traditions & Compound Stories | Ibadanland",
    description:
      "Living archives of Ibadan's warrior spirit, chieftaincy installations, and ancestral legends.",
    url: "/stories",
  },
};

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

