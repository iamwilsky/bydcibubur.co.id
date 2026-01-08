'use client'

import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    location: string;
    rating: number;
    review: string;
    carModel: string;
    date: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Budi Santoso",
        location: "Kota Wisata, Cibubur",
        rating: 5,
        review: "Pelayanan di BYD Cibubur sangat memuaskan. Sales Consultant-nya sangat profesional dan membantu saya memilih BYD Atto 3 yang sesuai kebutuhan keluarga. Proses pembelian cepat dan transparan.",
        carModel: "BYD Atto 3",
        date: "2025-12-15"
    },
    {
        id: 2,
        name: "Siti Rahayu",
        location: "Jatikarya, Bekasi",
        rating: 5,
        review: "Showroom BYD Cibubur lokasinya strategis di Transyogi, mudah dijangkau dari rumah. Test drive-nya memuaskan dan sekarang saya sudah menikmati BYD Dolphin. Terima kasih BYD Cibubur!",
        carModel: "BYD Dolphin",
        date: "2025-11-28"
    },
    {
        id: 3,
        name: "Ahmad Wijaya",
        location: "Legenda Wisata, Cibubur",
        rating: 5,
        review: "Dealer BYD Cibubur memberikan pengalaman terbaik dalam membeli mobil listrik pertama saya. Garansi 8 tahun baterai bikin tenang. Sangat recommended!",
        carModel: "BYD Seal",
        date: "2025-12-05"
    },
    {
        id: 4,
        name: "Diana Putri",
        location: "Citra Grand, Cibubur",
        rating: 5,
        review: "BYD Cibubur adalah pilihan tepat untuk beli mobil listrik. Fasilitasnya lengkap 3S (Sales, Service, Sparepart). After sales-nya juga responsif.",
        carModel: "BYD Atto 3",
        date: "2025-10-20"
    }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
        ))}
    </div>
);

export const HomeTestimonials: React.FC = () => {
    // Calculate aggregate rating
    const totalRating = testimonials.reduce((sum, t) => sum + t.rating, 0);
    const averageRating = (totalRating / testimonials.length).toFixed(1);

    // JSON-LD Schema for Reviews
    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "BYD Cibubur",
        "image": "https://bydcibubur.co.id/images/og-image.webp",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Alternatif Cibubur No.41, Jatikarya",
            "addressLocality": "Bekasi",
            "addressRegion": "Jawa Barat",
            "postalCode": "17435",
            "addressCountry": "ID"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": averageRating,
            "reviewCount": testimonials.length,
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": testimonials.map(t => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": t.name
            },
            "datePublished": t.date,
            "reviewBody": t.review,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating,
                "bestRating": "5",
                "worstRating": "1"
            }
        }))
    };

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-[#0B1215] transition-colors duration-300">
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />

            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-teal-600 dark:text-teal-500 font-bold uppercase tracking-widest text-sm mb-2 block">
                        Testimoni Pelanggan
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
                        Apa Kata Mereka Tentang BYD Cibubur?
                    </h2>
                    <div className="flex items-center justify-center gap-3 mt-6">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">{averageRating}</span>
                        <span className="text-gray-500 dark:text-gray-400">dari {testimonials.length} review</span>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 relative"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-teal-100 dark:text-teal-900" />

                            {/* Rating */}
                            <StarRating rating={testimonial.rating} />

                            {/* Review Text */}
                            <p className="text-gray-600 dark:text-gray-300 mt-4 mb-6 leading-relaxed">
                                "{testimonial.review}"
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-slate-700">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {testimonial.location} • {testimonial.carModel}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
