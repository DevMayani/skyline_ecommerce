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

const ExploreProductsComp = () => {
  const [products, setProducts] = useState([]);
  const [likedItems, setLikedItems] = useState({});

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

// Fetch product data
useEffect(() => {
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };

  fetchProducts();
}, []);



  if (!products.length) return <div>Loading...</div>;

  return (
    <div className="p-5 md:px-16 md:py-10 lg:px-20 lg:py-10">
        {/* Header */}
        <div className="flex gap-2 md:gap-4 items-center py-6">
        <div className="border-[#8644DB] border-6 md:border-7 rounded h-[5vh]"></div>
        <p className="text-[#8644DB] text-sm md:text-lg lg:text-sm">
       Our Products
        </p>
      </div>

      {/* Title and arrows */}
      <div className="flex justify-between items-center pb-10">
        <div>
          <h2 className="text-xl md:text-3xl font-semibold">
            Explore Our Products
          </h2>
        </div>
        <Link href={`/product`} className="flex justify-center mt-6">
        <button className="bg-[#8644DB] text-white py-2 px-6 rounded hover:opacity-90 transition text-xs md:text-lg lg:text-sm">
          View All
        </button>
      </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 md:py-8 transition-all duration-300">
        {products.slice(0,12).map((product) => (
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
               <button 
                className=" bg-white rounded-full shadow h-7 w-7 flex justify-center items-center"> {likedItems[product.id] ? (
                  <FaHeart color="red" className="w-4 h-4" />
                ) : (
                  <FaRegHeart className="w-4 h-4" />
                )}</button>
              </div>
              <button
                  className=" bg-white rounded-full shadow h-7 w-7 flex justify-center items-center"
                  title="View Product"
                >
                  <LuEye className="text-black w-5 h-5 " />
                </button>
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
      <Link href={`/allproducts`} className="flex justify-center mt-6">
        <button className="bg-[#8644DB] text-white py-2 px-6 rounded hover:opacity-90 transition text-xs md:text-lg lg:text-sm">
          View All Products
        </button>
      </Link>
    </div>
  );
};

export default ExploreProductsComp;
