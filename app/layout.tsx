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
    title: {
        default: 'BYD Cibubur | Dealer Resmi Mobil Listrik BYD - Sealion 7, Seal, Atto 3, Dolphin',
        template: '%s | BYD Cibubur'
    },
    description: 'Kunjungi BYD Cibubur, dealer resmi BYD Indonesia. Dapatkan penawaran harga terbaik untuk mobil listrik BYD Sealion 7, Seal, Atto 3, dan Dolphin. Test drive sekarang di showroom kami.',
    keywords: ['BYD Cibubur', 'Dealer BYD', 'BYD Sealion 7', 'BYD Seal', 'BYD Atto 3', 'BYD Dolphin', 'Mobil Listrik Indonesia'],
    openGraph: {
        title: 'BYD Cibubur | Dealer Resmi Mobil Listrik BYD',
        description: 'Dealer Resmi BYD Cibubur. Wujudkan impian mobil listrik Anda dengan teknologi BYD Blade Battery. Hubungi kami untuk promo terbaru.',
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
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png' },
        ],
        other: [
            {
                rel: 'apple-touch-icon-precomposed',
                url: '/apple-touch-icon.png',
            },
        ],
    },
    manifest: '/manifest.json',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
            <head>
                <meta name="theme-color" content="#111827" />
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
