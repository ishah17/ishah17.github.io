import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.GITHUB_ACTIONS
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
