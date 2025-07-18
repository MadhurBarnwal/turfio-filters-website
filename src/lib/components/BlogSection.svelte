<script lang="ts">
  import { posts, type BlogPost } from '$lib/stores/blogStore';
  import { tilt } from '$lib/utils/tilt';
</script>

<section class="blog-section">
  <div class="container">
    <h2>From Our Knowledge Base</h2>
    <p class="subtitle">Expert insights on vehicle maintenance, air quality, and filter technology.</p>
    <div class="posts-grid">
      {#each $posts as post}
        <a href={`/blog/${post.slug}`} class="post-card" use:tilt>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <span>Read More →</span>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .blog-section { padding: 80px 5%; background-color: rgba(255, 255, 255, 0.2); }
  .container { max-width: 1400px; margin: 0 auto; text-align: center; }
  h2 { font-size: 2.8rem; margin-bottom: 10px; color: var(--text-primary); }
  .subtitle { font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 50px; max-width: 600px; margin-left: auto; margin-right: auto; }
  .posts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }

  .post-card {
    display: block;
    text-decoration: none;
    background: linear-gradient(160deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12), var(--glass-glow);
    padding: 30px;
    text-align: left;
    will-change: transform;
    transition: all 0.3s ease;
  }
  .post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.15), var(--glass-glow);
  }

  .post-card h3 { font-size: 1.4rem; margin-bottom: 15px; color: var(--text-primary); }
  .post-card p { font-size: 1rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 20px; }
  .post-card span { color: var(--brand-color-1); font-weight: 500; }
</style>