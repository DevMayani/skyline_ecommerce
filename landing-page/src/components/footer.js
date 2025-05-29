
import Image from 'next/image'
import {AiOutlineSend,AiOutlineInstagram} from 'react-icons/ai'
import {TiSocialFacebook} from 'react-icons/ti'
import {CiTwitter} from 'react-icons/ci'
import {LiaLinkedinIn} from 'react-icons/lia'
import Link from 'next/link'




const Footer = () => {
 
    return(
        <div className="bg-black text-white text-xs md:text-lg lg:text-sm grid md:grid-cols-2 lg:grid-cols-4 p-5 md:px-16 md:py-8 lg:px-20 lg:py-6 gap-y-4 gap-x-8">
       <div className="flex flex-col gap-2">
       <p className="text-white font-extrabold text-sm md:text-xl lg:text-base xl:text-lg animate-bounce">
  Skyline
</p>
        <p className="text-xs md:text-lg lg:text-sm">Subscribe</p>
        <div className="text-xs md:text-lg lg:text-sm flex flex-col gap-1 md:gap-2">
        <p className='text-xs md:text-lg lg:text-sm'>Get 10% off your first order</p>
        <div className="flex gap-2 items-center border border-white px-2 py-1 w-[50%] md:w-[65%] lg:w-[90%] xl:w-[60%]">
        <input type="text" 
        placeholder='Enter your email' 
        className="text-xs md:text-lg lg:text-sm outline-none w-[90%] lg:w-[70%] xl:w-[80%] "/>
        <AiOutlineSend className="w-3 h-3 md:w-5 md:h-5 lg:w-3 lg:h-3"/>
        </div>
       
        </div>
       
       </div>
       <div className="flex flex-col gap-2">
        <p className="text-sm md:text-xl lg:text-base xl:text-lg">Support</p>
        <div className="text-xs md:text-lg lg:text-sm flex flex-col gap-1 md:gap-2">
  <p>
    <a 
      href="https://www.google.com/maps?q=Suite+11+Zee+mall,News+Engineering,Dawaki" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-white hover:underline hover:text-[#8644DB]"
    >
      Suite 11 Zee mall, News Engineering, Dawaki
    </a>
  </p>
  <p>
    <a href="mailto:skylinetech@gmail.com" className="text-white hover:underline hover:text-[#8644DB]">
      skylinetech@gmail.com
    </a>
  </p>
  <p>
    <a href="tel:+2349162828400" className="text-white hover:underline hover:text-[#8644DB]">
      +234-916-282-8400
    </a>
  </p>
</div>

       </div>
       <div className="flex flex-col gap-2">
        <p className="text-sm md:text-xl lg:text-base xl:text-lg">Account</p>
        <div className="flex flex-col gap-1 md:gap-2">
       <p  className='hover:text-[#8644DB]'>My Account</p>
       <Link href={`/signup`}className="">
        <p className='hover:text-[#8644DB]'>Login / Register</p>
        </Link>
        <p  className='hover:text-[#8644DB]'>Cart</p>
        <p className='hover:text-[#8644DB]'>Wishlist</p>
        <p  className='hover:text-[#8644DB]'>Shop</p>
       </div>
       </div>
       <div className="flex flex-col gap-2">
        <p className="text-sm md:text-xl lg:text-base xl:text-lg">Quick Link</p>
        <div className="flex flex-col gap-1 md:gap-2">
        <p  className='hover:text-[#8644DB]'>Privacy Policy</p>
        <p  className='hover:text-[#8644DB]'>Terms Of Use</p>
        <p  className='hover:text-[#8644DB]'>FAQ</p>
        <Link href={`/contactus`} className="">
        <p  className='hover:text-[#8644DB]'>Contact</p>
        </Link>
        </div>
       </div>
       {/* <div className="">
        <p className="">Download App</p>
        <div className="">
            <p className="">Save $3 with App New User Only</p>
            <div className="">
                <div className="">
                    <div className="">
                    <Image src={Bar} alt='bar-img'  className="" />
                    </div>
                   
                    <div className="">
                    <Image src={Googleplay} alt='google-img' className=""/>
                    <Image src={Appstore} alt='bar-img'   className=""/>
                    </div>
                </div>
                <div className="">
                    <TiSocialFacebook className=""/>
                    <CiTwitter className="" />
                    <AiOutlineInstagram className="" />
                    <LiaLinkedinIn className="" />
                </div>
            </div>
        </div>
       </div> */}

        </div>
    )
}
export default Footer;