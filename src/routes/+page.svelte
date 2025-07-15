<script lang="ts">
  import HeroSection from '$lib/components/HeroSection.svelte';
  import ProductShowcase from '$lib/components/ProductShowcase.svelte';
  import WhyTurfioSection from '$lib/components/WhyTurfioSection.svelte';
  import TechnologyAboutSection from '$lib/components/TechnologyAboutSection.svelte';
  import TestimonialsSection from '$lib/components/TestimonialsSection.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<main>
  <HeroSection />
  <ProductShowcase />
  <WhyTurfioSection />
  <TechnologyAboutSection />
  <TestimonialsSection />
  <Footer />
</main>

<style>
  /* Basic global styles can go here or in a separate global CSS file */
  main {
    font-family: 'Arial', sans-serif;
    color: #333; /* Secondary charcoal color */
  }
</style>
