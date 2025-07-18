<script lang="ts">
  import { tilt } from '$lib/utils/tilt';
</script>

<section class="tech-section">
  <div class="container">
    <h2>Our Filtration Matrix</h2>
    <p class="subtitle">A multi-strata architecture engineered for absolute particulate capture and maximum airflow.</p>
    <div class="tech-grid">

      <div class="tech-card" use:tilt>
        <div class="tech-icon">🔬</div>
        <h3>Multi-Density Gradient Structure</h3>
        <p>Progressively finer layers capture particles of all sizes, from large debris to microscopic contaminants, ensuring high efficiency and a long filter lifespan.</p>
      </div>

      <div class="tech-card" use:tilt>
        <div class="tech-icon">⚡️</div>
        <h3>Electrostatically-Charged Media</h3>
        <p>Our proprietary synthetic media carries a static charge that actively attracts and traps sub-micron particles like a magnet, pulling them from the air.</p>
      </div>

      <div class="tech-card" use:tilt>
        <div class="tech-icon">⚫</div>
        <h3>Activated Carbon Matrix</h3>
        <p>A microporous carbon lattice adsorbs volatile organic compounds (VOCs), exhaust fumes, and odors, chemically neutralizing them at the molecular level.</p>
      </div>
      
    </div>
  </div>
</section>

<style>
  .tech-section { padding: 80px 5%; }
  .container { max-width: 1400px; margin: 0 auto; text-align: center; }
  h2 { font-size: 2.8rem; margin-bottom: 10px; color: var(--text-primary); }
  .subtitle { font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 50px; max-width: 600px; margin-left: auto; margin-right: auto; }
  .tech-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }

  .tech-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    background-size: 200% 200%;
    background-position: 50% 50%;
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12), var(--glass-glow);
    padding: 40px 30px;
    will-change: transform;

    /* --- Transition Enhancement --- */
    /* Using a more detailed transition for a smoother feel */
    transition: 
      transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      background-position 0.8s ease; /* Slow down the gradient shift */
  }

  /* --- Enhanced Hover Effect --- */
  .tech-card:hover {
    background-position: 100% 100%; /* Shift the background gradient on hover */
    transform: translateY(-8px); /* Make the card lift up more */
    box-shadow: 0 15px 45px rgba(0,0,0,0.18), var(--glass-glow); /* Deeper shadow for more depth */
  }

  .tech-icon { font-size: 2.5rem; margin-bottom: 20px; }
  .tech-card h3 { font-size: 1.4rem; margin-bottom: 15px; color: var(--text-primary); }
  .tech-card p { font-size: 1rem; line-height: 1.6; color: var(--text-secondary); }
</style>