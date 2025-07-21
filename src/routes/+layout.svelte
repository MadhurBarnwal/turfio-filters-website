<script lang="ts">
  import { page } from '$app/stores';
  import Footer from '$lib/components/Footer.svelte';
  let mobileMenuOpen = false;

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMenu() {
    mobileMenuOpen = false;
  }
</script>

<!-- Add a class to the body to prevent scrolling when menu is open -->
<svelte:body on:scroll={mobileMenuOpen ? e => e.preventDefault() : null} />

<header class:menu-open={mobileMenuOpen}>
  <div class="logo">
    <a href="/" on:click={closeMenu}>
      <img src="/images/turfio-logo.png" alt="Turfio Filters" class="logo-image">
    </a>
  </div>
<div class="catalog-button-header">
  <a href="/catalog.pdf" target="_blank" rel="noopener noreferrer" class="catalog-button">
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
    <ul>
      <li><a href="/" class:active={$page.url.pathname === '/'} on:click={closeMenu}>Home</a></li>
      <li><a href="/products" on:click={closeMenu}>Products</a></li>
      <li><a href="/blog" on:click={closeMenu}>Blog</a></li>
      <li><a href="/about" on:click={closeMenu}>About</a></li>
      <li><a href="/contact" on:click={closeMenu}>Contact</a></li>
      
    </ul>
    <div class="mobile-catalog-button-container">
		<a href="/catalog.pdf" target="_blank" rel="noopener noreferrer" class="catalog-button">
			Download Catalog
		</a>
	</div>
  </nav>
  
  <!-- Desktop-only Catalog Button -->
  <div class="desktop-cta-container">
	  <a href="/catalog.pdf" target="_blank" rel="noopener noreferrer" class="catalog-button">
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


  /* --- Responsive Breakpoint --- */
  @media (max-width: 820px) {
    .mobile-menu-toggle {
      display: block;
    }
    
    .desktop-cta-container {
      display: none; /* Hide desktop button on mobile */
    }
      .catalog-button-header {
          display: none; /* Hide on desktop */
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
      transform: translateX(0);
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
  }
</style>

<main>
  <slot />
</main>

<Footer />