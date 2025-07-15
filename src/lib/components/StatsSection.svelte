<script lang="ts">
  import { spring } from 'svelte/motion';
  import { tilt } from '$lib/utils/tilt';
  
  // These will animate from 0 to their target value
  const customers = spring(0, { stiffness: 0.015, damping: 0.25 });
  const products = spring(0, { stiffness: 0.015, damping: 0.25 });

  // For simplicity in this example, we'll trigger the animation on load.
  // In a real app, you'd use the scroll observer from your original code.
  customers.set(20000);
  products.set(2000);
</script>

<section class="stats-section">
  <div class="container">

    <div class="stat-card" use:tilt>
      <h3>{Math.round($customers).toLocaleString()}+</h3>
      <p>Happy Customers</p>
    </div>

    <div class="stat-card" use:tilt>
      <h3>{Math.round($products).toLocaleString()}+</h3>
      <p>Products Delivered</p>
    </div>

  </div>
</section>

<style>
  .stats-section {
    padding: 20px 5% 80px 5%; /* Less top padding, more bottom */
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  
  /* The signature glass card style, now for stats */
  .stat-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12), var(--glass-glow); /* Using the new glow */
    
    padding: 40px;
    text-align: center;
    will-change: transform;
  }

  .stat-card h3 {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--brand-color-1); /* Use brand color for impact */
    margin: 0 0 10px 0;
  }

  .stat-card p {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin: 0;
  }

  @media (max-width: 600px) {
    .container {
      grid-template-columns: 1fr;
    }
    .stat-card h3 {
      font-size: 3rem;
    }
  }
</style>