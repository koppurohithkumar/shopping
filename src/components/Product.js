import React from "react";
import { useNavigate } from "react-router-dom";
function Product({ product, doNavigate = true }) {
  let { image, title, price, rating } = product;
  const brands = [
    "H&M",
    "US POLO ASSN",
    "PETTER ENGLAND",
    "NIKE",
    "ALLEN SOLLY",
    "ADDIDAS",
  ];
  const navigate = useNavigate();
  let stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(i);
  }
  return (
    <div
      onClick={() => {
        doNavigate && navigate("productdetails", { state: product });
      }}
      className="p-2 w-64 border-2 rounded-2xl m-auto"
    >
      <section className="mx-auto bg-gray-100 rounded-2xl">
        <img className="p-2" src={image} alt="" />
      </section>
      <div className="mt-2 p-2">
        <section className="">
          <h6 className="text-xs font-bold text-zinc-400">
            {brands[Math.floor(rating)]}
          </h6>
          <h6 className="text-sm font-medium">{title.substring(0, 20)}</h6>
        </section>
        <section className="flex -ml-1">
          {stars.map((i) => (
            <p>⭐</p>
          ))}
        </section>
        <section>
          <h6 className=" text-emerald-600 font-bold">${Math.floor(price)}</h6>
        </section>
      </div>
    </div>
  );
}

export default Product;
