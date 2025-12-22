
import { CarModel, CarCategory } from './types';
import { sealData } from './data/seal';
import { sealion7Data } from './data/sealion7';
import { atto3Data } from './data/atto3';
import { dolphinData } from './data/dolphin';
import { m6Data } from './data/m6';
import { atto1Data } from './data/atto1';

// Helper to format price to IDR string, handling 0 as "Coming Soon"
export const formatPrice = (price: number): string => {
  if (price === 0) return 'Coming Soon';
  
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

// Add Sealion 7, Seal, Atto 3, Dolphin, M6, Atto 1 to the list
export const BYD_MODELS: CarModel[] = [sealion7Data, sealData, atto3Data, dolphinData, m6Data, atto1Data];
