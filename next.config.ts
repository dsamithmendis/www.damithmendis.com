import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/www.damithmendis.com",
  assetPrefix: "/www.damithmendis.com",
};

export default nextConfig;
