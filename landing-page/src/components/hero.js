import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  const details = [
    { id: 1, label: "Mobile Phones" },
    { id: 2, label: "Accessories" },
    { id: 3, label: "Laptops" },
    { id: 4, label: "Smartwatches" },
    { id: 5, label: "Headphones" },
    { id: 6, label: "Video Games" },
    { id: 7, label: "Best Sellers" },
    { id: 8, label: "Top 10 Offers" },
    { id: 9, label: "New Arrivals" },
  ];

  const slides = [
    {
      id: 1,
      text: "Up to 10% off Voucher",
      image: "/assets/phone.svg",
      desc: "Iphone 14 Series",
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
    }
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Slide changes every 4 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  const datum = slides[currentSlide]; // Get the current slide only

  return (
    <section className="p-5 md:px-16 md:py-0 lg:px-20 lg:py-0">
      <div className="flex flex-col md:flex-row gap-6 lg:items-stretch">
        {/* Sidebar */}
        <div className="w-full md:w-[200px] lg:w-[250px] space-y-1 lg:space-y-2 md:border-r border-r-gray-200 md:py-10">
          {details.map((item) => (
            <button
              key={item.id}
              className="w-full flex items-center justify-between text-sm hover:text-purple-600 transition px-4 py-2"
            >
              {item.label}
              <IoIosArrowForward />
            </button>
          ))}
        </div>

        {/* Carousel Slide */}
        <div className="py-10 w-full">
          <div className="flex items-center w-full bg-black text-white h-full p-8 md:p-10 lg:p-20 transition-all duration-700 ease-in-out">
            {/* Text */}
            <div className="flex-1 flex flex-col gap-y-4">
              <p className="text-white text-sm md:text-lg lg:text-base font-light">
                {datum.desc}
              </p>
              <p className="text-white font-semibold text-xl md:text-4xl lg:text-3xl xl:text-5xl w-[90%] md:w-[100%] lg:w-[70%] xl:w-[70%] leading-snug">
                {datum.text}
              </p>
              <a href="/" className="text-white text-sm md:text-lg lg:text-base underline">
                Shop Now
              </a>
            </div>

            {/* Image */}
            <div className="flex-1">
              <img
                src={datum.image}
                alt="product-image"
                className="w-full h-[20vh] md:h-[20vh] lg:h-[40vh] xl:h-[30vh] object-contain transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
