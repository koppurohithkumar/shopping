import SearchBar from "./SearchBar";
import filteringProducts from "../utils/filteringProducts.js";
import UseProduct from "../hooks/UseProduct.js";
import { NavLink } from "react-router-dom";
import UseUser from "../hooks/UseUser.js";
import { useState } from "react";

function Navbar() {
  const {
    state: { products },
    dispatch,
  } = UseProduct();
  const { state } = UseUser();
  const [hamburger, setHamburger] = useState(false);
  function handleSearch(e) {
    const data = filteringProducts(e.target.value, products);
    dispatch({ type: "filteredProducts", payload: data });
  }
  return (
    <div className="fixed z-10 w-full md:w-[94%] md:mx-[3%] bg-white shadow-md shadow-black/65 md:rounded-lg ">
      <div className="w-full flex justify-between items-center p-2 md:px-10">
        <div className="md:hidden">
          <img
            onClick={() => setHamburger(!hamburger)}
            className="w-7 h-7"
            src={
              hamburger
                ? "https://img.icons8.com/?size=100&id=46&format=png&color=000000"
                : "https://img.icons8.com/?size=100&id=YOrgWKvUdGE3&format=png&color=000000"
            }
            alt="hamburger"
          />
          {hamburger && (
            <section className="p-5 w-1/2 h-52 absolute left-0 top-12 text-center text-sm flex flex-col items-center gap-3 bg-white/75">
              <NavLink
                to="/shopping"
                className={({ isActive }) =>
                  isActive
                    ? "w-full bg-emerald-400 text-white shadow-md shadow-black/40"
                    : ""
                }
              >
                Home
              </NavLink>

              <NavLink
                to="products"
                className={({ isActive }) =>
                  isActive
                    ? "w-full bg-emerald-400 text-white shadow-md shadow-black/40"
                    : ""
                }
              >
                products
              </NavLink>
            </section>
          )}
        </div>
        <section className="">
          <h1 className="hidden md:flex bg-gradient-to-r from-emerald-500 to-slate-500 font-bold bg-clip-text text-transparent font-heading text-2xl text-center  ">
            Shopping.com
          </h1>
          <img
            className="w-7 h-7 md:hidden"
            src="https://img.icons8.com/?size=100&id=18066&format=png&color=000000"
            alt=""
          />
        </section>
        <section>
          <SearchBar handleSearch={handleSearch} />
        </section>
        <section className="hidden md:flex md:gap-4">
          <NavLink
            to="/shopping"
            className={({ isActive }) =>
              isActive
                ? "px-2 bg-emerald-400 text-white shadow-md shadow-black/40"
                : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="products"
            className={({ isActive }) =>
              isActive
                ? "px-2 bg-emerald-400 text-white shadow-md shadow-black/40"
                : ""
            }
          >
            products
          </NavLink>
        </section>
        <section className="flex items-center gap-4">
          <NavLink to="wishlist">
            {({ isActive }) => (
              <div className="relative">
                <img
                  className={(isActive = "w-6 h-6")}
                  src="https://img.icons8.com/?size=100&id=87&format=png&color=000000"
                  alt=""
                />
                {state.wishlist.length > 0 && (
                  <p className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-600 text-center text-white text-[10px] font-bold">
                    {state.wishlist.length}
                  </p>
                )}
              </div>
            )}
          </NavLink>

          <NavLink to="cart">
            {({ isActive }) => (
              <div className="relative">
                <img
                  className={(isActive = "w-5 h-5")}
                  src="https://img.icons8.com/?size=100&id=3686&format=png&color=000000"
                  alt=""
                />
                {state.cart.length > 0 && (
                  <p className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-600 text-center text-white text-[10px] font-bold">
                    {state.cart.length}
                  </p>
                )}
              </div>
            )}
          </NavLink>
        </section>
      </div>
    </div>
  );
}

export default Navbar;
