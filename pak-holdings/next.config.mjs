/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization
  },
  // Disable TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  reactStrictMode: false,
};

export default nextConfig;
