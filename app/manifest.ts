import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Association of Mogajis of Ibadanland · Official Heritage Portal",
    short_name: "Mogajis of Ibadan",
    description:
      "The official cultural and institutional portal of the Association of Mogajis of Ibadanland. Custodians of living heritage, ancestral family compounds (Agbo Ilé), and lineage leadership since 1829.",
    start_url: "/",
    display: "standalone",
    background_color: "#07111F",
    theme_color: "#07111F",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

