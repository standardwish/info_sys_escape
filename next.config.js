/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.toss.im",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
