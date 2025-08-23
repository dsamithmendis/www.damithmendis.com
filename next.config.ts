import type { NextConfig } from "next";

const repo = "www.damithmendis.com";
const deployTarget = process.env.NEXT_PUBLIC_DEPLOY_TARGET || "netlify";
const isGitHub = deployTarget === "github";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isGitHub ? "export" : undefined,
  basePath: isGitHub ? `/${repo}` : "",
  assetPrefix: isGitHub ? `/${repo}/` : "",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHub ? `/${repo}` : "",
    NEXT_PUBLIC_DEPLOY_TARGET: deployTarget,
  },
};

export default nextConfig;
