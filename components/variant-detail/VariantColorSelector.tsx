'use client'
import React from 'react'
import { CarModel } from '@/types'

interface VariantColorSelectorProps {
    model: CarModel
    selectedColor: { name: string; hex: string } | null
    setSelectedColor: (color: any) => void
}

export const VariantColorSelector: React.FC<VariantColorSelectorProps> = ({ model, selectedColor, setSelectedColor }) => {
    return (
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
    )
}
