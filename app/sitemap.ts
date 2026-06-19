import type { MetadataRoute } from "next";
import { baseUrl, seoPages } from "./seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...seoPages.map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
  ];
}
