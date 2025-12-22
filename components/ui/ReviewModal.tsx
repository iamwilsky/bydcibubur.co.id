'use client'

import React, { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Star, Send, ChevronDown, User } from 'lucide-react';
import { useModal } from '@/contexts/ModalContext';
import { Button } from './Button';

// Helper component for Google Icon to keep code clean
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export const ReviewModal: React.FC = () => {
  const { isReviewOpen, closeReviewModal, selectedModel } = useModal();
  const [submitted, setSubmitted] = useState(false);

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    role: 'Test Drive Participant',
    message: ''
  });

  // Mock Login State for UI Demo
  const [isGoogleSignedIn, setIsGoogleSignedIn] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (isReviewOpen) {
      setSubmitted(false);
      setRating(0);
      setHoverRating(0);
      setFormData({
        name: '',
        role: 'Test Drive Participant',
        message: ''
      });
      setIsGoogleSignedIn(false);
    }
  }, [isReviewOpen]);

  const handleGoogleLogin = () => {
    // UI Simulation of logging in
    // In real app: await supabase.auth.signInWithOAuth(...)
    setIsGoogleSignedIn(true);
    setFormData(prev => ({
      ...prev,
      name: "Google User (Verified)", // Mock auto-fill
      role: "Verified Owner" // Auto-select best role if possible
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Mohon berikan rating bintang terlebih dahulu.");
      return;
    }

    // Simulate submission
    console.log("Submitting review:", { ...formData, rating, model: selectedModel, isVerified: isGoogleSignedIn });

    setSubmitted(true);

    // Auto close after showing success message
    setTimeout(() => {
      closeReviewModal();
    }, 2000);
  };

  return (
    <Transition show={isReviewOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={closeReviewModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-4"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white dark:bg-slate-900 text-left align-middle shadow-xl transition-all border-t-4 border-teal-500 rounded-xl">

                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-slate-800">
                  <Dialog.Title as="h3" className="text-xl font-display font-bold text-gray-900 dark:text-white">
                    {submitted ? 'Terima Kasih!' : 'Tulis Ulasan'}
                  </Dialog.Title>
                  <button onClick={closeReviewModal} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-8 space-y-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                        <Star className="w-8 h-8 text-green-600 fill-green-600" />
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Ulasan Terkirim</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Terima kasih telah membagikan pengalaman Anda bersama BYD.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">

                      {/* --- GOOGLE SIGN IN SECTION (UI Focus) --- */}
                      {!isGoogleSignedIn ? (
                        <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-gray-100 dark:border-slate-800 text-center">
                          <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full bg-white dark:bg-slate-700 hover:bg-gray-50 dark:hover:bg-slate-600 text-slate-700 dark:text-white font-bold py-2.5 px-4 rounded-lg border border-gray-200 dark:border-slate-600 flex items-center justify-center gap-3 transition-all shadow-sm mb-2"
                          >
                            <GoogleIcon />
                            <span>Sign in with Google</span>
                          </button>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400">
                            Direkomendasikan untuk status <span className="font-bold text-teal-600">Verified Owner</span>
                          </p>
                        </div>
                      ) : (
                        <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg flex items-center gap-3 border border-teal-100 dark:border-teal-800">
                          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xs">
                            G
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-bold text-slate-900 dark:text-white">Google Account Linked</p>
                            <p className="text-[10px] text-teal-600 dark:text-teal-400">Status ulasan Anda akan terverifikasi</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => { setIsGoogleSignedIn(false); setFormData({ ...formData, name: '' }); }}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}

                      {/* --- DIVIDER --- */}
                      {!isGoogleSignedIn && (
                        <div className="relative flex items-center py-2">
                          <div className="flex-grow border-t border-gray-200 dark:border-slate-700"></div>
                          <span className="flex-shrink-0 mx-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Atau isi manual</span>
                          <div className="flex-grow border-t border-gray-200 dark:border-slate-700"></div>
                        </div>
                      )}

                      {/* Model Info */}
                      <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Unit Kendaraan</p>
                        <p className="text-lg font-bold text-slate-900 dark:text-white">{selectedModel}</p>
                      </div>

                      {/* Star Rating */}
                      <div className="flex flex-col items-center gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Rating Anda</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              onMouseEnter={() => setHoverRating(star)}
                              onMouseLeave={() => setHoverRating(0)}
                              className="focus:outline-none transition-transform hover:scale-110"
                            >
                              <Star
                                className={`w-8 h-8 ${star <= (hoverRating || rating)
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300 dark:text-gray-600'
                                  }`}
                              />
                            </button>
                          ))}
                        </div>
                        <p className="text-xs text-teal-600 font-medium h-4">
                          {rating === 1 && "Sangat Buruk"}
                          {rating === 2 && "Buruk"}
                          {rating === 3 && "Cukup"}
                          {rating === 4 && "Bagus"}
                          {rating === 5 && "Sangat Bagus!"}
                        </p>
                      </div>

                      {/* Inputs */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                            Nama
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            readOnly={isGoogleSignedIn} // Read-only if signed in
                            className={`w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-800 focus:border-black dark:focus:border-white focus:ring-0 transition-colors outline-none dark:text-white rounded-lg ${isGoogleSignedIn ? 'cursor-not-allowed opacity-70' : ''}`}
                            placeholder="Nama Lengkap"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>

                        <div>
                          <label htmlFor="role" className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                            Status
                          </label>
                          <div className="relative">
                            <select
                              id="role"
                              className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-800 focus:border-black dark:focus:border-white focus:ring-0 transition-colors outline-none dark:text-white rounded-lg appearance-none cursor-pointer"
                              value={formData.role}
                              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            >
                              <option value="Test Drive Participant">Test Drive Participant</option>
                              <option value="SPK Holder">SPK Holder</option>
                              <option value="Verified Owner">Verified Owner</option>
                            </select>
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                          Ulasan
                        </label>
                        <textarea
                          id="message"
                          rows={3}
                          required
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-800 focus:border-black dark:focus:border-white focus:ring-0 transition-colors outline-none resize-none dark:text-white rounded-lg"
                          placeholder="Ceritakan pengalaman Anda..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      <div className="pt-2">
                        <Button type="submit" fullWidth variant="primary" size="lg" className="flex items-center justify-center gap-2">
                          <Send className="w-4 h-4" />
                          Kirim Ulasan
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
