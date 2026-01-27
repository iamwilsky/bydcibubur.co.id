import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Metadata } from 'next';
import { Check, ArrowRight, Zap, Battery, Car, Shield, ChevronDown, Percent, Calendar, MapPin, Star, PlayCircle } from 'lucide-react';
import { SocialShare } from '@/components/ui/SocialShare';
import { M9CTAButton } from '@/components/byd-m9/CTAButtons';

// Metadata configuration
export const metadata: Metadata = {
    title: 'BYD M9 Indonesia: Harga, Spesifikasi, & Promo Kredit 2026',
    description: 'Pusat informasi BYD M9 Indonesia. Dapatkan update harga OTR terbaru, simulasi kredit (DP/Angsuran), spesifikasi lengkap, dan jadwal launching. MPV Listrik Premium penantang Alphard.',
    keywords: [
        'BYD M9', 'BYD M9 Indonesia', 'Harga BYD M9', 'Spesifikasi BYD M9', 'Kredit BYD M9',
        'BYD M9 vs Alphard', 'Mobil Listrik Keluarga', 'BYD Cibubur', 'Dealer BYD Jakarta',
        'BYD M9 2026', 'Promo BYD M9'
    ],
    openGraph: {
        title: 'BYD M9 Indonesia - The Premium Hybrid MPV',
        description: 'MPV Hybrid Premium penantang Alphard. Cek spesifikasi, fitur keselamatan, dan promo kredit terbaru.',
        type: 'article',
        images: ['https://bydcibubur.co.id/images/M9/byd-m9-mpv-hybrid-premium-1.webp']
    }
};

export default function BYDM9Page() {
    // Structured Data for SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Product',
                name: 'BYD M9',
                description: 'MPV Hybrid Premium dengan teknologi DM-i Super Hybrid.',
                image: 'https://bydcibubur.co.id/images/M9/byd-m9-mpv-hybrid-premium-1.webp',
                brand: {
                    '@type': 'Brand',
                    name: 'BYD'
                },
                offers: {
                    '@type': 'AggregateOffer',
                    priceCurrency: 'IDR',
                    availability: 'https://schema.org/PreOrder',
                    priceValidUntil: '2026-12-31'
                }
            },
            {
                '@type': 'FAQPage',
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: 'Berapa harga OTR BYD M9 di Indonesia?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Harga resmi OTR BYD M9 untuk wilayah Jakarta, Bandung, Surabaya dan sekitarnya belum diumumkan secara resmi (Coming Soon). Estimasi harga diprediksi sangat kompetitif dibanding kompetitor MPV Premium.'
                        }
                    },
                    {
                        '@type': 'Question',
                        name: 'Apakah tersedia simulasi kredit dan DP ringan untuk BYD M9?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Ya, dealer BYD Indonesia (termasuk BYD Cibubur) akan menyediakan paket kredit dengan DP ringan dan angsuran fleksibel saat unit resmi diluncurkan. Hubungi kami untuk simulasi awal.'
                        }
                    },
                    {
                        '@type': 'Question',
                        name: 'Apa perbedaan BYD M9 vs Toyota Alphard dan Hyundai Staria?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'BYD M9 unggul dalam teknologi DM-i Hybrid yang memberikan efisiensi bahan bakar superior (1000km+ range) dibanding Alphard bensin. Fitur teknologinya juga lebih modern dibanding Staria.'
                        }
                    },
                    {
                        '@type': 'Question',
                        name: 'Bagaimana coverage service dan bengkel BYD M9?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'BYD terus memperluas jaringan dealer 3S di kota besar seperti Jakarta, Bekasi, Bandung, hingga Surabaya. Garansi baterai dan kendaraan terjamin resmi oleh BYD Indonesia.'
                        }
                    }
                ]
            }
        ]
    };

    return (
        <Layout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-teal-500 selection:text-white">

                {/* 1. HERO SECTION */}
                <section className="relative h-screen min-h-[700px] flex flex-col justify-center overflow-hidden bg-slate-50">
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-slate-100 z-0"></div>

                    <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full w-fit mb-6">
                                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                                <span className="text-sm font-bold text-teal-700 tracking-wide uppercase">Coming Soon Indonesia 2026</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-display font-bold text-slate-900 mb-8 leading-[0.9] tracking-tighter">
                                BYD <span className="text-teal-600 block">M9.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-md mb-12">
                                MPV Listrik Premium keluarga terbaru. Kenyamanan Alphard, Efisiensi EV.
                            </p>
                            <div className="flex gap-6">
                                <a href="#variants" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-teal-600 transition-colors duration-300 flex items-center gap-2">
                                    Lihat Varian <ArrowRight className="w-4 h-4" />
                                </a>
                                <M9CTAButton
                                    text="Hubungi Sales"
                                    variant="outline"
                                    className="px-8 py-4"
                                    modelContext="BYD M9 - General Inquiry"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-7 relative h-full flex items-center">
                            <div className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl transform">
                                <img
                                    src="/images/M9/byd-m9-mpv-hybrid-premium-1.webp"
                                    alt="BYD M9 Exterior Indonesia"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 p-8 bg-white/90 backdrop-blur-md rounded-tr-[3rem]">
                                    <p className="text-sm font-bold tracking-widest uppercase text-slate-400">Total Range</p>
                                    <p className="text-4xl font-display font-bold text-slate-900">1.163 km</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. ZIG-ZAG FEATURE SECTIONS */}
                <div className="py-32 space-y-32 container mx-auto px-6 md:px-12 max-w-7xl">
                    {/* Row 1: Technology */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white aspect-[4/3] group">
                                <img
                                    src="/images/M9/byd-m9-mpv-hybrid-premium-2.webp"
                                    alt="Teknologi Hybrid BYD M9"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-teal-500 rounded-full flex items-center justify-center text-white p-6 text-center shadow-xl hidden md:flex">
                                <span className="font-bold leading-tight">DM-i Super Hybrid</span>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-[2px] bg-teal-500"></span>
                                <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">Teknologi & Performa</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                                Revolusi MPV Hybrid: Efisien & Bertenaga.
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Rasakan sensasi berkendara mobil listrik keluarga yang senyap namun bertenaga. Dengan teknologi DM-i, BYD M9 menawarkan solusi mobilitas tanpa batas, menggabungkan efisiensi EV dengan fleksibilitas mesin bensin.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <Check className="w-5 h-5 text-teal-600" />
                                    <span>Baterai Blade Battery (LFP) - Teraman di kelasnya</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <Check className="w-5 h-5 text-teal-600" />
                                    <span>Jarak tempuh EV Mode 100-180 km</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <Check className="w-5 h-5 text-teal-600" />
                                    <span>Akselerasi 0-100 km/jam dalam hitungan detik</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Row 2: Interior */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="order-1">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-[2px] bg-teal-500"></span>
                                <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">Interior & Kenyamanan</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                                Kabin Mewah Setara First Class.
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Interior BYD M9 dirancang untuk memanjakan 7 penumpang dewasa. Captain Seat elektris di baris kedua memberikan kenyamanan maksimal untuk perjalanan jauh maupun mobilitas bisnis di Jakarta.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <Check className="w-5 h-5 text-teal-600" />
                                    <span>Konfigurasi 2+2+3 dengan Walk-through cabin</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <Check className="w-5 h-5 text-teal-600" />
                                    <span>Layar Multimedia Putar Khas BYD</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <Check className="w-5 h-5 text-teal-600" />
                                    <span>Material kulit premium Nappa</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-2 relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white aspect-[4/3] group">
                                <img
                                    src="/images/M9/byd-m9-mpv-hybrid-premium-4.webp"
                                    alt="Interior Mewah BYD M9"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </section>
                </div>

                {/* 3. TECH SPECS GRID */}
                <section className="py-24 bg-slate-900 text-white">
                    <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-4 block">Data Teknis</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Spesifikasi BYD M9
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800 rounded-3xl overflow-hidden">
                            {[
                                { label: 'Dimensi (PxLxT)', value: '5250 x 2000 x 1800 mm' },
                                { label: 'Wheelbase', value: '3110 mm' },
                                { label: 'Mesin', value: '1.5L Turbo Hybrid' },
                                { label: 'Transmisi', value: 'E-CVT' },
                                { label: 'Tipe Baterai', value: 'Blade Battery (LFP)' },
                                { label: 'Jarak Tempuh EV', value: 'up to 180 km' },
                                { label: 'Kapasitas', value: '7 Penumpang' },
                                { label: 'Estimasi Rilis', value: '2026' },
                            ].map((spec, i) => (
                                <div key={i} className="bg-slate-900 p-8 flex flex-col justify-center text-center hover:bg-slate-800/50 transition-colors">
                                    <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">{spec.label}</p>
                                    <p className="text-xl md:text-2xl font-bold text-white">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. FINANCING & LEAD MAGNET */}
                <section className="py-24 bg-teal-50">
                    <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
                                        Rencanakan Pembelian BYD M9.
                                    </h2>
                                    <p className="text-lg text-slate-600 mb-8">
                                        Dapatkan penawaran <strong>Harga BYD M9 Terbaru</strong>, simulasi kredit (DP & Angsuran), serta promo pre-order eksklusif. Kami melayani area Jakarta, Bogor, Depok, Tangerang, Bekasi, hingga Bandung dan Surabaya.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3 text-slate-700">
                                            <div className="bg-teal-100 p-2 rounded-full"><Percent className="w-4 h-4 text-teal-600" /></div>
                                            <span className="font-semibold">Simulasi Cicilan Ringan & DP Rendah</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-700">
                                            <div className="bg-teal-100 p-2 rounded-full"><Calendar className="w-4 h-4 text-teal-600" /></div>
                                            <span className="font-semibold">Info Jadwal Launching & Test Drive</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-700">
                                            <div className="bg-teal-100 p-2 rounded-full"><MapPin className="w-4 h-4 text-teal-600" /></div>
                                            <span className="font-semibold">Lokasi Showroom Dealer Terdekat</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Form Peminat Serius</h3>
                                    <p className="text-sm text-slate-500 mb-6">Jadilah yang pertama tahu harga OTR resmi.</p>

                                    <M9CTAButton
                                        text="Minta Simulasi Kredit"
                                        variant="primary"
                                        className="block w-full py-4 text-center mb-4"
                                        modelContext="BYD M9 - Simulasi Kredit"
                                    />
                                    <M9CTAButton
                                        text="Konsultasi Produk"
                                        variant="outline"
                                        className="block w-full py-4 text-center border-slate-200"
                                        modelContext="BYD M9 - Konsultasi Produk"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. VARIANT SHOWCASE */}
                <section id="variants" className="py-32 bg-slate-50 border-t border-slate-200">
                    <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4 block">Line Up BYD Indonesia</span>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                                Pilih Varian BYD M9
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Variant 1 */}
                            <div className="bg-white rounded-[2rem] p-10 shadow-xl flex flex-col">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">BYD M9 Superior</h3>
                                <div className="my-8 p-6 bg-slate-50 rounded-2xl">
                                    <p className="text-sm text-slate-500 mb-1">Harga OTR Jakarta</p>
                                    <p className="text-3xl font-display font-bold text-slate-400">Coming Soon</p>
                                </div>
                                <ul className="space-y-4 mb-10 flex-grow">
                                    <li className="flex items-start gap-4">
                                        <Check className="w-5 h-5 text-teal-600" />
                                        <span className="text-slate-700">Jarak tempuh EV mode 100km</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Check className="w-5 h-5 text-teal-600" />
                                        <span className="text-slate-700">Captain Seat Baris Kedua</span>
                                    </li>
                                </ul>
                                <a href="https://wa.me/6281283620789" className="py-4 rounded-xl bg-teal-600 text-white font-bold text-center">
                                    Booking Sekarang
                                </a>
                            </div>

                            {/* Variant 2 */}
                            <div className="bg-slate-900 rounded-[2rem] p-10 shadow-2xl text-white relative overflow-hidden flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2">BYD M9 Flagship</h3>
                                <div className="my-8 p-6 bg-white/10 rounded-2xl border border-white/10">
                                    <p className="text-sm text-slate-400 mb-1">Harga OTR Jakarta</p>
                                    <p className="text-3xl font-display font-bold text-slate-400">Coming Soon</p>
                                </div>
                                <ul className="space-y-4 mb-10 flex-grow">
                                    <li className="flex items-start gap-4">
                                        <Check className="w-5 h-5 text-teal-400" />
                                        <span className="text-slate-200">Extended Range EV (180km)</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Check className="w-5 h-5 text-teal-400" />
                                        <span className="text-slate-200">Premium Nappa Leather</span>
                                    </li>
                                </ul>
                                <a href="https://wa.me/6281283620789" className="py-4 rounded-xl bg-teal-500 text-slate-900 font-bold text-center">
                                    Booking Sekarang
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                        <h2 className="text-3xl font-display font-bold text-center text-slate-900 mb-12">
                            Pertanyaan Seputar BYD M9 (FAQ)
                        </h2>

                        <div className="space-y-4">
                            {[
                                {
                                    q: "Berapa harga OTR BYD M9 di Indonesia?",
                                    a: "Estimasi harga BYD M9 Indonesia belum dirilis resmi namun diprediksi kompetitif di segmen MPV Premium. Hubungi dealer BYD Cibubur untuk pricelist terbaru saat launch."
                                },
                                {
                                    q: "Apakah BYD M9 lebih baik dari Toyota Alphard atau Hyundai Staria?",
                                    a: "BYD M9 menawarkan keunggulan teknologi Hybrid DM-i yang tidak dimiliki Alphard (non-hybrid) dan Staria, memberikan efisiensi BBM luar biasa dan opsi berkendara EV yang senyap."
                                },
                                {
                                    q: "Berapa biaya perawatan dan garansi BYD M9?",
                                    a: "Sebagai kendaraan elektrifikasi, biaya perawatan BYD M9 cenderung lebih rendah dari mobil konvensional. Garansi baterai (Blade Battery) dan kendaraan akan mengikuti standar garansi resmi BYD Indonesia (umumnya 8 tahun/160.000km untuk baterai)."
                                },
                                {
                                    q: "Dimana lokasi dealer untuk test drive BYD M9?",
                                    a: "Anda bisa melakukan pre-booking test drive melalui website ini. Unit test drive akan tersedia di dealer resmi BYD Jakarta, Bekasi, Cibubur, Bandung, dan Surabaya saat peluncuran."
                                }
                            ].map((item, i) => (
                                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 bg-slate-50 hover:bg-slate-100 transition-colors">
                                            <span className="text-lg text-slate-900 font-bold">{item.q}</span>
                                            <span className="transition group-open:rotate-180">
                                                <ChevronDown className="w-5 h-5 text-teal-600" />
                                            </span>
                                        </summary>
                                        <div className="text-slate-600 p-6 pt-0 bg-slate-50 border-t border-slate-100 leading-relaxed">
                                            {item.a}
                                        </div>
                                    </details>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. SEO Content Block (Hidden Gem for Rankings) */}
                <section className="py-24 bg-slate-50 border-t border-slate-200">
                    <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                        <div className="prose prose-lg max-w-none text-slate-500">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">Review Singkat BYD M9: MPV Listrik Keluarga Masa Depan</h2>
                            <p>
                                Kehadiran <strong>BYD M9 Indonesia</strong> di tahun 2026 menjadi angin segar bagi pasar otomotif nasional. Sebagai <strong>mobil listrik MPV premium</strong>, M9 tidak hanya menawarkan kemewahan setara <em>business class</em>, tetapi juga solusi hemat energi berkat teknologi DM-i.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800">Kenapa Memilih BYD M9?</h3>
                                    <ul className="list-disc pl-4 space-y-2">
                                        <li><strong>Jarak Tempuh Jauh:</strong> Dengan kombinasi mesin bensin dan baterai, <em>real range</em> BYD M9 bisa tembus 1.000 km lebih.</li>
                                        <li><strong>Harga Kompetitif:</strong> Dibandingkan kompetitor seperti Toyota Alphard HEV, harga BYD M9 diprediksi lebih <em>value for money</em>.</li>
                                        <li><strong>Fitur Keselamatan Lengkap:</strong> Dilengkapi ADAS canggih dan struktur bodi kokoh.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800">Layanan Purna Jual</h3>
                                    <p>
                                        Jaringan <strong>Dealer BYD Indonesia</strong> terus bertumbuh. Konsumen di area Jakarta, Bekasi, Tangerang, Bandung, hingga Surabaya akan mudah menemukan bengkel resmi dan layanan <em>sparepart</em>. Dapatkan juga penawaran <strong>paket kredit BYD M9</strong> dengan bunga rendah khusus pemesanan awal.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. FOOTER CTA */}
                <section id="contact" className="py-24 bg-slate-900 text-white">
                    <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
                        <h2 className="text-3xl font-display font-bold mb-8">
                            Tertarik dengan BYD M9? Hubungi Kami.
                        </h2>
                        <div className="flex justify-center mb-8">
                            <SocialShare
                                url={`https://bydcibubur.co.id/byd-m9`}
                                title="BYD M9 Premium MPV"
                            />
                        </div>
                    </div>
                </section>

            </div>
        </Layout>
    );
}
