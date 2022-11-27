/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/photos',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
