import { MetadataRoute } from "next";

const baseUrl = "https://nicolae-valentin-dinca.net";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
