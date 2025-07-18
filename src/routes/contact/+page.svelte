<script lang="ts">
  // A placeholder phone number for the WhatsApp link
  const whatsappNumber = '919876543210';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'm interested in Turfio Filters.")}`;
</script>

<div class="contact-container">
  <div class="header">
    <h1>Contact Our Command Center</h1>
    <p>Reach out to our engineering and sales support teams.</p>
  </div>
  
  <div class="layout-grid">
    <!-- Left Panel: Direct Contact Info -->
    <div class="glass-panel info-panel">
      <h3>Direct Interface</h3>
      <div class="info-group">
        <span class="label">Primary Comms</span>
        <a href="mailto:contact@turfiofilters.com">contact@turfiofilters.com</a>
      </div>
      <div class="info-group">
        <span class="label">Telemetry & Sales</span>
        <a href="tel:+919876543210">+91 987 654 3210</a>
      </div>
      <div class="info-group">
        <span class="label">Headquarters</span>
        <p>Advanced Engineering Wing, <br> SIPCOT Industrial Complex, <br> Sriperumbudur, Tamil Nadu 602105</p>
      </div>
      <a href={whatsappLink} target="_blank" class="whatsapp-button" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.94A9.96 9.96 0 0 0 12 2A10 10 0 0 0 2 12c0 1.85.5 3.58 1.37 5.06L2 22l5.06-1.36A9.94 9.94 0 0 0 12 22a10 10 0 0 0 10-10c0-2.76-1.06-5.26-2.95-7.06m-7.07 14.94c-1.6 0-3.14-.4-4.5-1.18L5.5 19.5l1-1.23a7.9 7.9 0 0 1-1.1-4.29c0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8m4.47-6.27c-.27-.14-1.62-.8-1.87-.89s-.43-.14-.61.13c-.18.28-.71.9-.87 1.08c-.16.18-.32.2-.59.06c-.27-.13-1.15-.42-2.19-1.35c-.81-.73-1.35-1.63-1.51-1.9c-.16-.28 0-.44.13-.57c.12-.13.27-.34.4-.46c.13-.12.18-.21.27-.35c.1-.14.05-.27 0-.41c-.05-.14-.61-1.47-.83-2c-.22-.53-.45-.46-.61-.46c-.15 0-.32 0-.49 0c-.17 0-.44.07-.66.35c-.22.28-.86.85-1 2.07c-.14 1.22.43 2.58.59 2.76c.16.18 1.44 2.21 3.5 3.11c.52.23.93.37 1.25.47c.6.18 1.15.16 1.58.1c.48-.07 1.47-.6 1.67-1.18c.2-.58.2-1.08.14-1.18c-.06-.1-.23-.16-.49-.29"/></svg>
        Connect on WhatsApp
      </a>
    </div>

    <!-- Right Panel: Contact Form -->
    <div class="glass-panel form-panel">
      <h3>Send a Transmission</h3>
      <form on:submit|preventDefault>
        <div class="input-group">
          <label for="name">Your Designation</label>
          <input type="text" id="name" name="name" placeholder="e.g. Lead Engineer, Procurement Manager">
        </div>
        <div class="input-group">
          <label for="email">Your Secure Comms Channel</label>
          <input type="email" id="email" name="email" placeholder="your.email@corp.com">
        </div>
        <div class="input-group">
          <label for="message">Transmission Body</label>
          <textarea id="message" name="message" rows="6" placeholder="Detail your inquiry..."></textarea>
        </div>
        <button type="submit" class="cta-button">Transmit Message</button>
      </form>
    </div>
  </div>
</div>

<style>
  /* Page layout */
  .contact-container { padding: 100px 5%; min-height: 100vh; }
  .header { text-align: center; margin-bottom: 60px; }
  .header h1 { font-size: 3rem; color: var(--text-primary); }
  .header p { font-size: 1.2rem; color: var(--text-secondary); margin-top: 10px; }
  .layout-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 40px; max-width: 1200px; margin: 0 auto; }

  /* Glass panel base */
  .glass-panel { padding: 40px; background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); backdrop-filter: blur(var(--glass-blur)); border: var(--glass-border); border-radius: 16px; box-shadow: 0 8px 32px 0 rgba(0,0,0,0.12), var(--glass-glow); }

  /* Info Panel (Left) */
  .info-panel h3 { font-size: 1.8rem; color: var(--text-primary); margin-bottom: 30px; }
  .info-group { margin-bottom: 25px; }
  .info-group .label { display: block; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 5px; }
  .info-group a, .info-group p { font-size: 1.1rem; color: var(--text-primary); text-decoration: none; line-height: 1.6; margin: 0; }
  .info-group a:hover { text-decoration: underline; }
  .whatsapp-button { display: inline-flex; align-items: center; gap: 10px; margin-top: 20px; background-color: #25D366; color: white; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.3s ease; }
  .whatsapp-button:hover { transform: scale(1.05); }

  /* Form Panel (Right) */
  .form-panel h3 { font-size: 1.8rem; color: var(--text-primary); margin-bottom: 30px; }
  .input-group { margin-bottom: 20px; }
  .input-group label { display: block; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px; }
  .input-group input, .input-group textarea { width: 100%; padding: 12px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.1); border-radius: 8px; color: var(--text-primary); font-size: 1rem; font-family: var(--font-main); }
  .input-group input:focus, .input-group textarea:focus { outline: none; border-color: var(--brand-color-1); }
  .cta-button { width: 100%; background-color: var(--brand-color-1); color: white; padding: 16px; border-radius: 8px; border: none; font-size: 1.1rem; font-weight: 500; cursor: pointer; transition: all 0.3s ease; }
  .cta-button:hover { transform: scale(1.02); }

  @media(max-width: 900px) { .layout-grid { grid-template-columns: 1fr; } }
</style><!--  -->