import type { Metadata } from "next";
import { site } from "@/lib/site";

/** Rota bazlı title, description, canonical ve OG/Twitter üretir. */
export function pageMeta({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: path,
      siteName: site.name,
      title: `${title} — ${site.name}`,
      description,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description,
      images: ["/og.jpg"],
    },
  };
}
