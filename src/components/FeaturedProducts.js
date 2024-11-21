import React from "react";
import Product from "./Product";

function FeaturedProducts({ products, title, subTitle }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center p-20">
        <h1 className="text-5xl font-medium text-emerald-500">
          {title.toUpperCase()}
        </h1>
        <p className="text-xs text-zinc-600 md:text-base">{subTitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <Product product={product} doNavigate={false} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
