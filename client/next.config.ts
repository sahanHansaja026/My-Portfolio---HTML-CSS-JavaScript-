/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  output: 'export', // ✅ replaces next export
  images: {
    unoptimized: true, // ✅ required for static hosting
  },
  assetPrefix: isProd ? '/My-Portfolio---HTML-CSS-JavaScript-/' : '',
  basePath: isProd ? '/My-Portfolio---HTML-CSS-JavaScript-' : '',
};

module.exports = nextConfig;
