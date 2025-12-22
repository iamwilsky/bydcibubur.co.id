import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './data/**/*.{js,ts}',
    ],
    safelist: [
        // Status colors used in getStatusColor()
        'bg-blue-100', 'text-blue-700',
        'bg-yellow-100', 'text-yellow-700',
        'bg-purple-100', 'text-purple-700',
        'bg-green-100', 'text-green-700',
        'bg-red-100', 'text-red-700',
        'bg-gray-100', 'text-gray-700',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
                display: ['Space Grotesk', 'Inter', 'sans-serif'],
            },
            colors: {
                byd: {
                    dark: '#0B1215',
                    teal: '#00BFA5',
                    blue: '#0057B7',
                    gray: '#F3F4F6'
                }
            },
            letterSpacing: {
                tighter: '-0.05em',
                tight: '-0.025em',
                normal: '0',
                wide: '0.025em',
                wider: '0.05em',
                widest: '0.25em',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        }
    },
    plugins: [],
}

export default config
