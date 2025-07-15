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
  const productImage = '/images/filters.jpg'; // Using the new filters image
</script>

<section class="hero-section" bind:this={element}>
  {#if visible}
    <div class="animated-top-section">
      <div class="glowing-shimmer"></div>
      <p>Precision Engineered for Peak Performance</p>
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

  .glowing-shimmer {
    position: absolute;
    top: 0;
    left: -150%; /* Start further left */
    width: 50%; /* Shorter shimmer */
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent); /* More subtle glow */
    transform: skewX(-20deg); /* Angled shimmer */
    animation: shimmer 2s infinite linear; /* Slower, continuous shimmer */
  }

  @keyframes shimmer {
    0% {
      left: -120%;
    }
    100% {
      left: 120%;
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
    font-family: 'Roboto Condensed', sans-serif; /* Industrial font */
    font-weight: 700; /* Bold */
    letter-spacing: 2px; /* More industrial feel */
  }

  .hero-content p {
    font-size: 1.5rem; /* Larger sub-headline */
    margin-bottom: 40px;
    line-height: 1.6;
    font-family: 'Lato', sans-serif; /* Clean, professional sans-serif */
  }

  .cta-button {
    display: inline-block;
    padding: 18px 35px; /* Larger button */
    background-color: #00A99D; /* Primary teal */
    color: #FFFFFF;
    text-decoration: none;
    font-size: 1.3rem; /* Larger button text */
    font-weight: bold;
    border-radius: 30px; /* More rounded button */
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 15px rgba(0, 169, 157, 0.6); /* Initial glow matching primary teal */
    animation: pulse-glow 2s infinite alternate; /* Pulsing glow animation */
  }

  .cta-button:hover {
    background-color: #008c80; /* Darker teal on hover */
    transform: translateY(-3px);
    box-shadow: 0 0 25px rgba(0, 169, 157, 0.8); /* Stronger glow on hover */
  }

  @keyframes pulse-glow {
    0% {
      box-shadow: 0 0 15px rgba(0, 169, 157, 0.6);
    }
    100% {
      box-shadow: 0 0 25px rgba(0, 169, 157, 0.9);
    }
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
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3);
    animation: neon-glow 1.5s infinite alternate; /* Neon glow animation */
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
  

  @keyframes neon-glow {
    0% {
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3), 0 0 30px rgba(0, 255, 255, 0.1);
    }
    100% {
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3);
     }
   }
 
   @keyframes neon-glow {
     0% {
       box-shadow: 0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3), 0 0 30px rgba(0, 255, 255, 0.1);
     }
     100% {
       box-shadow: 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3);
     }
   }
 </style>