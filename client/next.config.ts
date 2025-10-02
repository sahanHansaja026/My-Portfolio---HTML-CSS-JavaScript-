import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',           // enables static export
  basePath: '/My-Portfolio---HTML-CSS-JavaScript-',
  assetPrefix: '/My-Portfolio---HTML-CSS-JavaScript-/', // add this
};

export default nextConfig;
