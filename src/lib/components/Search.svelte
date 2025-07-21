<script lang="ts">
  import { supabase } from '$lib/utils/supabase';
  import { slide } from 'svelte/transition';

  // Define a type for our new, clean search result shape
  interface CustomSearchResult {
    id: number;
    turfio_part_no: string;
    model: string;
    image_url: string | null;
    company_name: string | null;
    filter_type_name: string | null;
  }

  let searchQuery = '';
  let searchResults: CustomSearchResult[] = [];
  let isFocused = false;
  let isLoading = false;
  let debounceTimer: NodeJS.Timeout;

  function handleSearch() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      performSearch();
    }, 300); // Wait 300ms after user stops typing
  }

  async function performSearch() {
    if (searchQuery.trim().length < 2) {
      searchResults = [];
      return;
    }
    isLoading = true;

    // Call the new database function instead of building a complex query
    const { data, error } = await supabase.rpc('search_products', {
      search_term: searchQuery.trim()
    });
    
    if (data) {
      searchResults = data;
    }
    if(error) console.error('Search error:', error);
    isLoading = false;
  }

  // This helper function is still needed to create the links
  const createSlug = (text: string | null) => {
    if (!text) return '';
    return text.toLowerCase().replace(/ /g, '-');
  }
</script>

<!-- The HTML is updated to match the new search result shape -->
<div class="product-finder-container" style="background-image: url('/images/search-background.jpg');">
  <div class="background-overlay"></div>
  <div class="content">
    <h2>Product Finder</h2>
    <p class="subtitle">Search by model, part number, or car brand.</p>
    <div class="search-wrapper">
      <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <input 
        type="text" 
        bind:value={searchQuery} 
        on:input={handleSearch}
        on:focus={() => isFocused = true}
        on:blur={() => setTimeout(() => isFocused = false, 200)}
        placeholder="e.g., 'Tiago', 'TCF-2999', or 'Maruti'"
      />
      {#if isLoading}
        <div class="loading-spinner"></div>
      {/if}
      {#if searchResults.length > 0 && isFocused}
        <ul class="search-results" transition:slide={{ duration: 200 }}>
          {#each searchResults as result}
            {@const filterTypeSlug = createSlug(result.filter_type_name)}
            {@const carCompanySlug = createSlug(result.company_name)}
            <li>
              <!-- Link to the final product page -->
              <a href={`/products/${filterTypeSlug}/${carCompanySlug}`}>
                <div class="result-image">
                  <img src={result.image_url || '/images/default-filter.png'} alt={result.model} />
                </div>
                <div class="result-info">
                  <span class="model">{result.model} ({result.company_name})</span>
                  <span class="part-no">Part No: {result.turfio_part_no}</span>
                </div>
              </a>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</div>


<!-- CSS REMAINS THE SAME -->
<style>
  .product-finder-container {
    padding: 160px 5%;
    margin: 30px auto;
    max-width: 1000px;
    max-height: 600px; /* Keep max-height for desktop */
    position: relative;
    border-radius: 20px;
    /* overflow: hidden; */
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(26, 26, 46, 0.3); /* A darker, less transparent overlay */
    backdrop-filter: none; /* Remove blur from the overlay */
    z-index: 1;
  }
  .content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 600px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(2px);
    border: var(--glass-border);
    border-radius: 20px; /* Match container border-radius */
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12), var(--glass-glow);
    padding: 40px; /* Add padding similar to glass-panel */
  }
  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 10px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
  .subtitle {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 30px;
  }
  .search-wrapper {
    position: relative;
    width: 100%;
    
  }
  .search-icon {
    position: absolute;
    top: 50%;
    left: 18px;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.6);
    pointer-events: none;
    z-index: 3; /* Ensure the icon is above the input */
  }
  input[type="text"] {
    width: 100%;
    padding: 16px 20px 16px 55px;
    font-size: 1.1rem;    display: flex;

    font-family: var(--font-main);
    color: #ffffff;
    background: var(--glass-bg);
    border: var(--glass-border);
    border-radius: 12px;
    backdrop-filter: blur(var(--glass-blur));
    transition: all 0.3s ease;
  }
  input[type="text"]::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  input[type="text"]:focus {
    outline: none;
    border-color: var(--brand-color-1);
    box-shadow: 0 0 0 3px rgba(255, 111, 97, 0.5);
  }
  .search-results {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 100%;
    list-style: none;
    padding: 10px;
    margin: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    border-radius: 12px;
    max-height: 300px;
    overflow-y: auto;
  }
  .search-results li a {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.2s ease;
  }
  .search-results li a:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .result-image img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    background-color: rgba(255,255,255,0.1);
  }
  .result-info {
    text-align: left;
    color: rgba(255, 255, 255, 0.9);
  }
  .result-info .model {
    display: block;
    font-weight: 600;
  }
  .result-info .part-no {
    display: block;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }

  /* Media query for mobile devices */
  @media (max-width: 768px) {
  .product-finder-container {
    padding: 20px 5%;
    margin: 20px auto;
    max-width: 1000px;
    max-height: none; /* Allow height to expand for mobile */
    position: relative;
    border-radius: 20px;
    /* overflow: hidden; */ /* Removed overflow hidden for mobile */
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 600px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(0px);
    border: var(--glass-border);
    border-radius: 20px; /* Match container border-radius */
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12), var(--glass-glow);
    padding: 40px; /* Add padding similar to glass-panel */
  }
    .background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: blur(1px); /* A darker, less transparent overlay */
    backdrop-filter: none; /* Remove blur from the overlay */
    z-index: 1;
  }
    input[type="text"] {
    width: 80%;
    margin: 0 auto;
    padding: 10px 20px 10px 45px; /* Adjusted padding for mobile */
    font-size: 0.8rem;    display: flex;
    font-family: var(--font-main);
    color: #ffffff;
    background: var(--glass-bg);
    border: var(--glass-border);
    border-radius: 12px;
    backdrop-filter: blur(var(--glass-blur));
    transition: all 0.3s ease;
  }
  .subtitle{
      font-size: 0.7rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
  }
  
    .content {
      padding: 20px;
      font-size: 0.8rem;
    }
    h2 {
      font-size: 1rem;
      background: rgba(255, 255, 255, 0.1);
    }
      .search-results {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 100%;
    list-style: none;
    padding: 1px;
    margin: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(var(--glass-blur));
    border: var(--glass-border);
    border-radius: 12px;
    max-height: 300px;
    overflow-y: auto;
  }
  .search-results li a {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.2s ease;
  }
  .search-icon{

    left: 40px;
  
  }

  }

</style>