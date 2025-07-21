// src/routes/+page.server.ts
import { supabase } from '$lib/utils/supabase';
import type { PageServerLoad } from './$types';

// This is the same logic from your FilterCategory component
export const load: PageServerLoad = async () => {
  const { data, error } = await supabase
    .from('FilterTypes')
    .select('*')
    .is('parent_id', null)
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching main categories for homepage:', error);
    return { mainFilterTypes: [] }; // Return empty array on error
  }

  return {
    mainFilterTypes: data ?? [] // Pass the data to the page
  };
};