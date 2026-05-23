const nextConfig = {
  /* config options here */

  images: {
    domains: [
      'images.unsplash.com',
      'localhost',
      '127.0.0.1'
    ],
    formats: ['image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' blob: data: https:; media-src 'self'; connect-src 'self' http://localhost:* ws://localhost:*;",
  },
  experimental: {
    typedRoutes: true,
  },
  compiler: {
    removeConsole: {
      exclude: ['error', 'warn'],
    },
  },
  swcMinify: true,
  reactStrictMode: true,
  optimizeFonts: true,
};

export default nextConfig;