/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/device-care',
        destination: '/device-repair-and-maintenance',
        permanent: true,
      },
      {
        source: '/home-automation',
        destination: '/smart-home',
        permanent: true,
      },
      {
        source: '/business-solutions',
        destination: '/it-infrastructure-and-cloud',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
