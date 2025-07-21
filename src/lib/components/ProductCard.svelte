<script lang="ts">
  import { tilt } from '$lib/utils/tilt';
  import type { DisplayCard } from '$lib/types'; // Import our new type

  export let product: DisplayCard;

  // Determine the link based on whether a slug or href is provided
  const link = product.slug ? `/products/${product.slug}` : product.href;
</script>

<div class="product-card" use:tilt={{ max: 12, perspective: 1000, scale: 1.04 }}>
  <div class="product-image">
    <img src={product.imageUrl} alt={product.name} />
  </div>
  <div class="product-info">
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    {#if link}
      <a href={link} class="details-link">
        View Details →
      </a>
    {/if}
  </div>
</div>

<style>
  /* STYLES REMAIN THE SAME */
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
    object-fit: contain;
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.5);
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
    min-height: 50px;
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