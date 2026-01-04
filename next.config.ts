import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'output: export' to enable API routes and dynamic features
  // For production, deploy to Vercel, Railway, Render, or any Node.js host
  trailingSlash: true,
  images: {
    // Enable Next.js image optimization
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable server-side features
  experimental: {
    // Optimize for server deployment
  },
};

export default nextConfig;
