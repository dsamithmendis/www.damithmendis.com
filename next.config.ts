import type { NextConfig } from "next";

const repo = "www.damithmendis.com";
const isGitHub = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "github";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isGitHub ? "export" : undefined,
  basePath: isGitHub ? `/${repo}` : "",
  assetPrefix: isGitHub ? `/${repo}/` : "",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHub ? `/${repo}` : "",
    NEXT_PUBLIC_DEPLOY_TARGET:
      process.env.NEXT_PUBLIC_DEPLOY_TARGET || "github",
  },
};

export default nextConfig;
