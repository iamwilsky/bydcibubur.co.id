import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface AreaItem {
    name: string;
    subAreas: string[];
}

const areasServed: AreaItem[] = [
    {
        name: "Cibubur",
        subAreas: ["Kota Wisata", "Legenda Wisata", "Citra Grand", "Raffles Hills"]
    },
    {
        name: "Bekasi",
        subAreas: ["Jatikarya", "Jatisampurna", "Bekasi Timur", "Pondok Gede"]
    },
    {
        name: "Depok",
        subAreas: ["Cilodong", "Cimanggis", "Tapos", "Sukmajaya"]
    },
    {
        name: "Jakarta Timur",
        subAreas: ["Cipayung", "Ciracas", "Pasar Rebo", "Makasar"]
    }
];

export const HomeAreaServed: React.FC = () => {
    // JSON-LD Schema for areaServed
    const areaServedSchema = {
        "@context": "https://schema.org",
        "@type": "AutoDealer",
        "@id": "https://bydcibubur.co.id/#dealer",
        "areaServed": areasServed.flatMap(area =>
            area.subAreas.map(subArea => ({
                "@type": "Place",
                "name": `${subArea}, ${area.name}`
            }))
        )
    };

    return (
        <section className="py-24 bg-slate-50 dark:bg-[#0B1215] transition-colors duration-300">
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(areaServedSchema) }}
            />

            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-teal-600 dark:text-teal-500 font-bold uppercase tracking-widest text-sm mb-2 block">
                        Area Layanan
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
                        Dealer BYD Cibubur Melayani Wilayah
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Sebagai dealer resmi BYD di kawasan Cibubur, kami melayani pembelian dan servis
                        mobil listrik untuk wilayah Bekasi, Depok, dan Jakarta Timur.
                    </p>
                </div>

                {/* Areas Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {areasServed.map((area, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 hover:border-teal-500 transition-all group"
                        >
                            {/* Area Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                                    <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400 group-hover:text-white transition-colors" />
                                </div>
                                <div className="text-xl font-bold text-slate-900 dark:text-white">{area.name}</div>
                            </div>

                            {/* Sub Areas */}
                            <ul className="space-y-2">
                                {area.subAreas.map((subArea, subIndex) => (
                                    <li key={subIndex} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <Navigation className="w-3 h-3 text-teal-500" />
                                        <span className="text-sm">{subArea}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Text */}
                <div className="text-center mt-12">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Tidak melihat lokasi Anda? Jangan khawatir! Kami melayani seluruh wilayah
                        <strong className="text-slate-900 dark:text-white"> Jabodetabek</strong>.
                        Hubungi kami untuk informasi lebih lanjut.
                    </p>
                </div>
            </div>
        </section>
    );
};
