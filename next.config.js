/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["kajabi-storefronts-production.kajabi-cdn.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
