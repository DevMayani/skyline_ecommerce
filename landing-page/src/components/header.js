
import {IoIosArrowDown} from 'react-icons/io'
import Link from 'next/link';


const Header = () => {
    return(
        <div className="hidden lg:block bg-black text-white text-xs md:text-lg lg:text-sm py-5 px-28 ">
            <div className="flex justify-between items-center ">
            <div></div>
                <div className="  flex justify-center items-center gap-4">
                <p>Summer Sale For All Phone and Accessories And Free Express Delivery - OFF 50%!</p>
                <Link href={`/`} className="">
                <p>ShopNow</p>
                </Link>
              
                </div>

                <div className=' flex justify-center items-center '>
                <button className="flex justify-center items-center gap-2">English
                <IoIosArrowDown />
                </button>
                </div>
              
                
            </div>
        </div>
    )
}

export default Header;