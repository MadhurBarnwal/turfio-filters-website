<script lang="ts">
  // Placeholder data for the new sections
  const timelineEvents = [
    { year: '1998', event: 'Initial research on particulate dynamics begins.' },
    { year: '2010', event: 'Development of the first electrostatically-charged media prototype.' },
    { year: '2015', event: 'Turfio brand is officially launched with the Filtration Matrix core.' },
    { year: '2020', event: 'Expansion into pan-India distribution network.' }
  ];

  const teamMembers = [
    { name: 'Rohan Verma', title: 'Chief Design Architect', avatar: '/images/avatar1.png' },
    { name: 'Priya Singh', title: 'Head of Material Science', avatar: '/images/avatar2.png' },
    { name: 'Ankit Desai', title: 'Lead Operations Engineer', avatar: '/images/avatar3.png' }
  ];
</script>

<div class="about-page-container">
  <!-- Section 1: Main Header -->
  <div class="header">
    <h1>Our Mission: Engineering Atmospheric Purity</h1>
    <p>We operate at the intersection of material science, fluid dynamics, and aerospace-grade engineering to redefine vehicular air quality.</p>
  </div>
  
  <!-- Section 2: The "Doctrine" with Icons -->
  <section class="doctrine-section">
    <h2 class="section-title">Our Operational Doctrine</h2>
    <div class="doctrine-grid">
      <div class="glass-panel doctrine-card">
        <div class="icon">🔬</div>
        <h3>Micron-Level Precision</h3>
        <p>We model particulate dynamics to ensure our filtration matrix captures contaminants far exceeding standard OEM specifications.</p>
      </div>
      <div class="glass-panel doctrine-card">
        <div class="icon">🌬️</div>
        <h3>Optimized Permeability</h3>
        <p>Our filters are designed for maximum, laminar airflow to ensure zero compromise on vehicle performance.</p>
      </div>
      <div class="glass-panel doctrine-card">
        <div class="icon">🛡️</div>
        <h3>Integrity Under Duress</h3>
        <p>Every filter is certified to maintain structural and chemical integrity in extreme operational environments.</p>
      </div>
    </div>
  </section>

  <!-- Section 3: History & Timeline -->
  <section class="history-section">
    <div class="history-grid">
      <div class="history-text">
        <h2 class="section-title">Genesis of a Core Technology</h2>
        <p>Turfio was founded not as a parts company, but as a research initiative. Our primary objective was to reverse-engineer atmospheric contamination within a closed vehicular system. By approaching the problem from first principles, we developed the proprietary electrostatically-charged media that forms the core of our Filtration Matrix today. This technology, born from countless hours of simulation and lab testing, is our legacy and your assurance of purity.</p>
      </div>
      <div class="timeline-container">
        <h3 class="timeline-title">Mission Timeline</h3>
        <ul>
          {#each timelineEvents as item}
            <li>
              <strong>{item.year}</strong>
              <span>{item.event}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>
  
</div>

<style>
  .about-page-container { padding: 100px 5% 60px 5%; min-height: 100vh; }
  .header { text-align: center; margin-bottom: 80px; max-width: 900px; margin-left: auto; margin-right: auto; }
  .header h1 { font-size: 3rem; color: var(--text-primary); line-height: 1.3; }
  .header p { font-size: 1.2rem; color: var(--text-secondary); margin-top: 15px; }

  .section-title { font-size: 2.5rem; text-align: center; margin-bottom: 50px; color: var(--text-primary); }

  /* --- Doctrine Section --- */
  .doctrine-section { margin-bottom: 80px; }
  .doctrine-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; max-width: 1200px; margin: 0 auto; }
  .doctrine-card { padding: 40px 30px; text-align: center; }
  .doctrine-card .icon { font-size: 3rem; margin-bottom: 20px; display: inline-block; }
  .doctrine-card h3 { font-size: 1.5rem; margin-bottom: 15px; }
  .doctrine-card p { font-size: 1rem; line-height: 1.7; color: var(--text-secondary); }

  /* --- History & Timeline Section --- */
  .history-section { margin-bottom: 80px; }
  .history-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: center; max-width: 1200px; margin: 0 auto; }
  .history-text h2 { text-align: left; font-size: 2.2rem; margin-bottom: 20px; }
  .history-text p { font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary); }

  .timeline-container { background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); backdrop-filter: blur(var(--glass-blur)); border: var(--glass-border); border-radius: 16px; padding: 30px; position: relative; }
  .timeline-title { font-size: 1.5rem; color: var(--text-primary); margin-bottom: 30px; }
  .timeline-container ul { list-style: none; padding-left: 20px; position: relative; }
  /* The vertical line */
  .timeline-container ul::before { content: ''; position: absolute; top: 10px; bottom: 10px; left: 0; width: 2px; background-color: var(--brand-color-1); opacity: 0.3; }
  .timeline-container li { margin-bottom: 25px; position: relative; }
  /* The dot on the line */
  .timeline-container li::before { content: ''; position: absolute; top: 8px; left: -29px; width: 10px; height: 10px; border-radius: 50%; background-color: var(--brand-color-1); border: 2px solid white; }
  .timeline-container li strong { display: block; font-size: 1.1rem; color: var(--text-primary); }
  .timeline-container li span { font-size: 0.9rem; color: var(--text-secondary); }
  
  /* Base Glass Panel Style */
  .glass-panel { background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); backdrop-filter: blur(var(--glass-blur)); border: var(--glass-border); border-radius: 16px; box-shadow: 0 8px 32px 0 rgba(0,0,0,0.12), var(--glass-glow); }

  /* Responsive Adjustments */
  @media(max-width: 992px) {
    .header h1 { font-size: 2.5rem; }
    .history-grid { grid-template-columns: 1fr; gap: 40px; }
    .history-text h2 { text-align: center; }
  }
</style>