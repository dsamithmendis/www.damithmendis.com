import type { NextConfig } from "next";

const isGitHubPages = process.env.NEXT_PUBLIC_GHPAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: isGitHubPages ? "/www.damithmendis.com" : "",
  assetPrefix: isGitHubPages ? "/www.damithmendis.com" : "",

  trailingSlash: true,
};

export default nextConfig;
