<script lang="ts">
  import { products } from '$lib/stores/productStore';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { fade, slide } from 'svelte/transition';
</script>

<div class="catalog-container">
  <div class="header" in:fade={{duration: 500}}>
    <h1>Complete Product Matrix</h1>
    <p>Explore the full range of Turfio's advanced filtration solutions.</p>
  </div>
  
  <div class="product-grid">
    {#each $products as product, i (product.id)}
      <div in:slide|fade={{ delay: 100 + i * 80, duration: 400 }}>
        <ProductCard {product} />
      </div>
    {/each}
  </div>
</div>

<style>
  .catalog-container {
    padding: 100px 5%;
    min-height: 100vh;
  }

  .header {
    text-align: center;
    margin-bottom: 60px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .header h1 {
    font-size: 3rem;
    color: var(--text-primary);
    line-height: 1.2;
  }

  .header p {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-top: 15px;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1400px;
    margin: 0 auto;
  }
</style>