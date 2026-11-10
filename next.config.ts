import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));
const isExport = process.env.BN_EXPORT === "1";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80, 90],
    unoptimized: isExport,
  },
  poweredByHeader: false,
  turbopack: { root },
  ...(isExport
    ? {
        output: "export" as const,
        trailingSlash: false,
      }
    : {}),
};

export default nextConfig;
