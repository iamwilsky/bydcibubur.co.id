'use client'

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { CarModel } from '@/types';

interface ModelFeaturesTabsProps {
  model: CarModel;
}

export const ModelFeaturesTabs: React.FC<ModelFeaturesTabsProps> = ({ model }) => {
  const [activeTab, setActiveTab] = useState<'safety' | 'interior' | 'exterior' | 'infotainment'>('safety');

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#0B1215] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-8 md:mb-12 text-center">
          Fitur Unggulan {model.name}
        </h2>

        <div className="-mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto hide-scrollbar mb-8 md:mb-12">
          <div className="flex md:flex-wrap justify-start md:justify-center gap-2 md:gap-4 min-w-max">
            {(['safety', 'interior', 'exterior', 'infotainment'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === tab
                    ? 'bg-slate-900 dark:bg-teal-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-slate-700'
                  }`}
              >
                {tab === 'safety' ? 'Keamanan' : tab === 'infotainment' ? 'Hiburan' : tab}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-6 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 min-h-[300px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {model.features[activeTab].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                </div>
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
