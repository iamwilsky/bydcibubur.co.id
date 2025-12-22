
import { CarModel, CarCategory } from '../types';

export const dolphinData: CarModel = {
  id: 'dolphin',
  name: 'BYD Dolphin',
  tagline: 'Agile & Free',
  category: CarCategory.HATCHBACK,
  description: 'Hatchback listrik yang stylish dengan konsep Ocean Aesthetics. Kombinasi sempurna antara efisiensi, kenyamanan, dan teknologi keamanan canggih untuk mobilitas perkotaan.',
  startingPrice: 369000000, // Updated to start from Dynamic variant
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
    length: 4150, // User provided
    width: 1770,
    height: 1570,
    wheelbase: 2700,
    turningRadius: 5.25,
    groundClearance: 155
  },

  trunk: {
    rear: 345
  },

  battery: {
    type: 'BYD Blade Battery (LFP)',
    capacity: 60.48, // Max capacity shown in specs
    technology: 'e-Platform 3.0',
    charging: {
      ac: 'Type 2 AC',
      dc: 'CCS2 DC Fast Charging',
      features: ['V2L Support']
    }
  },

  chassis: {
    frontSuspension: 'MacPherson Strut',
    rearSuspension: 'Multi-Link (Premium) / Torsion Beam (Dynamic)',
    frontBrakes: 'Ventilated Disc',
    rearBrakes: 'Disc',
    wheels: ['16" Alloy (Dynamic)', '17" Alloy (Premium)'],
    tyres: '195/60 R16 (Dynamic) / 205/50 R17 (Premium)'
  },

  features: {
    safety: [
      '6 Airbags (Front, Side, Curtain)',
      'Adaptive Cruise Control (ACC)',
      'Automatic Emergency Braking (AEB)',
      'Lane Keeping Assist (LKA) & Departure Warning (LDW)',
      'Blind Spot Detection (BSD)',
      'Rear Cross Traffic Alert & Brake (RCTA & RCTB)',
      '360° Camera',
      'Electronic Stability Control (ESC)',
      'Traction Control System (TCS)',
      'Auto Hold & Electric Parking Brake'
    ],
    interior: [
      'Layar Sentuh 12.8” Rotating',
      'Panoramic Glass Roof (Premium)',
      'Electric Adjustable Front Seats (Premium)',
      'Ventilated Front Seats (Premium)',
      'Wireless Charger (Premium)',
      'Ambient Interior Lighting',
      'Leather Steering Wheel',
      'Spacious Rear Seat with Foldable Backrest'
    ],
    exterior: [
      'Crystal LED Combination Headlights',
      'LED Tail Light',
      'Dynamic Alloy Wheels',
      'Shark Fin Antenna',
      'NFC Side Mirror',
      'Panoramic Glass Roof (Fixed) [Premium only]'
    ],
    infotainment: [
      '12.8-inch Intelligent Rotating Touch Screen',
      '6 Dynamic Speakers',
      'Bluetooth Connectivity',
      'USB Charging Ports',
      'Voice Assistant',
      'Apple CarPlay & Android Auto'
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
      id: 'dynamic',
      name: 'Dynamic Standard Range',
      price: 369000000,
      powertrain: 'FWD',
      imageUrl: 'https://www.byd.com/content/dam/byd-site/id/model/dolphin/color-sand-white.png', // Placeholder image
      performance: {
        acceleration: '12.3 detik',
        topSpeed: '150 km/h'
      },
      motor: {
        type: 'Permanent Magnet Synchronous Motor',
        maxPower: '70 kW (95 PS)',
        maxTorque: '180 Nm',
        layout: 'FWD'
      },
      battery: {
        capacity: 44.9,
        range: '340 km (WLTP)'
      },
      weight: 1525, // Estimasi
      features: ['Torsion Beam Rear Suspension', '16-inch Wheels', 'Range 340 km (WLTP)', '70kW Motor']
    },
    {
      id: 'premium',
      name: 'Premium Extended Range',
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
        range: '427 km (WLTP)'
      },
      weight: 1658,
      features: ['Multi-Link Rear Suspension', '17-inch Wheels', 'Panoramic Glass Roof', 'Ventilated Seats', '150kW Motor']
    }
  ]
};
