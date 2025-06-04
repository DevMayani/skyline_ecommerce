import React from 'react'
import Image from 'next/image'
import cart from '../../public/assets/cart.png'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div  className="flex flex-col lg:flex-row p-5 md:p-10">
      <div  className="lg:flex-2">
       <Image src={cart} alt='cart-img' className="w-full h-auto object-cover"
       loading="lazy"  />
      </div>
      <div className="lg:flex-1 px-0 py-10 md:py-20 lg:p-20">
        <div className="flex flex-col gap-2 md:gap-4">
        <p className="text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Create An Account</p>
       <p className="text-sm md:tetx-lg lg:text-sm">Enter your details below</p>

       <form className="flex flex-col gap-4 md:gap-8 lg:gap-6">
       <div className="border-b border-gray-300 py-1">
     <input type="text"
     placeholder='Name' 
     className="text-xs md:text-lg lg:text-sm"/>
     
       </div>
      
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
       <div className="">
        <button  className="text-xs md:text-lg lg:text-sm bg-[#8644DB] text-white px-4 py-2 md:py-3 w-[100%]">Create Account</button>
       </div>
       <div className="">
        <button className="flex items-center justify-center gap-4 text-xs md:text-lg lg:text-sm bg-transparent text-black border border-gray-300 px-4 py-2 md:py-3 w-[100%]">
          <FcGoogle className="w-6 h-6 " />
          Sign up with Google</button>
       </div>
       <div className="text-xs md:text-lg lg:text-sm flex items-center justify-center gap-2">
        <p className="">Already have account?</p>
        <Link href={`/signIn`} className="">
        <p className='underline'>Log in</p>
        </Link>
       </div>
      



       </form>
        </div>
       

      </div>
    </div>
  )
}

export default SignUp