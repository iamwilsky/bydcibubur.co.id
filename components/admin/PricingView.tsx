'use client'

import React, { useState } from 'react';
import { Edit2, Save, X, RotateCcw, AlertTriangle } from 'lucide-react';
import { useData } from '@/contexts/DataContext';
import { formatPrice, BYD_MODELS } from '@/constants';
import { CarModel } from '@/types';

export const PricingView: React.FC = () => {
  const { models, updateVariant, resetData } = useData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [resettingId, setResettingId] = useState<string | null>(null);

  // 2-Step Reset Confirmation State
  // Stores the ID of the model that is currently asking "Are you sure?"
  const [confirmResetId, setConfirmResetId] = useState<string | null>(null);

  // Temporary state for editing
  const [editForm, setEditForm] = useState({
    price: 0,
    originalPrice: 0,
    soldOut: false
  });

  const handleEditClick = (modelId: string, variant: any) => {
    setEditingId(`${modelId}-${variant.id}`);
    setEditForm({
      price: variant.price,
      // Default to current originalPrice, or fallback to current price if no originalPrice exists
      originalPrice: variant.originalPrice || variant.price,
      soldOut: variant.soldOut || false
    });
  };

  const handleSave = (modelId: string, variantId: string) => {
    updateVariant(modelId, variantId, {
      price: Number(editForm.price),
      originalPrice: Number(editForm.originalPrice),
      soldOut: editForm.soldOut
    });
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  // Step 1: User clicks "Reset" -> Show confirmation button
  const initiateReset = (modelId: string) => {
    setConfirmResetId(modelId);
    // Auto cancel confirmation after 3 seconds if not clicked
    setTimeout(() => {
      setConfirmResetId(prev => prev === modelId ? null : prev);
    }, 4000);
  };

  // Step 2: User clicks "Confirm Reset" -> Execute Logic
  const executeReset = async (modelId: string) => {
    setResettingId(modelId);
    setConfirmResetId(null);
    try {
      await resetData(modelId);
    } catch (e) {
      console.error("Reset error", e);
    } finally {
      setResettingId(null);
    }
  };

  // Check if a model has changes compared to BYD_MODELS constant
  const hasChanges = (currentModel: CarModel) => {
    const staticModel = BYD_MODELS.find(m => m.id === currentModel.id);
    if (!staticModel) return false;

    // Check if any variant is different
    return currentModel.variants.some(v => {
      const staticV = staticModel.variants.find(sv => sv.id === v.id);
      if (!staticV) return false;

      // Ensure undefined fields are handled consistently (e.g., originalPrice)
      const currentOriginal = v.originalPrice || 0;
      const staticOriginal = staticV.originalPrice || 0;
      const currentSoldOut = v.soldOut || false;
      const staticSoldOut = staticV.soldOut || false;

      return v.price !== staticV.price ||
        currentOriginal !== staticOriginal ||
        currentSoldOut !== staticSoldOut;
    });
  };

  return (
    <div className="space-y-6 animate-fade-in pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h3 className="text-lg font-bold font-display">Manage Pricing & Availability</h3>
          <p className="text-sm text-gray-500">Update harga OTR, diskon, dan status stok unit.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {models.map((model) => {
          const isModified = hasChanges(model);
          const isModelResetting = resettingId === model.id;
          const isConfirming = confirmResetId === model.id;

          return (
            <div key={model.id} className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-12 bg-gray-50 rounded flex items-center justify-center p-1">
                    <img src={model.heroImage} alt={model.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-display text-slate-900">{model.name}</h4>
                    <span className="text-xs text-gray-400 uppercase tracking-widest">{model.category}</span>
                  </div>
                </div>

                {/* Granular Reset Button Logic */}
                {isModified && (
                  <div className="flex items-center">
                    {isConfirming ? (
                      <button
                        onClick={() => executeReset(model.id)}
                        className="flex items-center gap-2 text-xs font-bold text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-lg transition-colors animate-pulse"
                      >
                        <AlertTriangle className="w-3 h-3" /> Yakin Reset?
                      </button>
                    ) : (
                      <button
                        onClick={() => initiateReset(model.id)}
                        disabled={isModelResetting}
                        className="flex items-center gap-2 text-xs font-bold text-orange-600 bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-lg border border-orange-200 transition-colors disabled:opacity-50"
                        title="Kembalikan harga model ini ke default"
                      >
                        <RotateCcw className={`w-3 h-3 ${isModelResetting ? 'animate-spin' : ''}`} />
                        {isModelResetting ? 'Resetting...' : 'Reset Default'}
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {/* Header Row - Hidden on Mobile */}
                <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 bg-gray-50 rounded-lg text-xs font-bold uppercase text-gray-500">
                  <div className="col-span-3">Variant Name</div>
                  <div className="col-span-3">Harga OTR (Base)</div>
                  <div className="col-span-3">Harga Nett (Tayang)</div>
                  <div className="col-span-2 text-center">Status</div>
                  <div className="col-span-1 text-center">Action</div>
                </div>

                {model.variants.map(variant => {
                  const isEditing = editingId === `${model.id}-${variant.id}`;
                  // Display OTR: if originalPrice exists, use it. Else use price (assuming no discount).
                  const displayOTR = variant.originalPrice || variant.price;
                  // Display Nett: always variant.price
                  const displayNett = variant.price;

                  return (
                    <div key={variant.id} className={`flex flex-col md:grid md:grid-cols-12 gap-4 items-center px-4 py-4 rounded-lg border transition-all ${variant.soldOut ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-100'
                      } ${isEditing ? 'ring-2 ring-teal-500 border-transparent shadow-md z-10' : ''}`}>

                      {/* Variant Name */}
                      <div className="w-full md:col-span-3 flex justify-between items-center md:block">
                        <span className="md:hidden text-xs font-bold uppercase text-gray-400">Variant</span>
                        <span className={`font-bold text-sm ${variant.soldOut ? 'text-gray-500' : 'text-slate-900'}`}>{variant.name}</span>
                      </div>

                      {/* OTR Price (Base) Input/Display */}
                      <div className="w-full md:col-span-3">
                        {isEditing ? (
                          <div className="flex flex-col w-full">
                            <span className="text-[10px] text-gray-500 mb-1 font-bold">Harga OTR (Asli)</span>
                            <div className="flex items-center">
                              <span className="text-xs text-gray-500 mr-2">Rp</span>
                              <input
                                type="number"
                                value={editForm.originalPrice}
                                onChange={(e) => setEditForm({ ...editForm, originalPrice: Number(e.target.value) })}
                                className="w-full text-sm font-mono border border-gray-300 rounded px-2 py-1 outline-none focus:border-teal-500 bg-white text-slate-900"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-between md:block w-full">
                            <span className="md:hidden text-xs font-bold uppercase text-gray-400">Harga OTR</span>
                            <span className={`text-sm font-mono font-bold ${variant.soldOut ? 'text-gray-400' : 'text-gray-600'}`}>
                              {formatPrice(displayOTR)}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Nett Price (Tayang) Input/Display */}
                      <div className="w-full md:col-span-3">
                        {isEditing ? (
                          <div className="flex flex-col w-full">
                            <span className="text-[10px] text-gray-500 mb-1 font-bold">Harga Nett (Setelah Diskon)</span>
                            <div className="flex items-center">
                              <span className="text-xs text-gray-500 mr-2">Rp</span>
                              <input
                                type="number"
                                value={editForm.price}
                                onChange={(e) => setEditForm({ ...editForm, price: Number(e.target.value) })}
                                className="w-full text-sm font-mono border border-gray-300 rounded px-2 py-1 outline-none focus:border-teal-500 bg-white text-slate-900"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-between md:block w-full">
                            <span className="md:hidden text-xs font-bold uppercase text-gray-400">Harga Nett</span>
                            <div className="flex flex-col md:block text-right md:text-left">
                              <span className={`text-sm font-mono font-bold ${variant.soldOut ? 'text-gray-400' : 'text-teal-600'}`}>
                                {formatPrice(displayNett)}
                              </span>
                              {/* Show Discount Amount if applicable */}
                              {displayOTR > displayNett && (
                                <span className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded ml-2 inline-block">
                                  Hemat {formatPrice(displayOTR - displayNett).replace('Rp', '')}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Sold Out Toggle */}
                      <div className="w-full md:col-span-2 flex justify-between md:justify-center items-center">
                        <span className="md:hidden text-xs font-bold uppercase text-gray-400">Status</span>
                        {isEditing ? (
                          <div className="flex flex-col items-end md:items-center">
                            <label className="relative inline-flex items-center cursor-pointer h-[26px]">
                              <input
                                type="checkbox"
                                checked={editForm.soldOut}
                                onChange={(e) => setEditForm({ ...editForm, soldOut: e.target.checked })}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                              <span className="ml-2 text-[10px] font-bold uppercase text-gray-500 w-8">{editForm.soldOut ? 'Sold' : 'Avail'}</span>
                            </label>
                          </div>
                        ) : (
                          variant.soldOut ? (
                            <span className="px-2 py-1 bg-red-100 text-red-600 text-[10px] font-bold uppercase rounded">Sold Out</span>
                          ) : (
                            <span className="px-2 py-1 bg-green-100 text-green-600 text-[10px] font-bold uppercase rounded">Available</span>
                          )
                        )}
                      </div>

                      {/* Actions */}
                      <div className="w-full md:col-span-1 flex justify-end md:justify-center gap-2 border-t md:border-t-0 pt-3 md:pt-0 mt-2 md:mt-0 border-gray-100">
                        {isEditing ? (
                          <>
                            <button onClick={() => handleSave(model.id, variant.id)} className="p-2 bg-teal-500 text-white rounded hover:bg-teal-600 flex items-center gap-2">
                              <Save className="w-4 h-4" /> <span className="md:hidden text-xs font-bold">Save</span>
                            </button>
                            <button onClick={handleCancel} className="p-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 flex items-center gap-2">
                              <X className="w-4 h-4" /> <span className="md:hidden text-xs font-bold">Cancel</span>
                            </button>
                          </>
                        ) : (
                          <button onClick={() => handleEditClick(model.id, variant)} className="p-2 text-gray-400 hover:text-slate-900 hover:bg-gray-100 rounded transition-colors flex items-center gap-2">
                            <Edit2 className="w-4 h-4" /> <span className="md:hidden text-xs font-bold text-gray-600">Edit Variant</span>
                          </button>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
