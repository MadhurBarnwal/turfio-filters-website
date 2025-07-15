<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let testimonials = [
    { name: 'Priya Sharma', text: 'These filters are excellent! My car feels so much cleaner and fresher now. Highly recommended for city driving!' },
    { name: 'Amit Singh', text: 'The air quality difference is instantly noticeable. A must-have product. Installation was a breeze.' },
    { name: 'Rajesh Kumar', text: 'Finally, a filter that truly works! No more dust or pollution smell in my car. Absolutely fantastic!' }
  ];

  let currentIndex = 0;

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  });
</script>

<section class="testimonials-section">
  <div class="container">
    <h2>What Our Customers Say</h2>
    <div class="carousel">
      {#each testimonials as testimonial, i}
        {#if i === currentIndex}
          <div class="testimonial-card" transition:fade={{ duration: 800 }}>
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
          on:click={() => (currentIndex = i)}
          aria-label="Go to slide {i + 1}"
        ></button>
      {/each}
    </div>
  </div>
</section>

<style>
  .testimonials-section {
    padding: 80px 5%;
    background-color: rgba(255, 255, 255, 0.2); /* A very light background to differentiate the section */
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  h2 {
    font-size: 2.8rem;
    margin-bottom: 40px;
    color: var(--text-primary);
  }

  .carousel {
    position: relative;
    min-height: 200px; /* Adjust as needed */
    margin-bottom: 30px;
  }

  .testimonial-card {
    /* Main glass panel for the quote */
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12), inset 0 0 0 1.5px rgba(255,255,255,0.2);
    
    padding: 40px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .text {
    font-size: 1.3rem;
    font-style: italic;
    line-height: 1.6;
    margin-bottom: 20px;
    color: var(--text-primary);
  }

  .name {
    font-weight: 500;
    color: var(--text-secondary);
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .dots button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background-color: rgba(26, 26, 46, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .dots button.active {
    background-color: var(--brand-color-1);
    transform: scale(1.2);
  }
</style>