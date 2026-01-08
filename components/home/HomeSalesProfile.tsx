'use client'

import React from 'react';
import { MessageCircle, Phone, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useData } from '@/contexts/DataContext';

export const HomeSalesProfile: React.FC = () => {
    const { dealerInfo } = useData();
    const firstName = dealerInfo.salesName.split(' ')[0];

    const whatsappLink = `https://wa.me/${dealerInfo.salesPhone}?text=${encodeURIComponent(
        'Halo, saya tertarik dengan mobil listrik BYD. Mohon informasi lebih lanjut.'
    )}`;

    return (
        <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

                    {/* Sales Info */}
                    <div className="text-center lg:text-left">
                        <span className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-2 block">
                            Sales Consultant
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                            Hubungi {firstName} untuk Penawaran Terbaik
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-lg">
                            Dapatkan informasi harga, promo terbaru, dan jadwalkan test drive mobil listrik BYD
                            di dealer BYD Cibubur. Konsultasi GRATIS seputar pembelian mobil listrik pertama Anda.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-teal-400" />
                                </div>
                                <span className="text-sm text-gray-300">Respon Cepat</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-teal-400" />
                                </div>
                                <span className="text-sm text-gray-300">Berpengalaman</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="bg-green-500 hover:bg-green-600 border-none w-full sm:w-auto"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Chat WhatsApp
                                </Button>
                            </a>
                            <a href={`tel:${dealerInfo.salesPhone}`}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    {dealerInfo.displayPhone}
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Profile Card */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-sm w-full">
                            {/* Avatar */}
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-teal-500/30">
                                {dealerInfo.salesName.split(' ').map(n => n[0]).join('')}
                            </div>

                            {/* Name & Title */}
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold mb-1">{dealerInfo.salesName}</h3>
                                <p className="text-teal-400 font-medium">Sales Consultant</p>
                                <p className="text-gray-400 text-sm mt-1">BYD Cibubur - Dealer Resmi</p>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                                    <Phone className="w-5 h-5 text-teal-400" />
                                    <span className="text-gray-300">{dealerInfo.displayPhone}</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                                    <MessageCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-gray-300">Available on WhatsApp</span>
                                </div>
                            </div>

                            {/* Trust Badge */}
                            <div className="mt-6 pt-6 border-t border-white/10 text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full">
                                    <Award className="w-4 h-4 text-teal-400" />
                                    <span className="text-sm text-teal-300 font-medium">Verified Sales Consultant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
