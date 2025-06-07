'use client';
import Image from 'next/image';
import React from 'react'
import Link from "next/link";

const NewArrivalComp = () => {
  const products = [
    {
      id: 1,
      title: 'PlayStation 5',
      description: 'Black and White version of the PS5 coming out on sale.',
      image: '/img/ps5.jpg', // Replace with actual path
      large: true,
    },
    {
      id: 2,
      title: "Women's Collections",
      description: 'Featured woman collections that give you another vibe.',
      image: '/img/women.jpg',
    },
    {
      id: 3,
      title: 'Speakers',
      description: 'Amazon wireless speakers',
      image: '/img/speakers.jpg',
    },
    {
      id: 4,
      title: 'Perfume',
      description: 'GUCCI INTENSE OUD EDP',
      image: '/img/perfume.jpg',
    },
  ];
  
  return (
    <div className="p-5 md:px-16 md:pb-10 lg:px-20">
    {/* Header */}
    <div className="flex gap-2 md:gap-4 items-center py-6">
    <div className="border-[#8644DB] border-6 md:border-7 rounded h-[5vh]"></div>
    <p className="text-[#8644DB] text-sm md:text-lg lg:text-sm">
    Featured
    </p>
  </div>

  {/* Title and arrows */}
  <div className="flex justify-between items-center pb-10">
    <div>
      <h2 className="text-xl md:text-3xl font-semibold">
      New Arrival
      </h2>
    </div>
    
  </div>
  
  
    </div>
  )
}

export default NewArrivalComp
