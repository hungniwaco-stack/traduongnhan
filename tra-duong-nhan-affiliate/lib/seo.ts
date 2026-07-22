import type { Metadata } from "next";

const SITE_URL = "https://traduongnhan.shop";
const DEFAULT_OG_IMAGE = "/images/og-default.jpg";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/**
 * Builds a full Metadata object (title, description, canonical, OpenGraph, Twitter)
 * for a single page. Next.js does NOT deep-merge nested `openGraph`/`twitter`
 * objects from the root layout into child pages that omit them, so every page
 * must declare its own — otherwise it silently inherits the homepage's OG data.
 */
export function buildMetadata({ title, description, path, image }: BuildMetadataInput): Metadata {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;
  const url = `${SITE_URL}${normalizedPath}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: { canonical: normalizedPath },
    openGraph: {
      type: "website",
      locale: "vi_VN",
      siteName: "Trà Dưỡng Nhan",
      title,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    }
  };
}
