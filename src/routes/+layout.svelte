<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import Footer from '$lib/components/Footer.svelte';
    // --- NEW: Import the type for our layout data ---
  // --- NEW: Import the store and fetch function ---
  import { catalogUrl, fetchCatalogUrl } from '$lib/stores/settingsStore';
 
  const callPhoneNumber = "+91 8595866900";
  const oldCallPhoneNumber = "+91 9911116168";
  const whatsappNumber = "+918595866900";
  const emailAddress = "turfiofilters@gmail.com";
  const instagramUrl = "https://www.instagram.com/turfiofilters";
  const facebookUrl = "https://m.facebook.com/turfiofilters/";

  const callLink = `tel:${callPhoneNumber}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'm interested in Turfio Filters.")}`;
  const emailLink = `mailto:${emailAddress}`;

  let mobileMenuOpen = false;


    // --- NEW: Fetch the URL when the layout first loads ---
  onMount(() => {
    fetchCatalogUrl();
  });

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMenu() {
    mobileMenuOpen = false;
  }

</script>

<svelte:head>
  <!-- This is the DEFAULT title for your entire website -->
  <title>Turfio Filters | Premium Automotive Air & Oil Filters</title>
  <meta name="description" content="High-quality cabin, air, and oil filters for a wide range of vehicles. Find the perfect fit for your car at Turfio Filters." />
</svelte:head>


<!-- Add a class to the body to prevent scrolling when menu is open -->
<svelte:body on:scroll={mobileMenuOpen ? e => e.preventDefault() : null} />

<header class:menu-open={mobileMenuOpen}>
  <div class="logo">
    <a href="/" on:click={closeMenu}>
      <img src="/images/turfio-logo.png" alt="Turfio Filters" class="logo-image">
    </a>
  </div>
<div class="catalog-button-header">
  <a href={$catalogUrl} target="_blank" rel="noopener noreferrer" class="catalog-button">
    Download Catalog
  </a>
</div>
  <!-- Mobile Menu Toggle Button -->
  <button class="mobile-menu-toggle" on:click={toggleMenu} aria-label="Toggle menu">
    {#if mobileMenuOpen}
      <!-- Close (X) Icon -->
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    {:else}
      <!-- Hamburger Icon -->
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    {/if}
  </button>

  <!-- Navigation Links -->
  <nav class:open={mobileMenuOpen}>
    <div class="mobile-logo">
      <a href="/" on:click={closeMenu}>
        <img src="/images/turfio-logo.png" alt="Turfio Filters" class="logo-image">
      </a>
    </div>
    <ul>
      <li><a href="/" class:active={$page.url.pathname === '/'} on:click={closeMenu}>Home</a></li>
      <li><a href="/products" on:click={closeMenu}>Products</a></li>
      <li><a href="/blog" on:click={closeMenu}>Blog</a></li>
      <li><a href="/about" on:click={closeMenu}>About</a></li>
      <li><a href="/contact" on:click={closeMenu}>Contact</a></li>
    </ul>
    <div class="mobile-catalog-button-container">
      <a href={$catalogUrl} target="_blank" rel="noopener noreferrer" class="catalog-button">
        Download Catalog
      </a>
    </div>
    <div class="mobile-footer-icons">
      <div class="icon-row-first">
        <a href={callLink} on:click={closeMenu}>
          <img src="/icons/call.svg" alt="Call" class="contact-icon" />
        </a>
        <a href={`tel:${oldCallPhoneNumber}`} on:click={closeMenu}>
          <img src="/icons/call.svg" alt="Call" class="contact-icon" />
        </a>
        <a href={emailLink} on:click={closeMenu}>
          <img src="/icons/email.svg" alt="Email" class="contact-icon" />
        </a>
      </div>
      <div class="social-icons-mobile">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" on:click={closeMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.94A9.96 9.96 0 0 0 12 2A10 10 0 0 0 2 12c0 1.85.5 3.58 1.37 5.06L2 22l5.06-1.36A9.94 9.94 0 0 0 12 22a10 10 0 0 0 10-10c0-2.76-1.06-5.26-2.95-7.06m-7.07 14.94c-1.6 0-3.14-.4-4.5-1.18L5.5 19.5l1-1.23a7.9 7.9 0 0 1-1.1-4.29c0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8m4.47-6.27c-.27-.14-1.62-.8-1.87-.89s-.43-.14-.61.13c-.18.28-.71.9-.87 1.08c-.16.18-.32.2-.59.06c-.27-.13-1.15-.42-2.19-1.35c-.81-.73-1.35-1.63-1.51-1.9c-.16-.28 0-.44.13-.57c.12-.13.27-.34.4-.46c.13-.12.18-.21.27-.35c.1-.14.05-.27 0-.41c-.05-.14-.61-1.47-.83-2c-.22-.53-.45-.46-.61-.46c-.15 0-.32 0-.49 0c-.17 0-.44.07-.66.35c-.22.28-.86.85-1 2.07c-.14 1.22.43 2.58.59 2.76c.16.18 1.44 2.21 3.5 3.11c.52.23.93.37 1.25.47c.6.18 1.15.16 1.58.1c.48-.07 1.47-.6 1.67-1.18c.2-.58.2-1.08.14-1.18c-.06-.1-.23-.16-.49-.29"/></svg>
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" on:click={closeMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
        </a>
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" on:click={closeMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
        </a>
      </div>
    </div>
  </nav>
  
  <!-- Desktop-only Catalog Button -->
  <div class="desktop-cta-container">
	  <a href={$catalogUrl} target="_blank" rel="noopener noreferrer" class="catalog-button">
		  Download Catalog
	  </a>
  </div>
</header>

<style>
  header {
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    position: sticky;
    top: 16px;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    max-width: 1400px;
    margin: 16px auto 0 auto;
    padding: 12px 24px;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  }
  .mobile-catalog-button-container{
    display: none;
  }

  /* --- Logo --- */
  .logo-image {
/* Make image size small */
    /* Left padding */
    padding-left: 12px;
    height: 55px;
  }

  /* --- Desktop Navigation --- */
  nav {
    display: flex;
  }
  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 30px;
  }
  nav a {
    text-decoration: none;
    color: var(--text-secondary);
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.3s ease;
    position: relative;
    padding-bottom: 5px;
  }
  nav a:hover,
  nav a.active {
    color: var(--text-primary);
  }
  nav a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--glow-color);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }
  nav a:hover::after,
  nav a.active::after {
    transform: scaleX(1);
  }


  /* --- CTA Button --- */
  .catalog-button {
	  display: block;
	  background-color: var(--brand-color-1);
	  color: white;
	  padding: 10px 20px;
	  border-radius: 8px;
	  text-decoration: none;
	  font-weight: 500;
	  transition: all 0.3s ease;
	  box-shadow: 0 0 15px -5px var(--glow-color);
  }

    .mobile-logo {
      display: none; /* Show on mobile */
      margin-bottom: 20px; /* Add some space below the logo */
    }

  .catalog-button:hover {
	  transform: scale(1.05);
	  box-shadow: 0 0 25px -5px var(--glow-color);
	  text-decoration: none;
  }
  .catalog-button-header {
  display: none; /* Hide on desktop */
}
  
  /* --- Mobile Menu Specific Styles --- */
  .mobile-menu-toggle {
    display: none; /* Hidden by default */
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-primary);
    z-index: 101; /* Above the nav */
  }

  .mobile-catalog-button-container {
	  display: none; /* Hidden on desktop */
  }



    .mobile-logo .logo-image {
      height: 130px; /* Adjust size for mobile logo */
      padding-left: 0; /* Remove left padding for mobile logo */
    }

    .mobile-footer-icons {
     display: flex;
     flex-direction: column;
     gap: 15px;
     margin-top: 30px;
     width: 100%;
     padding: 0 20px;
     box-sizing: border-box;
   }

   .mobile-footer-icons .icon-row-first {
     display: flex;
     justify-content: space-around; /* Distribute items evenly */
     align-items: center;
     gap: 10px;
   }

    .mobile-footer-icons a {
      color: var(--text-secondary);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 1rem;
      display: none;
    }

    .mobile-footer-icons a:hover {
      color: var(--text-primary);
    }

    .mobile-footer-icons .contact-icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      margin-top: 4px;
    }

    .social-icons-mobile {
      display: flex;
      gap: 15px;
      justify-content: center;
      margin-top: 20px;
      display: none;
    }

    .social-icons-mobile a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      color: var(--text-primary);
      transition: all 0.3s ease;
    }

    .social-icons-mobile a:hover {
      background: var(--brand-color-1);
      color: white;
      transform: scale(1.1);
      
    }
  


  /* --- Responsive Breakpoint --- */
  @media (max-width: 820px) {
    .mobile-menu-toggle {
      display: block;
    }
        .social-icons-mobile {
      display: flex;
      gap: 15px;
      justify-content: center;
      margin-top: 20px;
    }

      .mobile-footer-icons a {
      color: var(--text-secondary);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 1rem;
    }
    .desktop-cta-container {
      display: none; /* Hide desktop button on mobile */
    }
      .catalog-button-header {
          display: none; /* Hide on desktop */
        }

    .mobile-logo {
      display: block; /* Show on mobile */
      margin-bottom: 20px; /* Add some space below the logo */
    }

    nav {
      /* Mobile nav panel */
      position: fixed;
      top: -60px;
      left: 0;
      width: 80%;
      height: 100vh;
      
      /* Glass effect for the panel */
      background: var(--glass-bg);
      backdrop-filter: blur(var(--glass-blur));
      border-right: var(--glass-border);

      /* Layout */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      /* Hide/show animation */
      transform: translateX(-100%);
      transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }
    nav.open {
      transform: translateX(-10px);
    }

    nav ul {
      flex-direction: column;
      align-items: center;
      gap: 25px;
    }

    nav a {
      font-size: 1.2rem; /* Larger text for mobile menu */
    }
 
    .mobile-catalog-button-container {
  display: block;
 }

    .mobile-logo .logo-image {
      height: 130px; /* Adjust size for mobile logo */
      padding-left: 0; /* Remove left padding for mobile logo */
    }

    .mobile-footer-icons {
     display: flex;
     flex-direction: column;
     gap: 15px;
     margin-top: 30px;
     width: 100%;
     padding: 0 20px;
     box-sizing: border-box;
   }

   .mobile-footer-icons .icon-row-first {
     display: flex;
     justify-content: space-around; /* Distribute items evenly */
     align-items: center;
     gap: 10px;
   }

    .mobile-footer-icons a {
      color: var(--text-secondary);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 1rem;
    }

    .mobile-footer-icons a:hover {
      color: var(--text-primary);
    }

    .mobile-footer-icons .contact-icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      margin-top: 4px;
    }

    .social-icons-mobile {
      display: flex;
      gap: 15px;
      justify-content: center;
      margin-top: 20px;
    }

    .social-icons-mobile a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      color: var(--text-primary);
      transition: all 0.3s ease;
    }

    .social-icons-mobile a:hover {
      background: var(--brand-color-1);
      color: white;
      transform: scale(1.1);
    }
  }

  .whatsapp-float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    background-color: #25d366;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  .whatsapp-float:hover {
    transform: scale(1.1);
  }

  .whatsapp-icon {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 600px) {
    .whatsapp-float {
      width: 50px;
      height: 50px;
      bottom: 20px;
      right: 20px;
    }
    .whatsapp-icon {
      width: 30px;
      height: 30px;
    }
     nav {
      /* Mobile nav panel */
      position: fixed;
      top: -60px;
      left: 0;
      width: 80%;
      height: 100vh;
      
      /* Glass effect for the panel */
      background: rgba(237, 204, 204, 0.95);
      border-right: var(--glass-border);
      backdrop-filter: blur(2px);

      /* Layout */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      /* Hide/show animation */
      transform: translateX(-105%);
      transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }
</style>

<main>
  <slot />
</main>

<a href={whatsappLink} class="whatsapp-float" target="_blank" rel="noopener noreferrer">
  <img src="/images/whatsapp.webp" alt="WhatsApp" class="whatsapp-icon">
</a>

<Footer />