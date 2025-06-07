import React, { useState, useEffect } from "react";

const ExperienceCat = () => {
  const slides = [
    {
      id: 1,
      text: "Enhance Your Music Experience",
      image: "/assets/phone.svg",
      desc: "Categories",
    },
    {
      id: 2,
      text: "Enhance Your Music Experience",
      image: "/assets/phone.svg",
      desc: "Categories",
    },
    {
      id: 3,
      text: "Enhance Your Music Experience",
      image: "/assets/phone.svg",
      desc: "Categories",
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
    <div className="p-5 md:px-16 md:pb-10 lg:px-20">
       <div className="py-10 w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center w-full bg-black text-white h-full p-8 md:p-10 lg:p-20 transition-all duration-700 ease-in-out">
            {/* Text */}
            <div className="flex-1 flex flex-col gap-y-4">
              <p className="text-green-400 text-sm md:text-lg lg:text-base font-normal">
                {datum.desc}
              </p>
              <p className="text-white font-semibold text-xl md:text-4xl lg:text-3xl xl:text-5xl w-[90%] md:w-[100%] lg:w-[70%] xl:w-[70%] leading-snug">
                {datum.text}
              </p>
            <div>
            <button className="text-xs md:text-lg lg:text-sm px-8 py-2 md:py-3 bg-green-400 rounded">Buy Now</button>
            </div>
            </div>

            {/* Image */}
            <div className="flex-1">
              <img
                src={datum.image}
                alt="product-image"
                className="w-full h-[40vh] md:h-[30vh] lg:h-[50vh] xl:h-[50vh] object-contain transition-all duration-700"
              />
            </div>
          </div>
        </div> 
    </div>
  )
}

export default ExperienceCat
