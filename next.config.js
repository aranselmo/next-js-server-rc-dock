/** @type {import('next').NextConfig} */
const nextConfig = {
  // causes all pages to render twice, which is good for shaking out problems, but sucks for debugging
  reactStrictMode: false, // Recommended for the `pages` directory, default in `app`.
};

module.exports = nextConfig;
