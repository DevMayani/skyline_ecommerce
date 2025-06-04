import React from "react";
import Link from "next/link";
import { RxSlash } from "react-icons/rx";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

const contactUs = () => {
  return (
    <div className="p-5 md:px-16 md:py-10 lg:px-20 lg:py-16">
      <div className="flex items-center text-xs md:text-lg lg:text-sm">
        <Link href={`/`} className="">
          <p className="text-gray-400 text-xs md:text-lg lg:text-sm">Home</p>
        </Link>
        <RxSlash className="text-gray-400" />
        <p>Contact</p>
      </div>
      <div className="py-10 lg:py-20 flex flex-col lg:flex-row gap-6">
        <div className="lg:flex-1 shadow-2xl p-5 lg:p-10 space-y-4">
          <div className="space-y-2">
            <div className="space-y-2">
              <div className="bg-[#8644DB] h-8 w-8 md:w-10 md:h-10 lg:h-8 lg:w-8 rounded-full flex items-center justify-center">
                <IoCallOutline
                  color="white"
                  className="h-4 w-4 md:w-6 md:h-6 lg:h-4 lg:w-4"
                />
              </div>
              <p className="text-sm md:text-xl lg:text-base xl:text-base font-medium">
                Call Us
              </p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <p className="text-xs md:text-lg lg:text-sm">
                We are available 24/7, 7 days a week.
              </p>
              <a
                href="tel:+2349162828400"
                className="text-xs md:text-lg lg:text-sm hover:underline"
              >
                Phone: +2349162828400
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <div className="space-y-2">
              <div className="bg-[#8644DB] h-8 w-8 md:w-10 md:h-10 lg:h-8 lg:w-8 rounded-full flex items-center justify-center">
                <AiOutlineMail
                  color="white"
                  className="h-4 w-4 md:w-6 md:h-6 lg:h-4 lg:w-4"
                />
              </div>
              <p className="text-sm md:text-xl lg:text-base xl:text-base font-medium">
                Write US
              </p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <p className="text-xs md:text-lg lg:text-sm">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p>
              <a
                href="mailto:customer@skyline.com"
                className="text-xs md:text-lg lg:text-sm  hover:underline"
              >
                Email: customer@skyline.com
              </a>
              </p>
              <p>
              <a
                href="mailto:support@skyline.com"
                className="text-xs md:text-lg lg:text-sm hover:underline"
              >
                Email: support@skyline.com
              </a>
              </p>
             
            </div>
          </div>
        </div>
        <div className="lg:flex-2 xl:flex-3 shadow-2xl p-5 lg:p-10 ">
          <form action="" className="flex flex-col gap-4">
            <div className="grid md:grid-cols-3 gap-4 text-gray-500">
              <input
                type="text"
                placeholder="Your Name*"
                className="bg-[#F5F5F5] outline-none px-2 py-2 text-xs md:text-lg lg:text-sm"
              />
              <input
                type="text"
                placeholder="Your Email*"
                className="bg-[#F5F5F5] outline-none px-2 py-2 text-xs md:text-lg lg:text-sm"
              />
              <input
                type="text"
                placeholder="Your Phone*"
                className="bg-[#F5F5F5] outline-none px-2 py-2 text-xs md:text-lg lg:text-sm w-full"
              />
            </div>
            <div>
              <textarea
                value="Your Message"
                name="Your Message"
                rows="10"
                className="bg-[#F5F5F5] outline-none text-xs md:text-lg lg:text-sm w-full px-2 py-2 text-gray-500"
              />
            </div>

            <div className="flex justify-end items-center">
              <button className="text-xs md:text-lg lg:text-sm bg-[#8644DB] text-white px-4 py-2 rounded">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contactUs;
