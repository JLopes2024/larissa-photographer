import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/portfolio",
    "/sobre",
    "/servicos",
    "/contato",
  ];

  return routes.map((route) => ({
    url:
      route === "/"
        ? siteConfig.url
        : `${siteConfig.url}${route}`,
  }));
}