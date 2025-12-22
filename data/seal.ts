
import { CarModel, CarCategory } from '../types';

export const sealData: CarModel = {
  id: 'seal',
  name: 'BYD SEAL',
  tagline: 'Born to Run',
  category: CarCategory.SEDAN,
  description: 'Winner of the iF Design Award. A masterpiece of ocean aesthetics and aerodynamic performance. The BYD Seal redefines the electric sports sedan.',
  startingPrice: 639000000, 
  heroImage: 'https://www.byd.com/content/dam/byd-site/id/pricelist/seal-fix.png',
  youtubeVideoId: 'S4wK0j4s7V0', // Official BYD Seal Video ID
  gallery: [
    'https://www.byd.com/content/dam/byd-site/id/product/seal/seal-aesthetic.png',
    'https://www.byd.com/content/dam/byd-site/id/product/seal/seal-back.png',
    'https://www.byd.com/content/dam/byd-site/id/product/seal/seal-brochure.png'
  ],
  seats: 5,
  summaryRange: 'Up to 650 km (NEDC)',
  summaryPowertrain: 'RWD / AWD',
  
  dimensions: {
    length: 4800,
    width: 1875,
    height: 1460,
    wheelbase: 2920,
    turningRadius: 5.7
  },
  
  trunk: {
    frunk: 50,
    rear: 400
  },

  battery: {
    type: 'BYD Blade Battery (LFP)',
    capacity: 82.56,
    technology: 'CTB (Cell‑to‑Body Integration)',
    charging: {
      ac: '7kW (Type 2)',
      dc: '150kW (CCS2) - 30–80% in 26 mins',
      features: ['Regenerative Braking', 'V2L Support', 'Portable Charger Mode 2']
    }
  },

  chassis: {
    frontSuspension: 'Double Wishbone',
    rearSuspension: 'Multi-link',
    frontBrakes: 'Ventilated & Drilled Disc',
    rearBrakes: 'Ventilated Disc',
    wheels: ['19 inci alloy (Indonesia Spec)'],
    tyres: '235/45 R19'
  },

  features: {
    safety: [
      '6 Airbags + Far‑side Airbag',
      'Blind Spot Detection (BSD)',
      'Rear Cross Traffic Alert & Brake (RCTA & RCTB)',
      'Front Cross Traffic Alert & Brake (FCTA & FCTB)',
      'Adaptive Cruise Control (ACC)',
      'Lane Keeping Assist (LDP, ELKA)',
      'Traffic Sign Recognition (TSR)',
      'Door Open Warning (DOW)',
      'Driver Attention Warning (DAW)',
      '360° Camera + Sensor Parkir',
      'Hill Hold Control, Auto Hold, ESC, TCS, EBD'
    ],
    interior: [
      'Layar Sentuh 15.6” Rotating',
      'Instrumen Digital 10.25”',
      'Head‑Up Display',
      '12 Speaker Dynaudio System',
      'Wireless Charger x2',
      'Ambient Light RGB (31 warna)',
      'Electric Adjustable Leather Seats',
      'Ventilated & Heated Front Seats',
      'Driver Seat Memory & Lumbar Support',
      'Smart Keyless Entry + NFC Card',
      'Heat Pump Dual‑zone AC + Rear Vent',
      'PM2.5 Air Purifier & CN95 Filter'
    ],
    exterior: [
      'Panoramic Silver‑Plated Glass Roof',
      'LED Crystal Headlamp + DRL',
      'One‑piece Through Rear LED Taillight',
      'Elektrik Retractable Mirror (Auto‑tilt + Memory)',
      'Hidden Door Handles',
      'Rain‑sensing Frameless Wiper',
      'Auto‑dimming Rear Mirror'
    ],
    infotainment: [
      'FM Radio',
      'Bluetooth Audio & Phone',
      'Voice Assistant (English)',
      'USB‑C & USB‑A di depan dan belakang'
    ]
  },

  colors: [
    { 
      name: 'Cosmos Black', 
      hex: '#020617', 
      imageUrl: 'https://www.byd.com/content/dam/byd-site/id/order/seal/pc/wheel/black.jpg' 
    },
    { 
      name: 'Aurora White', 
      hex: '#f8fafc', 
      imageUrl: 'https://www.byd.com/content/dam/byd-site/id/order/seal/pc/wheel/white.jpg' 
    },
    { 
      name: 'Atlantis Grey', 
      hex: '#334155', 
      imageUrl: 'https://www.byd.com/content/dam/byd-site/id/order/seal/pc/wheel/atlantis-grey.jpg' 
    },
    { 
      name: 'Shark Grey', 
      hex: '#4b5563', 
      imageUrl: 'https://www.byd.com/content/dam/byd-site/id/order/seal/pc/wheel/blue.jpg' 
    }
  ],

  variants: [
    {
      id: 'premium',
      name: 'Premium',
      price: 639000000,
      powertrain: 'RWD',
      imageUrl: 'https://www.byd.com/id/-/media/byd/id/model/seal/byd-seal-premium.jpg',
      performance: {
        acceleration: '5.9 detik',
        topSpeed: '180 km/h' // Assumed based on limits usually set
      },
      motor: {
        type: 'Permanent Magnet Synchronous Motor',
        maxPower: '230 kW',
        maxTorque: '360 Nm',
        layout: 'RWD'
      },
      battery: {
        capacity: 82.56,
        range: '650 km (NEDC)'
      },
      weight: 2055,
      features: ['Velg 19 inci Alloy', 'RWD Configuration']
    },
    {
      id: 'performance',
      name: 'Performance',
      price: 750000000,
      powertrain: 'AWD',
      imageUrl: 'https://www.byd.com/id/-/media/byd/id/model/seal/byd-seal-performance.jpg',
      performance: {
        acceleration: '3.8 detik',
        topSpeed: '180 km/h'
      },
      motor: {
        type: 'Dual Motor (Front Async + Rear PM)',
        maxPower: '390 kW (Total)',
        maxTorque: '670 Nm (Total)',
        layout: 'AWD'
      },
      battery: {
        capacity: 82.56,
        range: '580 km (NEDC)'
      },
      weight: 2185,
      features: ['iTAC (Intelligent Torque Adaption Control)', 'AWD Configuration']
    }
  ]
};
