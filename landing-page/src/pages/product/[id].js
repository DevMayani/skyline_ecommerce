// pages/product/[id].js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { RxSlash } from 'react-icons/rx'
import Image from 'next/image';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import RelatedItemsComp from '@/components/relatedItemsComp';

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState(null);
const [selectedSize, setSelectedSize] = useState(null);
const [quantity, setQuantity] = useState(1);


const availableColors = ['red', 'green', 'blue', 'black']; // Example colors
const availableSizes = ['S', 'M', 'L', 'XL']; // Example sizes

  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query; // This gets the product ID from the URL

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
    if (!id) return; // If the ID is not available, return early

    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]); // Re-run the effect whenever the ID changes

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-5 md:px-16 md:py-10 lg:px-20 lg:py-10">
       <div  className="flex items-center text-xs md:text-lg lg:text-sm">
        <Link href={`/`}  className="">
          <p className='text-gray-400 text-xs md:text-lg lg:text-sm'>Home</p>
        </Link>
        <RxSlash className='text-gray-400' />
          <p>Product</p>
          <RxSlash className='text-gray-400' />
          <p>{product.title}</p>
      </div>
      <div className='flex flex-col lg:flex-row gap-10 py-10 md:py-20'>
        <div className='w-[100%] lg:w-[80%] h-auto flex flex-col lg:flex-row gap-6 '>
        <div className='w-[100%] lg:w-[20%] flex flex-row lg:flex-col gap-4 md:gap-6'>
       <div className='flex justify-center items-center bg-[#F5F5F5]'>
       <Image
        src={product.thumbnail}
        alt={product.title}
        width={500}
        height={500}
        className="w-[70%] md:w-[50%] h-auto object-cover mt-4 rounded-md"
      />
       </div>
       <div className='flex justify-center items-center bg-[#F5F5F5]'>
       <Image
        src={product.thumbnail}
        alt={product.title}
        width={500}
        height={500}
        className="w-[70%] md:w-[50%] h-auto object-cover mt-4 rounded-md"
      />
       </div>
       <div className='flex justify-center items-center bg-[#F5F5F5]'>
       <Image
        src={product.thumbnail}
        alt={product.title}
        width={500}
        height={500}
        className="w-[70%] md:w-[50%] h-auto object-cover mt-4 rounded-md"
      />
       </div>
       <div className='flex justify-center items-center bg-[#F5F5F5]'>
       <Image
        src={product.thumbnail}
        alt={product.title}
        width={500}
        height={500}
        className="w-[70%] md:w-[50%] h-auto object-cover mt-4 rounded-md"
      />
       </div>
        </div>
        <div className='flex justify-center items-center bg-[#F5F5F5] w-full'>
        <Image
        src={product.thumbnail}
        alt={product.title}
        width={500}
        height={500}
        className="w-[60%] h-auto object-cover mt-4 rounded-md"
      />
        </div>
        </div>
        <div  className='w-[100%] lg:w-[40%] '>
       <div>
       <h1 className="text-sm md:text-xl lg:text-sm font-semibold">{product.title}</h1>
        <div className="flex items-center gap-2 mt-1">
        {renderStars(product.rating)}
        <p className="text-gray-500 text-xs md:text-lg lg:text-sm">({product.rating})</p>
        <p>|</p>
        <p className='text-xs md:text-lg lg:text-sm text-green-500'>{product.availabilityStatus}</p>
      </div>
        <div className="pt-1 pb-6 space-y-2">
        <p className="text-xs md:text-lg lg:text-sm">${product.price}</p>
        <p className="text-xs md:text-lg lg:text-sm">{product.description}</p>
      </div>
      <hr className='text-gray-300' />
       </div>
       <div className="my-6">
  <div className="mb-4">
    <p className="font-medium mb-2 text-sm md:text-lg lg:text-sm">Color:</p>
    <div className="flex gap-3">
      {availableColors.map((color) => (
        <button
          key={color}
          onClick={() => setSelectedColor(color)}
          className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? 'border-black scale-110' : 'border-gray-300'} transition-transform`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
    {selectedColor && (
      <p className="text-xs mt-1 text-gray-500">Selected color: <span className="font-semibold">{selectedColor}</span></p>
    )}
  </div>

  <div>
    <p className="font-medium mb-2 text-sm md:text-lg lg:text-sm">Size:</p>
    <div className="flex gap-3">
      {availableSizes.map((size) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`px-4 py-2 rounded border ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black border-gray-300'} text-xs md:text-sm`}
        >
          {size}
        </button>
      ))}
    </div>
    {selectedSize && (
      <p className="text-xs mt-1 text-gray-500">Selected size: <span className="font-semibold">{selectedSize}</span></p>
    )}
  </div>
  <div className="mt-6">
  <p className="font-medium mb-2 text-sm md:text-lg lg:text-sm">Quantity:</p>
<div className='flex items-center justify-between'>
<div className="flex items-center gap-4">
    <button
      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
      className="px-3 py-1 border rounded text-lg font-bold hover:bg-purple-700 hover:text-white"
    >
      -
    </button>
    <span className="text-sm md:text-base">{quantity}</span>
    <button
      onClick={() => setQuantity((prev) => prev + 1)}
      className="px-3 py-1 border rounded text-lg font-bold hover:bg-purple-700 hover:text-white"
    >
      +
    </button>
  </div>
  <button className='px-8 py-2 text-sm md:text-lg lg:text-sm bg-purple-700 text-white rounded'>Buy Now</button>
</div>
</div>

</div>


       <div className='border rounded '>
         <div className='flex items-center gap-4 p-5 '>
          <Image src="/assets/delivery.svg"
          width={100}
          height={100}
          className='w-[10%] h-auto' />
         <div>
         <p className='text-[12px] md:text-[16px] lg:text-[12px]'>Free Delivery</p>
          <p className='text-[12px] md:text-[16px] lg:text-[12px]'>Enter your postal code for Delivery Availability</p> 
         </div>
         </div>
         <hr />
         <div className='flex items-center gap-4 p-5'>
         <Image src="/assets/return.svg"
          width={100}
          height={100}
          className='w-[10%] h-auto' />
         <div>
         <p className='text-[12px] md:text-[16px] lg:text-[12px]'>Return Delivery</p>
          <p className='text-[12px] md:text-[16px] lg:text-[12px]'>Free 30 Days Delivery Returns. Details</p>
         </div>
         </div>
        </div>
        </div>
       
      </div>
       
      
     
      <div className="mt-6">
      <RelatedItemsComp />
      </div>
    </div>
  );
};

export default ProductDetail;
