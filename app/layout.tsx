import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://bydcibubur.co.id'),
    alternates: {
        canonical: '/',
    },
    title: {
        default: 'BYD Cibubur | Dealer Resmi Mobil Listrik BYD - Sealion 7, Seal, Atto 3, Dolphin',
        template: '%s | BYD Cibubur'
    },
    description: 'Kunjungi BYD Cibubur, dealer resmi BYD Indonesia. Dapatkan penawaran harga terbaik untuk mobil listrik BYD Sealion 7, Seal, Atto 3, dan Dolphin. Test drive sekarang di showroom kami.',
    keywords: ['BYD Cibubur', 'Dealer BYD', 'BYD Sealion 7', 'BYD Seal', 'BYD Atto 3', 'BYD Dolphin', 'Mobil Listrik Indonesia'],
    openGraph: {
        title: 'BYD Cibubur | Dealer Resmi Mobil Listrik BYD',
        description: 'Dealer Resmi BYD Cibubur. Wujudkan impian mobil listrik Anda dengan teknologi BYD Blade Battery. Hubungi kami untuk promo terbaru.',
        url: 'https://bydcibubur.co.id',
        siteName: 'BYD Cibubur',
        images: [
            {
                url: '/images/og-image.jpg', // Ensure this exists or use a generic one
                width: 1200,
                height: 630,
            }
        ],
        type: 'website',
        locale: 'id_ID',
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png' },
        ],
    },
    manifest: '/manifest.json',
    verification: {
        google: 'google-site-verification-code', // Add if available
    }
}

import { getDealerInfo } from '@/lib/data'

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const dealerInfo = await getDealerInfo()

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AutoDealer',
        '@id': 'https://bydcibubur.co.id/#dealer',
        name: dealerInfo.dealerName,
        image: 'https://bydcibubur.co.id/images/models/seal/hero/byd-seal-hero.webp',
        description: `Dealer Resmi ${dealerInfo.dealerName} menyediakan penjualan, servis, dan suku cadang mobil listrik BYD.`,
        address: {
            '@type': 'PostalAddress',
            streetAddress: dealerInfo.address,
            addressLocality: 'Bekasi',
            addressRegion: 'Jawa Barat',
            postalCode: '17435',
            addressCountry: 'ID'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -6.3768,
            longitude: 106.9158
        },
        url: 'https://bydcibubur.co.id',
        telephone: `+${dealerInfo.salesPhone}`,
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '08:30',
                closes: '20:00'
            }
        ],
        priceRange: '$$$'
    }

    return (
        <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
            <head>
                <meta name="theme-color" content="#111827" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('theme');
                  if (mode === 'dark' || (!mode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
                    }}
                />
            </head>
            <body className="font-sans bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white antialiased">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
