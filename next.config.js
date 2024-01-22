/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'course-nextjs-pokedex-latin-american.s3.amazonaws.com'
      }
    ]
  }
}

module.exports = nextConfig
