/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_ENDPOINT: process.env.BASE_ENDPOINT,
  },
};

module.exports = nextConfig;
