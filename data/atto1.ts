
import { CarModel, CarCategory } from '../types';

export const atto1Data: CarModel = {
  id: 'atto-1',
  name: 'BYD ATTO 1',
  tagline: 'Mini EV, Maxi Fun',
  category: CarCategory.HATCHBACK,
  description: 'City car listrik revolusioner dengan teknologi BYD Blade Battery. Desain kompak "Ocean Aesthetics" yang lincah, aman, dan penuh gaya untuk mobilitas perkotaan modern.',
  startingPrice: 199000000, 
  heroImage: 'https://www.byd.com/content/dam/byd-site/id/pricelist/atto1.png', // Placeholder asset
  gallery: [
    'https://www.byd.com/content/dam/byd-site/id/model/seagull/exterior-1.jpg',
    'https://www.byd.com/content/dam/byd-site/id/model/seagull/interior-1.jpg',
    'https://www.byd.com/content/dam/byd-site/id/model/seagull/exterior-2.jpg'
  ],
  seats: 4,
  summaryRange: 'Up to 380 km (NEDC)',
  summaryPowertrain: 'FWD',

  dimensions: {
    length: 3925,
    width: 1720,
    height: 1590,
    wheelbase: 2500,
    groundClearance: 155,
    turningRadius: 4.95
  },

  trunk: {
    rear: 0 // Not specified in standard specs yet
  },

  battery: {
    type: 'BYD Blade Battery',
    capacity: 38.88, // Max capacity shown
    technology: 'e-Platform 3.0',
    charging: {
      ac: '6.6 kW',
      dc: '30kW (Dynamic) / 40kW (Premium)',
      features: ['V2L Support']
    }
  },

  chassis: {
    frontSuspension: 'MacPherson Strut',
    rearSuspension: 'Torsion Beam',
    frontBrakes: 'Ventilated Disc',
    rearBrakes: 'Disc',
    wheels: ['16" Alloy'],
    tyres: '185/55 R16'
  },

  features: {
    safety: [
      '4 Airbags (Dynamic) / 6 Airbags (Premium)',
      'Electronic Stability Control (ESC)',
      'Anti-lock Braking System (ABS) & EBD',
      'Traction Control System (TCS)',
      'Electronic Parking Brake (EPB) + AVH',
      'Hill Start Assist (HSA)',
      'Rear Camera + 3 Rear Radars',
      'Tyre Pressure Monitoring System (TPMS)',
      'ISOFIX'
    ],
    interior: [
      '10.1" Rotating Touchscreen',
      '7" Digital Instrument Cluster',
      'Synthetic Leather Seats',
      'Steering Wheel Controls (Tilt & Telescopic)',
      'Electric AC',
      'Wireless Charging (Premium)',
      'Driver Seat 6-way Power (Premium)',
      'NFC Digital Key'
    ],
    exterior: [
      'Automatic LED Headlights',
      'LED Daytime Running Lights',
      'LED Taillights & Brake Light',
      'Heated Electric Mirrors',
      'Shark Fin Antenna'
    ],
    infotainment: [
      'Bluetooth & 4G Cloud Service',
      'Apple CarPlay & Android Auto (Wireless)',
      'Voice Control',
      'USB Type A + Type C',
      '4 Speakers'
    ]
  },

  colors: [
    { name: 'Sprout Green', hex: '#C2D97C' },
    { name: 'Apricity White', hex: '#F5F5F5' },
    { name: 'Cosmos Black', hex: '#1A1A1A' }
  ],

  variants: [
    {
      id: 'dynamic',
      name: 'Dynamic Standard Range',
      price: 199000000,
      powertrain: 'FWD',
      imageUrl: 'https://www.byd.com/content/dam/byd-site/id/model/seagull/color-sprout-green.png',
      performance: {
        acceleration: '5.0 detik (0-50 km/h)',
        topSpeed: '130 km/h'
      },
      motor: {
        type: 'Permanent Magnet Synchronous Motor',
        maxPower: '55 kW',
        maxTorque: '135 Nm',
        layout: 'FWD'
      },
      battery: {
        capacity: 30.08,
        range: '300 km (NEDC)'
      },
      weight: 1225,
      features: ['Range 300km', '4 Airbags', 'DC Charge 30kW', 'Standard Features']
    },
    {
      id: 'premium',
      name: 'Premium Long Range',
      price: 235000000,
      powertrain: 'FWD',
      imageUrl: 'https://www.byd.com/content/dam/byd-site/id/model/seagull/color-apricity-white.png',
      performance: {
        acceleration: '4.9 detik (0-50 km/h)',
        topSpeed: '130 km/h'
      },
      motor: {
        type: 'Permanent Magnet Synchronous Motor',
        maxPower: '55 kW',
        maxTorque: '135 Nm',
        layout: 'FWD'
      },
      battery: {
        capacity: 38.88,
        range: '380 km (NEDC)'
      },
      weight: 1280,
      features: ['Range 380km', '6 Airbags', 'Wireless Charging', 'Electric Driver Seat', 'DC Charge 40kW']
    }
  ]
};
