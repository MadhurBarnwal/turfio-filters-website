// src/routes/products/[filterType]/[carCompany]/+page.server.ts

import { supabase } from '$lib/utils/supabase';
import type { PageServerLoad, EntryGenerator } from './$types';

/**
 * This `entries` function runs at build time.
 * It fetches ALL products and creates a unique list of every
 * [filterType]/[carCompany] combination that exists.
 */
export const entries: EntryGenerator = async () => {
  console.log('Generating entries for [filterType]/[carCompany]...');

  // The type definition for the Supabase response needs to be more specific.
  type ProductCombination = {
    CarCompanies: { name: string } | null; // A single company object or null
    FilterTypes: { name: string } | null;  // A single filter type object or null
  };

  const { data: products, error: dbError } = await supabase
    .from('Products')
    // THE FIX: Use `!inner` to guarantee a result and `limit(1)` on the related tables
    // to tell Supabase we only expect one, which changes the return type from an array to an object.
    .select('CarCompanies!inner(name), FilterTypes!inner(name)')
    // We can also add this to be explicit, though !inner often implies it.
    // .limit(1, { foreignTable: 'CarCompanies' }) 
    // .limit(1, { foreignTable: 'FilterTypes' })
    .returns<ProductCombination[]>(); // Use our new, more accurate type

  if (dbError || !products) {
    console.error('Failed to fetch product combinations for entries:', dbError?.message);
    return [];
  }

  const uniquePaths = new Set<string>();

  products.forEach(product => {
    // Now, product.CarCompanies and product.FilterTypes are single objects, not arrays.
    if (product.CarCompanies?.name && product.FilterTypes?.name) {
      const filterTypeSlug = product.FilterTypes.name.replace(/ /g, '-');
      const carCompanySlug = product.CarCompanies.name.replace(/ /g, '-');
      uniquePaths.add(`${filterTypeSlug}/${carCompanySlug}`);
    }
  });

  const paths = Array.from(uniquePaths).map(path => {
    const [filterType, carCompany] = path.split('/');
    return { filterType, carCompany };
  });

  console.log(`Found ${paths.length} product paths to prerender.`);
  return paths;
};


// The load function can remain as is, or be removed if unused.
export const load: PageServerLoad = async ({ params }) => {
	return {
		products: []
	};
};