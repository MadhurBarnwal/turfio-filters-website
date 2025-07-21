<script lang="ts">
  // --- Real Contact Information ---
  const address = "2778/19, P.S. Jain Chowk, Kashmere Gate, Delhi-110006";
  const callPhoneNumber = "+91 8595866900";
  const oldCallPhoneNumber = "+91 9911116168";
  const whatsappNumber = "+918595866900";
  
  const emailAddress = "turfiofilters@gmail.com";
  const instagramUrl = "https://www.instagram.com/turfiofilters";
  const facebookUrl = "https://m.facebook.com/turfiofilters/"; // Please update if you have a Facebook page

  // --- Dynamic Links ---
  const callLink = `tel:${callPhoneNumber}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'm interested in Turfio Filters.")}`;
  const emailLink = `mailto:${emailAddress}`;
  const googleMapsLink = `https://maps.app.goo.gl/KPQxin8nTEzWnHu16?g_st=aw`;
</script>

<footer class="glass-footer">
  <div class="footer-content">
    
    <!-- Column 1: Logo and Address -->
    <div class="footer-column logo-address">
      <a href="/" class="footer-logo">
        <!-- <img src="/images/turfio-logo.png" alt="Turfio Logo" /> -->
        <span>Turfio Filters</span>
      </a>
      <address>
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" class="address-link">
          <img src="/icons/location.svg" alt="Location" class="contact-icon" />
          <span>{address}</span>
        </a>
      </address>
      <p class="copyright">© {new Date().getFullYear()} Turfio Filters. <br>All rights reserved.</p>
    </div>
    
    <!-- Column 2: Navigation -->
    <div class="footer-column">
      <h4>Navigate</h4>
      <nav class="footer-nav">
        <ul>
          <li>
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="/products">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package">
                <path d="m7.5 4.274 6.148 1.852A1 1 0 0 1 14 7v10.5a1 1 0 0 1-.82 1.017L7.5 20.726A1 1 0 0 1 6 20V7a1 1 0 0 1 .82-1.017z"/>
                <path d="M16.5 4.274 22.148 6.126A1 1 0 0 1 23 7v10.5a1 1 0 0 1-.82 1.017L16.5 20.726A1 1 0 0 1 15 20V7a1 1 0 0 1 .82-1.017z"/>
                <path d="M12 22v-8.5"/>
                <path d="M12 14.5l-6.5-2"/>
                <path d="M12 14.5l6.5-2"/>
              </svg>
              Products
            </a>
          </li>
          <li>
            <a href="/blog">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
              </svg>
              Blog
            </a>
          </li>
          <li>
            <a href="/about">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
              About
            </a>
          </li>
          <li>
            <a href="/contact">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
    
    <!-- Column 3: Contact & Socials -->
    <div class="footer-column">
      <h4>Connect</h4>
      <div class="contact-links">
        <a href={callLink}>
          <img src="/icons/call.svg" alt="Call" class="contact-icon" />
          <span>{callPhoneNumber}</span>
        </a>
        <a href={`tel:${oldCallPhoneNumber}`}>
          <img src="/icons/call.svg" alt="Call" class="contact-icon" />
          <span>{oldCallPhoneNumber}</span>
        </a>
        <a href={emailLink}>
          <img src="/icons/email.svg" alt="Email" class="contact-icon" />
          <span>{emailAddress}</span>
        </a>
      </div>
      <a href="/contact" class="contact-button">Contact Us</a>
      <div class="social-icons">
        <!-- WhatscallPhoApp Icon -->
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.94A9.96 9.96 0 0 0 12 2A10 10 0 0 0 2 12c0 1.85.5 3.58 1.37 5.06L2 22l5.06-1.36A9.94 9.94 0 0 0 12 22a10 10 0 0 0 10-10c0-2.76-1.06-5.26-2.95-7.06m-7.07 14.94c-1.6 0-3.14-.4-4.5-1.18L5.5 19.5l1-1.23a7.9 7.9 0 0 1-1.1-4.29c0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8m4.47-6.27c-.27-.14-1.62-.8-1.87-.89s-.43-.14-.61.13c-.18.28-.71.9-.87 1.08c-.16.18-.32.2-.59.06c-.27-.13-1.15-.42-2.19-1.35c-.81-.73-1.35-1.63-1.51-1.9c-.16-.28 0-.44.13-.57c.12-.13.27-.34.4-.46c.13-.12.18-.21.27-.35c.1-.14.05-.27 0-.41c-.05-.14-.61-1.47-.83-2c-.22-.53-.45-.46-.61-.46c-.15 0-.32 0-.49 0c-.17 0-.44.07-.66.35c-.22.28-.86.85-1 2.07c-.14 1.22.43 2.58.59 2.76c.16.18 1.44 2.21 3.5 3.11c.52.23.93.37 1.25.47c.6.18 1.15.16 1.58.1c.48-.07 1.47-.6 1.67-1.18c.2-.58.2-1.08.14-1.18c-.06-.1-.23-.16-.49-.29"/></svg>
        </a>
        <!-- Instagram Icon -->
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
        </a>
         <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
         </a>
      </div>
    </div>
  </div>
</footer>

<style>
  .glass-footer {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12), var(--glass-glow);
    margin: 120px 2.5% 20px 2.5%;
    width: 95%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 5%;
    border-radius: 16px;
    color: var(--text-secondary);
  }

  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1.5fr; /* Adjusted column widths */
    gap: 40px;
    align-items: flex-start;
  }

  .footer-column h4 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 20px;
  }
  
  .footer-logo {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    margin-bottom: 15px;
  }
  /* .footer-logo img {
    height: 40px;
  } */
  .footer-logo span {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  address {
    font-style: normal;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  address a {
    color: var(--text-secondary);
    text-decoration: none;
  }
  address a:hover {
    text-decoration: underline;
  }
  .address-link {
    display: inline-flex;
    align-items: flex-start;
    gap: 8px;
  }

  .copyright {
    font-size: 0.8rem;
    line-height: 1.5;
  }

  .footer-nav ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
  .footer-nav a { color: var(--text-secondary); text-decoration: none; transition: color 0.3s ease; }
  .footer-nav a:hover { color: var(--text-primary); }

  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }
  .contact-links a {
    color: var(--text-secondary);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .contact-links a:hover { color: var(--text-primary); }

  .social-icons {
    display: flex;
    gap: 15px;
    justify-content: center; /* Center social icons */
  }
  .social-icons a {
    display: flex; justify-content: center; align-items: center;
    width: 44px; height: 44px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    color: var(--text-primary);
    transition: all 0.3s ease;
  }
  .social-icons a:hover {
    background: var(--brand-color-1);
    color: white;
    transform: scale(1.1);
  }

  .contact-button {
    display: block; /* Change to block to allow margin auto */
    margin-top: 15px;
    padding: 10px 20px;
    background-color: var(--brand-color-1);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    text-align: center;
    margin-left: auto; /* Center the button */
    margin-right: auto; /* Center the button */
  }

  .contact-button:hover {
    transform: scale(1.05);
  }

  .contact-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-top: 4px;
  }

  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .footer-logo, .social-icons {
      justify-content: center;
    }
    .footer-nav ul {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    .contact-links{
      align-items: center;
    }
  }
</style>