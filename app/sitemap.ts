import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { routes, site } from "@/lib/site";

export const dynamic = "force-static";

const paths = [...routes, ...posts.map((post) => `/blog/${post.slug}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/revizyon") || path === "/teklif" ? 0.8 : 0.6,
  }));
}
