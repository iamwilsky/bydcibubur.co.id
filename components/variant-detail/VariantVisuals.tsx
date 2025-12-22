'use client'
import React from 'react'
import { CarModel, Variant } from '@/types'

interface VariantVisualsProps {
    model: CarModel
    variant: Variant
    selectedColor: { name: string; imageUrl: string } | null
}

export const VariantVisuals: React.FC<VariantVisualsProps> = ({ model, variant, selectedColor }) => {
    const displayImage = selectedColor?.imageUrl || variant.imageUrl || model.heroImage

    return (
        <div className="relative group">
            {/* Main Image */}
            <div className="-mx-4 md:mx-0 aspect-[16/10] md:aspect-[16/9] bg-gray-50 dark:bg-slate-800 overflow-hidden md:rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                <img
                    src={displayImage}
                    alt={`Tampilan Luar ${model.name} ${variant.name} warna ${selectedColor?.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm border border-gray-100 dark:border-slate-700 text-slate-900 dark:text-white">
                        {selectedColor?.name}
                    </div>
                    <div className="bg-teal-500 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                        {variant.powertrain}
                    </div>
                </div>
            </div>

            {/* Gallery Thumbnails Below Main Image */}
            <div className="hidden md:grid grid-cols-3 gap-3 mt-4">
                {model.gallery.slice(0, 3).map((img, i) => (
                    <div key={i} className="aspect-[4/3] bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-100 dark:border-slate-700 hover:border-teal-500 transition-colors cursor-pointer">
                        <img src={img} alt={`${model.name} detail ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    )
}
