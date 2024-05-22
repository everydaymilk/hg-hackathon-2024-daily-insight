/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/prompts/prompt1',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
