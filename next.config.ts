import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // 👈 bypass TypeScript errors at build time
  },
  eslint: {
    ignoreDuringBuilds: true, // 👈 bypass ESLint errors at build time
  },
};

export default nextConfig;
