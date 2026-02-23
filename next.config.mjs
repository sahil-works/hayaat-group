/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.figma.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        port: "",
        pathname: "/api/mcp/asset/**",
      },
    ],
  },
};

export default nextConfig;
