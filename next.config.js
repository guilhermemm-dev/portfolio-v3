/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/cv',
        destination:
          'https://drive.google.com/file/d/1Nw5uAdtx7VNLTYVbETGQX25KFaEAsnHk/view',
        permanent: false,
      },
      {
        source: '/gh',
        destination: 'https://github.com/guilhermemm-dev',
        permanent: false,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/guilhermemm-dev/',
        permanent: false,
      },
      {
        source: '/email',
        destination: 'mailto:contact@guilhermemm.dev',
        permanent: false,
      },
      {
        source: '/links',
        destination: 'https://nextjs13-linktree.vercel.app',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
