<!-- src/lib/components/FinalProductDisplay.svelte (Updated) -->
<script lang="ts">
  import type { Product } from '$lib/types';
  import { convertGoogleDriveUrl } from '$lib/utils/imageUtils';

  export let product: Product;

  // --- WhatsApp Integration ---
  // Use the WhatsApp number from your footer, including the country code (e.g., 91 for India)
  const whatsappNumber = "+918595866900";

  // This is a reactive statement. It automatically creates the correct WhatsApp link
  // whenever the 'product' prop is available.
  $: whatsappLink = (() => {
    // Construct the message
    const rawMessage = `Hello, I'm interested in the product with Turfio Part No: ${product.turfio_part_no} for model: ${product.model}.`;
    
    // URL-encode the message to make it safe for a URL
    const encodedMessage = encodeURIComponent(rawMessage);

    // Return the final link
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  })();

  $: displayUrl = convertGoogleDriveUrl(product.image_url);
</script>

<div class="product-card">
  <div class="product-image-container">
    {#if displayUrl}
      <img src={displayUrl} alt={product.model} loading="lazy" />
    {:else}
      <!-- A default placeholder image is good practice -->
      <img src="/images/default-filter.png" alt="Default product" />
    {/if}
  </div>
  <div class="product-info">
    <h4>{product.model}</h4>
    <p><strong>Turfio Part No:</strong> {product.turfio_part_no}</p>
   
    <p class="price">MRP: ₹{product.mrp}</p>

    <!-- WhatsApp Button -->
    <a 
      href={whatsappLink} 
      class="whatsapp-button" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <!-- WhatsApp SVG Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.05 4.94A9.96 9.96 0 0 0 12 2A10 10 0 0 0 2 12c0 1.85.5 3.58 1.37 5.06L2 22l5.06-1.36A9.94 9.94 0 0 0 12 22a10 10 0 0 0 10-10c0-2.76-1.06-5.26-2.95-7.06m-7.07 14.94c-1.6 0-3.14-.4-4.5-1.18L5.5 19.5l1-1.23a7.9 7.9 0 0 1-1.1-4.29c0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8m4.47-6.27c-.27-.14-1.62-.8-1.87-.89s-.43-.14-.61.13c-.18.28-.71.9-.87 1.08c-.16.18-.32.2-.59.06c-.27-.13-1.15-.42-2.19-1.35c-.81-.73-1.35-1.63-1.51-1.9c-.16-.28 0-.44.13-.57c.12-.13.27-.34.4-.46c.13-.12.18-.21.27-.35c.1-.14.05-.27 0-.41c-.05-.14-.61-1.47-.83-2c-.22-.53-.45-.46-.61-.46c-.15 0-.32 0-.49 0c-.17 0-.44.07-.66.35c-.22.28-.86.85-1 2.07c-.14 1.22.43 2.58.59 2.76c.16.18 1.44 2.21 3.5 3.11c.52.23.93.37 1.25.47c.6.18 1.15.16 1.58.1c.48-.07 1.47-.6 1.67-1.18c.2-.58.2-1.08.14-1.18c-.06-.1-.23-.16-.49-.29"/>
      </svg>
      <span>Order on WhatsApp</span>
    </a>
  </div>
</div>

<style>
  .product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    background: var(--glass-bg);
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  .product-image-container {
    height: 200px;
    padding: 1rem;
    background-color: var(--glass-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #eee;
  }
  .product-image-container img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
  .product-info {
    padding: 1.5rem;
  }
  h4 {
    margin-top: 0;
    font-size: 1.2rem;
  }
  .price {
    font-weight: bold;
    color: #333;
    margin-top: 1rem;
  }

  /* --- New WhatsApp Button Styles --- */
  .whatsapp-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background-color: #25D366; /* Official WhatsApp Green */
    color: white;
    padding: 10px 20px;
    margin-top: 1rem;
    border-radius: 50px; /* Pill shape */
    text-decoration: none;
    font-weight: bold;
    font-size: 0.95rem;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.2);

    /* Subtle pulse animation to draw attention */
    animation: pulse 2.5s infinite 3s;
  }

  .whatsapp-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);
    animation-play-state: paused; /* Pause animation on hover */
  }

  /* Keyframes for the pulse animation */
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
</style>