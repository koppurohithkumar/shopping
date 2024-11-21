import Product from "../components/Product";
import UseUser from "../hooks/UseUser";

function WishList() {
  const {
    state: { wishlist },
  } = UseUser();
  return (
    <div className="container h-screen mx-auto">
      {wishlist.length > 0 ? (
        <div className="pt-24 p-5 grid grid-cols-1 justify-center gap-8 md:grid-cols-3 lg:grid-cols-4">
          {wishlist.map((product) => (
            <div>
              <Product product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center ">
          <p className="w-fit px-20 md:w-[700px] p-5 tracking-widest text-center text-white font-medium bg-red-500 ">
            WISHLIST IS EMPTY
          </p>
        </div>
      )}
    </div>
  );
}

export default WishList;
