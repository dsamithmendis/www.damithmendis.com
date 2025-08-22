import type { NextConfig } from "next";

const repo = "www.damithmendis.com";

const deployTarget = process.env.NEXT_PUBLIC_DEPLOY_TARGET || "netlify";

const isGitHub = deployTarget === "github";
const basePath = isGitHub ? `/${repo}` : "";
const assetPrefix = isGitHub ? `/${repo}/` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isGitHub ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
