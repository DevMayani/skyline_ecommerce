import React from 'react'
import { RxSlash } from 'react-icons/rx'
import Link from 'next/link'
import Image from 'next/image'
import women from '../../public/assets/women.png'
import ceo from '../../public/assets/ben.jpeg'
import cookie from '../../public/assets/cookiefive.jpeg'
import cookieone from '../../public/assets/cookieone.jpeg'
import cookiesix from '../../public/assets/cookiesix.jpeg'
import cookieseven from '../../public/assets/cookieseven.jpeg'
import dollar from '../../public/assets/dollar.jpeg'
import ten from '../../public/assets/ten.jpeg'
import cookiefour from '../../public/assets/cookiefour.jpeg'
import cookietwo from '../../public/assets/cookietwo.jpeg'
import {TiSocialFacebook} from 'react-icons/ti'
import {CiTwitter} from 'react-icons/ci'
import {LiaLinkedinIn} from 'react-icons/lia'
import {AiOutlineSend,AiOutlineInstagram} from 'react-icons/ai'

const AboutUs = () => {
  const details = [
    {
      id:1,
      imageoOne:cookieone,
      imageTwo:ten,
      label:"Active Sellers",
      text:"10.5K",

    },
    {
      id:2,
      imageoOne:cookiesix,
      imageTwo:ten,
      label:"Active Customers",
      text:"44.5K",
    },
    {
      id:3,
      imageoOne:cookieseven,
      imageTwo:ten,
      label:"Annual Gross Sales",
      text:"25K",
    },
  ]
  const services =[
    {
      id:1,
      Image:cookie,
      title:"FREE AND FAST DELIVERY",
      subtext:"Free on all orders above 50k",
    },
    {
      id:2,
      Image:cookie,
      title:"24/7 CUSTOMER SERVICE",
      subtext:"Friendly 24/7 customer support",
    },
    {
      id:3,
      Image:cookie,
      title:"MONEY BACK GUARANTEE",
      subtext:"Refund within 30 days",
    },
  ]


  return (
    <div className="p-5 md:px-16 md:py-10 lg:px-20 lg:py-10">
       <div  className="flex items-center text-xs md:text-lg lg:text-sm">
        <Link href={`/`}  className="">
          <p className='text-gray-400 text-xs md:text-lg lg:text-sm'>Home</p>
        </Link>
        <RxSlash className='text-gray-400' />
          <p>About</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 items-center py-10 lg:py-20">
        <div className="flex-1 space-y-6">
          <p className="font-semibold text-xl md:text-3xl ">Our Story</p>
          <p className="text-xs md:text-lg lg:text-sm lg:w-[90%]">Launced in 2022, Skyline is a Nigerian’s premier online shopping phone and accessories store with an active presense in Abuja. Supported by wide range of tailored marketing, data and service solutions, Skyline has series of customers both retails and wholesales and serves millions of customers across the region.</p>
          <p className="text-xs md:text-lg lg:text-sm lg:w-[90%]">Skyline has more than numerous products to offer, growing at a very fast. Skyline offers a diverse assotment in categories ranging for customers.</p>
        </div>
        <div className="flex-1">
          <Image src={women} priority alt='female-pic'className="" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 p-10 md:px-5 md:py-10 lg:p-20">
  {details.map((datum) => (
    <div
      key={datum.id}
      className="group border border-gray-300 flex flex-col items-center gap-4 p-5 lg:p-10 rounded hover:bg-[#8644DB] transition-colors duration-300"
    >
    
      <Image
        src={datum.imageoOne}
        alt={datum.label}
        className="object-cover w-[80px] h-[80px] rounded-full"
      />
      <p className="text-black text-xl font-bold group-hover:text-white transition-colors duration-300">
        {datum.text}
      </p>

      <p className="text-black text-sm group-hover:text-white transition-colors duration-300">
        {datum.label}
      </p>
    </div>
  ))}
</div>


      {/* <div className="flex flex-col items-center gap-2">
      <Image
  src={ceo}
  priority
  alt="ceo-png"
  className="rounded w-[50%] lg:w-[20%] h-auto object-cover"
/>

        <p className="text-sm md:text-xl lg:text-lg xl:text-xl mt-4 font-medium">Benjamin Arobani</p>
      <p className='text-xs md:text-lg lg:text-sm'>CEO</p>
     
      <div className="flex items-center gap-2 md:gap-4">
      <CiTwitter className="h-5 w-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
      <AiOutlineInstagram className="h-5 w-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
      <LiaLinkedinIn className="h-5 w-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
      </div>
      </div> */}

     <div className="flex flex-col lg:flex-row items-center justify-center py-16 gap-y-6 md:py-20 lg:gap-y-10">
      {
        services.map((items) => (
          <div key={items.id} className=" flex flex-col items-center justify-center gap-2">
          <Image src={items.Image} className="object-cover w-[30%] h-auto" />
          <p className="text-sm md:text-xl lg:text-lg xl:text-base font-bold text-center">{items.title}</p>
          <p className="text-xs md:text-lg lg:text-sm text-center">{items.subtext}</p>
        </div>
        ))
      }
    
      
     </div>

    </div>
  )
}

export default AboutUs