import { writable } from 'svelte/store';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // Keeping price for now, but it won't be displayed in ProductCard
  imageUrl: string;
}

export const products = writable<Product[]>([
  {
    id: 1,
    name: 'Oil Filter',
    description: 'High-performance oil filter for superior engine protection.',
    price: 0, // Price not displayed, but kept for type consistency
    imageUrl: '/images/oil-filter.jpg' // Placeholder image for Oil Filter
  },
  {
    id: 2,
    name: 'Transmission Filter',
    description: 'Ensures smooth transmission operation and extends lifespan.',
    price: 0,
    imageUrl: '/images/transmission-filter.jpg' // Placeholder image for Transmission Filter
  },
  {
    id: 3,
    name: 'Air Filter',
    description: 'Optimizes engine airflow for improved performance and fuel efficiency.',
    price: 0,
    imageUrl: '/images/air-filter.jpg' // Placeholder image for Air Filter
  },
  {
    id: 4,
    name: 'Cabin Air Filter',
    description: 'Traps dust, pollen, and odors for a cleaner cabin environment.',
    price: 0,
    imageUrl: '/images/cabin-air-filter.jpg' // Placeholder image for Cabin Air Filter
  }
]);