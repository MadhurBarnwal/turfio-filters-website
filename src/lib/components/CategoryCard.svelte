<!-- src/lib/components/CategoryCard.svelte (Simplified) -->
<script lang="ts">
  export let name: string;
  export let imageUrl: string | null;
  export let link: string;
</script>

<a href={link} class="card">
  <div class="image-container">
    <!-- The imageUrl from the database is now used directly -->
    {#if imageUrl}
      <img src={imageUrl} alt={name} loading="lazy" />
    {:else}
      <div class="placeholder-image">{name.charAt(0)}</div>
    {/if}
  </div>
  <h3>{name}</h3>
</a>

<style>
  /* Your styles remain the same */
  .card {
    display: block;
    text-decoration: none;
    color: inherit;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
  .card:hover { transform: translateY(-5px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
  .image-container { height: 150px; background-color: #f8f8f8; display: flex; align-items: center; justify-content: center; padding: 10px; }
  img { max-height: 100%; max-width: 100%; object-fit: contain; }
  .placeholder-image { font-size: 3rem; color: #ccc; }
  h3 { padding: 1rem; margin: 0; font-size: 1.1rem; }
</style>