
import React from 'react';
import { Maximize, BatteryCharging, Layers, Activity } from 'lucide-react';
import { CarModel } from '@/types';

interface ModelSpecsGridProps {
  model: CarModel;
}

const SpecRow = ({ label, value }: { label: string; value: string | number }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-slate-700 last:border-0">
    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{label}</span>
    <span className="font-bold text-slate-900 dark:text-white text-right text-sm">{value}</span>
  </div>
);

export const ModelSpecsGrid: React.FC<ModelSpecsGridProps> = ({ model }) => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <Activity className="w-6 h-6 md:w-8 md:h-8 text-teal-500" />
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white">
            Spesifikasi {model.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

          {/* Dimensions */}
          <div className="bg-gray-50 dark:bg-slate-800 p-6 md:p-0 rounded-xl md:rounded-none md:bg-transparent md:dark:bg-transparent">
            <h3 className="flex items-center gap-2 text-sm md:text-lg font-bold uppercase tracking-wide mb-4 md:mb-6 pb-2 border-b border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white">
              <Maximize className="w-4 h-4 md:w-5 md:h-5 text-gray-400" /> Dimensi
            </h3>
            <div className="space-y-1">
              <SpecRow label="Panjang" value={`${model.dimensions.length} mm`} />
              <SpecRow label="Lebar" value={`${model.dimensions.width} mm`} />
              <SpecRow label="Tinggi" value={`${model.dimensions.height} mm`} />
              <SpecRow label="Wheelbase" value={`${model.dimensions.wheelbase} mm`} />
              {model.dimensions.turningRadius && <SpecRow label="Radius Putar" value={`${model.dimensions.turningRadius} m`} />}
              <SpecRow label="Bagasi Belakang" value={`${model.trunk.rear} L`} />
              {model.trunk.frunk && <SpecRow label="Bagasi Depan" value={`${model.trunk.frunk} L`} />}
            </div>
          </div>

          {/* Battery & Charging */}
          <div className="bg-gray-50 dark:bg-slate-800 p-6 md:p-0 rounded-xl md:rounded-none md:bg-transparent md:dark:bg-transparent">
            <h3 className="flex items-center gap-2 text-sm md:text-lg font-bold uppercase tracking-wide mb-4 md:mb-6 pb-2 border-b border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white">
              <BatteryCharging className="w-4 h-4 md:w-5 md:h-5 text-gray-400" /> Baterai
            </h3>
            <div className="space-y-1">
              <SpecRow label="Tipe" value={model.battery.type} />
              <SpecRow label="Kapasitas" value={`${model.battery.capacity} kWh`} />
              <SpecRow label="AC Charging" value={model.battery.charging.ac} />
              <SpecRow label="DC Charging" value={model.battery.charging.dc} />
            </div>
          </div>

          {/* Chassis */}
          <div className="bg-gray-50 dark:bg-slate-800 p-6 md:p-0 rounded-xl md:rounded-none md:bg-transparent md:dark:bg-transparent">
            <h3 className="flex items-center gap-2 text-sm md:text-lg font-bold uppercase tracking-wide mb-4 md:mb-6 pb-2 border-b border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white">
              <Layers className="w-4 h-4 md:w-5 md:h-5 text-gray-400" /> Sasis
            </h3>
            <div className="space-y-1">
              <SpecRow label="Suspensi Depan" value={model.chassis.frontSuspension} />
              <SpecRow label="Suspensi Belakang" value={model.chassis.rearSuspension} />
              <SpecRow label="Rem Depan" value={model.chassis.frontBrakes} />
              <SpecRow label="Ban" value={model.chassis.tyres} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
