import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";
const isGitHub = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "github";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isStaticExport ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  basePath: isGitHub ? "/www.damithmendis.com" : "",
  assetPrefix: isGitHub ? "/www.damithmendis.com/" : "",
};

export default nextConfig;
