<script lang="ts">
  // Placeholder for logo image URL
  const logoUrl = '/images/turfio-logo.png'; // Assuming a logo will be placed in static/images/
</script>

<footer>
  <div class="footer-content">
    <div class="footer-logo">
      <img src={logoUrl} alt="Turfio Logo" />
    </div>
    <nav class="footer-nav">
      <ul>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#shipping">Shipping & Returns</a></li>
      </ul>
    </nav>
    <div class="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/instagram.svg" alt="Instagram" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/twitter.svg" alt="Twitter" />
      </a>
    </div>
  </div>
  <div class="copyright">
    © {new Date().getFullYear()} Turfio. All rights reserved.
  </div>
</footer>

<style>
  footer {
    background-color: #333333; /* Dark charcoal */
    color: #FFFFFF; /* Accent white */
    padding: 40px 5%;
    text-align: center;
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto 30px;
  }

  .footer-logo img {
    height: 50px; /* Adjust as needed */
    margin-bottom: 20px;
  }

  .footer-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  .footer-nav a {
    color: #FFFFFF;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  .footer-nav a:hover {
    color: #00A99D; /* Primary teal on hover */
  }

  .social-icons {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

  .social-icons img {
    height: 30px; /* Size of social icons */
    width: 30px;
    transition: transform 0.3s ease;
  }

  .social-icons img:hover {
    transform: scale(1.1);
  }

  .copyright {
    font-size: 0.9rem;
    color: #ccc;
  }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
    }

    .footer-logo,
    .footer-nav,
    .social-icons {
      margin-bottom: 30px;
    }
  }
</style>