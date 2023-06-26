/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    api_domain: "http://localhost:3001",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
