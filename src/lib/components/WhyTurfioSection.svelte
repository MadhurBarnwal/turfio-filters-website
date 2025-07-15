<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import { observeElementVisibility } from '$lib/utils/scrollEffects';
  import { onMount } from 'svelte';

  let element: HTMLElement;
  let visible = $state(false);

  onMount(() => {
    observeElementVisibility(element, () => {
      visible = true;
    });
  });
</script>

<section class="why-turfio" bind:this={element}>
  {#if visible}
    <div class="container" transition:fade={{ duration: 500 }}>
      <h2 transition:slide={{ duration: 500, axis: 'y', delay: 200 }}>The Clear Choice for Clean Air.</h2>
      <div class="benefits-grid">
        <div class="benefit-item" transition:slide={{ duration: 500, axis: 'y', delay: 400 }}>
          <div class="icon">🌬️</div>
          <h3>Super Capacity</h3>
          <p>Traps more dust, smoke, pollen, and odors.</p>
        </div>
        <div class="benefit-item" transition:slide={{ duration: 500, axis: 'y', delay: 600 }}>
          <div class="icon">🛡️</div>
          <h3>Advanced Filtration</h3>
          <p>Multi-layer protection for you and your passengers.</p>
        </div>
        <div class="benefit-item" transition:slide={{ duration: 500, axis: 'y', delay: 800 }}>
          <div class="icon">🔧</div>
          <h3>Easy Installation</h3>
          <p>Designed for a perfect fit.</p>
        </div>
      </div>
    </div>
  {/if}
</section>

<style>
  .why-turfio {
    padding: 80px 5%;
    background-color: #f9f9f9;
    text-align: center;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.8rem;
    margin-bottom: 60px;
    color: #00A99D;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
  }

  .benefit-item {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
  }

  .benefit-item:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
  }
</style>