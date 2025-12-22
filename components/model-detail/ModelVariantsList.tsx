'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Lock } from 'lucide-react';
import { CarModel } from '@/types';
import { formatPrice } from '@/constants';

interface ModelVariantsListProps {
  model: CarModel;
}

export const ModelVariantsList: React.FC<ModelVariantsListProps> = ({ model }) => {
  return (
    <section id="variants" className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white">Pilihan Varian & Harga</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">Pilih tipe {model.name} yang sesuai dengan kebutuhan Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {model.variants.map((variant) => (
            <Link
              key={variant.id}
              href={variant.soldOut ? '#' : `/variant/${model.id}/${variant.id}`}
              className={`block group ${variant.soldOut ? 'pointer-events-none' : ''}`}
            >
              <div className={`bg-white dark:bg-slate-800 p-6 md:p-12 border transition-all rounded-xl relative overflow-hidden h-full shadow-sm ${variant.soldOut
                  ? 'border-gray-100 dark:border-slate-800 opacity-60 grayscale bg-gray-50 dark:bg-slate-900'
                  : 'border-gray-200 dark:border-slate-700 group-hover:border-teal-500'
                }`}>

                {/* Sold Out Badge */}
                {variant.soldOut && (
                  <div className="absolute top-0 right-0 z-20">
                    <div className="bg-gray-800 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-bl-xl shadow-md">
                      Sold Out
                    </div>
                  </div>
                )}

                <div className="relative z-10">
                  <div className="mb-6">
                    <span className={`inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded mb-2 border ${variant.soldOut
                        ? 'bg-gray-200 text-gray-500 border-gray-300'
                        : 'bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400 border-teal-100 dark:border-transparent'
                      }`}>
                      {variant.powertrain}
                    </span>

                    <h3 className={`text-xl md:text-3xl font-bold mb-2 transition-colors ${variant.soldOut ? 'text-gray-500' : 'text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400'
                      }`}>
                      {variant.name}
                    </h3>

                    <div>
                      {variant.originalPrice && variant.originalPrice > variant.price && (
                        <div className="text-sm text-gray-400 line-through decoration-red-500">
                          {formatPrice(variant.originalPrice)}
                        </div>
                      )}
                      <div className={`text-xl md:text-2xl font-display font-bold mt-1 ${variant.soldOut ? 'text-gray-400' : 'text-slate-900 dark:text-white'
                        }`}>
                        {formatPrice(variant.price)}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between border-b border-gray-100 dark:border-slate-700 pb-2">
                      <span className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">Range</span>
                      <span className={`font-bold text-sm md:text-base ${variant.soldOut ? 'text-gray-500' : 'text-slate-900 dark:text-white'}`}>{variant.battery.range}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 dark:border-slate-700 pb-2">
                      <span className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">0-100 km/h</span>
                      <span className={`font-bold text-sm md:text-base ${variant.soldOut ? 'text-gray-500' : 'text-slate-900 dark:text-white'}`}>{variant.performance.acceleration}</span>
                    </div>
                  </div>

                  {variant.soldOut ? (
                    <div className="flex items-center text-gray-400 font-bold uppercase text-xs tracking-widest">
                      <Lock className="w-3 h-3 mr-2" />
                      Stok Habis
                    </div>
                  ) : (
                    <div className="flex items-center text-teal-600 dark:text-teal-400 font-bold uppercase text-xs tracking-widest">
                      Lihat Detail
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
