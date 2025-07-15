<script lang="ts">
  const logoUrl = '/images/turfio-logo.png'; // Make sure you have a logo image
</script>

<footer class="glass-footer">
  <div class="footer-content">
    <div class="footer-logo">
      <a href="/">
        <!-- <img src={logoUrl} alt="Turfio Logo" /> -->
        <span>Turfio Filters</span>
      </a>
      <p class="copyright">© {new Date().getFullYear()} Turfio. All rights reserved.</p>
    </div>
    
    <nav class="footer-nav">
      <h4>Navigate</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    
    <div class="socials">
		<h4>Connect</h4>
		<div class="social-icons">
			<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
			<a href="https://www.instagram.com/turfiofilters" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
			<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">TW</a>
		</div>
    </div>
  </div>
</footer>

<style>
  .glass-footer {
    /* The final glass panel */
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12), var(--glass-glow);

    margin: 80px 2.5% 20px 2.5%; /* Float it above the bottom */
    width: 95%;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    
    padding: 40px 5%;
    border-radius: 16px;
    color: var(--text-secondary);
  }

  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 40px;
    align-items: flex-start;
  }

  .footer-logo span {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  .copyright {
    margin-top: 10px;
    font-size: 0.9rem;
  }

  .footer-nav h4, .socials h4 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 15px;
  }

  .footer-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .footer-nav a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
  }
  .footer-nav a:hover {
    color: var(--text-primary);
    text-decoration: underline;
  }

  .social-icons {
    display: flex;
    gap: 15px;
  }

  .social-icons a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    
    /* Tiny glass circles for each icon! */
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .social-icons a:hover {
    background: var(--brand-color-1);
    color: white;
    transform: scale(1.1) translateY(-2px);
  }

  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .footer-nav ul, .social-icons {
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
</style>