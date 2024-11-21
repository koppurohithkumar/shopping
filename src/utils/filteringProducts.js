export default function filteringProducts(searchInput, products) {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput?.toLowerCase())
  );
  return filteredProducts;
}
