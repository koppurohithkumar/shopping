import React, { useEffect, useState } from "react";

function Carousel({
  children: images,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const next = () => {
      setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
    };
    const SlideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(SlideInterval);
  }, [autoSlide, autoSlideInterval, images.length]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-1000"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images}
      </div>
    </div>
  );
}

export default Carousel;
