import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors and warnings during the build process
  },
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/HomeUI/' : '',
  basePath: isProd ? '/HomeUI' : '',+
};

export default nextConfig;
