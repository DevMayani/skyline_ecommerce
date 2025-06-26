// components/TopTenOffers.jsx
import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    text: "Up to 10% off Voucher",
    image: "/assets/phone.svg",
    desc: "iPhone 14 Series",
  },
  {
    id: 2,
    text: "Up to 20% off Voucher",
    image: "/assets/jbl.svg",
    desc: "Smartwatch Collections",
  },
  {
    id: 3,
    text: "Enjoy 5% Off Voucher",
    image: "/assets/jbl.svg",
    desc: "Premium Noise-Cancelling Sound",
  },
];

const TopTenOffer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="flex items-center w-full bg-black text-white h-full  transition-all duration-700 ease-in-out">
      <div className=" p-8 md:p-10 lg:px-20 lg:py-28 flex-1 flex flex-col gap-y-4">
        <p className="text-white text-sm md:text-lg lg:text-base font-light">
          {slide.desc}
        </p>
        <p className="text-white font-semibold text-xl md:text-4xl lg:text-3xl xl:text-5xl w-[90%] md:w-[100%] lg:w-[70%] xl:w-[70%] leading-snug">
          {slide.text}
        </p>
        <a href="/" className="text-white text-sm md:text-lg lg:text-base underline">
          Shop Now
        </a>
      </div>
      <div className="flex-1">
        <img
          src={slide.image}
          alt="product-image"
          className="w-full h-[20vh] md:h-[20vh] lg:h-[40vh] xl:h-[30vh] object-contain transition-all duration-700"
        />
      </div>
    </div>
  );
};

export default TopTenOffer;
