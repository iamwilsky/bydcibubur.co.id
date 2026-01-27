/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for Netlify
  // Note: We use ISR which Netlify supports via @netlify/plugin-nextjs

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.byd.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/**',
      },
    ],
    // Netlify image optimization
    unoptimized: false,
  },

  // Trailing slashes off for clean URLs
  trailingSlash: false,

  // Generate static pages
  // ISR pages will be regenerated on Netlify

  // Disable X-Powered-By header
  poweredByHeader: false,
}

module.exports = nextConfig
