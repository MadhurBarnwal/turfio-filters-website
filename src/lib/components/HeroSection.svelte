<script lang="ts">
  import { fade } from 'svelte/transition';
  import { observeElementVisibility } from '$lib/utils/scrollEffects';
  import { onMount } from 'svelte';

  let element: HTMLElement;
  let visible = $state(false);

  onMount(() => {
    observeElementVisibility(element, () => {
      visible = true;
    });
  });

  // Placeholder for product image URL
  const productImage = '/images/hero-product.jpg'; // Assuming an image will be placed in static/images/
</script>

<section class="hero-section" bind:this={element}>
  {#if visible}
    <div class="animated-top-section">
      <div class="glowing-line"></div>
      <p>Experience the Turfio Difference</p>
    </div>
    <div class="hero-content">
      <h1 transition:fade={{ duration: 500 }}>Breathe Pure Air. Drive in Comfort.</h1>
      <p transition:fade={{ duration: 700, delay: 500 }}>Discover Turfio's super-capacity cabin air purifiers.</p>
      <a href="#products" class="cta-button" transition:fade={{ duration: 900, delay: 1000 }}>
        View Products
      </a>
    </div>
    <div class="hero-image">
      <img src={productImage} alt="Turfio Cabin Air Purifier in a luxury car" />
    </div>
  {/if}
</section>

<style>
  .hero-section {
    display: flex;
    flex-direction: column; /* Changed to column to place animated section on top */
    align-items: center;
    justify-content: center;
    padding: 80px 5%; /* Responsive padding */
    min-height: 90vh; /* Take up significant viewport height */
    background-color: #e0f7fa; /* Lighter, "cuter" background color (light cyan) */
    color: #333333; /* Dark charcoal text */
    overflow: hidden; /* To contain background effects */
    position: relative;
    text-align: center;
  }

  .animated-top-section {
    width: 100%;
    padding: 20px;
    background-color: #00A99D; /* Primary teal */
    color: #FFFFFF;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 40px;
    position: relative;
    overflow: hidden;
  }

  .glowing-line {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    animation: glow 2s infinite;
  }

  @keyframes glow {
    0% {
      left: -100%;
    }
    50% {
      left: 100%;
    }
    100% {
      left: -100%;
    }
  }

  .hero-content {
    max-width: 800px;
    z-index: 1; /* Ensure content is above background */
    margin-bottom: 40px;
  }

  .hero-content h1 {
    font-size: 4rem; /* Larger headline */
    margin-bottom: 20px;
    line-height: 1.2;
    color: #00A99D; /* Primary teal */
    font-family: 'Georgia', serif; /* Example of a better font */
  }

  .hero-content p {
    font-size: 1.5rem; /* Larger sub-headline */
    margin-bottom: 40px;
    line-height: 1.6;
    font-family: 'Verdana', sans-serif; /* Example of a better font */
  }

  .cta-button {
    display: inline-block;
    padding: 18px 35px; /* Larger button */
    background-color: #ff6f61; /* Accent color (coral) */
    color: #FFFFFF;
    text-decoration: none;
    font-size: 1.3rem; /* Larger button text */
    font-weight: bold;
    border-radius: 30px; /* More rounded button */
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    border: none;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .cta-button:hover {
    background-color: #e05a4d; /* Darker coral on hover */
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .hero-image img {
    max-width: 90%; /* Slightly larger image */
    height: auto;
    border-radius: 15px; /* More rounded corners for the image */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4); /* More prominent shadow */
  }

  /* Basic responsiveness */
  @media (max-width: 768px) {
    .hero-section {
      padding: 40px 5%;
      min-height: auto;
    }

    .animated-top-section {
      margin-bottom: 20px;
    }

    .hero-content {
      margin-bottom: 30px;
    }

    .hero-content h1 {
      font-size: 3rem;
    }

    .hero-content p {
      font-size: 1.2rem;
    }

    .cta-button {
      padding: 15px 30px;
      font-size: 1.1rem;
    }

    .hero-image img {
      max-width: 80%;
    }
  }
</style>