<script lang="ts">
  import ProductCard from './ProductCard.svelte';
  import { products } from '$lib/stores/productStore';
  import { slide, fade } from 'svelte/transition';
</script>

<section id="products" class="product-showcase">
  <h2 in:fade={{duration: 400}}>Featured Products</h2>
  <p class="subtitle" in:fade={{delay:200, duration: 400}}>
    High-quality filters for every part of your vehicle.
  </p>
  <div class="product-grid">
    {#each $products as product (product.id)}
      <div in:fade={{delay: 200 + product.id * 100, duration: 400}}>
        <ProductCard {product} />
      </div>
    {/each}
  </div>
</section>

<style>
  .product-showcase {
    padding: 80px 5%;
    text-align: center;
  }

  .product-showcase h2 {
    font-size: 2.8rem;
    margin-bottom: 10px;
    color: var(--text-primary);
  }
  
  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 50px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    justify-content: center;
    max-width: 1400px;
    margin: 0 auto;
  }
</style>