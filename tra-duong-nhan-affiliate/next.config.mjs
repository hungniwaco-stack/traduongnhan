/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoBasePath = "/traduongnhan";

const nextConfig = {
  output: "export",
  basePath: isProd ? repoBasePath : "",
  assetPrefix: isProd ? `${repoBasePath}/` : undefined,
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["react"]
  }
};

export default nextConfig;
