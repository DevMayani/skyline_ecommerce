"use client"
import React, { useState, useEffect } from 'react';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Image from 'next/image';
import Phone from '/public/assets/Category-phone.svg';
import Computer from '/public/assets/Category-comp.svg';
import Smartwatch from '/public/assets/Category-smartwatch.svg';
import Camera from '/public/assets/Category-camera.svg';
import Headphone from '/public/assets/Category-headphone.svg';
import Game from '/public/assets/Category-game.svg';

const CategoryComp = () => {
  const details = [
    { id: 1, imageOne: Phone },
    { id: 2, imageOne: Computer },
    { id: 3, imageOne: Smartwatch },
    { id: 4, imageOne: Camera },
    { id: 5, imageOne: Headphone },
    { id: 6, imageOne: Game },
  ];


 

  return (
    <div className="p-5 md:px-16 md:py-10 lg:px-20 lg:py-10">
      <div className="flex gap-2 md:gap-4 items-center py-6">
      <div className="border-[#8644DB] border-6 md:border-7 rounded h-[5vh] "></div>
        <p className="text-[#8644DB] text-sm md:text-lg lg:text-sm">Categories</p>
      </div>

      <div className="flex justify-between items-center pb-10">
        <div className="">
          <h2 className="text-xl md:text-3xl font-semibold">Browse By Category</h2>
        </div>

        <div className="flex justify-between items-center gap-4">
            <button className="bg-[#F5F5F5] rounded-full p-1">
              <IoIosArrowRoundBack className="w-6 h-6 md:w-8 md:h-8 lg:h-6 lg:w-6" />
            </button>
            <button   className="bg-[#F5F5F5] rounded-full p-1">
              <IoIosArrowRoundForward className="w-6 h-6 md:w-8 md:h-8 lg:h-6 lg:w-6" />
            </button>
          </div>
      </div>

      <div className="" style={{ display: 'flex', overflow: 'hidden' }}>
        <div
          className=""
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease',
          }}
        >
          {details.map((item) => (
            <div
            className='hover:bg-[#8644DB] hover:text-white'
              key={item.id}
              style={{
                flex: '0 0 auto',
                margin: '0 5px',
                display: 'flex',
                justifyContent: 'center', // Center the image in its container
              }}
            >
              <Image
                src={item.imageOne}
                alt='categories-images'
                style={{
                  objectFit: "contain",
                  height: "150px",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryComp;
