<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { tilt } from '$lib/utils/tilt';

  let heroVisible = false;

  onMount(() => {
    heroVisible = true;
  });

  const productImage = '/images/filters.jpg'; 
</script>

<section class="hero-container">
  {#if heroVisible}
    <!-- Text Content Glass Panel -->
    <div class="glass-panel text-panel" use:tilt={{ max: 7, perspective: 1200, scale: 1.02 }}>
      <div class="text-content" in:fade={{ delay: 200, duration: 500 }}>
        <h1 in:slide={{ delay: 300, duration: 500, axis: 'y' }}>
          Pure Air, Peak Performance.
        </h1>
        <p in:slide={{ delay: 500, duration: 500, axis: 'y' }}>
          Discover Turfio's next-generation car filters. Engineered with cutting-edge technology for superior filtration and airflow.
        </p>
        <a href="#products" class="cta-button" in:fade={{ delay: 700, duration: 600 }}>
          Explore Products
        </a>
      </div>
    </div>
    
    <!-- Image Content Glass Panel -->
    <div class="glass-panel image-panel" use:tilt={{ max: 10, perspective: 1200, scale: 1.04 }}>
       <img 
         src={productImage} 
         alt="Turfio Cabin Air Purifier"
         in:fade={{ delay: 400, duration: 800 }} 
       />
    </div>
  {/if}
</section>

<style>
  .hero-container {
    padding: 10vh 5%;
    min-height: 85vh;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    align-items: center;
    gap: 40px;
    max-width: 1400px;
    margin: 0 auto;
  }

  /* THIS IS THE NEW, IMPROVED GLASS EFFECT */
  .glass-panel {
    /* Let the background colors shine through */
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    border-radius: 20px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
    
    /* Add an inner glow to simulate light on the edge */
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12), inset 0 0 0 1.5px rgba(255,255,255,0.2);

    padding: 30px;
    will-change: transform; /* Performance optimization */
  }

  .text-panel {
    padding: 50px;
  }

  .text-content h1 {
    font-size: 3.8rem;
    line-height: 1.2;
    color: var(--text-primary);
    margin-bottom: 24px;
    font-weight: 700;
  }

  .text-content p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 32px;
    max-width: 500px;
  }

  .cta-button {
    display: inline-block;
    background-color: var(--brand-color-1);
    color: white;
    padding: 16px 32px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px -5px var(--glow-color);
  }
  
  .cta-button:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 0 30px -5px var(--glow-color);
    text-decoration: none;
  }
  
  .image-panel {
    padding: 30px;
  }
  .image-panel img {
    width: 100%;
    height: auto;
    border-radius: 12px; /* Soften image corners inside the panel */
  }

  /* Responsive Adjustments */
  @media (max-width: 992px) {
    .hero-container {
      grid-template-columns: 1fr; /* Stack on smaller screens */
      text-align: center;
      padding: 80px 5%;
      gap: 30px;
    }
    
    .image-panel {
      order: -1; /* Move image to the top on mobile */
      padding: 20px;
    }

    .text-content p {
      margin-left: auto;
      margin-right: auto;
    }

    .text-content h1 { font-size: 3rem; }
    .text-panel { padding: 40px; }
  }

  @media (max-width: 480px) {
    .text-content h1 { font-size: 2.5rem; }
    .glass-panel { padding: 25px; }
    .text-panel { padding: 30px; }
  }
</style>