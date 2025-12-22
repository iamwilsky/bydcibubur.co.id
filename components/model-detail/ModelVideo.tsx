'use client'

import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { CarModel } from '@/types';

interface ModelVideoProps {
  model: CarModel;
}

export const ModelVideo: React.FC<ModelVideoProps> = ({ model }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!model.youtubeVideoId) return null;

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-teal-500 font-bold uppercase tracking-widest text-xs mb-2 block">
              Cinematic Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
              See {model.name} in Action
            </h2>
          </div>
          <div className="hidden md:block h-px bg-slate-700 flex-grow ml-12 mb-4"></div>
        </div>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-800 shadow-2xl border border-slate-700 group">
          {!isPlaying ? (
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              {/* Thumbnail High Res */}
              <img
                src={`https://img.youtube.com/vi/${model.youtubeVideoId}/maxresdefault.jpg`}
                alt={`${model.name} Video Thumbnail`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-all duration-300">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Text Hint */}
              <div className="absolute bottom-8 left-8">
                <p className="text-xs font-bold uppercase tracking-widest text-white/80">Click to Play</p>
              </div>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${model.youtubeVideoId}?autoplay=1&rel=0&showinfo=0`}
              title={`${model.name} Official Video`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};
