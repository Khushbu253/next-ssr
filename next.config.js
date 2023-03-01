/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig,{
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  env: {
    MY_VAR: process.env.MY_VAR,
    API_URL: 'https://api.cybercomcreation.com',
  },
  FUNCTION_INVOCATION_TIMEOUT:false
}