<!-- src/routes/products/[filterType]/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { supabase } from '$lib/utils/supabase';
  import type { CarCompany, Product } from '$lib/types';
  import CategoryCard from '$lib/components/CategoryCard.svelte';

  let carCompanies: CarCompany[] = [];
  let isLoading = true;
  const mainCategoryName = $page.params.filterType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  onMount(async () => {
    // Use the RPC function to get all products for the category
    const { data: products, error } = await supabase.rpc('get_products_filtered', {
      main_category_name: mainCategoryName
    }) as { data: Product[] | null, error: any };

    if (error) {
      console.error(`Error fetching products for ${mainCategoryName}:`, error);
    }

    if (products && products.length > 0) {
      // Get a unique set of company IDs from the products
      const companyIds = [...new Set(products.map(p => p.car_company_id).filter(id => id !== null))];
      
      if (companyIds.length > 0) {
        // Fetch the details for ONLY those unique car companies
        const { data: companies, error: companyError } = await supabase
          .from('CarCompanies')
          .select('id, name, logo_url')
          .in('id', companyIds);

        if (companyError) console.error('Error fetching companies:', companyError);
        if (companies) carCompanies = companies;
      }
    }
    isLoading = false;
  });
</script>

<section class="page-container">
  <h2>Select a Company for {mainCategoryName}</h2>
  {#if isLoading}
    <p>Loading companies...</p>
  {:else if carCompanies.length > 0}
    <div class="grid-container">
      {#each carCompanies as company}
        <CategoryCard
          name={company.name}
          imageUrl={company.logo_url}
          link={`/products/${$page.params.filterType}/${company.name.replace(/ /g, '-')}`}
        />
      {/each}
    </div>
  {:else}
    <p>No companies found for this category.</p>
  {/if}
</section>

<style>
  .page-container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 1rem;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
</style>