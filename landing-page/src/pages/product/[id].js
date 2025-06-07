// pages/product/[id].js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { RxSlash } from 'react-icons/rx'
import Image from 'next/image';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query; // This gets the product ID from the URL

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
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <div className="mt-6">
        <p className="text-xl font-medium">${product.price}</p>
        <p className="text-sm">{product.description}</p>
        <div className="mt-4">
          {/* You can add any additional details here */}
          <p className="font-medium">Rating:</p>
          <p>{product.rating}</p>
          <p className="font-medium mt-2">Category:</p>
          <p>{product.category}</p>
        </div>
      </div>
        </div>
       
      </div>
      
     
      <div className="mt-6">
        <p className="text-xl font-medium">${product.price}</p>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        <div className="mt-4">
          {/* You can add any additional details here */}
          <p className="font-medium">Rating:</p>
          <p>{product.rating}</p>
          <p className="font-medium mt-2">Category:</p>
          <p>{product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
