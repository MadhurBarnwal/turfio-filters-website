<script lang="ts">
  import { tilt } from '$lib/utils/tilt';
</script>

<section class="why-turfio-section">
  <div class="container">
    <h2>The Clear Choice for Clean Air</h2>
    <p class="subtitle">Uncompromising quality and performance in every product.</p>
    <div class="benefits-grid">
      
      <div class="benefit-card" use:tilt={{ max: 10, perspective: 1000, scale: 1.05 }}>
        <div class="icon">🌬️</div>
        <h3>Super Capacity</h3>
        <p>Our advanced multi-layer media traps more dust, pollen, and harmful particles than standard filters.</p>
      </div>
      
      <div class="benefit-card" use:tilt={{ max: 10, perspective: 1000, scale: 1.05 }}>
        <div class="icon">🛡️</div>
        <h3>Engineered for Life</h3>
        <p>Designed for a perfect, drop-in fit and manufactured to exceed OEM specifications for longevity.</p>
      </div>

      <div class="benefit-card" use:tilt={{ max: 10, perspective: 1000, scale: 1.05 }}>
        <div class="icon">💡</div>
        <h3>Innovative Tech</h3>
        <p>Infused with activated carbon to neutralize odors and VOCs, ensuring your cabin air is fresh and clean.</p>
      </div>
      
    </div>
  </div>
</section>

<style>
  .why-turfio-section {
    padding: 80px 5%;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
  }

  h2 {
    font-size: 2.8rem;
    margin-bottom: 10px;
    color: var(--text-primary);
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 50px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }

  /* Applying our signature glass effect to the benefit cards */
  .benefit-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12), inset 0 0 0 1.5px rgba(255,255,255,0.2);
    
    padding: 40px 30px;
    will-change: transform;
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  .benefit-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: var(--text-primary);
  }

  .benefit-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
  }
</style>