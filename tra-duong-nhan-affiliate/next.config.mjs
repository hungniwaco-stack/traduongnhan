/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["react"]
  }
};

export default nextConfig;
