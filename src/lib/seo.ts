import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

type CreatePageMetadataParams = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: CreatePageMetadataParams): Metadata {
  const normalizedPath =
    path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;

  const absoluteUrl =
    normalizedPath === "/"
      ? siteConfig.url
      : `${siteConfig.url}${normalizedPath}`;

  const socialImage = `${siteConfig.url}/opengraph-image`;

  return {
    title,
    description,

    alternates: {
      canonical: normalizedPath,
    },

    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: absoluteUrl,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — fotografia em São Paulo`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}