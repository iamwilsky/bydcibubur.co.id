
import { CarModel, CarCategory } from '../types';

export const atto3Data: CarModel = {
  id: 'atto-3',
  name: 'BYD ATTO 3',
  tagline: 'Energy Awakened',
  category: CarCategory.SUV,
  description: 'Compact Electric SUV yang dinamis dan futuristik. Dilengkapi dengan e-Platform 3.0, Blade Battery, dan interior unik bertema gym yang energik.',
  startingPrice: 390000000,
  // Updated Hero Image
  heroImage: '/images/models/atto-3/hero/byd-atto3-hero.webp',
  gallery: [
    '/images/models/atto-3/gallery/byd-atto3-gallery-1.webp',
    '/images/models/atto-3/gallery/byd-atto3-gallery-2.webp',
    '/images/models/atto-3/gallery/byd-atto3-gallery-3.webp'
  ],
  seats: 5,
  summaryRange: 'Up to 480 km (NEDC)',
  summaryPowertrain: 'FWD',

  dimensions: {
    length: 4455,
    width: 1875,
    height: 1615,
    wheelbase: 2720,
    turningRadius: 5.4,
    groundClearance: 175 // Standard estimate for Atto 3
  },

  trunk: {
    rear: 440
    // Frunk not specified in input, omitted
  },

  battery: {
    type: 'BYD Blade Battery (LFP)',
    capacity: 60.48, // Showing max capacity for summary
    technology: 'e-Platform 3.0',
    charging: {
      ac: '7kW (Type 2)',
      dc: '80kW (CCS2) - 0–80% in ±45 min',
      features: ['V2L Support (3.3kW)']
    }
  },

  chassis: {
    frontSuspension: 'MacPherson Strut',
    rearSuspension: 'Multi-link Independent',
    frontBrakes: 'Ventilated Disc',
    rearBrakes: 'Solid Disc',
    wheels: ['18" Alloy'],
    tyres: '215/55 R18'
  },

  features: {
    safety: [
      '6 Airbags',
      'Blind Spot Detection (BSD)',
      'Rear Cross Traffic Alert & Brake (RCTA & RCTB)',
      'Lane Keeping Assist (LKA) & Departure Warning (LDW)',
      'Adaptive Cruise Control (ACC)',
      'Forward Collision Warning (FCW)',
      'Autonomous Emergency Braking (AEB)',
      'Door Open Warning (DOW)',
      '360° Camera + Sensor Parkir Depan & Belakang',
      'Electronic Stability Program (ESP)',
      'Traction Control System (TCS)',
      'Hill Descent Control (HDC) & Hill Start Assist (HSA)',
      'Auto Hold'
    ],
    interior: [
      'Layar Sentuh 15.6” Rotating',
      'Instrumen Digital 5”',
      'Panoramic Sunroof',
      'Electric Adjustable Front Seats',
      'Ambient Mood Lighting',
      'Wireless Phone Charger',
      'PM2.5 Air Filter',
      'Voice Command (Bahasa Indonesia)',
      'Keyless Entry & Start + NFC Access'
    ],
    exterior: [
      'LED Headlights & DRL',
      'One-piece LED Light Bar Belakang',
      'Electric Folding Side Mirrors with Heating',
      'Shark Fin Antenna',
      'Power Tailgate (Extended Range)'
    ],
    infotainment: [
      '8 Speaker Audio System',
      'Bluetooth Audio & Phone',
      'Voice Assistant (Bahasa Indonesia)',
      'USB Type-A & Type-C depan dan belakang',
      'Android-based OS Infotainment'
    ]
  },

  colors: [
    { name: 'Surf Blue', hex: '#0077BE', imageUrl: '/images/models/atto-3/colors/atto3-surf-blue.webp' },
    { name: 'Ski White', hex: '#F0F0F0', imageUrl: '/images/models/atto-3/colors/atto3-ski-white.webp' },
    { name: 'Boulder Grey', hex: '#808080', imageUrl: '/images/models/atto-3/colors/atto3-boulder-grey.webp' },
    { name: 'Forest Green', hex: '#228B22', imageUrl: '/images/models/atto-3/colors/atto3-forest-green.webp' },
    { name: 'Parkour Red', hex: '#C8102E' } // No image for Red found, leaving generic
  ],

  variants: [
    {
      id: 'standard',
      name: 'Standard Range', // Advanced
      price: 390000000,
      powertrain: 'FWD',
      imageUrl: '/images/models/atto-3/colors/atto3-surf-blue.webp',
      performance: {
        acceleration: '7.9 detik',
        topSpeed: '160 km/h'
      },
      motor: {
        type: 'Permanent Magnet Synchronous Motor',
        maxPower: '150 kW',
        maxTorque: '310 Nm',
        layout: 'FWD'
      },
      battery: {
        capacity: 49.92,
        range: '410 km (NEDC)'
      },
      features: ['Battery 49.92 kWh', 'Range 410 km']
    },
    {
      id: 'extended',
      name: 'Extended Range', // Superior
      price: 520000000,
      powertrain: 'FWD',
      imageUrl: '/images/models/atto-3/colors/atto3-ski-white.webp',
      performance: {
        acceleration: '7.3 detik',
        topSpeed: '160 km/h'
      },
      motor: {
        type: 'Permanent Magnet Synchronous Motor',
        maxPower: '150 kW',
        maxTorque: '310 Nm',
        layout: 'FWD'
      },
      battery: {
        capacity: 60.48,
        range: '480 km (NEDC)'
      },
      features: ['Battery 60.48 kWh', 'Range 480 km', 'Power Tailgate']
    }
  ]
};
