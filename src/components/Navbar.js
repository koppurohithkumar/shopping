import SearchBar from "./SearchBar";
import filteringProducts from "../utils/filteringProducts.js";
import UseProduct from "../hooks/UseProduct.js";
import { NavLink } from "react-router-dom";
import UseUser from "../hooks/UseUser.js";

function Navbar() {
  const {
    state: { products },
    dispatch,
  } = UseProduct();
  const { state } = UseUser();

  function handleSearch(e) {
    const data = filteringProducts(e.target.value, products);
    dispatch({ type: "filteredProducts", payload: data });
  }
  return (
    <div className="fixed z-10 w-full md:w-[94%] md:mx-[3%] bg-white shadow-md shadow-black/65 md:rounded-lg ">
      <div className="w-full flex justify-between items-center p-2 md:px-10">
        <section className="">
          <h1 className="bg-gradient-to-r from-emerald-500 to-slate-500 font-bold bg-clip-text text-transparent font-heading text-2xl text-center  ">
            Shopping.com
          </h1>
        </section>
        <section>
          <SearchBar handleSearch={handleSearch} />
        </section>
        <section className="w-36 md:w-44 flex items-center justify-around">
          <NavLink to="/">
            {({ isActive }) => (
              <img
                className={
                  isActive ? "w-5 h-5 shadow-emerald-500 shadow-md " : "w-5 h-5"
                }
                src="https://img.icons8.com/?size=100&id=73&format=png&color=000000"
                alt=""
              />
            )}
          </NavLink>

          <NavLink to="products">
            {({ isActive }) => (
              <img
                className={
                  isActive ? "w-5 h-5 shadow-emerald-500 shadow-md " : "w-5 h-5"
                }
                src="https://img.icons8.com/?size=100&id=ef7HQj6w2rsQ&format=png&color=000000"
                alt=""
              />
            )}
          </NavLink>

          <NavLink to="wishlist">
            {({ isActive }) => (
              <div className="relative">
                <img
                  className={
                    isActive
                      ? "w-5 h-5 shadow-emerald-500 shadow-md "
                      : "w-5 h-5"
                  }
                  src="https://img.icons8.com/?size=100&id=87&format=png&color=000000"
                  alt=""
                />
                <p className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-red-600 text-center text-white text-[10px] font-bold">
                  {state.wishlist.length}
                </p>
              </div>
            )}
          </NavLink>

          <NavLink to="cart">
            {({ isActive }) => (
              <div className="relative">
                <img
                  className={
                    isActive
                      ? "w-5 h-5 shadow-emerald-500 shadow-md "
                      : "w-5 h-5"
                  }
                  src="https://img.icons8.com/?size=100&id=3686&format=png&color=000000"
                  alt=""
                />
                <p className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-red-600 text-center text-white text-[10px] font-bold">
                  {state.cart.length}
                </p>
              </div>
            )}
          </NavLink>
        </section>
      </div>
    </div>
  );
}

export default Navbar;
