/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    assetPrefix: isProd ? '/ui/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
