
import { CarModel, CarCategory } from '../types';

export const sealion7Data: CarModel = {
  id: 'sealion-7',
  name: 'BYD Sealion 7',
  tagline: 'Performance Performance SUV',
  category: CarCategory.SUV,
  description: 'SUV Listrik Premium dengan performa tinggi. Menggabungkan kenyamanan keluarga dengan akselerasi sport car, didukung teknologi e-Platform 3.0 dan CTB.',
  startingPrice: 629000000,
  // Updated Hero Image
  heroImage: '/images/models/sealion-7/hero/byd-sealion7-hero.webp',
  gallery: [
    '/images/models/sealion-7/gallery/byd-sealion-gallery-1.webp',
    '/images/models/sealion-7/gallery/byd-sealion-gallery-2.webp',
    '/images/models/sealion-7/gallery/byd-sealion-gallery-3.webp'
  ],
  seats: 5,
  summaryRange: 'Up to 567 km (NEDC)',
  summaryPowertrain: 'RWD / AWD',

  dimensions: {
    length: 4830,
    width: 1925,
    height: 1620,
    wheelbase: 2930,
    groundClearance: 158,
    turningRadius: 5.85
  },

  trunk: {
    frunk: 58,
    rear: 500 // Expanded: 1769
  },

  battery: {
    type: 'BYD Blade Battery (LFP)',
    capacity: 82.56,
    technology: 'CTB (Cell-to-Body), e-Platform 3.0',
    charging: {
      ac: '11kW (Type 2)',
      dc: '150kW (CCS2)',
      features: ['V2L Support (3.3kW)']
    }
  },

  chassis: {
    frontSuspension: 'Double Wishbone + FSD',
    rearSuspension: 'Multi-link',
    frontBrakes: 'Ventilated & Drilled Disc',
    rearBrakes: 'Ventilated Disc',
    wheels: ['19" / 20" Alloy'],
    tyres: '235/50 R19 (Premium) / 245/45 R20 (Performance)'
  },

  features: {
    safety: [
      '6 Airbags + Far-side Airbag + Side Rear Airbag',
      'Blind Spot Detection (BSD)',
      'Rear Cross Traffic Alert & Brake (RCTA & RCTB)',
      'Front Cross Traffic Alert & Brake (FCTA & FCTB)',
      'Adaptive Cruise Control (ACC)',
      'Lane Keeping Assist (LKC, ELKA)',
      'Traffic Sign Recognition (TSR, ISA, ISLI)',
      'Door Open Warning (DOW)',
      'Driver Attention Warning (DAW)',
      'Driver Fatigue Monitoring (DFM)',
      'Forward Collision Warning (FCW)',
      'Automatic Emergency Braking (AEB)',
      '360° Camera + Sensor Parkir (Depan/Belakang)',
      'iTAC (Intelligent Torque Adaption Control)'
    ],
    interior: [
      'Layar Sentuh 15.6” Rotating',
      'Instrumen Digital 10.25” MID',
      'Head-Up Display (W-HUD)',
      'Full Leather Quilted Seat',
      'Ventilated Front Seats',
      'Electric Seat Adjustment with Memory (Driver)',
      'Ambient Light 128 Warna',
      'Panoramic Glass Roof with Electric Sunshade',
      'Wireless Charger (50W + Ventilated)',
      'Voice Control (Hi BYD)'
    ],
    exterior: [
      'LED Dual U-Headlamp + Sequential Indicators',
      'Rear Full-width Taillight',
      'Electric Tailgate with Foot Sensor',
      'Electronic Hidden Door Handles',
      'Rain-sensing Frameless Wiper',
      'Shark Fin Antenna',
      'Colored Brake Calipers (Performance)'
    ],
    infotainment: [
      'Dynaudio 12-Speaker Premium Audio',
      'Wireless Apple CarPlay & Android Auto',
      'Satellite Navigation',
      'Bluetooth Phone & Audio',
      'USB-A & USB-C Depan dan Belakang'
    ]
  },

  colors: [
    { name: 'Atlantis Gray', hex: '#5b6269', imageUrl: '/images/models/sealion-7/colors/Sealion7-Atlantis-Grey-fix.webp' },
    { name: 'Aurora White', hex: '#f8fafc', imageUrl: '/images/models/sealion-7/colors/Sealion7-Aurora-White-fix.webp' },
    { name: 'Cosmos Black', hex: '#0f172a', imageUrl: '/images/models/sealion-7/colors/Sealion7-Cosmos-Black-fix.webp' },
    { name: 'Shark Gray', hex: '#374151', imageUrl: '/images/models/sealion-7/colors/Sealion7-Shark-Grey.webp' }
  ],

  variants: [
    {
      id: 'premium',
      name: 'Premium',
      price: 629000000,
      powertrain: 'RWD',
      imageUrl: '/images/models/sealion-7/colors/Sealion7-Atlantis-Grey-fix.webp',
      performance: {
        acceleration: '6.7 detik',
        topSpeed: '215 km/h'
      },
      motor: {
        type: 'Permanent Magnet Synchronous Motor',
        maxPower: '230 kW',
        maxTorque: '380 Nm',
        layout: 'RWD'
      },
      battery: {
        capacity: 82.56,
        range: '567 km (NEDC)'
      },
      weight: 2225,
      features: ['Velg 19 inci', 'RWD Configuration']
    },
    {
      id: 'performance',
      name: 'Performance AWD',
      price: 729000000,
      powertrain: 'AWD',
      imageUrl: '/images/models/sealion-7/colors/Sealion7-Cosmos-Black-fix.webp',
      performance: {
        acceleration: '4.5 detik',
        topSpeed: '225 km/h'
      },
      motor: {
        type: 'Dual Motor (Asynchronous + PMSM)',
        maxPower: '390 kW (Total)',
        maxTorque: '690 Nm (Total)',
        layout: 'AWD'
      },
      battery: {
        capacity: 82.56,
        range: '542 km (NEDC)'
      },
      weight: 2340,
      features: ['Velg 20 inci', 'iTAC Technology', 'AWD Configuration']
    }
  ]
};
