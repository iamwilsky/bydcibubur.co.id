'use client'

import React, { useState, useEffect } from 'react';
import { Save, Eye, Trash2, X, Phone, Calendar } from 'lucide-react';
import { useData } from '@/contexts/DataContext';
import { getStatusColor } from '@/data/admin';
import { Lead } from '@/types';
import { Dialog } from '@headlessui/react';

export const LeadsView: React.FC = () => {
  // Destructure dealerInfo to use for sales name in messages
  const { leads, updateLeadDetails, deleteLead, refreshLeads, markLeadsAsSeen, dealerInfo } = useData();
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Refactored state to hold form data for name/model/status
  const [editForm, setEditForm] = useState<{
    name: string;
    model: string;
    status: Lead['status'];
  }>({ name: '', model: '', status: 'New' });

  const [isDeleting, setIsDeleting] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  // Trigger fetch once when this component mounts (enters screen)
  useEffect(() => {
    const initLeadsView = async () => {
      // 1. Wait for the latest data to be fully fetched first
      await refreshLeads();
      // 2. ONLY THEN mark as seen. This prevents the fetch from overwriting the "seen" status.
      markLeadsAsSeen();
    };

    initLeadsView();
  }, []);

  const openLeadModal = (lead: Lead) => {
    setSelectedLead(lead);
    setEditForm({
      name: lead.name,
      model: lead.model,
      status: lead.status
    });
    setIsModalOpen(true);
    setIsDeleting(false);
    setIsConfirmingDelete(false);
  };

  const handleUpdateLead = () => {
    if (selectedLead) {
      updateLeadDetails(selectedLead.id, {
        name: editForm.name,
        model: editForm.model,
        status: editForm.status
      });
      setIsModalOpen(false);
    }
  };

  const handleQuickStatusUpdate = (id: string, newStatus: Lead['status']) => {
    updateLeadDetails(id, { status: newStatus });
  };

  const handleDelete = async () => {
    if (selectedLead) {
      setIsDeleting(true);
      const success = await deleteLead(selectedLead.id);
      setIsDeleting(false);
      if (success) {
        setIsModalOpen(false);
      }
    }
  };

  // --- Dynamic WhatsApp Logic ---
  const handleWhatsAppClick = (lead: Lead) => {
    let message = '';
    const greeting = `Halo Bapak/Ibu *${lead.name}*,`;
    const intro = `saya *${dealerInfo.salesName}* dari *${dealerInfo.dealerName}*.`;

    // Ensure phone number has 62 prefix
    let phone = lead.phone.replace(/\D/g, '');
    if (phone.startsWith('0')) {
      phone = '62' + phone.substring(1);
    }

    switch (lead.status) {
      case 'New':
        message = `${greeting}\n\nPerkenalkan ${intro} Terima kasih atas ketertarikan Anda pada unit *${lead.model}* melalui website kami.\n\nApakah ada pertanyaan spesifik mengenai promo atau spesifikasi yang bisa saya bantu jelaskan?`;
        break;

      case 'Contacted':
        message = `${greeting}\n\n${intro} Izin follow-up mengenai unit *${lead.model}* yang sebelumnya Bapak/Ibu minati.\n\nApakah sudah ada rencana untuk melihat unit atau Test Drive di showroom kami minggu ini?`;
        break;

      case 'Prospect':
        message = `${greeting}\n\nSemoga hari Anda menyenangkan. Saya *${dealerInfo.salesName}*. Mengingatkan kembali untuk penawaran spesial *${lead.model}* bulan ini.\n\nBoleh saya bantu buatkan simulasi kredit atau penawaran finalnya, Pak/Bu?`;
        break;

      case 'SPK':
        message = `${greeting}\n\nTerima kasih kembali atas kepercayaan Bapak/Ibu memilih *${lead.model}* di ${dealerInfo.dealerName}.\n\nIzin memberikan update mengenai proses pemesanan unit kendaraan Bapak/Ibu.`;
        break;

      case 'Lost':
        message = `${greeting}\n\nSaya *${dealerInfo.salesName}* dari BYD. Terima kasih sudah sempat berdiskusi dengan kami sebelumnya.\n\nJika di masa depan Bapak/Ibu atau kerabat membutuhkan informasi kendaraan listrik kembali, mohon jangan ragu menghubungi saya ya.`;
        break;

      default:
        message = `${greeting}\n\nPerkenalkan ${intro} Saya ingin mengkonfirmasi inquiry Bapak/Ibu untuk unit *${lead.model}*.`;
    }

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const downloadCSV = () => {
    const headers = ['Name', 'Phone', 'Model', 'Date', 'Status', 'Source'];
    const rows = leads.map(l => [l.name, l.phone, l.model, l.date, l.status, l.source]);
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `leads_export_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden animate-fade-in transition-colors duration-300">
        <div className="p-6 border-b border-gray-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Inquiry & Leads</h3>
          <button
            onClick={downloadCSV}
            className="flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-lg text-sm font-bold hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors w-full md:w-auto justify-center"
          >
            <Save className="w-4 h-4" /> Export CSV
          </button>
        </div>

        {/* Desktop Table View (Hidden on Mobile) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-slate-700/50 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                <th className="p-4">Customer Name</th>
                <th className="p-4">Model Interest</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500 dark:text-gray-400">No leads available yet.</td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors group">
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{lead.name}</td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{lead.model}</td>
                    <td className="p-4 text-sm font-mono text-gray-600 dark:text-gray-300">{lead.phone}</td>
                    <td className="p-4 text-sm text-gray-500 dark:text-gray-400">{lead.date}</td>
                    <td className="p-4">
                      {/* Interactive Status Dropdown in Table */}
                      <div className="relative">
                        <select
                          value={lead.status}
                          onChange={(e) => handleQuickStatusUpdate(lead.id, e.target.value as any)}
                          className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-300 dark:focus:ring-slate-600 pr-6 ${getStatusColor(lead.status)}`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Prospect">Prospect</option>
                          <option value="SPK">SPK</option>
                          <option value="Lost">Lost</option>
                        </select>
                        {/* Dropdown Indicator (CSS Only trick or SVG) */}
                        <div className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none opacity-50">
                          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 flex items-center justify-center gap-3">
                      {/* Styled Follow-up Button (Desktop) - THEME COLOR */}
                      <button
                        onClick={() => handleWhatsAppClick(lead)}
                        className="px-3 py-2 bg-teal-600 text-white rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-teal-700 transition-all shadow-sm hover:shadow-md"
                        title="Follow-up via WhatsApp"
                      >
                        FOLLOW-UP
                      </button>

                      <button
                        onClick={() => openLeadModal(lead)}
                        className="p-2 rounded-lg border border-gray-200 dark:border-slate-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View (Hidden on Desktop) */}
        <div className="md:hidden">
          {leads.length === 0 ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">No leads available yet.</div>
          ) : (
            <div className="divide-y divide-gray-100 dark:divide-slate-700">
              {leads.map((lead) => (
                <div key={lead.id} className="p-4 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">{lead.name}</h4>
                      <div className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1 mt-1">
                        <Calendar className="w-3 h-3" /> {lead.date}
                      </div>
                    </div>
                    {/* Status Dropdown Mobile */}
                    <div className="relative">
                      <select
                        value={lead.status}
                        onChange={(e) => handleQuickStatusUpdate(lead.id, e.target.value as any)}
                        className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full appearance-none pr-6 ${getStatusColor(lead.status)}`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Prospect">Prospect</option>
                        <option value="SPK">SPK</option>
                        <option value="Lost">Lost</option>
                      </select>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">{lead.model}</div>

                  <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-700">
                    <div className="text-sm font-mono text-gray-500 dark:text-gray-400 flex items-center gap-2 mb-3">
                      <Phone className="w-3 h-3" /> {lead.phone}
                    </div>
                    <div className="flex gap-2 w-full">
                      <button
                        onClick={() => openLeadModal(lead)}
                        className="flex-1 px-3 py-2 bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold uppercase tracking-wider justify-center"
                      >
                        Manage
                      </button>
                      {/* Styled Follow-up Button (Mobile) - THEME COLOR */}
                      <button
                        onClick={() => handleWhatsAppClick(lead)}
                        className="flex-1 px-3 py-2 bg-teal-600 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-teal-700 shadow-sm justify-center"
                      >
                        FOLLOW-UP
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Edit/View Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm w-full bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden transition-colors duration-300 border border-gray-100 dark:border-slate-700">
            <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-slate-700">
              <Dialog.Title className="text-lg font-bold font-display text-slate-900 dark:text-white">Manage Lead</Dialog.Title>
              <button onClick={() => setIsModalOpen(false)}><X className="w-5 h-5 text-gray-400 hover:text-slate-900 dark:hover:text-white" /></button>
            </div>

            {selectedLead && (
              <div className="p-6 space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase text-gray-400 dark:text-gray-500 mb-1 block">Customer Name</label>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-slate-600 dark:bg-slate-700 rounded-lg text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 pl-1">{selectedLead.phone}</p>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-gray-400 dark:text-gray-500 mb-1 block">Interest / Model</label>
                  <input
                    type="text"
                    value={editForm.model}
                    onChange={(e) => setEditForm({ ...editForm, model: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-slate-600 dark:bg-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 pl-1">Via {selectedLead.source}</p>
                </div>

                <div className="pt-2">
                  <label className="text-xs font-bold uppercase text-gray-400 dark:text-gray-500 mb-2 block">Update Status</label>
                  <select
                    value={editForm.status}
                    onChange={(e) => setEditForm({ ...editForm, status: e.target.value as any })}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 dark:text-white"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Prospect">Prospect</option>
                    <option value="SPK">SPK</option>
                    <option value="Lost">Lost</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4 mt-2 border-t border-gray-100 dark:border-slate-700">
                  <button
                    onClick={handleUpdateLead}
                    disabled={isDeleting}
                    className="flex-1 bg-teal-600 text-white py-2 rounded-lg font-bold text-sm hover:bg-teal-700 disabled:opacity-50"
                  >
                    Save Changes
                  </button>
                  {isConfirmingDelete ? (
                    <button
                      onClick={handleDelete}
                      disabled={isDeleting}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700 flex items-center gap-2 disabled:opacity-50 animate-fade-in"
                    >
                      {isDeleting ? 'Deleting...' : 'Yakin hapus?'}
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsConfirmingDelete(true)}
                      disabled={isDeleting}
                      className="px-4 py-2 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 rounded-lg font-bold text-sm hover:bg-red-100 dark:hover:bg-red-900/20 flex items-center gap-2 disabled:opacity-50"
                    >
                      <Trash2 className="w-4 h-4" /> Delete
                    </button>
                  )}
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};
