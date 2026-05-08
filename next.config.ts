import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Vercel handles output automatically - no standalone needed */
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.blink.new',
      },
      {
        protocol: 'https',
        hostname: 'blink.new',
      },
    ],
  },
};

export default nextConfig;
