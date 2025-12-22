'use client'

import React, { useEffect } from 'react';
import { Users, TrendingUp, Car, Download } from 'lucide-react';
import { StatCard } from './StatCard';
import { useData } from '@/contexts/DataContext';
import { getStatusColor } from '@/data/admin';

export const DashboardView: React.FC = () => {
  const { leads, stats, refreshLeads } = useData();

  // Fetch leads on mount so stats are accurate even if page was loaded as anon
  useEffect(() => {
    refreshLeads();
  }, []);

  // 1. Total Leads
  const totalLeads = leads.length;

  // 2. Brochure Downloads (Real Data)
  const totalDownloads = stats.downloads;

  // 3. Conversion Rate Calculation
  // Formula: (Total Leads / Total Visitors) * 100
  // Prevent division by zero
  const conversionRate = stats.visitors > 0
    ? ((totalLeads / stats.visitors) * 100).toFixed(1)
    : "0.0";

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Visitors Card (Added to show denominator) */}
        <StatCard
          title="Total Visitors"
          value={stats.visitors.toLocaleString()}
          change="Unique"
          isPositive={true}
          icon={<Users className="w-6 h-6 text-white" />}
          color="bg-slate-600"
        />
        <StatCard
          title="Total Leads"
          value={totalLeads.toString()}
          change={`${conversionRate}% Conv.`}
          isPositive={true}
          icon={<Users className="w-6 h-6 text-white" />}
          color="bg-blue-500"
        />
        <StatCard
          title="Brochure Downloads"
          value={totalDownloads.toString()}
          change="PDF Requests"
          isPositive={true}
          icon={<Download className="w-6 h-6 text-white" />}
          color="bg-teal-500"
        />
        <StatCard
          title="Conversion Rate"
          value={`${conversionRate}%`}
          change="Leads/Visitor"
          isPositive={Number(conversionRate) > 1}
          icon={<TrendingUp className="w-6 h-6 text-white" />}
          color="bg-purple-500"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 transition-colors duration-300">
        <h3 className="text-lg font-bold mb-6 font-display text-slate-900 dark:text-white">Recent Activity</h3>
        <div className="space-y-6">
          {leads.slice(0, 5).map((lead) => (
            <div key={lead.id} className="flex items-center gap-4 pb-4 border-b border-gray-50 dark:border-slate-700 last:border-0 last:pb-0">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">
                {lead.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm text-slate-900 dark:text-white">{lead.name} <span className="font-normal text-gray-500 dark:text-gray-400">request penawaran untuk</span> {lead.model}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{lead.date} • via {lead.source}</p>
              </div>
              <span className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full ${getStatusColor(lead.status)}`}>
                {lead.status}
              </span>
            </div>
          ))}
          {leads.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400 text-sm">No recent activity.</p>
          )}
        </div>
      </div>
    </div>
  );
};
