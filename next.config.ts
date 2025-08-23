import type { NextConfig } from "next";

const isGitHub = process.env.NEXT_PUBLIC_PLATFORM === "github";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: isGitHub ? "/www.damithmendis.com" : "",
  assetPrefix: isGitHub ? "/www.damithmendis.com/" : "",
  env: {
    NEXT_PUBLIC_PLATFORM: process.env.NEXT_PUBLIC_PLATFORM,
  },
};

export default nextConfig;
