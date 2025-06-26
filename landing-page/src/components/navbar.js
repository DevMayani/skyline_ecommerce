"use client"
import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { IoIosMenu } from 'react-icons/io';
import Link from 'next/link';
import { BiLogOutCircle } from 'react-icons/bi';
import { IoMdClose } from "react-icons/io"
import { FiUser } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import Image from 'next/image';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuContent, setShowMenuContent] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowMenuContent(!showMenuContent);
  }

  return (
    <div className="md:px-16 md:py-8 lg:px-20 lg:py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between border-b-1 border-b-gray-200 relative">
      <div className="flex items-center justify-between px-5 pt-5 pb-2 md:p-0">
        <Link href={`/`}>
          <p className="text-black font-extrabold text-xl md:text-4xl lg:text-xl xl:text-2xl hover:text-[#8644DB] animate-bounce">
            Skyline
          </p>
        </Link>

        <button onClick={handleMenuClick} className='block lg:hidden'>
          {showMenuContent ? (
            <IoMdClose className="w-7 h-7 md:h-12 md:w-12 transition duration-200" />
          ) : (
            <IoIosMenu className="w-7 h-7 md:h-12 md:w-12 transition duration-200 animate-bounce" />
          )}
        </button>
      </div>

      <ul className="hidden lg:flex items-center gap-[48px] lg:text-base font-normal">
        <li className="hover:text-[#8644DB] text-xs md:text-xl lg:text-sm xl:text-base">
          <Link href={`/`}>Home</Link>
        </li>
        <li className="hover:text-[#8644DB] text-xs md:text-xl lg:text-sm xl:text-base">
          <Link href={`/contactUs`}>Contact</Link>
        </li>
        <li className="hover:text-[#8644DB] text-xs md:text-xl lg:text-sm xl:text-base">
          <Link href={`/aboutUs`}>About</Link>
        </li>
        <li className="hover-text-[#8644DB] text-xs md:text-xl lg:text-sm xl:text-base">
          <Link href={`/signUp`}>Sign Up</Link>
        </li>
      </ul>

      <div className="flex items-center gap-4 px-5 pb-3 md:p-0">
        <div className="flex items-center justify-between gap-4 bg-[#F5F5F5] py-2 px-4 lg:px-4 w-[100%]">
          <input 
            type="text" 
            placeholder='what are you looking for?'
            className="w-[100%] text-xs md:text-lg lg:text-sm outline-none" 
          />
          <AiOutlineSearch className="h-5 w-5 md:h-8 md:w-8 lg:w-6 lg:h-6" />
        </div>
        
        <div className="flex items-center gap-3">
          <AiOutlineHeart className="h-5 w-5 md:h-8 md:w-8 lg:w-6 lg:h-6 hover:text-[#8644DB]" />
          <AiOutlineShoppingCart className="h-5 w-5 md:h-8 md:w-8 lg:w-6 lg:h-6 hover:text-[#8644DB]" />
          
          {/* User icon with dropdown */}
          <div className="relative">
            <div className="group">
              <div className="h-8 w-8 md:w-10 md:h-10 lg:w-8 lg:h-8 flex items-center justify-center rounded-full group-hover:bg-[#8644DB] transition-colors duration-300">
                <FiUser 
                  onClick={toggleDropdown}
                  className="h-5 w-5 md:h-8 md:w-8 lg:w-6 lg:h-6 text-gray-700 group-hover:text-white transition-colors duration-300 cursor-pointer" 
                />
              </div>
            </div>
            
            {/* Dropdown menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md z-50 overflow-hidden">
              <div 
                className="py-1 bg-[#555255] backdrop-blur-[150px]"
                style={{ backdropFilter: 'blur(150px)' }}
              >
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-[#8644DB]"
                  >
                  <Image src="/assets/user.svg" 
                  width={100}
                  height={100}
                  className='w-[10%]' alt='icon'/>
                    <span className='text-xs md:text-lg lg:text-sm'>Manage My Account</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-[#8644DB]"
                  >
                  <Image src="/assets/dropone.svg" 
                  width={100}
                  height={100}
                  className='w-[8%]' alt='icon'/>
                    <span className='text-xs md:text-lg lg:text-sm' >My Order</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-[#8644DB]"
                  >
                  <Image src="/assets/cancel.svg" 
                  width={100}
                  height={100}
                  className='w-[9%]' alt='icon'/>
                    <span className='text-xs md:text-lg lg:text-sm'>My Cancellation</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-[#8644DB]"
                  >
                  <Image src="/assets/review.svg" 
                  width={100}
                  height={100}
                  className='w-[10%]' alt='icon'/>
                    <span className='text-xs md:text-lg lg:text-sm'>My Reviews</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-[#8644DB]"
                  >
                  <Image src="/assets/logout.svg" 
                  width={100}
                  height={100}
                  className='w-[10%]' alt='icon'/>
                    <span className='text-xs md:text-lg lg:text-sm'>Logout</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showMenuContent && (
        <div className="bg-[#F5F5F5] w-full p-4 animate-fade-slide lg:hidden">
          <ul className="text-sm gap-y-3 flex flex-col">
            <li className="hover:text-[#8644DB] text-xs md:text-xl lg:text-sm xl:text-base">
              <Link href={`/`}>Home</Link>
            </li>
            <li className="hover:text-[#8644DB] text-xs md:text-xl lg:text-sm xl:text-base">
              <Link href={`/contactUs`}>Contact</Link>
            </li>
            <li className="hover:text-[#8644DB] text-xs md:text-xl lg:text-sm xl:text-base">
              <Link href={`/aboutUs`}>About</Link>
            </li>
            <li className="hover:text-[#8644DB] text-xs md:text-xl lg:text-sm xl:text-base">
              <Link href={`/signUp`}>Sign Up</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default NavBar;