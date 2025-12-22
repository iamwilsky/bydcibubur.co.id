
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  color: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, isPositive, icon, color }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
      <h3 className="text-3xl font-display font-bold text-slate-900">{value}</h3>
      <p className={`text-xs font-bold mt-2 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {change} <span className="text-gray-400 font-normal">vs last month</span>
      </p>
    </div>
    <div className={`p-3 rounded-lg shadow-lg shadow-opacity-20 ${color}`}>
      {icon}
    </div>
  </div>
);
