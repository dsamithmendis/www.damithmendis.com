import type { NextConfig } from "next";

const repo = "www.damithmendis.com";

const isGitHub = process.env.NEXT_PUBLIC_PLATFORM === "github";

const basePath = isGitHub ? `/${repo}` : "";
const assetPrefix = isGitHub ? `/${repo}/` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
