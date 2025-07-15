<script lang="ts">
  let { product } = $props();
</script>

<div class="product-card">
  <div class="product-image">
    <img src={product.imageUrl} alt={product.name} />
  </div>
  <div class="product-info">
    <h3>{product.name}</h3>
    <p>{product.description}</p>
  </div>
</div>

<style>
  .product-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .product-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .product-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .product-info {
    padding: 20px;
    text-align: left;
  }

  .product-info h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: #333;
  }

  .product-info p {
    font-size: 1rem;
    line-height: 1.5;
    color: #666;
    margin-bottom: 15px;
  }
</style>