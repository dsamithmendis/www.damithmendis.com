import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isStaticExport ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  basePath: isStaticExport ? "/www.damithmendis.com" : "",
  assetPrefix: isStaticExport ? "/www.damithmendis.com" : "",
};

export default nextConfig;
