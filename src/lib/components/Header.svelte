<script lang="ts">
  import { page } from '$app/stores';
</script>

<header>
  <div class="logo">
    <a href="/">
      <img src="/images/turfio-logo.png" alt="Turfio Logo" />
      <span>Turfio</span>
    </a>
  </div>
  <nav>
    <ul>
      <li><a href="/" class:active={$page.url.pathname === '/'}>Home</a></li>
      <li><a href="#about" class:active={$page.url.hash === '#about'}>About Us</a></li>
      <li><a href="#products" class:active={$page.url.hash === '#products'}>Products</a></li>
      <li><a href="#testimonials" class:active={$page.url.hash === '#testimonials'}>Testimonials</a></li>
      <li><a href="#contact" class:active={$page.url.hash === '#contact'}>Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .logo a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
  }

  .logo img {
    height: 40px;
    margin-right: 10px;
  }

  .logo span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 20px;
  }

  nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  nav a:hover,
  nav a.active {
    color: #00A99D;
  }
</style>