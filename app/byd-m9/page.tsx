'use client';

import Link from 'next/link';
import { Check, ArrowRight, ChevronDown, Percent, Calendar, MapPin } from 'lucide-react';
import { SocialShare } from '@/components/ui/SocialShare';
import { useModal } from '@/contexts/ModalContext';
import { Layout } from '@/components/layout/Layout';

// Client component for interactive elements
const CTAButton = ({ text, variant = 'primary', className = '', modelContext = 'BYD M9' }: { text: string; variant?: 'primary' | 'outline'; className?: string; modelContext?: string }) => {
    const { openModal } = useModal();
    const handleClick = () => openModal(modelContext);

    const baseClasses = "font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";
    const variantClasses = variant === 'primary'
        ? "bg-teal-600 text-white hover:bg-teal-700 rounded-full"
        : "border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full";

    return <button onClick={handleClick} className={`${baseClasses} ${variantClasses} ${className}`}>{text}</button>;
};

export default function BYDM9Page() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            { '@type': 'Product', name: 'BYD M9', description: 'MPV Hybrid Premium dengan teknologi DM-i Super Hybrid.', image: 'https://bydcibubur.co.id/images/M9/byd-m9-mpv-hybrid-premium-1.webp', brand: { '@type': 'Brand', name: 'BYD' }, offers: { '@type': 'AggregateOffer', priceCurrency: 'IDR', availability: 'https://schema.org/PreOrder' } },
            {
                '@type': 'FAQPage', mainEntity: [
                    { '@type': 'Question', name: 'Berapa harga OTR BYD M9 di Indonesia?', acceptedAnswer: { '@type': 'Answer', text: 'Harga resmi OTR BYD M9 belum diumumkan (Coming Soon).' } },
                    { '@type': 'Question', name: 'Apa perbedaan BYD M9 vs Toyota Alphard?', acceptedAnswer: { '@type': 'Answer', text: 'BYD M9 unggul dengan teknologi DM-i Hybrid, range 1000km+.' } }
                ]
            }
        ]
    };

    return (
        <Layout>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="bg-white dark:bg-slate-950 min-h-screen font-sans text-slate-900 dark:text-white selection:bg-teal-500 selection:text-white">

                {/* === HERO SECTION === */}
                <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-slate-50 dark:bg-slate-900">
                    <div className="container mx-auto px-5 md:px-12">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-100 dark:bg-teal-900/50 rounded-full w-fit mb-4">
                            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold text-teal-700 dark:text-teal-300 tracking-wide uppercase">Coming Soon 2026</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white mb-4 leading-[1] tracking-tighter">
                            BYD <span className="text-teal-600">M9.</span>
                        </h1>
                        <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-md mb-6">
                            MPV Listrik Premium keluarga terbaru. Kenyamanan Alphard, Efisiensi EV.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <a href="#variants" className="px-5 py-3 text-sm md:text-base bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full hover:bg-teal-600 dark:hover:bg-teal-300 transition-colors flex items-center gap-2">
                                Lihat Varian <ArrowRight className="w-4 h-4" />
                            </a>
                            <CTAButton text="Hubungi Sales" variant="outline" className="px-5 py-3 text-sm md:text-base" modelContext="BYD M9 - General Inquiry" />
                        </div>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-video md:aspect-[16/7] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl">
                            <img src="/images/M9/byd-m9-mpv-hybrid-premium-1.webp" alt="BYD M9 Premium MPV Indonesia" className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 p-4 md:p-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-tr-2xl">
                                <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-400">Total Range</p>
                                <p className="text-xl md:text-3xl font-display font-bold text-slate-900 dark:text-white">1.163 km</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* === FEATURE SECTIONS (Zig-Zag) === */}
                <div className="py-12 md:py-24 space-y-12 md:space-y-24 container mx-auto px-5 md:px-12 max-w-7xl">
                    {/* Feature 1: Technology */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3]">
                                <img src="/images/M9/byd-m9-mpv-hybrid-premium-2.webp" alt="Teknologi Hybrid BYD M9" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest text-xs mb-2 block">Teknologi</span>
                            <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 leading-tight">Revolusi MPV Hybrid.</h2>
                            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Rasakan sensasi berkendara mobil listrik keluarga yang senyap namun bertenaga dengan teknologi DM-i.</p>
                            <ul className="space-y-2">
                                {['Blade Battery (LFP) Teraman', 'Jarak EV 100-180 km', 'Range Total 1.163 km'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><Check className="w-4 h-4 text-teal-600 dark:text-teal-400" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Feature 2: Interior */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div>
                            <span className="text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest text-xs mb-2 block">Interior</span>
                            <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 leading-tight">Kabin Mewah 7 Seater.</h2>
                            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Captain Seat elektris di baris kedua memberikan kenyamanan maksimal.</p>
                            <ul className="space-y-2">
                                {['Konfigurasi 2+2+3', 'Layar Rotating 15.6 inch', 'Material Nappa Leather'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><Check className="w-4 h-4 text-teal-600 dark:text-teal-400" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3]">
                                <img src="/images/M9/byd-m9-mpv-hybrid-premium-4.webp" alt="Interior Mewah BYD M9" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </section>
                </div>

                {/* === SPECS GRID === */}
                <section className="py-12 md:py-20 bg-slate-900 dark:bg-black text-white">
                    <div className="container mx-auto px-5 md:px-12 max-w-7xl">
                        <h2 className="text-2xl md:text-4xl font-display font-bold text-center mb-8">Spesifikasi BYD M9</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-700 rounded-xl overflow-hidden">
                            {[
                                { label: 'Dimensi', value: '5250 x 2000 mm' }, { label: 'Wheelbase', value: '3110 mm' },
                                { label: 'Mesin', value: '1.5L Hybrid' }, { label: 'Transmisi', value: 'E-CVT' },
                                { label: 'Baterai', value: 'Blade (LFP)' }, { label: 'Range EV', value: '180 km' },
                                { label: 'Kapasitas', value: '7 Seater' }, { label: 'Rilis', value: '2026' },
                            ].map((spec, i) => (
                                <div key={i} className="bg-slate-900 dark:bg-slate-950 p-4 md:p-6 text-center">
                                    <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-wider mb-1">{spec.label}</p>
                                    <p className="text-sm md:text-lg font-bold">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* === FINANCING CTA === */}
                <section className="py-12 md:py-20 bg-teal-50 dark:bg-slate-900">
                    <div className="container mx-auto px-5 md:px-12 max-w-5xl">
                        <div className="bg-white dark:bg-slate-800 rounded-2xl md:rounded-[2rem] p-6 md:p-12 shadow-xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-3">Rencanakan Pembelian.</h2>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Dapatkan simulasi kredit (DP & Angsuran), serta promo pre-order eksklusif.</p>
                                    <ul className="space-y-2">
                                        {[{ icon: Percent, text: 'Simulasi Cicilan Ringan' }, { icon: Calendar, text: 'Info Jadwal Launching' }, { icon: MapPin, text: 'Lokasi Showroom' }].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><item.icon className="w-4 h-4 text-teal-600" /><span>{item.text}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl text-center">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Form Peminat</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Jadilah yang pertama tahu harga resmi.</p>
                                    <CTAButton text="Minta Simulasi Kredit" variant="primary" className="w-full py-3 text-sm mb-2" modelContext="BYD M9 - Simulasi Kredit" />
                                    <CTAButton text="Konsultasi Produk" variant="outline" className="w-full py-3 text-sm" modelContext="BYD M9 - Konsultasi" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* === VARIANTS === */}
                <section id="variants" className="py-12 md:py-20 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                    <div className="container mx-auto px-5 md:px-12 max-w-6xl">
                        <h2 className="text-2xl md:text-4xl font-display font-bold text-center text-slate-900 dark:text-white mb-8">Pilih Varian BYD M9</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Variant 1 */}
                            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">M9 Superior</h3>
                                <p className="text-2xl font-display font-bold text-slate-400 my-4">Coming Soon</p>
                                <ul className="space-y-2 mb-6 flex-grow">
                                    {['EV Range 100km', 'Captain Seat Baris 2'].map((item, i) => (<li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><Check className="w-4 h-4 text-teal-600" />{item}</li>))}
                                </ul>
                                <CTAButton text="Booking Sekarang" variant="primary" className="w-full py-3 text-sm" modelContext="BYD M9 Superior - Booking" />
                            </div>
                            {/* Variant 2 */}
                            <div className="bg-slate-900 dark:bg-slate-900 rounded-2xl p-6 shadow-lg flex flex-col text-white">
                                <h3 className="text-xl font-bold">M9 Flagship</h3>
                                <p className="text-2xl font-display font-bold text-slate-500 my-4">Coming Soon</p>
                                <ul className="space-y-2 mb-6 flex-grow">
                                    {['Extended EV Range 180km', 'Premium Nappa Leather'].map((item, i) => (<li key={i} className="flex items-center gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-teal-400" />{item}</li>))}
                                </ul>
                                <CTAButton text="Booking Sekarang" variant="primary" className="w-full py-3 text-sm bg-teal-500 hover:bg-teal-400 text-slate-900" modelContext="BYD M9 Flagship - Booking" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* === FAQ === */}
                <section className="py-12 md:py-20 bg-white dark:bg-slate-950">
                    <div className="container mx-auto px-5 md:px-12 max-w-3xl">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-slate-900 dark:text-white mb-8">FAQ BYD M9</h2>
                        <div className="space-y-3">
                            {[
                                { q: "Berapa harga OTR BYD M9?", a: "Harga resmi belum diumumkan (Coming Soon). Hubungi dealer untuk update terbaru." },
                                { q: "BYD M9 vs Alphard, mana lebih baik?", a: "M9 unggul teknologi Hybrid DM-i (1000km+ range), lebih hemat BBM dibanding Alphard bensin." },
                                { q: "Berapa garansi baterai BYD M9?", a: "Garansi baterai Blade Battery umumnya 8 tahun/160.000 km." },
                                { q: "Dimana bisa test drive?", a: "Pre-booking test drive via website ini. Dealer resmi: Jakarta, Bekasi, Cibubur, Bandung, Surabaya." }
                            ].map((item, i) => (
                                <details key={i} className="group border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                                    <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                        <span className="text-sm font-bold text-slate-900 dark:text-white">{item.q}</span>
                                        <ChevronDown className="w-4 h-4 text-teal-600 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="text-sm text-slate-600 dark:text-slate-400 p-4 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">{item.a}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* === FOOTER CTA === */}
                <section className="py-12 md:py-16 bg-slate-900 dark:bg-black text-white">
                    <div className="container mx-auto px-5 md:px-12 max-w-3xl text-center">
                        <h2 className="text-xl md:text-2xl font-display font-bold mb-4">Tertarik dengan BYD M9?</h2>
                        <div className="flex justify-center">
                            <SocialShare url="https://bydcibubur.co.id/byd-m9" title="BYD M9 Premium MPV" />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
