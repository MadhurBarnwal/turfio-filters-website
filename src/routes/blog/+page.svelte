<script lang="ts">
  import { posts } from '$lib/stores/blogStore';
</script>

<div class="blog-archive-container">
  <div class="header">
    <h1>Knowledge Hub</h1>
    <p>Archived transmissions from the Turfio Engineering Core.</p>
  </div>
  
  <div class="posts-grid">
    {#each $posts as post}
      <a href={`/blog/${post.slug}`} class="glass-panel post-card">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span>Read Transmission →</span>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-archive-container { padding: 100px 5%; min-height: 100vh; }
  .header { text-align: center; margin-bottom: 60px; }
  .header h1 { font-size: 3rem; color: var(--text-primary); }
  .header p { font-size: 1.2rem; color: var(--text-secondary); margin-top: 10px; }
  .posts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; max-width: 1200px; margin: 0 auto; }
  
  .post-card { display: block; text-decoration: none; padding: 30px; transition: all 0.3s ease; }
  .post-card:hover { transform: translateY(-5px); }
  h3 { font-size: 1.4rem; color: var(--text-primary); margin-bottom: 15px; }
  p { line-height: 1.7; color: var(--text-secondary); margin-bottom: 20px; }
  span { color: var(--brand-color-1); font-weight: 500; }
</style>