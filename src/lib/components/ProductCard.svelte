<script lang="ts">
  import { tilt } from '$lib/utils/tilt';
  import type { Product } from '$lib/stores/productStore'; // Import the main Product type

  // Define the type for a product using the imported interface
  export let product: Product;
</script>

<div class="product-card" use:tilt={{ max: 12, perspective: 1000, scale: 1.04 }}>
  <div class="product-image">
    <img src={product.imageUrl} alt={product.name} />
  </div>
  <div class="product-info">
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <!-- Inside ProductCard.svelte -->
<a href={`/products/${product.slug}`} class="details-link">
  View Details →
</a>
  </div>
</div>

<style>
  /* Applying the same improved glass effect here */
  .product-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12), inset 0 0 0 1.5px rgba(255,255,255,0.2);
    
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease;
    will-change: transform;
    overflow: hidden;
  }

  .product-image img {
    width: 100%;
    height: 200px;
    object-fit: contain; /* Use contain to show the whole filter */
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.5); /* Add a light background to the image itself */
    padding: 10px;
  }

  .product-info h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: var(--text-primary);
  }

  .product-info p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 20px;
    min-height: 50px; /* Ensures cards have similar heights */
  }

  .details-link {
    color: var(--brand-color-1);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
  }
  .details-link:hover {
    letter-spacing: 0.5px;
    text-decoration: none;
  }
</style>