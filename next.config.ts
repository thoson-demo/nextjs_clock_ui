import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // bắt buộc cho GitHub Pages
  },
  basePath: process.env.NODE_ENV === "production" ? "/nextjs_clock_ui" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/nextjs_clock_ui/" : "",
};

module.exports = nextConfig;
export default nextConfig;
