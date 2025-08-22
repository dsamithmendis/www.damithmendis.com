import type { NextConfig } from "next";

const repoName = "www.damithmendis.com";

const isGitHub = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },

  basePath: isGitHub ? `/${repoName}` : "",
  assetPrefix: isGitHub ? `/${repoName}/` : "",
};

export default nextConfig;
