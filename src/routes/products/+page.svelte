<!-- src/routes/products/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/utils/supabase';
  import type { FilterType } from '$lib/types';
  import CategoryCard from '$lib/components/CategoryCard.svelte';

  let mainFilterTypes: FilterType[] = [];
  let isLoading = true;

  onMount(async () => {
    const { data, error } = await supabase
      .from('FilterTypes')
      .select('*')
      .is('parent_id', null); // Correctly fetches only parent categories

    if (data) mainFilterTypes = data;
    if (error) console.error('Error fetching main categories:', error);
    isLoading = false;
  });
</script>

<section class="page-container">
  <h2>Select a Filter Type</h2>
  {#if isLoading}
    <p>Loading categories...</p>
  {:else}
    <div class="grid-container">
      {#each mainFilterTypes as filterType}
        <CategoryCard
          name={filterType.name}
          imageUrl={filterType.image_url}
          link={`/products/${filterType.name.replace(/ /g, '-')}`}
        />
      {/each}
    </div>
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
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
  }
</style>