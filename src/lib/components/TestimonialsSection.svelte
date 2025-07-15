<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';

  let testimonials = $state([
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      text: 'These filters are excellent! My car feels so much cleaner and fresher now. Highly recommended for dusty roads!'
    },
    {
      id: 2,
      name: 'Amit Singh',
      rating: 5,
      text: 'Very easy to install and the air quality difference is noticeable. A must-have for city driving.'
    },
    {
      id: 3,
      name: 'Kavita Madaan',
      rating: 4,
      text: 'Good product, but the price is a bit on the higher side. Quality is top-notch though.'
    },
    {
      id: 4,
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Finally, a filter that truly works! No more dust or pollution smell in my car. Fantastic!'
    }
  ]);

  let currentIndex = $state(0);
  let interval: number; // Explicitly type interval as number

  onMount(() => {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  });
</script>

<section class="testimonials">
  <h2>What Our Customers Are Saying</h2>
  <div class="carousel">
    {#each testimonials as testimonial, i}
      {#if i === currentIndex}
        <div class="testimonial-item" transition:fade>
          <div class="rating">{'⭐'.repeat(testimonial.rating)}</div>
          <p class="text">"{testimonial.text}"</p>
          <p class="name">- {testimonial.name}</p>
        </div>
      {/if}
    {/each}
  </div>
  <div class="dots">
    {#each testimonials as _, i}
      <button
        class:active={i === currentIndex}
        onclick={() => (currentIndex = i)}
        aria-label="Go to slide {i + 1}"
      ></button>
    {/each}
  </div>
</section>

<style>
  .testimonials {
    padding: 80px 5%;
    background-color: #f9f9f9;
    text-align: center;
  }

  h2 {
    font-size: 2.8rem;
    margin-bottom: 40px;
    color: #00A99D;
  }

  .carousel {
    position: relative;
    min-height: 200px;
    max-width: 800px;
    margin: 0 auto 20px;
  }

  .testimonial-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .rating {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .text {
    font-size: 1.2rem;
    font-style: italic;
    line-height: 1.6;
    margin-bottom: 10px;
  }

  .name {
    font-weight: bold;
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .dots button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid #00A99D;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .dots button.active {
    background-color: #00A99D;
  }
</style>