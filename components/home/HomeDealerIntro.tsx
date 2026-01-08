'use client'

import React from 'react';
import { Shield, Award, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useModal } from '@/contexts/ModalContext';

export const HomeDealerIntro: React.FC = () => {
    const { openModal } = useModal();

    return (
        <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 border-t border-gray-100 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="text-teal-600 dark:text-teal-500 font-bold uppercase tracking-widest text-sm mb-2 block">
                            Tentang Kami
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            Dealer Resmi BYD Cibubur – Showroom Mobil Listrik Terpercaya
                        </h2>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                <strong>BYD Cibubur</strong> adalah dealer resmi mobil listrik BYD yang berlokasi strategis di
                                <strong> Jalan Alternatif Cibubur (Transyogi)</strong>, Jatikarya, Bekasi. Sebagai bagian dari jaringan
                                dealer resmi <strong>BYD Indonesia</strong>, kami menyediakan layanan lengkap 3S (Sales, Service, Sparepart)
                                untuk memenuhi kebutuhan mobil listrik Anda.
                            </p>

                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                Showroom BYD Cibubur melayani konsumen dari berbagai wilayah termasuk
                                <strong> Kota Wisata, Legenda Wisata, Citra Grand, Jatikarya, Jatisampurna, Depok,
                                    dan Bekasi Timur</strong>. Dengan akses mudah dari Tol Jatikarya dan jalan utama Transyogi,
                                kami menjadi pilihan utama bagi calon pembeli mobil listrik di kawasan Cibubur dan sekitarnya.
                            </p>

                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Nikmati pengalaman test drive mobil listrik terbaik seperti <strong>BYD Seal, BYD Atto 3,
                                    BYD Dolphin, dan BYD Sealion 7</strong> di showroom kami. Tim Sales Consultant profesional kami
                                siap membantu Anda menemukan mobil listrik impian dengan penawaran harga terbaik dan
                                promo menarik.
                            </p>
                        </div>

                        <div className="mt-8">
                            <Button
                                onClick={() => openModal('Info Dealer BYD Cibubur')}
                                variant="primary"
                                size="lg"
                                className="dark:bg-teal-600 dark:hover:bg-teal-700 dark:text-white dark:border-none"
                            >
                                Hubungi Kami Sekarang
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Feature Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/20 p-6 rounded-2xl border border-teal-200 dark:border-teal-800">
                            <Shield className="w-10 h-10 text-teal-600 dark:text-teal-400 mb-4" />
                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Dealer Resmi</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Authorized dealer BYD Indonesia dengan garansi resmi
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl border border-slate-200 dark:border-slate-600">
                            <Award className="w-10 h-10 text-teal-600 dark:text-teal-400 mb-4" />
                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Layanan 3S</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Sales, Service, dan Sparepart dalam satu lokasi
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl border border-slate-200 dark:border-slate-600">
                            <MapPin className="w-10 h-10 text-teal-600 dark:text-teal-400 mb-4" />
                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Lokasi Strategis</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Akses mudah dari Tol Jatikarya & Transyogi
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/20 p-6 rounded-2xl border border-teal-200 dark:border-teal-800">
                            <Users className="w-10 h-10 text-teal-600 dark:text-teal-400 mb-4" />
                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Tim Profesional</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Sales Consultant berpengalaman siap membantu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
