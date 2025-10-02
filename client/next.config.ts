/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/My-Portfolio---HTML-CSS-JavaScript-' : '',
  basePath: isProd ? '/My-Portfolio---HTML-CSS-JavaScript-' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/My-Portfolio---HTML-CSS-JavaScript-' : '',
  },
};

module.exports = nextConfig;

