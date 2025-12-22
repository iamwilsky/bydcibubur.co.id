'use client'

import React, { useState, useEffect } from 'react';
import { useData } from '@/contexts/DataContext';
import { Save } from 'lucide-react';

export const SettingsView: React.FC = () => {
  const { dealerInfo, updateDealerInfo } = useData();

  // Local state to handle form inputs before saving
  const [form, setForm] = useState(dealerInfo);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setForm(dealerInfo);
  }, [dealerInfo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateDealerInfo(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-2xl bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-8 animate-fade-in mb-20 transition-colors duration-300">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100 dark:border-slate-700">
        <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Dealer Configuration</h3>
        {saved && <span className="text-green-500 text-sm font-bold flex items-center gap-1">Saved!</span>}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Dealer Name</label>
            <input
              type="text"
              name="dealerName"
              value={form.dealerName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Sales Name</label>
            <input
              type="text"
              name="salesName"
              value={form.salesName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">WhatsApp Number (62..)</label>
            <input
              type="text"
              name="salesPhone"
              value={form.salesPhone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Display Phone</label>
            <input
              type="text"
              name="displayPhone"
              value={form.displayPhone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Address</label>
          <textarea
            rows={3}
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-colors"
          />
        </div>

        <div className="pt-4">
          <button type="submit" className="flex items-center gap-2 px-6 py-2.5 bg-teal-600 text-white font-bold rounded-lg shadow-md hover:bg-teal-700 transition-colors">
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};
