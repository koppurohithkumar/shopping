import React, { Children, useReducer } from "react";
import UserContext from "./UserContext";
import UseProduct from "../hooks/UseProduct";

const initialUserData = {
  userName: "",
  wishlist: [],
  cart: [],
};

function UserProvider({ children }) {
  const useProduct = UseProduct();
  function userReducer(state, action) {
    switch (action.type) {
      case "cart": {
        state.cart.push(action.payload);
        return { ...state };
      }
      case "unCart": {
        const index = state.cart.findIndex((p) => p.id == action.payload);
        state.cart.splice(index, 1);
        useProduct.dispatch({
          type: "updateAddToCart",
          payload: action.payload,
        });
        return { ...state };
      }
      case "clearCart": {
        state.cart.map((product) =>
          useProduct.dispatch({
            type: "updateAddToCart",
            payload: product.id,
          })
        );
        state.cart = [];

        return { ...state };
      }
      case "wishlist": {
        state.wishlist.push(action.payload);
        return { ...state };
      }
      case "unWishlist": {
        const index = state.wishlist.findIndex((p) => p.id == action.payload);
        state.wishlist.splice(index, 1);
        return { ...state };
      }
      case "productQuantity": {
        const productIndex = state.cart.findIndex(
          (obj) => obj.id == action.payload.id
        );
        action.payload.type == "increment"
          ? state.cart[productIndex].quantity++
          : state.cart[productIndex].quantity--;

        return { ...state };
      }
    }
  }
  const [state, dispatch] = useReducer(userReducer, initialUserData);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
