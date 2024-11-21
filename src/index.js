import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Products from "./ui/Products";
import WishList from "./ui/WishList";
import Cart from "./ui/Cart";
import ProductDetails from "./ui/ProductDetails";
import Home from "./ui/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/shopping", element: <Home /> },
      { path: "products", element: <Products /> },
      {
        path: "products/productdetails",
        element: <ProductDetails />,
      },
      {
        path: "wishlist/productdetails",
        element: <ProductDetails />,
      },
      { path: "wishlist", element: <WishList /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
