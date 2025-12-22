
import { CarModel, CarCategory } from '../types';

export const m6Data: CarModel = {
  id: 'm6',
  name: 'BYD M6',
  tagline: 'Elevate Your Journey',
  category: CarCategory.MPV,
  description: 'MPV Listrik Keluarga 7-Seater pertama di Indonesia. Menghadirkan kenyamanan maksimal, kabin luas, dan teknologi Blade Battery yang aman untuk seluruh keluarga.',
  startingPrice: 383000000,
  // Using generic BYD asset structure placeholder, assume update later with specific image if needed
  heroImage: '/images/models/m6/hero/byd-dolphin-hero.webp',
  gallery: [
    '/images/models/m6/gallery/byd-m6-gallery-1.webp',
    '/images/models/m6/gallery/byd-m6-gallery-2.webp',
    '/images/models/m6/gallery/byd-m6-gallery-3.webp'
  ],
  seats: 7, // Default to max seats
  summaryRange: 'Up to 530 km (NEDC)',
  summaryPowertrain: 'FWD',

  dimensions: {
    length: 4710,
    width: 1810,
    height: 1690,
    wheelbase: 2800,
    groundClearance: 140,
    turningRadius: 5.8
  },

  trunk: {
    rear: 580 // Max capacity mentioned
  },

  battery: {
    type: 'BYD Blade Battery (LFP)',
    capacity: 71.8, // Max capacity
    technology: 'e-Platform 3.0',
    charging: {
      ac: '7kW (Type 2)',
      dc: '115kW (CCS2) - ± 40 menit (0-80%)',
      features: ['V2L Support', 'Overcharge Protection', 'Anti-overheat']
    }
  },

  chassis: {
    frontSuspension: 'MacPherson Strut',
    rearSuspension: 'Multi-link',
    frontBrakes: 'Ventilated Disc',
    rearBrakes: 'Disc',
    wheels: ['17" Alloy'],
    tyres: '215/55 R17'
  },

  features: {
    safety: [
      '6 Airbags',
      'Blind Spot Detection (BSD)',
      'Rear Cross Traffic Alert & Brake (RCTA & RCTB)',
      'Door Open Warning (DOW)',
      'Adaptive Cruise Control (ACC)',
      'Lane Departure Warning (LDW) & Lane Keeping Assist (LKA)',
      'Traffic Sign Recognition (TSR)',
      'Automatic Emergency Braking (AEB)',
      'Electronic Stability Control (ESC) & Traction Control (TCS)',
      'Hill Start Assist & Auto Hold',
      'Tyre Pressure Monitoring System (TPMS)',
      'Around View Monitor (360° Camera)'
    ],
    interior: [
      '12.8″ Touchscreen Rotatable',
      'Voice Command (Bahasa Indonesia)',
      'Panoramic Skylight',
      'Captain Seat (Varian Superior 6-Seater)',
      'Kabin Luas & Kedap Suara',
      'Wireless Charger',
      'PM2.5 Filter + CN95',
      'Ambient Light',
      'Keyless Entry & NFC',
      'Pengaturan AC Digital'
    ],
    exterior: [
      'Aerodynamic Dragon Face',
      'LED Headlamp & Taillights',
      'One‑piece LED Lightbar Belakang',
      'Shark‑Fin Antenna',
      'Electric Folding Side Mirror'
    ],
    infotainment: [
      'Bluetooth Audio & Phone',
      'USB‑A & USB‑C Depan & Belakang',
      'Android‑based OS',
      'Voice Assistant Bahasa Indonesia'
    ]
  },

  colors: [
    { name: 'Crystal White', hex: '#F5F5DC', imageUrl: '/images/models/m6/colors/M6-crystal-white.webp' },
    { name: 'Cosmos Black', hex: '#1A1A1A', imageUrl: '/images/models/m6/colors/M6-cosmos-black.webp' },
    { name: 'Quartz Blue', hex: '#0077BE', imageUrl: '/images/models/m6/colors/M6-quartz-blue.webp' },
    { name: 'Harbour Grey', hex: '#808080', imageUrl: '/images/models/m6/colors/M6-harbour-grey.webp' }
  ],

  variants: [
    {
      id: 'standard',
      name: 'Standard 7-Seater',
      price: 383000000,
      powertrain: 'FWD',
      imageUrl: '/images/models/m6/colors/M6-crystal-white.webp',
      performance: {
        acceleration: '10.1 detik',
        topSpeed: '180 km/h'
      },
      motor: {
        type: 'Permanent Magnet Synchronous Motor',
        maxPower: '120 kW',
        maxTorque: '310 Nm',
        layout: 'FWD'
      },
      battery: {
        capacity: 55.4,
        range: '420 km (NEDC)'
      },
      weight: 1800,
      features: ['7-Seater', 'Range 420 km', 'Battery 55.4 kWh']
    },
    {
      id: 'superior-7',
      name: 'Superior 7-Seater',
      price: 423000000,
      powertrain: 'FWD',
      imageUrl: '/images/models/m6/colors/M6-harbour-grey.webp',
      performance: {
        acceleration: '8.6 detik',
        topSpeed: '180 km/h'
      },
      motor: {
        type: 'Permanent Magnet Synchronous Motor',
        maxPower: '150 kW',
        maxTorque: '310 Nm',
        layout: 'FWD'
      },
      battery: {
        capacity: 71.8,
        range: '530 km (NEDC)'
      },
      weight: 1915,
      features: ['7-Seater', 'Range 530 km', 'Panoramic Skylight', 'Battery 71.8 kWh']
    },
    {
      id: 'superior-6',
      name: 'Superior Captain 6-Seater',
      price: 433000000,
      powertrain: 'FWD',
      imageUrl: '/images/models/m6/colors/M6-quartz-blue.webp',
      performance: {
        acceleration: '8.6 detik',
        topSpeed: '180 km/h'
      },
      motor: {
        type: 'Permanent Magnet Synchronous Motor',
        maxPower: '150 kW',
        maxTorque: '310 Nm',
        layout: 'FWD'
      },
      battery: {
        capacity: 71.8,
        range: '530 km (NEDC)'
      },
      weight: 1915,
      features: ['6-Seater Captain Seat', 'Range 530 km', 'Panoramic Skylight', 'Battery 71.8 kWh']
    }
  ]
};
