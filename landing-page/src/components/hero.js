import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io"
import HeroImg from '../../public/assets/black.png'

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
  ]

  return (
    <section className="p-5 md:px-16 md:py-0 lg:px-20 lg:py-0">
    <div className="flex flex-col md:flex-row gap-6 lg:items-stretch">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-[200px] lg:w-[250px] space-y-1 lg:space-y-2 md:border-r border-r-gray-200 md:py-10 ">
        {details.map(item => (
          <button
            key={item.id}
            className="w-full flex items-center justify-between text-sm hover:text-purple-600 transition px-4 py-2"
          >
            {item.label}
            <IoIosArrowForward />
          </button>
        ))}
      </div>
  
      {/* Hero Image Banner */}
      <div className="flex-1 md:py-10 md:px-6">
        <Image
          src={HeroImg}
          alt="carousel-img"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </section>
  
  )
}

export default Hero
