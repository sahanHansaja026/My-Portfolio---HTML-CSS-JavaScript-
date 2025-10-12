/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/My-Portfolio' : '',
  basePath: isProd ? '/My-Portfolio' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/My-Portfolio' : '',
  },
};

module.exports = nextConfig;

