import React from "react";

function Footer() {
  return (
    <div className=" p-20 text-center flex flex-col justify-between gap-7 bg-stone-50 md:flex-row md:text-start">
      <section className="flex flex-col gap-3">
        <p className="text-sm font-medium">Contact</p>
        <div className="text-xs">
          <p className="font-medium">
            Address :{" "}
            <span className="text-zinc-400 font-normal">
              Bangalore, Martahalli, Multiplex
            </span>
          </p>
          <p className="py-1 font-medium">
            Phone :{" "}
            <span className="text-zinc-400 font-normal">
              +01 2222 1234 / (+91) 01 2345 6789
            </span>
          </p>
          <p className="font-medium">
            Hours :{" "}
            <span className="text-zinc-400 font-normal">
              10:00 AM - 09:00 PM / Mon - Sun
            </span>
          </p>
        </div>
        <section>
          <p className="text-sm font-medium"> Follow us</p>
          <div className="flex justify-center gap-2 mt-3 md:justify-start">
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/?size=100&id=5MQ0gPAYYx7a&format=png&color=000000"
              alt=""
            />
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/?size=100&id=yGcWL8copNNQ&format=png&color=000000"
              alt=""
            />
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
              alt=""
            />
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/?size=100&id=XErM9A1xNUK5&format=png&color=000000"
              alt=""
            />
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/?size=100&id=9a46bTk3awwI&format=png&color=000000"
              alt=""
            />
          </div>
        </section>
      </section>
      <section className="">
        <h6 className="text-sm font-medium">About</h6>
        <p className="py-1 text-zinc-400 text-xs">About Us</p>
        <p className="py-1 text-zinc-400 text-xs">Delivery Information</p>
        <p className="py-1 text-zinc-400 text-xs">Privacy Policy</p>
        <p className="py-1 text-zinc-400 text-xs">Terms and Conditions</p>
        <p className="py-1 text-zinc-400 text-xs">Contact US</p>
      </section>
      <section className="">
        <h6 className="text-sm font-medium">My Account</h6>
        <p className="py-1 text-zinc-400 text-xs">Sign in</p>
        <p className="py-1 text-zinc-400 text-xs">View Cart</p>
        <p className="py-1 text-zinc-400 text-xs">My Wishlist</p>
        <p className="py-1 text-zinc-400 text-xs">Track my order</p>
        <p className="py-1 text-zinc-400 text-xs">Help</p>
      </section>
      <section>
        <h6 className="text-sm font-medium">Install App</h6>
        <p className="py-1 text-zinc-400 text-xs">
          From App Store or Google Play Store
        </p>
        <div className="flex gap-2 justify-center md:justify-start">
          <img
            className="w-20 h-20"
            src="https://img.icons8.com/?size=100&id=4PbFeZOKAc61&format=png&color=000000"
            alt=""
          />
          <img
            className="w-20 h-20 p-2"
            src="https://img.icons8.com/?size=100&id=L1ws9zn2uD01&format=png&color=000000"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default Footer;
