
import React from 'react';
import { CarModel } from '@/types';

interface ModelGalleryProps {
  model: CarModel;
}

export const ModelGallery: React.FC<ModelGalleryProps> = ({ model }) => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-8 md:mb-12">Visual Gallery</h2>

        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-4 px-4 pb-4 hide-scrollbar">
          {model.gallery.map((img, i) => (
            <div key={i} className="snap-center shrink-0 w-[85vw] aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
              <img src={img} alt={`Gallery ${model.name} ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4">
          {model.gallery.map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-lg ${i === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'}`}>
              <img src={img} alt={`Gallery ${model.name} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
