/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization
  },
  trailingSlash: true,
  reactStrictMode: false,
};

export default nextConfig;
