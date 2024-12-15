import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors and warnings during the build process
  },
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: process.env.NODE_ENV=='production' ? '/HomeUI/' : '',
  basePath: process.env.NODE_ENV=='production' ? '/HomeUI' : '',
};

export default nextConfig;
