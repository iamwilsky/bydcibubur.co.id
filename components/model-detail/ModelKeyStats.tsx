
import React from 'react';

export interface HeroStats {
  range: string;
  acceleration: string;
  powertrain: string;
  charging: string;
}

interface ModelKeyStatsProps {
  stats: HeroStats;
}

export const ModelKeyStats: React.FC<ModelKeyStatsProps> = ({ stats }) => {
  return (
    <div className="bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800 transition-colors duration-300 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          <div className="text-center md:text-left">
            <div className="text-2xl md:text-4xl font-display font-bold text-teal-600 dark:text-teal-400 mb-1">{stats.range}</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">Max Range</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-2xl md:text-4xl font-display font-bold text-teal-600 dark:text-teal-400 mb-1">{stats.acceleration}</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">0-100 km/h</div>
          </div>
           <div className="text-center md:text-left">
            <div className="text-2xl md:text-4xl font-display font-bold text-teal-600 dark:text-teal-400 mb-1">{stats.charging}</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">DC Charge</div>
          </div>
           <div className="text-center md:text-left">
            <div className="text-2xl md:text-4xl font-display font-bold text-teal-600 dark:text-teal-400 mb-1">{stats.powertrain}</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">Powertrain</div>
          </div>
        </div>
      </div>
    </div>
  );
};
