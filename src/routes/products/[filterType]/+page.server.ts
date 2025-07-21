// src/routes/products/[filterType]/+page.server.ts

import { supabase } from '$lib/utils/supabase';
import type { PageServerLoad, EntryGenerator } from './$types';

// REMOVE THIS LINE: export const prerender = false;

/**
 * This `entries` function runs at build time.
 * It fetches all main filter types from Supabase and provides their slugs
 * to the SvelteKit prerenderer.
 */
export const entries: EntryGenerator = async () => {
  console.log('Generating entries for [filterType]...');

  const { data: filterTypes, error: dbError } = await supabase
    .from('FilterTypes')
    .select('name')
    .is('parent_id', null); // Fetch only the main categories

  if (dbError || !filterTypes) {
    console.error('Failed to fetch filter types for entries:', dbError?.message);
    return []; // Return empty array on error
  }

  const paths = filterTypes.map((type) => ({
    filterType: type.name.replace(/ /g, '-')
  }));

  console.log(`Found ${paths.length} filter type paths to prerender.`);
  return paths;
};

// You can keep your load function if you need it for something,
// but since your page is fetching data on the client-side with onMount,
// this load function is currently unused and can be removed for simplicity.
// If you remove it, you can also delete the file if `entries` is the only export.
// For now, let's leave it but know it's not being used by the +page.svelte.
export const load: PageServerLoad = async ({ params }) => {
  const mainCategoryName = params.filterType.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  // This data is not used by your +page.svelte, which does its own fetching.
  // This is okay, but something to be aware of.
  return {
    mainCategoryName
  };
};