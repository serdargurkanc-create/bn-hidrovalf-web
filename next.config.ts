import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));
const isExport =
  process.env.BN_EXPORT === "1" || process.env.GITHUB_PAGES === "1";
const basePath = isExport ? "/bn-hidrovalf-web" : "";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80, 90],
    unoptimized: isExport,
  },
  poweredByHeader: false,
  turbopack: { root },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
