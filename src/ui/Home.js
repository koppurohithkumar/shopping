import React from "react";
import i1 from "../assets/banner/b1.jpg";
import i2 from "../assets/banner/b4.jpg";
import i3 from "../assets/banner/b7.jpg";
import i4 from "../assets/banner/b16.jpg";
import i5 from "../assets/banner/b17.jpg";
import i6 from "../assets/banner/b18.jpg";
import b2 from "../assets/banner/b2.jpg";
import Carousel from "../components/Carousel";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import UseProduct from "../hooks/UseProduct";

function Home() {
  const images = [i1, i2, i3, i4, i5, i6];
  const {
    state: { products },
  } = UseProduct();
  return (
    <div className="pt-20">
      <section className="mb-20 relative max-w-6xl h-96 mx-auto">
        <Carousel autoSlide={true}>
          {images.map((img) => (
            <img
              className="min-w-full h-96 object-cover object-top"
              src={img}
              alt=""
            />
          ))}
        </Carousel>
      </section>
      <section className="p-20 ">
        <FeaturedProducts
          products={products.filter((product) => product.image.includes("/f"))}
          title={"Featured Products"}
          subTitle={"Summer collection new modern design"}
        />
      </section>
      <section className="relative">
        <div className="absolute w-full h-full flex flex-col gap-8 items-center justify-center">
          <h6 className="text-white text-xl md:text-3xl lg:text-5xl">
            Up to <span className="text-red-600">70% off</span> - All T-Shirts &
            Accessories
          </h6>
          <button className="bg-white p-2 px-3 rounded-md text-xs font-medium md:text-base">
            Explore More
          </button>
        </div>
        <img src={b2} alt="" />
      </section>
      <section className="p-20">
        <FeaturedProducts
          products={products.filter((product) => product.image.includes("/n"))}
          title={"New Arrivals"}
          subTitle={"Cool and trendy new arrivals"}
        />
      </section>
      <section></section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
