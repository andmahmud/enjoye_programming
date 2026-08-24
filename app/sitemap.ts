import type { MetadataRoute } from "next";

import { categories } from "@/lib/categories";
import { getDocMetas } from "@/lib/docs";
import { tools } from "@/lib/tools";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/docs`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteConfig.url}/tutorials`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${siteConfig.url}/app-monetization`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${siteConfig.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    ...tools.map((tool) => ({
      url: `${siteConfig.url}/tools/${tool.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...categories.map((category) => ({
      url: `${siteConfig.url}/docs/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  const docRoutes: MetadataRoute.Sitemap = getDocMetas().map((doc) => ({
    url: `${siteConfig.url}${doc.url}`,
    lastModified: new Date(`${doc.publishedAt}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...docRoutes];
}
