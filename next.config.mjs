/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove swcMinify as it's no longer needed in newer Next.js versions
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
}

export default nextConfig