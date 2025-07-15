<script lang="ts">
  import ProductCard from './ProductCard.svelte';
  import { products } from '$lib/stores/productStore'; // Import the store
  import { observeElementVisibility } from '$lib/utils/scrollEffects'; // Corrected import
  import { fade, slide } from 'svelte/transition';
  import { onMount } from 'svelte';

  let element: HTMLElement;
  let visible = $state(false);

  onMount(() => {
    observeElementVisibility(element, () => {
      visible = true;
    });
  });
</script>

<section id="products" class="product-showcase" bind:this={element}>
  {#if visible}
    <h2 transition:slide={{ duration: 500, axis: 'y', delay: 200 }}>Featured Products</h2>
    <div class="product-grid">
      {#each $products as product (product.id)}
        <ProductCard {product} />
      {/each}
    </div>
  {/if}
</section>

<style>
  .product-showcase {
    padding: 60px 5%;
    background-color: #FFFFFF; /* White background */
    color: #333333; /* Dark charcoal text */
    text-align: center;
  }

  .product-showcase h2 {
    font-size: 2.8rem;
    margin-bottom: 40px;
    color: #00A99D; /* Primary teal */
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive grid */
    gap: 30px;
    justify-content: center;
  }

  /* Basic responsiveness for the grid */
  @media (max-width: 768px) {
    .product-grid {
      grid-template-columns: 1fr; /* Stack cards on smaller screens */
    }
  }
</style>