import React from "react";
import UseUser from "../hooks/UseUser";

function ThankYou() {
  const { dispatch } = UseUser();
  return (
    <div className="absolute inset-0 w-full h-screen z-10 bg-black/50">
      <div className="absolute w-fit p-16 md:w-[700px] h-[150px] inset-0 m-auto rounded-xl bg-black grid place-content-center">
        <img
          onClick={() => dispatch({ type: "clearCart" })}
          className="absolute w-5 h-5 bg-white rounded-md p-1 top-5 right-5 hover:scale-110 duration-500"
          src="https://img.icons8.com/?size=100&id=OZuepOQd0omj&format=png&color=000000"
          alt=""
        />
        <h1 className="bg-gradient-to-r from-emerald-500 to-slate-500 bg-clip-text text-transparent font-heading text-2xl md:text-4xl text-center animate-pulse  ">
          Order Placed Successfully <br /> Thank you...
        </h1>
      </div>
    </div>
  );
}

export default ThankYou;
