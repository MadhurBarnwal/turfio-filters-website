<!-- src/lib/components/FilterCategory.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/utils/supabase';
  import type { FilterType } from '$lib/types';
  import CategoryCard from '$lib/components/CategoryCard.svelte'; // We'll reuse your existing card component
  import { tilt } from '$lib/utils/tilt';

export let mainFilterTypes: FilterType[];
  let isLoading = true;
  

  onMount(async () => {
    // This logic is the same as your /products page:
    // it fetches only the main categories that have no parent.
    const { data, error } = await supabase
      .from('FilterTypes')
      .select('*')
      .is('parent_id', null)
      .order('name', { ascending: true }); // Order them alphabetically for consistency

    if (data) {
      mainFilterTypes = data;
    }
    if (error) {
      console.error('Error fetching main categories for home page:', error);
    }
    isLoading = false;
  });
</script>
<section class="category-section" use:tilt={{ max: 7, perspective: 1500, scale: 1.02 }}>
  <div class="container">
    <h2>Shop by Category</h2>
    <p class="subtitle">Find the right filter for your vehicle's needs.</p>
    
    <!-- THIS IS THE CORRECTED HTML -->
    <div class="grid-container">
      {#each mainFilterTypes as filterType}
        <CategoryCard
          name={filterType.name}
          imageUrl={filterType.image_url}
          link={`/products/${filterType.name.replace(/ /g, '-')}`}
        />
      {/each}
    </div>

  </div>
</section>


<style>
  .category-section {
    padding: 60px 5%;
    text-align: center;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    border-radius: 20px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12), var(--glass-glow);
    will-change: transform;
    margin: 0 5%; /* Add horizontal margin to make it float like other glassmorphism elements */
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  h2 {
    font-size: 2.8rem;
    margin-bottom: 10px;
    color: var(--text-primary);
  }
  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 50px;
  }
  .grid-container {
    display: grid;
    /* Creates a responsive grid that shows 2 to 6 columns depending on screen width */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
  }

</style>