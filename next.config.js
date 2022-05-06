/** @type {import('next').NextConfig} */
const withPwa = require("next-pwa");
const nextConfig = withPwa({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});

module.exports = nextConfig;
