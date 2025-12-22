'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Users, DollarSign, Settings, LogOut, Home, X } from 'lucide-react';
import { useData } from '@/contexts/DataContext';

export type ViewType = 'dashboard' | 'leads' | 'pricing' | 'settings';

interface AdminSidebarProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
  isOpen: boolean;
  onLogout: () => void;
  onClose: () => void;
}

const SidebarItem = ({
  icon,
  label,
  active,
  onClick,
  badgeCount
}: {
  icon: any,
  label: string,
  active: boolean,
  onClick: () => void,
  badgeCount?: number
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 font-medium ${active
        ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/20'
        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
      }`}
  >
    <div className="flex items-center gap-4">
      {icon}
      <span>{label}</span>
    </div>
    {badgeCount !== undefined && badgeCount > 0 && (
      <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
        {badgeCount}
      </span>
    )}
  </button>
);

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeView, onViewChange, isOpen, onLogout, onClose }) => {
  const { dealerInfo, unseenLeadsCount } = useData();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const getInitials = (name: string) => {
    return name
      ? name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
      : 'AD';
  };

  const handleLogoutConfirm = () => {
    onLogout();
    setShowLogoutConfirm(false);
  };

  return (
    <aside className={`fixed left-0 top-0 h-full w-64 bg-slate-900 text-white flex flex-col transition-transform duration-300 z-30 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 shadow-xl md:shadow-none`}>
      {/* Logo */}
      <div className="h-20 flex items-center justify-between px-6 border-b border-slate-800">
        <span className="text-2xl font-display font-bold">BYD <span className="text-teal-500">ADMIN</span></span>
        <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white">
          <X size={24} />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-8 px-4 space-y-2">
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          active={activeView === 'dashboard'}
          onClick={() => { onViewChange('dashboard'); onClose(); }}
        />
        <SidebarItem
          icon={<Users size={20} />}
          label="Leads Data"
          active={activeView === 'leads'}
          badgeCount={unseenLeadsCount}
          onClick={() => { onViewChange('leads'); onClose(); }}
        />
        <SidebarItem
          icon={<DollarSign size={20} />}
          label="Pricing"
          active={activeView === 'pricing'}
          onClick={() => { onViewChange('pricing'); onClose(); }}
        />
        <SidebarItem
          icon={<Settings size={20} />}
          label="Settings"
          active={activeView === 'settings'}
          onClick={() => { onViewChange('settings'); onClose(); }}
        />

        <div className="pt-4 mt-4 border-t border-slate-800">
          <Link href="/" className="w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 font-medium text-slate-400 hover:bg-slate-800 hover:text-white">
            <Home size={20} />
            <span>Homepage</span>
          </Link>
        </div>
      </nav>

      {/* Bottom Profile / Logout */}
      <div className="p-4 border-t border-slate-800">
        {showLogoutConfirm ? (
          <div className="bg-slate-800 rounded-lg p-3 animate-fade-in border border-slate-700">
            <p className="text-sm text-gray-300 mb-3 text-center font-medium">Log out now?</p>
            <div className="flex gap-2">
              <button
                onClick={handleLogoutConfirm}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs py-2 rounded-md font-bold transition-colors"
              >
                Yes
              </button>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-xs py-2 rounded-md font-bold transition-colors"
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <div
            onClick={() => setShowLogoutConfirm(true)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer group select-none"
            title="Click to Logout"
          >
            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-xs font-bold text-white shadow-sm">
              {getInitials(dealerInfo.salesName)}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold truncate text-gray-200 group-hover:text-white transition-colors">
                {dealerInfo.salesName}
              </p>
              <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">Sales Admin</p>
            </div>
            <LogOut size={16} className="text-slate-500 group-hover:text-red-400 transition-colors" />
          </div>
        )}
      </div>
    </aside>
  );
};
