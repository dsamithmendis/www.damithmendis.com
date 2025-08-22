import type { NextConfig } from "next";

const repo = "www.damithmendis.com";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isGithubActions ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? `/${repo}` : "",
  assetPrefix: isGithubActions ? `/${repo}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repo}` : "",
  },
};

export default nextConfig;
