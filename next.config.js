/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.github.com'],
  },
}

module.exports = nextConfig
