/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // This helps with Netlify deployment
  },
  // Ensure trailing slashes for better SEO
  trailingSlash: true,
};

module.exports = nextConfig;
