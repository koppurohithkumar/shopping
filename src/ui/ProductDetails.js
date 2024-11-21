import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseUser from "../hooks/UseUser";

function ProductDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state;
  const {
    state: {
      addToCart,
      addToWishList,
      image,
      title,
      description,
      price,
      rating,
      raters,
    },
  } = location;

  const { dispatch } = UseUser();
  let stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(i);
  }
  function handleWishList() {
    product.addToWishList = !product.addToWishList;
    if (product.addToWishList === true) {
      dispatch({ type: "wishlist", payload: product });
    } else {
      dispatch({ type: "unWishlist", payload: product.id });
    }
  }
  function handleAddToCart() {
    product.addToCart = !addToCart;
    if (product.addToCart === true) {
      dispatch({ type: "cart", payload: { ...product, quantity: 1 } });
    }
  }
  return (
    <div className="pt-20">
      <img
        onClick={() => navigate(-1)}
        className="absolute w-6 h-6 top-16 left-10 hover:scale-105"
        src="https://img.icons8.com/?size=100&id=81127&format=png&color=000000"
      />
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 md:p-5">
        <section className="relative">
          <img className="h-[250px] md:w-[400px] md:h-[400px]" src={image} />
          <p
            onClick={handleWishList}
            className="absolute top-0 right-2 text-lg"
          >
            {addToWishList ? "❤️" : "🖤"}
          </p>
        </section>
        <section className=" text-center text-xs p-10 flex flex-col gap-3 my-auto md:text-sm md:text-left md:p-5">
          <h5 className="text-emerald-600 font-bold underline underline-offset-4">
            {title}
          </h5>
          <p className="">
            <span className="text-emerald-600 font-bold">Description : </span>
            {description}
          </p>
          <section className="flex justify-center md:justify-start">
            <p className="">Ratings : </p>
            {stars.map(() => (
              <p>⭐</p>
            ))}
            <p className="">({raters})</p>
          </section>
          <p className="text-emerald-600 font-bold">
            Price : <span className="text-black">${price}</span>
          </p>
          <button
            onClick={handleAddToCart}
            disabled={addToCart === true}
            className="bg-emerald-500 text-white w-fit mx-auto px-16 py-2 disabled:bg-emerald-500/40 md:w-full"
          >
            {addToCart ? "Added to cart" : "Add to cart"}
          </button>
        </section>
      </div>
    </div>
  );
}

export default ProductDetails;
