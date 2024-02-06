/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  async rewrites() {
    return [{
      source: "/api/:path*",
      destination: "http://127.0.0.1:8000/:path*",
    }];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 在这里进行 webpack 配置
    
    return {
      ...config
    };
  },
  
}

module.exports = nextConfig