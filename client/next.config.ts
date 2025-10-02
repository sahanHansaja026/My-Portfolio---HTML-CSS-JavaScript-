import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 output: "export",           
  basePath: "/My-Portfolio---HTML-CSS-JavaScript-",
  assetPrefix: "./",
  images: {
    unoptimized: true, // required for next/image in static export
  },
};

export default nextConfig;
