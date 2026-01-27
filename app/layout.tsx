import type { Metadata } from 'next'
import Script from 'next/script'
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
        canonical: './',
    },
    title: {
        default: 'BYD Cibubur | Dealer Resmi Mobil Listrik BYD',
        template: '%s | BYD Cibubur'
    },
    description: 'Dealer Resmi BYD Cibubur. Pusat penjualan, servis, dan suku cadang mobil listrik BYD. Dapatkan promo dan harga terbaik hari ini.',
    keywords: ['BYD Cibubur', 'Dealer BYD', 'BYD Sealion 7', 'BYD Seal', 'BYD Atto 3', 'BYD Dolphin'],
    openGraph: {
        title: 'BYD Cibubur | Dealer Resmi Mobil Listrik BYD',
        description: 'Dealer Resmi BYD Cibubur. Pusat penjualan dan servis mobil listrik BYD. Dapatkan promo terbaik hari ini.',
        url: 'https://bydcibubur.co.id',
        siteName: 'BYD Cibubur',
        images: [
            {
                url: '/images/og-image.webp', // Ensure this exists or use a generic one
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
    appleWebApp: {
        capable: true,
        title: 'BYD Cibubur',
        statusBarStyle: 'black-translucent',
    },
    verification: {
        google: 'google-site-verification-code', // Add if available
    },
    other: {
        'og:logo': 'https://bydcibubur.co.id/web-app-manifest-512x512.png',
        'apple-mobile-web-app-title': 'BYD Cibubur',
    }
}

import { getDealerInfo } from '@/lib/data'

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const dealerInfo = await getDealerInfo()

    // AutoDealer Schema with ContactPoint (Consolidated)
    const autoDealerSchema = {
        '@context': 'https://schema.org',
        '@type': 'AutoDealer',
        '@id': 'https://bydcibubur.co.id/#dealer',
        name: dealerInfo.dealerName,
        alternateName: 'Dealer BYD Cibubur',
        image: 'https://bydcibubur.co.id/images/models/seal/hero/byd-seal-hero.webp',
        logo: 'https://bydcibubur.co.id/web-app-manifest-512x512.png',
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
        email: dealerInfo.email,
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: `+${dealerInfo.salesPhone}`,
            contactType: 'sales',
            areaServed: 'ID',
            availableLanguage: ['Indonesian', 'English'],
            contactOption: 'TollFree'
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '08:30',
                closes: '20:00'
            }
        ],
        priceRange: '$$$',
        sameAs: [
            // Add social media URLs when available
            // 'https://www.instagram.com/bydcibubur',
            // 'https://www.facebook.com/bydcibubur',
            // 'https://www.youtube.com/@bydcibubur'
        ]
    }

    return (
        <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
            <head>
                <meta name="theme-color" content="#111827" />
                {/* AutoDealer Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(autoDealerSchema) }}
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
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-Z20JS2NHVY" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-Z20JS2NHVY');
                    `}
                </Script>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
