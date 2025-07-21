<!-- src/routes/products/[filterType]/[carCompany]/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { supabase } from '$lib/utils/supabase';
  import type { Product } from '$lib/types';
  import FinalProductDisplay from '$lib/components/FinalProductDisplay.svelte';

  let products: Product[] = [];
  let isLoading = true;

  // This function converts a URL slug back to the exact name in the database
  // e.g., "morris-garages-mg" -> "MORRIS GARAGES-MG"
  const companyNameMapping: { [key: string]: string } = {
    'audi': 'AUDI', 'bmw': 'BMW', 'chevrolet': 'CHEVROLET', 'citroen': 'CITROEN',
    'fiat': 'FIAT', 'ford': 'FORD', 'hyundai': 'HYUNDAI', 'honda': 'HONDA',
    'isuzu': 'ISUZU', 'jeep': 'JEEP', 'kia': 'KIA', 'land-rover': 'LAND ROVER',
    'mahindra': 'MAHINDRA', 'mercedes': 'MERCEDES', 'maruti': 'MARUTI',
    'morris-garages-mg': 'MORRIS GARAGES-MG', 'mitsubishi': 'MITSUBISHI',
    'nissan': 'NISSAN', 'renault': 'RENAULT', 'skoda': 'SKODA',
    'ssang-yong': 'SSANG YONG', 'toyota': 'TOYOTA', 'tata': 'TATA',
    'volkswagen': 'VOLKSWAGEN', 'volvo': 'VOLVO'
  };

  const mainCategoryName = $page.params.filterType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  // Use the mapping to get the exact company name for the query
  const carCompanySlug = $page.params.carCompany;
  const carCompanyNameForQuery = companyNameMapping[carCompanySlug] || carCompanySlug.toUpperCase();

  onMount(async () => {
    // Call the RPC function with the exact names
    const { data, error } = await supabase.rpc('get_products_filtered', {
      main_category_name: mainCategoryName,
      car_company_name: carCompanyNameForQuery
    });

    if (data) products = data;
    if (error) console.error(`Error fetching products:`, error);
    isLoading = false;
  });
</script>

<section class="page-container">
  <h2>{mainCategoryName} for {carCompanyNameForQuery}</h2>
  {#if isLoading}
    <p>Loading products...</p>
  {:else if products.length > 0}
    <div class="product-grid">
      {#each products as product}
        <FinalProductDisplay {product} />
      {/each}
    </div>
  {:else}
    <p>No products found for this selection.</p>
  {/if}
</section>

<style>
  .page-container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 1rem;
  }
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
  }
</style>