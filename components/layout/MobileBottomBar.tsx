'use client'

import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { useModal } from '@/contexts/ModalContext';
import { useData } from '@/contexts/DataContext';

export const MobileBottomBar: React.FC = () => {
  const { openModal } = useModal();
  const { dealerInfo } = useData();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 flex md:hidden h-16 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 shadow-lg transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
    >
      <a
        href={`tel:+${dealerInfo.salesPhone}`}
        className="w-[25%] flex flex-col items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-r border-gray-200 dark:border-slate-800 active:bg-gray-100 dark:active:bg-slate-800"
      >
        <Phone className="w-5 h-5 mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-wide">Call</span>
      </a>

      <button
        onClick={() => openModal()}
        className="w-[75%] flex flex-col items-center justify-center bg-slate-900 dark:bg-teal-600 text-white active:bg-slate-800 dark:active:bg-teal-700"
      >
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          <span className="text-sm font-bold uppercase tracking-wide">Get Offer</span>
        </div>
      </button>
    </div>
  );
};
