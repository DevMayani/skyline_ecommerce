"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import ProductCard from "./productCard";


const FlashSalesComp = () => {
  const [products, setProducts] = useState([]);
  const [likedItems, setLikedItems] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerView(1);
      } else if (width >= 768 && width < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
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

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
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
        <div className="border-[#8644DB] border-6 md:border-7 rounded h-[5vh]" />
        <p className="text-[#8644DB] text-sm md:text-lg lg:text-sm">Today's</p>
      </div>

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
          <button onClick={nextProduct} className="bg-[#F5F5F5] rounded-full p-1">
            <IoIosArrowRoundForward className="w-6 h-6 md:w-8 md:h-8 lg:h-6 lg:w-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 md:py-8 transition-all duration-300">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isLiked={likedItems[product.id]}
            onLike={handleLike}
          />
        ))}
      </div>

      <Link href={`/product`} className="flex justify-center mt-6">
        <button className="bg-[#8644DB] text-white py-2 px-6 rounded hover:opacity-90 transition text-xs md:text-lg lg:text-sm">
          View All Products
        </button>
      </Link>

      <div className="py-10 md:py-16">
        <hr className="text-gray-300" />
      </div>
    </div>
  );
};

export default FlashSalesComp;
