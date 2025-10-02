import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 output: "export",           
  basePath: "/My-Portfolio---HTML-CSS-JavaScript-",
  assetPrefix: "/My-Portfolio---HTML-CSS-JavaScript-/", 
  images: {
    unoptimized: true,  // Required for Next.js Image on static exports
  },
};

export default nextConfig;
