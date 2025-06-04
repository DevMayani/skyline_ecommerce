import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import errorimg from '../../public/assets/error.png'
import { RxSlash } from 'react-icons/rx'

export default function Custom500() {
  return (
    <div className="h-full p-10 md:p-20">
         <div  className="flex items-center text-xs md:text-lg lg:text-sm">
        <Link href={`/`}  className="">
          <p className='text-gray-400 text-xs md:text-lg lg:text-sm'>Home</p>
        </Link>
        <RxSlash className='text-gray-400'/>
          <p>Server Error</p>
      </div>
      <div  className="flex flex-col items-center justify-center gap-10 h-[70vh]">
      <h1 className='font-semibold text-4xl md:text-6xl lg:text-7xl xl:text-8xl'>500 Not Found</h1>
      <p  className="text-xs md:text-lg lg:text-sm text-center">Your visited page not found. You may go home page.</p>
      <Link href={`/`}>
        <button className="bg-[#8644DB] text-white px-8 py-2 rounded text-xs md:text-lg lg:text-sm ">Back to homepage</button>
        </Link>
      </div>
    
    </div>
  )
}
