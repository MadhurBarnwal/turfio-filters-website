<script lang="ts">
  import { page } from '$app/stores';
  import { products } from '$lib/stores/productStore';

  // Get the current slug from the URL
  const currentSlug = $page.params.slug;

  // Find the product in our store that matches this slug
  const product = $products.find(p => p.slug === currentSlug);
</script>

{#if product}
  <div class="product-page-container">
    <div class="product-layout">
      
      <!-- Image Panel -->
      <div class="glass-panel image-panel">
        <img src={product.imageUrl} alt={product.name} />
      </div>

      <!-- Details Panel -->
      <div class="glass-panel details-panel">
        <h1>{product.name}</h1>
        <p class="description">{product.description}</p>
        
        <div class="spec-grid">
          <div class="spec-item">
            <span>Part ID</span>
            <strong>PM-{product.id.toString().padStart(4, '0')}</strong>
          </div>
          <div class="spec-item">
            <span>Category</span>
            <strong>Engine Components</strong>
          </div>
          <div class="spec-item">
            <span>Efficiency</span>
            <strong>99.8%</strong>
          </div>
        </div>

        <button class="cta-button">Enquire Now</button>
      </div>

    </div>
  </div>
{:else}
  <div class="not-found-container">
    <h1>Product Not Found</h1>
    <p>The product you're looking for doesn't exist.</p>
    <a href="/" class="cta-button">Back to Homepage</a>
  </div>
{/if}

<style>
  .product-page-container {
    padding: 120px 5%;
    min-height: 100vh;
  }
  .product-layout {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    align-items: flex-start;
  }

  .glass-panel {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12), var(--glass-glow);
    border-radius: 20px;
    padding: 30px;
  }

  .image-panel img {
    width: 100%;
    border-radius: 12px;
  }

  .details-panel h1 {
    font-size: 3rem;
    color: var(--text-primary);
    margin-bottom: 15px;
  }
  .details-panel .description {
    font-size: 1.2rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .spec-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-bottom: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 30px;
  }
  .spec-item span {
    display: block;
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 5px;
  }
  .spec-item strong {
    font-size: 1.1rem;
    color: var(--text-primary);
  }

  .cta-button {
    width: 100%;
    background-color: var(--brand-color-1);
    color: white;
    padding: 16px 32px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px -5px var(--glow-color);
  }
  .cta-button:hover {
    transform: scale(1.02);
    box-shadow: 0 0 30px -5px var(--glow-color);
  }

  .not-found-container {
    padding: 120px 5%;
    text-align: center;
  }

  @media(max-width: 900px) {
    .product-layout {
      grid-template-columns: 1fr;
    }
    .spec-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>