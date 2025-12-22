import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'BYD Cibubur | Dealer Resmi Mobil Listrik BYD',
        short_name: 'BYD Cibubur',
        description: 'Dealer Resmi BYD Cibubur. Wujudkan impian mobil listrik Anda dengan teknologi BYD Blade Battery.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#111827',
        icons: [
            {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
