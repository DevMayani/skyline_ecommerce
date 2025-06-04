import React from 'react'
import Image from 'next/image'
import cart from '../../public/assets/cart.png'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'

const SignIn = () => {
  return (
    <div  className="flex flex-col lg:flex-row p-5 md:p-10">
      <div  className="lg:flex-2">
       <Image src={cart} alt='cart-img' className="w-full h-auto object-cover"
       loading="lazy"  />
      </div>
      <div className="lg:flex-1 px-0 py-10 md:py-20 lg:p-20 flex justify-center items-center w-full">
        <div className="flex flex-col gap-2 md:gap-4 w-full">
        <p className="text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Log in to SKYLINE</p>
       <p className="text-sm md:tetx-lg lg:text-sm">Enter your details below</p>

       <form className="flex flex-col gap-4 md:gap-8 lg:gap-6">
      
       <div className="border-b border-gray-300 py-1">
      <input type="text"
     placeholder='Email or Phone Number' 
     className="text-xs md:text-lg lg:text-sm"/>
    
       </div>
      
       <div className="border-b border-gray-300 py-1">
       <input type="text"
     placeholder='Password' 
     className="text-xs md:text-lg lg:text-sm"/>
     
       </div>
       <div className="flex items-center justify-between">
        <button  className="text-xs md:text-lg lg:text-sm bg-[#8644DB] text-white px-8 rounded py-2 ">Log In</button>
        <Link href={`/signIn`} className="">
        <p className='text-[#8644DB] text-xs md:text-lg lg:text-sm'>Forgot Password?</p>
        </Link>
       </div>
       
      



       </form>
        </div>
       

      </div>
    </div>
  )
}

export default SignIn