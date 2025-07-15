import { writable } from 'svelte/store';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const products = writable<Product[]>([
  {
    id: 1,
    name: 'Turfio TCF-1010',
    description: 'Super-capacity cabin air purifier for enhanced air quality.',
    price: 49.99,
    imageUrl: '/images/product-1.jpg' // Placeholder image
  },
  {
    id: 2,
    name: 'Turfio TCF-2020',
    description: 'Advanced multi-layer filtration for ultimate comfort.',
    price: 59.99,
    imageUrl: '/images/product-2.jpg' // Placeholder image
  },
  {
    id: 3,
    name: 'Turfio TCF-3030',
    description: 'Easy installation, perfect fit for most vehicles.',
    price: 69.99,
    imageUrl: '/images/product-3.jpg' // Placeholder image
  }
]);