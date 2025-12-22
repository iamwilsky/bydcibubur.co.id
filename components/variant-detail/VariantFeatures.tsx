'use client'
import React from 'react'
import { Check } from 'lucide-react'
import { CarModel, Variant } from '@/types'

interface VariantFeaturesProps {
    model: CarModel
    variant: Variant
}

export const VariantFeatures: React.FC<VariantFeaturesProps> = ({ model, variant }) => {
    return (
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
                    <div key={i} className="flex items-center p-4 bg-teal-50/50 dark:bg-teal-900/20 rounded-xl border border-teal-100 dark:border-teal-800">
                        <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center mr-4 flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
