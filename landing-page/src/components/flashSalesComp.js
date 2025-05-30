"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import Image from "next/image";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const FlashSalesComp = () => {
  const [products, setProducts] = useState([]);
  const [likedItems, setLikedItems] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4); // default for desktop

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerView(1); // mobile
      } else if (width >= 768 && width <  1024) {
        setItemsPerView(3); // iPad/tablet
      } else {
        setItemsPerView(4); // desktop
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const handleLike = (productId) => {
    setLikedItems((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const renderStars = (rating = 0) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return (
      <>
        {Array(fullStars).fill().map((_, i) => (
          <AiFillStar key={`full-${i}`} color="orange" />
        ))}
        {hasHalfStar && <BsStarHalf color="orange" />}
        {Array(emptyStars).fill().map((_, i) => (
          <AiOutlineStar key={`empty-${i}`} color="orange" />
        ))}
      </>
    );
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const nextProduct = () => {
    const maxIndex = products.length - itemsPerView;
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerView > maxIndex ? maxIndex : prevIndex + itemsPerView
    );
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerView < 0 ? 0 : prevIndex - itemsPerView
    );
  };

  const displayedProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  if (!products.length) return <div>Loading...</div>;

  return (
    <div className="p-5 md:px-16 md:py-10 lg:px-20 lg:py-10">
      <div className="flex gap-2 md:gap-4 items-center py-6">
      <div className="border-[#8644DB] border-6 md:border-7 rounded h-[5vh] "></div>
        <p className="text-[#8644DB] text-sm md:text-lg lg:text-sm">Today's</p>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row justify-between gap-2 mg:gap-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 md:gap-4 lg:gap-10 xl:gap-14">
            <h2 className="text-xl md:text-3xl font-semibold">Flash Sales</h2>
            <div className="flex gap-5 text-sm">
              {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
                <React.Fragment key={label}>
                  <div>
                    <p className="text-xs md:text-lg lg:text-sm">{label}</p>
                    <h2 className="text-xl md:text-3xl font-bold">
                      {["03", "23", "19", "56"][i]}
                    </h2>
                  </div>
                  {i < 3 && <p>:</p>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center gap-4">
            <button onClick={prevProduct} className="bg-[#F5F5F5] rounded-full p-1">
              <IoIosArrowRoundBack className="w-6 h-6 md:w-8 md:h-8 lg:h-6 lg:w-6" />
            </button>
            <button onClick={nextProduct}  className="bg-[#F5F5F5] rounded-full p-1">
              <IoIosArrowRoundForward className="w-6 h-6 md:w-8 md:h-8 lg:h-6 lg:w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 md:py-8 transition-all duration-300">
        {displayedProducts.map((product) => (
          <div key={product.id} className=" rounded-md relative">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={400}
              height={200}
              className="bg-[#F5F5F5] w-full h-[200px] object-cover rounded-md"
              priority
            />
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <div onClick={() => handleLike(product.id)}>
                {likedItems[product.id] ? (
                  <FaHeart color="red" />
                ) : (
                  <FaRegHeart />
                )}
              </div>
              <LuEye />
            </div>

            <div className="p-4">
              <p className="font-medium text-sm md:text-xl lg:text-base line-clamp-1">{product.title}</p>

              <div className="flex items-center gap-3">
                <p className="text-[#8644DB] font-medium text-xs md:text-lg lg:text-sm">${product.price}</p>
                <p className="text-gray-400 line-through text-xs md:text-lg lg:text-sm">
                  $
                  {Math.round(
                    product.price / (1 - product.discountPercentage / 100)
                  )}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-1">
                {renderStars(product.rating)}
                <p className="text-gray-500 text-xs md:text-lg lg:text-sm">({product.rating})</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link href={`/product`} className="flex justify-center mt-6">
        <button className="bg-[#8644DB] text-white py-2 px-6 rounded hover:opacity-90 transition text-xs md:text-lg lg:text-sm">
          View All Products
        </button>
      </Link>
    </div>
  );
};

export default FlashSalesComp;
