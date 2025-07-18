<script lang="ts">
  import HeroSection from '$lib/components/HeroSection.svelte';
  import StatsSection from '$lib/components/StatsSection.svelte';
  import ProductShowcase from '$lib/components/ProductShowcase.svelte';
  import WhyTurfioSection from '$lib/components/WhyTurfioSection.svelte';
  import TestimonialsSection from '$lib/components/TestimonialsSection.svelte';
  import FaqSection from '$lib/components/FaqSection.svelte';
  import TechSection from '$lib/components/TechSection.svelte';
  import BlogSection from '$lib/components/BlogSection.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
</script>


<main>
  <HeroSection />
  <StatsSection />
  <ProductShowcase />
  <WhyTurfioSection />
  <TechSection />
  <BlogSection />
  <AboutSection />
  <TestimonialsSection />
  <FaqSection />

</main>


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
