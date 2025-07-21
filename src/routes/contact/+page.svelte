<script lang="ts">
  // CORRECTED: Using the modern @emailjs/browser package
  import emailjs from '@emailjs/browser';

  // --- Real Contact Information ---
  const address = "2778/19, P.S. Jain Chowk, Kashmere Gate, Delhi-110006";
  const callPhoneNumber = "+91 8595866900";
  const oldCallPhoneNumber = "+91 9911116168";
  const whatsappNumber = "+918595866900";
  const emailAddress = "turfiofilters@gmail.com";

  // --- Dynamic Links ---
  const callLink = `tel:${callPhoneNumber}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'm interested in Turfio Filters.")}`;
  const emailLink = `mailto:${emailAddress}`;
  const googleMapsLink = `https://maps.app.goo.gl/KPQxin8nTEzWnHu16?g_st=aw`;

  // Form field variables
  let from_name = '';
  let from_email = '';
  let message = '';

  // State management for feedback
  let isSending = false;
  let statusMessage = '';
  let statusType: 'success' | 'error' = 'success';

  // Get credentials from environment variables
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const autoreplyID = import.meta.env.VITE_EMAILJS_AUTOREPLY_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  async function sendEmail() {
    if (!from_name || !from_email || !message) {
      statusMessage = 'Please fill out all fields.';
      statusType = 'error';
      return;
    }

    isSending = true;
    statusMessage = 'Sending...';
    statusType = 'success';

    const templateParams = {
      from_name: from_name,
      from_email: from_email,
      message: message,
    };

    try {
      // Initialize EmailJS with your Public Key
      emailjs.init(publicKey);
      
      // 1. Send the notification email to yourself
      await emailjs.send(serviceID, templateID, templateParams);
      
      // 2. Send the auto-reply to the user
      await emailjs.send(serviceID, autoreplyID, templateParams);

      statusMessage = 'Message sent successfully! Please check your inbox for a confirmation.';
      statusType = 'success';
      // Clear form
      from_name = '';
      from_email = '';
      message = '';

    } catch (err) {
      statusMessage = 'Failed to send the message. Please try again later.';
      statusType = 'error';
      console.error('EmailJS Error:', err);
    } finally {
      isSending = false;
      // Hide the message after 5 seconds
      setTimeout(() => statusMessage = '', 5000);
    }
  }
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
        <a href={emailLink}>{emailAddress}</a>
      </div>
      <div class="info-group">
        <span class="label">Telemetry & Sales</span>
        <a href={callLink}>{callPhoneNumber}</a>
      </div>
      <div class="info-group">
        <span class="label">Secondary Comms</span>
        <a href={`tel:${oldCallPhoneNumber}`}>{oldCallPhoneNumber}</a>
      </div>
      <div class="info-group">
        <span class="label">Headquarters</span>
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">{address}</a>
      </div>
      <a href={whatsappLink} target="_blank" class="whatsapp-button" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.94A9.96 9.96 0 0 0 12 2A10 10 0 0 0 2 12c0 1.85.5 3.58 1.37 5.06L2 22l5.06-1.36A9.94 9.94 0 0 0 12 22a10 10 0 0 0 10-10c0-2.76-1.06-5.26-2.95-7.06m-7.07 14.94c-1.6 0-3.14-.4-4.5-1.18L5.5 19.5l1-1.23a7.9 7.9 0 0 1-1.1-4.29c0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8m4.47-6.27c-.27-.14-1.62-.8-1.87-.89s-.43-.14-.61.13c-.18.28-.71.9-.87 1.08c-.16.18-.32.2-.59.06c-.27-.13-1.15-.42-2.19-1.35c-.81-.73-1.35-1.63-1.51-1.9c-.16-.28 0-.44.13-.57c.12-.13.27-.34.4-.46c.13-.12.18-.21.27-.35c.1-.14.05-.27 0-.41c-.05-.14-.61-1.47-.83-2c-.22-.53-.45-.46-.61-.46c-.15 0-.32 0-.49 0c-.17 0-.44.07-.66.35c-.22.28-.86.85-1 2.07c-.14 1.22.43 2.58.59 2.76c.16.18 1.44 2.21 3.5 3.11c.52.23.93.37 1.25.47c.6.18 1.15.16 1.58.1c.48-.07 1.47-.6 1.67-1.18c.2-.58.2-1.08.14-1.18c-.06-.1-.23-.16-.49-.29"/></svg>
        Connect on WhatsApp
      </a>
    </div>

    <div class="glass-panel form-panel">
      <h3>Send a Transmission</h3>
      
      <!-- CLEANED UP: No redundant H2 here -->
      <form class="contact-form" on:submit|preventDefault={sendEmail}>
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" bind:value={from_name} disabled={isSending} required placeholder="e.g., John Doe"/>
        </div>
        <div class="form-group">
          <label for="email">Your Email</label>
          <input type="email" id="email" bind:value={from_email} disabled={isSending} required placeholder="e.g., your.email@example.com"/>
        </div>
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea id="message" rows="5" bind:value={message} disabled={isSending} required placeholder="Ask us anything..."></textarea>
        </div>
        <button type="submit" class="cta-button" disabled={isSending}>
          {isSending ? 'Sending...' : 'Transmit Message'}
        </button>

        {#if statusMessage}
          <p class="status-message {statusType}">{statusMessage}</p>
        {/if}
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
  .info-group a { font-size: 1.1rem; color: var(--text-primary); text-decoration: none; line-height: 1.6; margin: 0; }
  .info-group a:hover { text-decoration: underline; color: var(--brand-color-1); }
  .whatsapp-button { display: inline-flex; align-items: center; gap: 10px; margin-top: 20px; background-color: #25D366; color: white; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.3s ease; }
  .whatsapp-button:hover { transform: scale(1.05); }

  /* --- REFINED STYLES FOR THE FORM --- */

  /* Form Panel (Right) */
  .form-panel h3 { font-size: 1.8rem; color: var(--text-primary); margin-bottom: 20px; text-align: center; }
  
  /* CORRECTED: Targeting the correct class name */
  .form-group { margin-bottom: 20px; }
  .form-group label { display: block; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px; }

  /* THE KEY STYLE: Visible text boxes that match your theme */
  .form-group input, .form-group textarea {
    width: 100%;
    padding: 14px;
    background: transparent; /* Semi-transparent background */
    border: 1px solid green;  /* Visible border using your global style */
    border-radius: 20px; /* Consistent border radius */
    color: var(--text-primary);
    font-size: 1rem;
    font-family: var(--font-main);
    transition: border-color 0.3s ease;
  }

  .form-group input::placeholder, .form-group textarea::placeholder {
    color: var(--text-secondary);
    opacity: 0.8;
  }

  .form-group input:focus, .form-group textarea:focus { 
    outline: 3px solid var(--brand-color-1); 
    border-color: var(--brand-color-1); 
  }

  .cta-button { 
    width: 100%; 
    background-color: var(--brand-color-1); 
    color: white; 
    padding: 16px; 
    border-radius: 10px; 
    border: none; 
    font-size: 1.1rem; 
    font-weight: 500; 
    cursor: pointer; 
    transition: all 0.3s ease; 
    margin-top: 10px;
  }
  .cta-button:hover { 
    transform: scale(1.02); 
    box-shadow: 0 0 15px -5px var(--glow-color);
  }
  .cta-button:disabled {
    background-color: var(--text-secondary);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  /* REFINED: Clearer success/error messages */
  .status-message {
    text-align: center;
    margin-top: 15px;
    padding: 12px;
    border-radius: 8px;
    font-weight: 500;
  }
  .status-message.success {
    background-color: rgba(60, 179, 113, 0.2);
    color: #3cb371;
  }
  .status-message.error {
    background-color: rgba(255, 99, 71, 0.2);
    color: var(--brand-color-1);
  }

  @media(max-width: 900px) { 
    .layout-grid { grid-template-columns: 1fr; } 
    .header h1 { font-size: 2.5rem; }
  }
</style>