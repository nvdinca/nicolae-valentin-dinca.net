import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nicolae-Valentin Dinca - Portfolio",
    short_name: "NVD Portfolio",
    description: "Custom digital identities for luxury real estate. Design, branding, and strategic digital architecture.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f5f0",
    theme_color: "#0f2a23",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png", purpose: "any" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
}
