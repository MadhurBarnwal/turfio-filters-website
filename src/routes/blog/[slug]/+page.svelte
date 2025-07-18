<script lang="ts">
  import { page } from '$app/stores';
  import { posts } from '$lib/stores/blogStore';

  const currentSlug = $page.params.slug;
  const post = $posts.find(p => p.slug === currentSlug);
</script>

{#if post}
  <div class="post-container">
    <div class="header">
      <h1>{post.title}</h1>
      <p class="excerpt">{post.excerpt}</p>
    </div>
    <div class="glass-panel content-body">
      <p>The fundamental principle behind superior filtration is not merely obstruction, but selective permeability. In our analysis of legacy filtration systems, we identified a critical flaw: as particulate capture increases, airflow impedance rises exponentially. This performance paradox was the central problem our engineering team set out to solve.</p>
      <p>Through computational fluid dynamics (CFD) modeling, we simulated thousands of fiber matrix configurations. The resulting multi-density gradient structure in every Turfio filter is a direct outcome of this research. It features a coarse outer stratum to capture larger, high-mass particulates, followed by progressively finer, electrostatically-charged substrata that capture microscopic contaminants without creating a significant pressure drop. This ensures your vehicle's HVAC system operates within its designated performance envelope, delivering pure air without compromising power.</p>
      <p>This commitment to data-driven design is what separates Turfio from conventional parts manufacturers. We are not just building filters; we are engineering solutions to complex atmospheric and mechanical challenges.</p>
    </div>
  </div>
{:else}
  <div class="not-found-container">
    <h1>Transmission Lost</h1>
    <p>The requested post could not be found in our archives.</p>
    <a href="/blog" class="cta-button">Return to Knowledge Hub</a>
  </div>
{/if}

<style>
  .post-container { padding: 100px 5%; min-height: 100vh; }
  .header { text-align: center; margin-bottom: 40px; max-width: 800px; margin-left: auto; margin-right: auto; }
  h1 { font-size: 3rem; color: var(--text-primary); line-height: 1.2; }
  .excerpt { font-size: 1.2rem; color: var(--text-secondary); margin-top: 15px; }
  
  .content-body { max-width: 800px; margin: 0 auto; padding: 40px; }
  .content-body p { margin-bottom: 20px; line-height: 1.9; font-size: 1.1rem; }

  .not-found-container, .cta-button { text-align: center; }
</style>