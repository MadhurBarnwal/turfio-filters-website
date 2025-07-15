<script lang="ts">
  let faqs = [
    { q: 'How often should I replace my cabin air filter?', a: 'For optimal air quality and performance, we recommend replacing your cabin air filter every 12,000 to 15,000 miles, or at least once a year. This can vary depending on your driving conditions.' },
    { q: 'What is the difference between an oil filter and an air filter?', a: 'An air filter prevents debris like dust and insects from entering your engine, while an oil filter removes contaminants from your engine oil. Both are crucial for vehicle health.' },
    { q: 'Can I install the filters myself?', a: 'Absolutely! Our filters are designed for a direct, DIY-friendly fit. Most filters can be replaced in under 15 minutes with basic tools. We also have installation guides available.' },
    { q: 'Do you offer filters for all car models?', a: 'We offer a comprehensive range of filters for most major car brands and models. Use our product finder to see the exact filters for your vehicle.' },
  ];

  let openIndex: number | null = 0; // Keep the first one open by default

  function toggle(index: number) {
    if (openIndex === index) {
      openIndex = null; // Close if already open
    } else {
      openIndex = index; // Open the clicked one
    }
  }
</script>

<section class="faq-section">
  <div class="container">
    <h2>Frequently Asked Questions</h2>
    <div class="faq-list">
      {#each faqs as faq, i}
        <div class="faq-item" class:open={openIndex === i} on:click={() => toggle(i)}>
          <div class="question">
            <h3>{faq.q}</h3>
            <div class="icon">{openIndex === i ? '−' : '+'}</div>
          </div>
          <div class="answer">
            <p>{faq.a}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .faq-section {
    padding: 80px 5%;
  }
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
  h2 {
    font-size: 2.8rem;
    margin-bottom: 40px;
    color: var(--text-primary);
    text-align: center;
  }
  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  /* The glass panel for each Q&A item */
  .faq-item {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    border-radius: 12px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12), inset 0 0 0 1.5px rgba(255,255,255,0.2);
    
    padding: 20px 30px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .faq-item:hover {
	  transform: scale(1.02);
  }

  .question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  .question h3 {
    font-size: 1.2rem;
    color: var(--text-primary);
    font-weight: 500;
  }
  .question .icon {
    font-size: 1.8rem;
    color: var(--brand-color-1);
  }

  .answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1), padding-top 0.5s ease;
    color: var(--text-secondary);
    line-height: 1.7;
  }
  .faq-item.open .answer {
    max-height: 200px; /* Or a sufficiently large value */
    padding-top: 15px; /* Add space when open */
  }

</style>