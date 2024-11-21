import React, { useEffect, useReducer } from "react";
import ProductContext from "./ProductContext";
import { products } from "../services/ProductsData";

const initialState = {
  products: [],
  filteredProducts: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "products": {
      return { ...state, products: action.payload };
    }
    case "updateAddToCart": {
      const index = state.products.findIndex((p) => p.id === action.payload);
      products[index].addToCart = false;
      return { ...state };
    }
    case "filteredProducts": {
      return { ...state, filteredProducts: action.payload };
    }
    default: {
      return { ...state };
    }
  }
}

function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function addProducts() {
      products.forEach((element) => {
        element.addToWishList = false;
        element.addToCart = false;
        element.price = Math.floor(Math.random() * (500 - 100 + 1)) + 1;
        element.rating = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        element.raters = Math.floor(Math.random() * (5000 - 100 + 1)) + 100;
        element.description =
          "A T-shirt (also spelled tee shirt, or tee for short) is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of stretchy, light, and inexpensive fabric and are easy to clean. The T-shirt evolved from undergarments used in the 19th century and, in the mid-20th century, transitioned from undergarments to general-use casual clothing.";
      });
      dispatch({ type: "products", payload: products });
    }
    addProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
