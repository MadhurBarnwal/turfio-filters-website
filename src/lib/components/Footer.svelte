<script lang="ts">
  // Placeholder for logo image URL
  const logoUrl = '/images/turfio-logo.png'; // Assuming a logo will be placed in static/images/
</script>

<footer>
  <div class="footer-content">
    <div class="footer-logo">
      <a href="/">
        <img src={logoUrl} alt="Turfio Logo" />
        <span>Turfio</span>
      </a>
    </div>
    <nav class="footer-nav">
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#location">Location</a></li>
        <li><a href="tel:+919876543210">Phone: +91 98765 43210</a></li>
      </ul>
    </nav>
    <div class="social-icons">
      <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
      </a>
      <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" />
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

  .footer-logo a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
  }

  .footer-logo img {
    height: 50px; /* Adjust as needed */
    margin-right: 10px;
  }

  .footer-logo span {
    font-size: 1.8rem;
    font-weight: bold;
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