/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  assetPrefix: isProd ? '/My-Portfolio---HTML-CSS-JavaScript-/' : '',
  basePath: isProd ? '/My-Portfolio---HTML-CSS-JavaScript-' : '',
  output: 'export',
};

module.exports = nextConfig
