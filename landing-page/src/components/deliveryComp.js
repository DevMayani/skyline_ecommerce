import React from 'react'
import cookie from '../../public/assets/cookiefive.jpeg'
import cookieone from '../../public/assets/cookieone.jpeg'
import cookiefour from '../../public/assets/cookiefour.jpeg'
import cookietwo from '../../public/assets/cookietwo.jpeg'
import Image from 'next/image'

const DeliveryComp = () => {
  const services =[
    {
      id:1,
      Image:cookie,
      title:"FREE AND FAST DELIVERY",
      subtext:"Free on all orders above 50k",
    },
    {
      id:2,
      Image:cookiefour,
      title:"24/7 CUSTOMER SERVICE",
      subtext:"Friendly 24/7 customer support",
    },
    {
      id:3,
      Image:cookietwo,
      title:"MONEY BACK GUARANTEE",
      subtext:"Refund within 30 days",
    },
  ]

  return (
    <div className="p-5 md:px-16 lg:px-20 ">
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

export default DeliveryComp
