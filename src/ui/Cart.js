import React, { useState } from "react";
import UseUser from "../hooks/UseUser";
import ThankYou from "../components/ThankYou";

function Cart() {
  const [visible, setVisible] = useState(false);
  const {
    state: { cart },
    dispatch,
  } = UseUser();
  let cartTotal = 0;
  cart.forEach((product) => {
    cartTotal = Math.round(cartTotal + product.price * product.quantity);
  });
  const priceDetailsData = [
    { lable: "Cart Total", value: cartTotal },
    { lable: "Cart Discount", value: cartTotal % 20 },
    { lable: "Tax", value: cartTotal % 5 },
    { lable: "Delivery Charges", value: cartTotal % 2 },
  ];
  let total = cartTotal - (cartTotal % 20) + (cartTotal % 5) + (cartTotal % 2);

  return (
    <div
      className={`container h-screen mx-auto overflow-${
        visible ? "hidden" : "scroll"
      }`}
    >
      {cart.length > 0 ? (
        <div className="flex flex-col pt-20 md:flex-row divide-y-2 md:divide-y-0">
          <section className="md:w-[70%] md:h-[80vh] p-10 grid grid-flow-row justify-center overflow-y-scroll">
            <ul className="hidden w-[700px] p-2 md:flex md:items-center md:justify-betwee md:text-xs text-neutral-400">
              <li className="w-[40%] flex justify-center items-center">
                Product Details
              </li>
              <li className="w-[20%] flex justify-center items-center">
                Quantity
              </li>
              <li className="w-[20%] flex justify-center items-center">
                Price
              </li>
              <li className="w-[20%] flex justify-center items-center">
                Total
              </li>
            </ul>
            {cart.map((product) => (
              <div className="relative h-fit p-10 m-2 flex flex-col gap-3 items-center border-2 md:w-[700px] md:border md:flex-row md:gap-0 md:p-0 md:m-0">
                <section className=" flex flex-col justify-center items-center gap-2 md:w-[40%]">
                  <img
                    className="w-44 h-44 md:w-28 md:h-28"
                    src={product.image}
                    alt=""
                  />
                  <p className="mx-auto text-sm">{product.title}</p>
                </section>
                <section className="md:w-[20%] h-full flex justify-center items-center gap-2">
                  <p className="text-sm md:hidden">Quantity : </p>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "productQuantity",
                        payload: { id: product.id, type: "decrement" },
                      });
                    }}
                    className="w-6 h-6 text-lg hover:text-red-500 font-semibold"
                  >
                    -
                  </button>
                  <p className="px-2 py-1 text-sm flex justify-center border-2">
                    {product.quantity}
                  </p>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "productQuantity",
                        payload: { id: product.id, type: "increment" },
                      });
                    }}
                    className="w-6 h-6 text-lg hover:text-emerald-500 font-semibold"
                  >
                    +
                  </button>
                </section>
                <section className="md:w-[20%] h-full flex justify-center items-center">
                  <p className="text-emerald-600 text-sm font-medium">
                    <span className="text-black font-normal md:hidden">
                      Price :
                    </span>
                    {product.price}$
                  </p>
                </section>
                <section className="md:w-[20%] h-full flex justify-center items-center">
                  <p className="text-emerald-600 text-sm font-medium">
                    <span className="text-black font-normal md:hidden">
                      Total :
                    </span>
                    {product.price * product.quantity}
                  </p>
                </section>
                <img
                  onClick={() => {
                    dispatch({ type: "unCart", payload: product.id });
                  }}
                  className="absolute w-5 h-5 right-0 top-0 m-2 hover:animate-pulse hover:cursor-pointer"
                  src="https://img.icons8.com/?size=100&id=67884&format=png&color=000000"
                  alt=""
                />
              </div>
            ))}
          </section>
          <section className=" md:w-[30%] h-fit mt-10 p-10 grid grid-flow-row gap-5 divide-y divide-black font-semibold">
            <div className="flex items-center">
              <h5>PRICE DETAILS</h5>
            </div>
            <div className="p-2 flex flex-col gap-3">
              {priceDetailsData.map((data) => (
                <div className="flex justify-between bg-white text-sm">
                  <h6>{data.lable}</h6>
                  <h6>{data.value}$</h6>
                </div>
              ))}
            </div>
            <div>
              <section className="flex justify-between my-2">
                <h6>Total</h6>
                <h6>{total}$</h6>
              </section>
              <button
                onClick={() => setVisible(true)}
                className="w-full my-2 p-1 text-white text-center bg-emerald-500"
              >
                PLACE ORDER
              </button>
              {visible && <ThankYou />}
            </div>
          </section>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center ">
          <p className="w-fit px-20 md:w-[700px] p-5 tracking-widest text-center text-white font-medium bg-red-500 ">
            CART IS EMPTY
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
