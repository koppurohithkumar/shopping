import { React, useCallback, useEffect, useState } from "react";
import UseProduct from "../hooks/UseProduct.js";
import Product from "../components/Product.js";

function Products() {
  const {
    state: { products, filteredProducts },
  } = UseProduct();
  const showProducts =
    filteredProducts.length == 0 ? products : filteredProducts;
  return (
    <div className="container mx-auto p-5">
      <section className="pt-24 grid grid-cols-1 justify-center gap-8 md:grid-cols-3 lg:grid-cols-4">
        {showProducts.map((product) => (
          <Product product={product} />
        ))}
      </section>
    </div>
  );
}

export default Products;
