import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optional: Ignore TypeScript errors during builds
    ignoreBuildErrors: true,
  },
  /* other config options here */
};

export default nextConfig;