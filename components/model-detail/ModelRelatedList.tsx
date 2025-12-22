'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BYD_MODELS, formatPrice } from '@/constants';

interface ModelRelatedListProps {
  currentModelId: string;
}

export const ModelRelatedList: React.FC<ModelRelatedListProps> = ({ currentModelId }) => {
  const relatedModels = BYD_MODELS.filter(m => m.id !== currentModelId).slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#0B1215] border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">
              Lihat Model Lainnya
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Jelajahi lini kendaraan listrik masa depan dari BYD.
            </p>
          </div>
          <Link href="/" className="hidden md:flex items-center text-teal-600 dark:text-teal-400 font-bold uppercase text-xs tracking-widest hover:underline">
            Lihat Semua <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {relatedModels.map((model) => (
            <Link key={model.id} href={`/model/${model.id}`} className="group block h-full">
              <div className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                {/* Image Area */}
                <div className="relative aspect-[4/3] bg-gray-100 dark:bg-slate-700/50 p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={model.heroImage}
                    alt={model.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded shadow-sm text-slate-900 dark:text-white">
                    {model.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-teal-500 transition-colors">
                      {model.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                      {model.tagline}
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-end border-t border-gray-100 dark:border-slate-700 pt-4">
                      <div>
                        <span className="block text-[10px] text-gray-400 uppercase tracking-wide">Mulai Dari</span>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                          {formatPrice(model.startingPrice).replace(',00', '').replace('Rp', '')}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                        <ArrowRight className="w-4 h-4 text-slate-900 dark:text-white group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/" className="inline-flex items-center text-teal-600 dark:text-teal-400 font-bold uppercase text-xs tracking-widest hover:underline">
            Lihat Semua Model <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
};
