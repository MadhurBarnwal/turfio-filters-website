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
    <div class="hero-content">
      <h1 transition:fade={{ duration: 500 }}>Breathe Pure Air. Drive in Comfort.</h1>
      <p transition:fade={{ duration: 700, delay: 500 }}>Discover Turfio's super-capacity cabin air purifiers.</p>
      <a href="#products" class="cta-button" transition:fade={{ duration: 900, delay: 1000 }}>
        Shop Now
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
    align-items: center;
    justify-content: space-between;
    padding: 80px 5%; /* Responsive padding */
    min-height: 80vh; /* Take up significant viewport height */
    background-color: #333333; /* Secondary charcoal */
    color: #FFFFFF; /* Accent white */
    overflow: hidden; /* To contain background effects */
    position: relative;
  }

  .hero-content {
    flex: 1;
    max-width: 600px;
    z-index: 1; /* Ensure content is above background */
  }

  .hero-content h1 {
    font-size: 3.5rem; /* Large headline */
    margin-bottom: 20px;
    line-height: 1.2;
    color: #00A99D; /* Primary teal */
  }

  .hero-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 1.6;
  }

  .cta-button {
    display: inline-block;
    padding: 15px 30px;
    background-color: #00A99D; /* Primary teal */
    color: #FFFFFF;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    border: none;
    cursor: pointer;
  }

  .cta-button:hover {
    background-color: #008c80; /* Darker teal on hover */
    transform: translateY(-2px);
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .hero-image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px; /* Slightly rounded corners for the image */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Subtle shadow */
  }

  /* Basic responsiveness */
  @media (max-width: 768px) {
    .hero-section {
      flex-direction: column;
      text-align: center;
      padding: 40px 5%;
      min-height: auto;
    }

    .hero-content {
      margin-bottom: 40px;
    }

    .hero-content h1 {
      font-size: 2.8rem;
    }

    .hero-image img {
      max-width: 80%;
    }
  }
</style>