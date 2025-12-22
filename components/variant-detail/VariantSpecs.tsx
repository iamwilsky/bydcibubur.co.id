'use client'
import React from 'react'
import { Variant } from '@/types'

interface VariantSpecsProps {
    variant: Variant
}

export const VariantSpecs: React.FC<VariantSpecsProps> = ({ variant }) => {
    return (
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
    )
}
