/** @type {import('next').NextConfig} */
const { hostname } = new URL(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://localhost:3000'}`);
const nextConfig={
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: [`${hostname}`],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  }
}

module.exports = nextConfig;
