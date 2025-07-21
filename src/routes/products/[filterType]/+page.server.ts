// src/routes/products/[filterType]/+page.server.ts

import { supabase } from '$lib/utils/supabase';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import type { CarCompany } from '$lib/types';
export const prerender = false;

export const load: PageServerLoad = async ({ params }) => {
  const mainCategoryName = params.filterType.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  const { data: carCompanies, error: dbError } = await supabase
    .from('CarCompanies')
    .select('*');

  if (dbError || !carCompanies) {
    throw error(404, 'Car companies not found for this filter type.');
  }

  return {
    carCompanies: carCompanies as CarCompany[],
    mainCategoryName
  };
};
