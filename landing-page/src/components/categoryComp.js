"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import Phone from "/public/assets/Category-phone.svg";
import Computer from "/public/assets/Category-comp.svg";
import Smartwatch from "/public/assets/Category-smartwatch.svg";
import Camera from "/public/assets/Category-camera.svg";
import Headphone from "/public/assets/Category-headphone.svg";
import Game from "/public/assets/Category-game.svg";

const CategoryComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  const details = [
    { id: 1, imageOne: Phone },
    { id: 2, imageOne: Computer },
    { id: 3, imageOne: Smartwatch },
    { id: 4, imageOne: Camera },
    { id: 5, imageOne: Headphone },
    { id: 6, imageOne: Game },
  ];

  // Update itemsPerView based on screen width
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(2);
      } else if (width < 1024) {
        setItemsPerView(3);
      } else if (width < 1280) {
        setItemsPerView(4);
      } 
      else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const nextProduct = () => {
    const maxIndex = details.length - itemsPerView;
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerView > maxIndex ? maxIndex : prevIndex + itemsPerView
    );
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerView < 0 ? 0 : prevIndex - itemsPerView
    );
  };

  const displayedProducts = details.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <div className="p-5 md:px-16 md:py-10 lg:px-20 lg:py-10">
      {/* Header */}
      <div className="flex gap-2 md:gap-4 items-center py-6">
        <div className="border-[#8644DB] border-6 md:border-7 rounded h-[5vh]"></div>
        <p className="text-[#8644DB] text-sm md:text-lg lg:text-sm">
          Categories
        </p>
      </div>

      {/* Title and arrows */}
      <div className="flex justify-between items-center pb-10">
        <div>
          <h2 className="text-xl md:text-3xl font-semibold">
            Browse By Category
          </h2>
        </div>
        <div className="flex gap-4">
          <button
            onClick={prevProduct}
            className="bg-[#F5F5F5] rounded-full p-1"
          >
            <IoIosArrowRoundBack className="w-6 h-6 md:w-8 md:h-8 lg:h-6 lg:w-6" />
          </button>
          <button
            onClick={nextProduct}
            className="bg-[#F5F5F5] rounded-full p-1"
          >
            <IoIosArrowRoundForward className="w-6 h-6 md:w-8 md:h-8 lg:h-6 lg:w-6" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="flex items-center justify-between lg:justify-center lg:gap-10 px-0 lg:px-20"
        style={{
          transition: "transform 0.5s ease",
        }}
      >
        {displayedProducts.map((item) => (
          <div
            key={item.id}
            className="group hover:bg-[#8644DB] rounded-lg p-6 transition duration-300 ease-in-out cursor-pointer"
            
          >
            <Image
              src={item.imageOne}
              className="h-[100px] w-auto transition duration-300 ease-in-out group-hover:brightness-0 group-hover:invert"
              alt="categories-images"
              style={{
                objectFit: "contain",
                height: "150px",
                width: "100%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="pt-10 md:pt-16">
        <hr className="text-gray-300" />
      </div>
    </div>
  );
};

export default CategoryComp;
