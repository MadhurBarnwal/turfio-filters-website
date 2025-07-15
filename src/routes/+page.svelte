<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import StatsSection from '$lib/components/StatsSection.svelte';
  import ProductShowcase from '$lib/components/ProductShowcase.svelte';
  import WhyTurfioSection from '$lib/components/WhyTurfioSection.svelte';
  import TechnologyAboutSection from '$lib/components/TechnologyAboutSection.svelte';
  import TestimonialsSection from '$lib/components/TestimonialsSection.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import FaqSection from '$lib/components/FaqSection.svelte';

</script>

<Header />

<main>
  <HeroSection />
  <StatsSection />
  <ProductShowcase />
  <FaqSection />
  <WhyTurfioSection />
  <TechnologyAboutSection />
  <TestimonialsSection />
</main>

<Footer />

<style>
  :global(body) {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f9;
    color: #333;
  }

  main {
    overflow-x: hidden;
  }
</style>
