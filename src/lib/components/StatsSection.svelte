<script lang="ts">
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';
  import { observeElementVisibility } from '$lib/utils/scrollEffects';

  let element: HTMLElement;
  let visible = $state(false);

  const customers = spring(0);
  const products = spring(0);

  onMount(() => {
    observeElementVisibility(element, () => {
      visible = true;
      // Set the target values for the spring animation
      customers.set(20000);
      products.set(2000);
    });
  });
</script>

<section class="stats-section" bind:this={element}>
  {#if visible}
    <div class="stat-item">
      <h3>{Math.round($customers).toLocaleString()}+</h3>
      <p>Happy Customers</p>
    </div>
    <div class="stat-item">
      <h3>{Math.round($products).toLocaleString()}+</h3>
      <p>Products Delivered</p>
    </div>
  {/if}
</section>

<style>
  .stats-section {
    display: flex;
    justify-content: space-around;
    padding: 50px 5%;
    background-color: #00A99D; /* Primary teal */
    color: #fff;
  }

  .stat-item {
    text-align: center;
  }

  .stat-item h3 {
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
  }

  .stat-item p {
    font-size: 1.2rem;
    margin: 0;
  }
</style>