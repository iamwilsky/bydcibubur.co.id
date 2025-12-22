'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Check, Download, Share2 } from 'lucide-react'
import { formatPrice } from '@/constants'
import { Button } from '@/components/ui/Button'
import { useModal } from '@/contexts/ModalContext'
import { useData } from '@/contexts/DataContext'
import { CarModel, Variant } from '@/types'

interface Props {
    model: CarModel
    variant: Variant
}

export function VariantDetailContent({ model, variant }: Props) {
    const { openModal } = useModal()
    const { trackDownload } = useData()

    const [selectedColor, setSelectedColor] = useState(model.colors[0])

    const handleDownloadBrochure = () => {
        trackDownload()
        openModal(`Download Brochure - ${model.name}`)
    }

    // Share Functionality
    const handleShare = async () => {
        const shareData = {
            title: `BYD ${model.name} ${variant.name}`,
            text: `Lihat spesifikasi dan harga BYD ${model.name} ${variant.name} di BYD Cibubur.`,
            url: window.location.href,
        }

        if (navigator.share) {
            try {
                await navigator.share(shareData)
            } catch (err) {
                // User cancelled or share failed
                console.log('Share cancelled or failed', err)
            }
        } else {
            // Fallback to clipboard
            try {
                await navigator.clipboard.writeText(window.location.href)
                // You might want to use a toast notification here if available
                alert('Link halaman telah disalin ke clipboard!')
            } catch (err) {
                console.error('Failed to copy', err)
            }
        }
    }

    // Logic to display correct image: Selected Color Image > Variant Default Image > Model Hero
    const displayImage = selectedColor?.imageUrl || variant.imageUrl || model.heroImage

    return (
        <div className="pt-20 pb-32 md:pb-20 min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-8">

                {/* Breadcrumb / Back Button */}
                <div className="mb-8">
                    <Link href={`/model/${model.id}`} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors group">
                        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                        Kembali ke {model.name}
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Fixed Visuals (Desktop) */}
                    <div className="lg:col-span-7 lg:sticky lg:top-28">
                        <div className="relative group">
                            {/* Main Image */}
                            <div className="-mx-4 md:mx-0 aspect-[16/10] md:aspect-[16/9] bg-gray-50 dark:bg-slate-800 overflow-hidden md:rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                                <img
                                    src={displayImage}
                                    alt={`Tampilan Luar ${model.name} ${variant.name} warna ${selectedColor?.name}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Floating Badge */}
                                <div className="absolute top-6 left-6 flex flex-col gap-2">
                                    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm border border-gray-100 dark:border-slate-700 text-slate-900 dark:text-white">
                                        {selectedColor?.name}
                                    </div>
                                    <div className="bg-teal-500 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                                        {variant.powertrain}
                                    </div>
                                </div>
                            </div>

                            {/* Gallery Thumbnails Below Main Image */}
                            <div className="grid grid-cols-3 gap-3 mt-4">
                                {model.gallery.slice(0, 3).map((img, i) => (
                                    <div key={i} className="aspect-[4/3] bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-100 dark:border-slate-700 hover:border-teal-500 transition-colors cursor-pointer">
                                        <img src={img} alt={`${model.name} detail ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Scrollable Content & Configuration */}
                    <div className="lg:col-span-5 space-y-12">

                        {/* Title Section */}
                        <div>
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white tracking-tighter mb-2">
                                {model.name}
                            </h1>
                            <div className="flex items-center gap-3">
                                <span className="text-xl md:text-2xl text-gray-400 font-light uppercase tracking-widest">{variant.name}</span>
                                <button
                                    onClick={handleShare}
                                    className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:bg-teal-50 hover:text-teal-600 transition-all active:scale-95"
                                    aria-label="Share"
                                >
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-700">
                                {variant.originalPrice && variant.originalPrice > variant.price && (
                                    <div className="text-lg text-gray-400 line-through decoration-red-500 mb-1 font-medium">
                                        {formatPrice(variant.originalPrice)}
                                    </div>
                                )}
                                <div className="text-3xl md:text-4xl font-display font-bold text-teal-600 dark:text-teal-400">
                                    {formatPrice(variant.price)}
                                </div>
                                <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-medium">
                                    {variant.originalPrice && variant.originalPrice > variant.price
                                        ? 'Harga Nett (OTR Cibubur)'
                                        : 'Harga OTR Cibubur (Estimasi)'}
                                </p>
                            </div>
                        </div>

                        {/* Color Selector */}
                        <div className="p-6 md:p-8 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6 block">
                                Pilihan Warna
                            </span>
                            <div className="flex flex-wrap gap-4">
                                {model.colors.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color)}
                                        className={`group relative flex flex-col items-center transition-all ${selectedColor?.name === color.name ? 'scale-110' : 'opacity-70 hover:opacity-100'
                                            }`}
                                    >
                                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-2 p-1 transition-all ${selectedColor?.name === color.name ? 'border-slate-900 dark:border-white' : 'border-transparent'
                                            }`}>
                                            <div
                                                className="w-full h-full rounded-full border border-gray-200 dark:border-slate-600 shadow-inner"
                                                style={{ backgroundColor: color.hex }}
                                            />
                                        </div>
                                    </button>
                                ))}
                            </div>
                            <p className="mt-4 text-sm font-bold text-slate-900 dark:text-white tracking-wide uppercase">{selectedColor?.name}</p>
                        </div>

                        {/* Performance Specs Grid */}
                        <div className="space-y-6">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Spesifikasi Varian</h3>
                            <div className="grid grid-cols-2 gap-px bg-gray-200 dark:bg-slate-700 border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden">
                                <div className="bg-white dark:bg-slate-800 p-6">
                                    <span className="block text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">Tenaga Maksimum</span>
                                    <span className="block text-lg font-display font-bold text-slate-900 dark:text-white">{variant.motor.maxPower}</span>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6">
                                    <span className="block text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">Torsi Maksimum</span>
                                    <span className="block text-lg font-display font-bold text-slate-900 dark:text-white">{variant.motor.maxTorque}</span>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6">
                                    <span className="block text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">Akselerasi (0-100)</span>
                                    <span className="block text-lg font-display font-bold text-slate-900 dark:text-white">{variant.performance.acceleration}</span>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6">
                                    <span className="block text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">Berat Kosong</span>
                                    <span className="block text-lg font-display font-bold text-slate-900 dark:text-white">{variant.weight} kg</span>
                                </div>
                                <div className="col-span-2 bg-white dark:bg-slate-800 p-6 border-t border-gray-100 dark:border-slate-700">
                                    <span className="block text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">Tipe Motor</span>
                                    <span className="block text-base font-medium text-slate-900 dark:text-white">{variant.motor.type}</span>
                                </div>
                            </div>
                        </div>

                        {/* Features Highlight */}
                        <div className="space-y-6">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Highlight Varian</h3>
                            <div className="space-y-4">
                                <div className="flex items-center p-4 bg-teal-50/50 dark:bg-teal-900/20 rounded-xl border border-teal-100 dark:border-teal-800">
                                    <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center mr-4 flex-shrink-0">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">Jarak Tempuh {variant.battery.range}</span>
                                </div>
                                {model.features.interior.slice(0, 5).map((feature, i) => (
                                    <div key={i} className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center mr-4 flex-shrink-0">
                                            <Check className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                                        </div>
                                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Actions (Desktop Only) */}
                        <div className="hidden md:flex flex-col gap-4 pt-8 border-t border-gray-100 dark:border-slate-700">
                            <Button
                                fullWidth
                                size="xl"
                                variant="primary"
                                onClick={() => openModal(`${model.name} - ${variant.name} (${selectedColor?.name})`)}
                                className="shadow-xl shadow-slate-900/10 dark:shadow-black/20 dark:bg-white dark:text-slate-900 dark:hover:bg-gray-200"
                            >
                                Minta Penawaran Terbaik
                            </Button>
                            <div className="grid grid-cols-2 gap-4">
                                <Button
                                    fullWidth
                                    variant="outline"
                                    onClick={handleDownloadBrochure}
                                    className="flex items-center gap-2 justify-center py-4 dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-800"
                                >
                                    <Download className="w-4 h-4" /> E-Brochure
                                </Button>
                                <Button
                                    fullWidth
                                    variant="outline"
                                    onClick={handleShare}
                                    className="flex items-center gap-2 justify-center py-4 dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-800"
                                >
                                    <Share2 className="w-4 h-4" /> Bagikan
                                </Button>
                            </div>
                        </div>

                        {/* Mobile View Hint */}
                        <div className="md:hidden text-center bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-dashed border-gray-200 dark:border-slate-700">
                            <p className="text-xs text-gray-400 font-medium">Gunakan tombol di bawah untuk terhubung dengan sales kami.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
