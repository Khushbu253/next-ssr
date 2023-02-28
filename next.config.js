/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig,{
  target: 'serverless',
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
    }
  },
  env: {
    MY_VAR: process.env.MY_VAR,
    API_URL: 'https://api.cybercomcreation.com',
  },
}