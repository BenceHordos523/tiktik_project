/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["kajabi-storefronts-production.kajabi-cdn.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
