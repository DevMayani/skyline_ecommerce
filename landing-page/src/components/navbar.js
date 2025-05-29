"use client"
import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { IoIosMenu } from 'react-icons/io';
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";
import { BiLogOutCircle } from 'react-icons/bi';
import { IoMdClose } from "react-icons/io"

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuContent, setShowMenuContent] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowMenuContent(!showMenuContent);
  }

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className=" md:px-16 md:py-8 lg:px-20 lg:py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between border-b-1 border-b-gray-200 ">
      <div className="flex items-center justify-between px-5 pt-5 pb-2 md:p-0">
       <p className="text-black font-extrabold text-xl md:text-4xl lg:text-xl xl:text-2xl hover:text-[#8644DB] animate-bounce">
  Skyline
</p>

        <button onClick={handleMenuClick} className='block lg:hidden'>
        {showMenuContent ? (
    <IoMdClose className="w-7 h-7 md:h-12 md:w-12 transition duration-200" />
  ) : (
    <IoIosMenu className="w-7 h-7 md:h-12 md:w-12 transition duration-200 animate-bounce" />
  )}
        
        </button>
      </div>

      
        <ul className="hidden lg:flex items-center gap-[48px] lg:text-base font-normal ">
          <li className="hover:text-[#8644DB]">
            <Link href={`/`} className="">Home</Link>
          </li>
          <li className="hover:text-[#8644DB]">
            <Link href={`/contactus`} className="">Contact</Link>
          </li>
          <li className="hover:text-[#8644DB]">
            <Link href={`/aboutus`} className="">About</Link>
          </li>
          <li className="hover:text-[#8644DB]">
            <Link href={`/signUp`} className="">Sign Up</Link>
          </li>
        </ul>
     

      <div className="flex items-center gap-4 px-5 pb-3 md:p-0">
        <div className="flex items-center  justify-between gap-4 bg-[#F5F5F5] py-2 px-4 lg:px-8 w-[100%]">
          <input type="text" placeholder='what are you looking for?'className="w-[100%] text-xs md:text-xl lg:text-sm outline-none" />
          <AiOutlineSearch className="h-5 w-5 md:h-8 md:w-8 lg:w-6 lg:h-6" />
        </div>
      <div className='block '>
      <div className="flex items-center gap-3 ">
          <AiOutlineHeart  className="h-5 w-5 md:h-8 md:w-8 lg:w-6 lg:h-6 hover:text-[#8644DB]" />
          <AiOutlineShoppingCart className="h-5 w-5 md:h-8 md:w-8 lg:w-6 lg:h-6 hover:text-[#8644DB]" />
          {/* <div style={{ position: 'relative' }}>
            <AiOutlineUser className="h-5 w-5 md:h-8 md:w-8" onClick={handleDropdownClick} />
            {isDropdownOpen && (
              <div 
                className="py-2" 
                role="menu" 
                aria-orientation="vertical" 
                aria-labelledby="dropdown-menu-button"
                style={{
                  backgroundColor: '#0000000A', 
                  border: '1px solid #ddd',
                  position: 'absolute', 
                  top: '100%', 
                  right: 0,
                  width: '200px',  // Set a fixed width to match the user icon's width (can be adjusted if needed)
                  zIndex: 1000
                }}
              >
                <a href="#" style={{color:'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', padding: '10px' }} role="menuitem">
                  <FaUserCircle />
                  <p className="text-sm md:text-large xl:text-large">Admin</p>
                </a>
                <a href="#" style={{color:'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', padding: '10px' }} role="menuitem">
                  <BiLogOutCircle />
                  <p>Logout</p>
                </a>
              </div>
            )}
          </div> */}
        </div>
      </div>
      </div>

      {showMenuContent && (
        <div className="bg-[#F5F5F5] w-full p-4 animate-fade-slide">
          <ul className="text-sm gap-y-3 flex flex-col">
            <li className="hover:text-[#8644DB]">
              <Link href={`/`} className="">Home</Link>
            </li>
            <li className="hover:text-[#8644DB]">
              <Link href={`/contactus`} className="">Contact</Link>
            </li>
            <li className="hover:text-[#8644DB]">
              <Link href={`/aboutus`} className="">About</Link>
            </li>
            <li className="hover:text-[#8644DB]">
              <Link href={`/signup`} className="">Sign Up</Link>
            </li>
          </ul>
        </div>
      )}

     

     
    </div>
  )
}

export default NavBar;
