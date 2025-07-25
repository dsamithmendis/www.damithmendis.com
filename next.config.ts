import type { NextConfig } from "next";

const repo = "www.damithmendis.com"; // ✅ Your GitHub repo name

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ✅ Required for static export with remote images
  },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}`,
  env: {
    NEXT_PUBLIC_BASE_PATH: `/${repo}`, // ✅ Add this line
  },
};

export default nextConfig;
