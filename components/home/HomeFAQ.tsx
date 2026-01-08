'use client'

import React from 'react';
import { HelpCircle } from 'lucide-react';

const faqData = [
  {
    q: "Di mana lokasi dealer BYD Cibubur?",
    a: "Dealer BYD Cibubur berlokasi di Jl. Alternatif Cibubur No.41, Jatikarya. Lokasi kami sangat strategis di jalan utama Transyogi, dekat dengan akses Tol Jatikarya dan kawasan Kota Wisata."
  },
  {
    q: "Apakah tersedia unit Test Drive di BYD Cibubur?",
    a: "Ya, kami menyediakan unit Test Drive lengkap untuk BYD Seal, Atto 3, dan Dolphin. Anda bisa melakukan booking jadwal melalui website ini atau menghubungi WhatsApp sales kami."
  },
  {
    q: "Bagaimana layanan purna jual (After Sales) BYD?",
    a: "BYD Cibubur adalah dealer 3S (Sales, Service, Sparepart). Kami memberikan garansi baterai hingga 8 tahun atau 160.000 km, serta layanan servis gratis dan suku cadang sesuai syarat dan ketentuan yang berlaku."
  },
  {
    q: "Apakah harga OTR mengikuti wilayah Jakarta atau Jawa Barat?",
    a: "Untuk wilayah Cibubur yang masuk area Bekasi/Jawa Barat dan Depok, harga OTR menyesuaikan regulasi pajak daerah setempat. Silakan hubungi Sales Consultant kami (Willy Arsal) untuk rincian harga OTR terbaru dan promo yang berlaku."
  },
  {
    q: "Berapa lama waktu pengisian daya mobil listrik BYD?",
    a: "Dengan DC Fast Charging, mobil BYD dapat diisi dari 30% ke 80% dalam waktu kurang dari 30 menit. Untuk AC Charging di rumah, waktu pengisian sekitar 6-8 jam untuk pengisian penuh."
  },
  {
    q: "Apakah BYD Cibubur menyediakan layanan kredit?",
    a: "Ya, BYD Cibubur bekerja sama dengan berbagai leasing dan bank untuk memberikan kemudahan pembiayaan. Kami menyediakan simulasi kredit dengan tenor hingga 7 tahun dan DP rendah mulai dari 20%."
  }
];

export const HomeFAQ: React.FC = () => {
  // FAQPage Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0B1215] transition-colors duration-300">
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-teal-600 dark:text-teal-500 font-bold uppercase tracking-widest text-sm mb-2 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Pertanyaan Umum Tentang BYD Cibubur
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Informasi seputar pembelian mobil listrik BYD di dealer Cibubur.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm">
              <h3 className="flex items-start gap-3 font-bold text-slate-900 dark:text-white text-lg mb-2">
                <HelpCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                {item.q}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 pl-8 leading-relaxed text-sm md:text-base">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
