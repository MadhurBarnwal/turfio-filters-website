import { writable } from 'svelte/store';

export interface Product {
  id: number;
  slug: string; // The URL-friendly identifier
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const products = writable<Product[]>([
  {
    id: 1,
    slug: 'oil-filter',
    name: 'Oil Filter',
    description: 'Maximizes engine life by trapping harmful contaminants in oil.',
    price: 0,
    imageUrl: '/images/product-oil-filter.png' // Unique image name
  },
  {
    id: 2,
    slug: 'diesel-filter',
    name: 'Diesel Filter',
    description: 'Purifies diesel fuel for optimal engine combustion and efficiency.',
    price: 0,
    imageUrl: '/images/product-diesel-filter.png' // Unique image name
  },
  {
    id: 3,
    slug: 'air-filter',
    name: 'Air Filter',
    description: 'Provides clean airflow to the engine for peak power and fuel economy.',
    price: 0,
    imageUrl: '/images/product-air-filter.png' // Unique image name
  },
  {
    id: 4,
    slug: 'petrol-filter',
    name: 'Petrol Filter',
    description: 'Ensures a clean and stable petrol supply for smooth engine operation.',
    price: 0,
    imageUrl: '/images/product-petrol-filter.png' // Unique image name
  },
  {
    id: 5,
    slug: 'cabin-filter',
    name: 'Cabin Filter',
    description: 'Purifies cabin air by trapping dust, pollen, and pollutants.',
    price: 0,
    imageUrl: '/images/product-cabin-filter.png' // Unique image name
  },
  {
    id: 6,
    slug: 'cng-filter',
    name: 'CNG Filter',
    description: 'Filters impurities from CNG gas for consistent engine performance.',
    price: 0,
    imageUrl: '/images/product-cng-filter.png' // Unique image name
  }
]);