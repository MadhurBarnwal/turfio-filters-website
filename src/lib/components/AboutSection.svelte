<script lang="ts">
  import { onMount } from 'svelte';
  import { tilt } from '$lib/utils/tilt';
  import { fade, slide } from 'svelte/transition';
  import { observeElementVisibility } from '$lib/utils/scrollEffects';

  let sectionEl: HTMLElement;
  let isVisible = false;

  onMount(() => {
    if (!sectionEl || typeof observeElementVisibility === 'undefined') {
        isVisible = true;
        return;
    }
    observeElementVisibility(sectionEl, () => {
      isVisible = true;
    });
  });

  const aboutImage = '/images/filter_about.jpg'; 
</script>

<section class="about-section" bind:this={sectionEl}>
  {#if isVisible}
    <div class="container">
      
      <div class="about-layout-grid">

        <!-- ===== Front Text Panel ===== -->
        <div 
          class="glass-panel text-panel" 
          use:tilt={{ max: 5, perspective: 2000, scale: 1.015 }}
          transition:slide={{ duration: 800, axis: 'x', x: -80 }}
        >
          <h2>A Legacy of Purity.</h2>
          <p class="subtitle">Decades of material science and fluid dynamics research, distilled into every filter we craft.</p>
          <p class="main-text">
            Our proprietary Filtration Matrix isn't just a component; it's the core of our ethos. By weaving electrostatically-charged microfibers into a multi-density gradient, we create a barrier that is exceptionally porous to air, yet virtually impermeable to contaminants. 
          </p>
          <a href="/about" class="details-link">Learn Our Story →</a>
        </div>

        <!-- ===== Back Image Panel ===== -->
        <div 
          class="image-container-panel"
          use:tilt={{ max: 7, perspective: 2000, scale: 1.02 }}
          transition:slide={{ duration: 800, axis: 'x', x: 80 }}
        >
          <img src={aboutImage} alt="Diagram of Turfio's advanced cabin air filtration system" />
        </div>

      </div>
    </div>
  {/if}
</section>

<style>
  .about-section {
    padding: 120px 5%;
    overflow-x: hidden;
  }
  .container {
    max-width: 1150px;
    margin: 0 auto;
  }

  .about-layout-grid {
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    align-items: center;
  }

  /* --- Styles for the panels --- */
  .text-panel {
    grid-column: 1 / span 1;
    grid-row: 1 / 1;
    z-index: 2;
    padding: 50px;
    background: radial-gradient(circle at 0% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.05) 40%);
    backdrop-filter: blur(22px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 10px 45px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    will-change: transform;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .image-container-panel {
    grid-column: 2 / span 1;
    grid-row: 1 / 1;
    z-index: 1;
    transform: translateX(-80px); 
    background: #ffffff;
    padding: 20px;
    border-radius: 24px;
    box-shadow: 0 10px 45px rgba(0,0,0,0.12);
    will-change: transform;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .image-container-panel:hover {
	  transform: translateX(-80px) scale(1.03);
  }
  .image-container-panel img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 16px;
  }

  /* --- Text Content Styling --- */
  .text-panel h2 { font-size: 2.8rem; font-weight: 700; color: var(--text-primary); }
  .text-panel .subtitle { font-size: 1.2rem; color: var(--text-secondary); margin: 10px 0 25px 0; line-height: 1.6; }
  .text-panel .main-text { font-size: 1rem; line-height: 1.8; color: var(--text-secondary); }
  .details-link { display: inline-block; margin-top: 30px; color: var(--brand-color-1); text-decoration: none; font-weight: 500; }
  .details-link:hover { text-decoration: underline; }

  /* ============================================= */
  /* === THE CRITICAL MOBILE RESPONSIVE FIXES === */
  /* ============================================= */
  @media (max-width: 992px) {
    .about-section {
      /* Reduce padding on smaller screens */
      padding: 80px 5%;
    }
    
    .about-layout-grid {
      /* 1. Switch to a single-column layout */
      grid-template-columns: 1fr;
      gap: 30px; /* Add space between stacked items */
    }

    .text-panel, .image-container-panel {
      /* 2. Make each panel take up the full width */
      grid-column: 1 / -1;
      grid-row: auto; /* Let the document flow naturally */
      z-index: auto;
      
      /* 3. THIS IS THE MOST IMPORTANT FIX: */
      /* Reset the transform that causes the overlap on desktop */
      transform: none !important;
    }

    .image-container-panel:hover {
        /* Also reset the hover transform for mobile */
	    transform: none !important;
    }
    
    /* 4. Adjust typography for better readability on mobile */
    .text-panel {
      padding: 35px; /* Reduce padding inside the card */
    }
    .text-panel h2 {
      font-size: 2.4rem;
    }
    .text-panel .subtitle {
      font-size: 1.1rem;
    }
  }
</style>