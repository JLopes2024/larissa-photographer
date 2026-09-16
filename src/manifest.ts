import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,

    short_name: siteConfig.shortName,

    description: siteConfig.description,

    start_url: "/",

    display: "standalone",

    background_color: "#F6F4F0",

    theme_color: "#9A5842",

    lang: "pt-BR",

    orientation: "portrait-primary",

    categories: [
      "photography",
      "lifestyle",
    ],

    icons: [
      {
        src: "/images/brand/logo-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}