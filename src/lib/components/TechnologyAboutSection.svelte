<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, slide } from 'svelte/transition';
  import { observeElementVisibility } from '$lib/utils/scrollEffects';

  let element: HTMLElement;
  let visible = $state(false);

  onMount(() => {
    observeElementVisibility(element, () => {
      visible = true;
    });
  });
</script>

<section class="technology-about" bind:this={element}>
  {#if visible}
    <div class="container">
      <div class="content" transition:slide={{ duration: 500, axis: 'y', delay: 200 }}>
        <h2>Engineered for Excellence.</h2>
        <p>
          Our filters are crafted with a proprietary multi-layer medium that captures 99.97% of airborne
          particles, including dust, pollen, and other allergens. The activated carbon layer absorbs
          unpleasant odors, ensuring a fresh and clean cabin environment.
        </p>
      </div>
      <div class="animation-placeholder" transition:fade={{ duration: 500, delay: 400 }}>
        <!-- Placeholder for the exploded-view animation -->
        <p>Exploded-view animation coming soon!</p>
      </div>
    </div>
  {/if}
</section>

<style>
  .technology-about {
    padding: 80px 5%;
    background-color: #fff;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .content h2 {
    font-size: 2.8rem;
    margin-bottom: 20px;
    color: #00A99D;
  }

  .content p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
  }

  .animation-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: #f0f0f0;
    border-radius: 10px;
    color: #999;
    font-style: italic;
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
</style>