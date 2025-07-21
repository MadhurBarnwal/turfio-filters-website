<script lang="ts">
  import { spring } from 'svelte/motion';
  import { tilt } from '$lib/utils/tilt';

  const springConfig = { stiffness: 0.0063, damping: 0.33 };
  
  const experience = spring(0, springConfig);
  const distributors = spring(0, springConfig);
  const states = spring(0, springConfig);
  const customers = spring(0, springConfig);

  // Triggering the animation
  experience.set(30);
  distributors.set(50);
  states.set(20);
  customers.set(2000);
</script>

<section class="stats-section">
  <div class="container">

    <div class="stat-card" use:tilt>
      <h3>{Math.round($experience)}+</h3>
      <p>Years of Experience</p>
    </div>

    <div class="stat-card" use:tilt>
      <h3>{Math.round($distributors)}+</h3>
      <p>Distributors</p>
    </div>

    <div class="stat-card" use:tilt>
      <h3>{Math.round($states)}+</h3>
      <p>States of India</p>
    </div>

    <div class="stat-card" use:tilt>
      <h3>{Math.round($customers).toLocaleString()}+</h3>
      <p>Happy Customers</p>
    </div>

  </div>
</section>

<style>
  .stats-section {
    padding: 60px 5%;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    /* Enforce a 4-column layout on desktops */
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
  }
  
  /* --- NEW "Frosted Panel" Style --- */
  .stat-card {
    /* Base style: Not transparent, but a solid, very light color */
    background-color: rgba(248, 249, 250, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(20px); /* Keep a subtle blur for depth */
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    
    padding: 25px;
    text-align: center;
    will-change: transform;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }

  /* --- Individual Color Washes for Each Tile --- */
  .stat-card:nth-child(1) {
    background-image: radial-gradient(circle at 100% 0%, var(--brand-color-1, #ff6f61) -80%, transparent 40%);
  }

  .stat-card:nth-child(3) {
    background-image: radial-gradient(circle at 50% 100%, var(--brand-color-2, #ffca47) -80%, transparent 40%);
  }
  .stat-card:nth-child(4) {
    background-image: radial-gradient(circle at 0% 0%, var(--brand-color-3, #7a9cff) -80%, transparent 40%);
  }

  .stat-card h3 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--brand-color-1);
    margin: 0 0 10px 0;
  }

  .stat-card p {
    font-size: 1rem;
    color: var(--text-secondary);
    margin: 0;
  }

  /* --- Mobile Responsive Grid --- */
  @media (max-width: 992px) {
    .container {
      /* Switch to a 2x2 grid on tablets and phones */
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }
  @media (max-width: 480px) {
    .stat-card h3 {
      font-size: 2.5rem;
      padding: -10px;
    }
  }
</style>