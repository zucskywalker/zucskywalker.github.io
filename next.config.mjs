/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Export as static site
  images: {
    unoptimized: true, // For static export
    domains: ["ext.same-assets.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
