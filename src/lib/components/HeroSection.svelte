<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { tilt } from '$lib/utils/tilt';

  let heroVisible = false;

  onMount(() => {
    heroVisible = true;
  });

  const productImage = '/images/person.jpeg'; 
</script>

<section class="hero-container">
  {#if heroVisible}
    <!-- Main Glass Panel for Text Content -->
    <div class="glass-panel text-panel" use:tilt={{ max: 7, perspective: 1500, scale: 1.02 }}>
      <div class="text-content">
        <!-- New, More Compelling Headline -->
        <h1 in:slide={{ delay: 300, duration: 500, axis: 'y' }}>
          Turfio! Save your atmosphere..
        </h1>
        <!-- New Subtitle -->
        <p class="subtitle" in:slide={{ delay: 500, duration: 500, axis: 'y' }}>
          Turfio's Filtration Matrix represents the apex of vehicular air purification technology, engineered for absolute particulate capture and unimpeded performance.
        </p>

        <!-- New Icon-based Feature Highlights -->
        <div class="feature-highlights" in:fade={{ delay: 700, duration: 600 }}>
          <div class="feature-item">
            <div class="icon-wrapper">🛡️</div>
            <h4>Total Particulate Capture</h4>
            <p>Electrostatically-charged media traps 99.97% of contaminants.</p>
          </div>
          <div class="feature-item">
            <div class="icon-wrapper">⚡️</div>
            <h4>Zero-Compromise Airflow</h4>
            <p>Optimized for maximum permeability and peak engine/HVAC efficiency.</p>
          </div>
          <div class="feature-item">
            <div class="icon-wrapper">🔬</div>
            <h4>Molecular Adsorption</h4>
            <p>Activated carbon lattice neutralizes odors and volatile organic compounds.</p>
          </div>
        </div>

        <a href="#products" class="cta-button" in:fade={{ delay: 900, duration: 600 }}>
          Explore the Products
        </a>
      </div>
    </div>
    
    <!-- Reactive Image Panel -->
    <div class="hero-image-wrapper" use:tilt={{ max: 10, perspective: 1500, scale: 1.05 }}>
       <img 
         src={productImage} 
         alt="Turfio Cabin Air Purifier"
         in:fade={{ delay: 400, duration: 800 }} 
       />
    </div>
  {/if}
</section>

<style>
  /* --- Your Preferred Desktop Styles --- */
  .hero-container {
    padding: 10vh 5%;
    min-height: 90vh;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    align-items: stretch; /* Stretch items to be full height */
    gap: 50px;
    max-width: 1400px;
    margin: 0 auto;
  }

  .glass-panel {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    border-radius: 20px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12), var(--glass-glow);
    padding: 40px; /* Reduced padding slightly for better fit */
    will-change: transform;
    display: flex; /* Changed to flex for better internal alignment */
  }

  .text-content {
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .text-content h1 {
    font-size: 2rem;
    line-height: 1.25;
    color: var(--text-primary);
    margin-bottom: 15px; /* Increased for better spacing */
    font-weight: 700;
  }

  .text-content .subtitle {
    font-size: 0.9rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 30px; /* Increased for better spacing */
    max-width: 550px;
  }

  .feature-highlights {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px; /* Increased gap */
    margin-bottom: auto; /* Pushes the CTA to the bottom */
  }

  .feature-item {
    text-align: left;
  }
  
  .icon-wrapper {
    font-size: 2rem; /* Adjusted size */
    margin-bottom: 15px; /* Adjusted spacing */
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .feature-item h4 {
    font-size: 0.88rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text-primary);
  }

  .feature-item p {
    font-size: 0.78rem;
    line-height: 1.6;
    color: var(--text-secondary);
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
    margin-top: 30px; /* Give it space from the features */
    align-self: flex-start;
  }
  
  .cta-button:hover {
    transform: scale(1.05) translateY(-2px);
  }

  .hero-image-wrapper {
    display: flex;
    align-items: stretch; /* Match panel height */
    padding: 1px 46px;

  }

  .hero-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 60px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    padding: 25px;
  }

  /* ======================================================== */
  /* === NEW & IMPROVED RESPONSIVE (MOBILE) STYLES === */
  /* ======================================================== */
  @media (max-width: 992px) {
    .hero-container {
      /* Stack elements and adjust padding for mobile */
      grid-template-columns: 1fr;
      padding: 80px 5% 40px 5%; /* Less vertical padding */
      gap: 20px;
    }

    .glass-panel {
      padding: 20px; /* Reduce padding on mobile */
    }

    /* Center text content on mobile */
    .text-content, .feature-item { 
      text-align: center;
    }
    .icon-wrapper, .cta-button { 
      align-self: center; /* Center these items within their containers */
    }

    /* Adjust typography for mobile readability */
    .text-content h1 {
      /* THE KEY FIX: Use a smaller, more appropriate font size */
      font-size: 1.4rem; 
      margin-bottom: 8px;
    }
    .text-content .subtitle {
      font-size: 0.77rem; /* Slightly larger for readability */
      margin-bottom: 7px;
    }

    /* Switch feature highlights to a single column */
    .feature-highlights {
      grid-template-columns: 1fr;
      gap: 1px;
      margin-bottom: -20px; /* Add space before the CTA button */
    }

    .feature-item h4 {
      font-size: 0.8rem; /* Make feature titles larger */
    }
    .feature-item p {
      font-size: 0.68rem; /* Make feature descriptions larger */
      margin-bottom: 3px;
      margin-top: 2px;

    }
     .feature-item { 
      text-align: center;
      /* This ensures the flexbox items inside are centered */
      display: flex;
      flex-direction: column;
      align-items: center;
      
    }
  }

</style>