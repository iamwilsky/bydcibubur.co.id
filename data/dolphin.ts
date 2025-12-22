
import { CarModel, CarCategory } from '../types';

export const dolphinData: CarModel = {
  id: 'dolphin',
  name: 'BYD Dolphin',
  tagline: 'Agile & Free',
  category: CarCategory.HATCHBACK,
  description: 'Hatchback listrik yang stylish dengan konsep Ocean Aesthetics. Kombinasi sempurna antara efisiensi, kenyamanan, dan teknologi keamanan canggih untuk mobilitas perkotaan.',
  startingPrice: 429000000,
  // Standard BYD asset pattern
  heroImage: 'https://www.byd.com/content/dam/byd-site/id/pricelist/dolphin-fix.png', 
  gallery: [
    'https://www.byd.com/content/dam/byd-site/id/model/dolphin/exterior-1.jpg',
    'https://www.byd.com/content/dam/byd-site/id/model/dolphin/interior-1.jpg',
    'https://www.byd.com/content/dam/byd-site/id/model/dolphin/exterior-2.jpg'
  ],
  seats: 5,
  summaryRange: 'Up to 490 km (NEDC)',
  summaryPowertrain: 'FWD',

  dimensions: {
    length: 4290,
    width: 1770,
    height: 1570,
    wheelbase: 2700,
    turningRadius: 5.25,
    groundClearance: 150
  },

  trunk: {
    rear: 345 // Standard trunk space
  },

  battery: {
    type: 'BYD Blade Battery (LFP)',
    capacity: 60.48,
    technology: 'e-Platform 3.0',
    charging: {
      ac: '7kW (Type 2)',
      dc: '60kW (CCS2)',
      features: ['V2L Support (3.3kW)']
    }
  },

  chassis: {
    frontSuspension: 'MacPherson Strut',
    rearSuspension: 'Torsion Beam',
    frontBrakes: 'Ventilated Disc',
    rearBrakes: 'Solid Disc',
    wheels: ['16" Alloy'],
    tyres: '195/60 R16'
  },

  features: {
    safety: [
      '6 Airbags',
      'Adaptive Cruise Control (ACC)',
      'Automatic Emergency Braking (AEB)',
      'Lane Keeping Assist (LKA) & Departure Warning (LDW)',
      'Blind Spot Detection (BSD)',
      'Rear Cross Traffic Alert & Brake (RCTA & RCTB)',
      '360° Camera + 3D View',
      'Electronic Stability Control (ESC)',
      'Auto Hold & Hill Start Assist',
      'Tyre Pressure Monitoring System (TPMS)'
    ],
    interior: [
      'Layar Sentuh 12.8” Rotating',
      'Instrument Cluster Digital 5”',
      'Panoramic Sunroof',
      'Jok Vegan Leather',
      'Electric Adjustable Front Seats',
      'Ventilated & Heated Front Seats',
      'Wireless Charger',
      'Ambient Light 31 Warna',
      'PM2.5 Filter + CN95',
      'Voice Command (Bahasa Indonesia)'
    ],
    exterior: [
      'LED Headlights & Taillights',
      'Crystal Design Headlamp',
      'One-piece Through LED Rear Lamp',
      'Electric Adjustable & Retractable Mirrors',
      'Two-tone Color (Varian tertentu)'
    ],
    infotainment: [
      '8 Speaker Audio System',
      'Bluetooth Phone & Audio',
      'Voice Assistant (Bahasa Indonesia)',
      'USB-C & USB-A (Depan & Belakang)'
    ]
  },

  colors: [
    { name: 'Coral Pink', hex: '#F08080' },
    { name: 'Sand White', hex: '#F5F5DC' },
    { name: 'Urban Grey', hex: '#808080' },
    { name: 'Surf Blue + Black Roof', hex: '#0077BE' },
    { name: 'Mauve Purple + Black Roof', hex: '#E0B0FF' }
  ],

  variants: [
    {
      id: 'extended',
      name: 'Premium Extended',
      price: 429000000,
      powertrain: 'FWD',
      imageUrl: 'https://www.byd.com/content/dam/byd-site/id/model/dolphin/color-surf-blue.png',
      performance: {
        acceleration: '7.0 detik',
        topSpeed: '160 km/h'
      },
      motor: {
        type: 'Permanent Magnet Synchronous Motor',
        maxPower: '150 kW (204 PS)',
        maxTorque: '310 Nm',
        layout: 'FWD'
      },
      battery: {
        capacity: 60.48,
        range: '427 km (WLTP) / 490 km (NEDC)'
      },
      weight: 1658,
      features: ['Panoramic Sunroof', 'Ventilated Seats', 'Wireless Charger']
    }
  ]
};
