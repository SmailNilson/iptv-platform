import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'output: export' to enable API routes and dynamic features
  // For production, deploy to Vercel, Railway, Render, or any Node.js host
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Enable server-side features
  experimental: {
    // Optimize for server deployment
  },
};

export default nextConfig;
