"use client";
import React from "react";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import Link from "next/link";

const ProductCard = ({ product, isLiked, onLike }) => {
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

  return (
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
      <div onClick={() =>  onLike(product.id)}>
       <button 
        className=" bg-white rounded-full shadow h-7 w-7 flex justify-center items-center"> 
        <button className="bg-white rounded-full shadow h-7 w-7 flex justify-center items-center">
            {isLiked ? (
              <FaHeart color="red" className="w-4 h-4" />
            ) : (
              <FaRegHeart className="w-4 h-4" />
            )}
          </button>
        </button>
      </div>
      <button
          className=" bg-white rounded-full shadow h-7 w-7 flex justify-center items-center"
          title="View Product"
        >
          <Link href={`/product/${product.id}`} passHref>
          <LuEye  className="text-black w-5 h-5 " />
          </Link>
          
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
  );
};

export default ProductCard;
