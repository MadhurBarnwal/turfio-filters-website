// src/lib/stores/settingsStore.ts
import { writable } from 'svelte/store';
import { supabase } from '$lib/utils/supabase';

// Create a writable store that will hold our URL
export const catalogUrl = writable<string | null>(null);

// A function to fetch and set the URL.
// We only need to run this once when the app loads.
export async function fetchCatalogUrl() {
  const { data, error } = await supabase
    .from('site_settings')
    .select('value')
    .eq('key', 'catalog_url')
    .single();

  if (error) {
    console.error("Error fetching catalog URL:", error.message);
    return;
  }
  
  if (data) {
    catalogUrl.set(data.value);
  }
}