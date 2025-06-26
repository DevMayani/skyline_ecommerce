import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import TopTenOffer from "./Herosection/toptenOffer";
import BestSeller from "./Herosection/bestSeller";
import NewArrivals from "./Herosection/MobilePhones";
import Accessories from "./Herosection/accessories";
import MobilePhones from "./Herosection/MobilePhones";
import SmartWatches from "./Herosection/smartWatches";
import VideoGames from "./Herosection/videoGames";
import LaptopsComp from "./Herosection/laptopComp";
import SwapDeals from "./Herosection/swapDeals";


const componentMap = {
  1: <TopTenOffer />,
  2: <BestSeller />,
  3: <Accessories />,
 4: <MobilePhones />,
 5: <SmartWatches />,
 6: <VideoGames />,
 7: <LaptopsComp />,
 8: <SwapDeals />

};

const Hero = () => {
  const details = [
    { id: 1, label: "Top 10 Offers" },
    { id: 2, label: "Best Sellers" },
    { id: 3, label: "Accessories" },
    { id: 4, label: "Mobile Phones" },
    { id: 5, label: "Smartwatches" },
    { id: 6, label: "Video Games" },
    { id: 7, label: "Laptops" },
    { id: 8, label: " Swap Deals" },
   
    
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="p-5 md:px-16 md:py-0 lg:px-20 lg:py-0">
      <div className="flex flex-col md:flex-row gap-6 lg:items-stretch">
        {/* Sidebar */}
        <div className="w-full md:w-[200px] lg:w-[250px] space-y-1 lg:space-y-3 md:border-r border-r-gray-200 md:py-10">
          {details.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between text-sm hover:text-purple-400 transition px-4 py-2 ${
                activeTab === item.id ? "text-purple-600 font-semibold" : ""
              }`}
            >
              {item.label}
              <IoIosArrowForward />
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="pt-10 w-full ">
          <div className="">
            {componentMap[activeTab] || (
              <div>
                <h2 className="text-xl text-white font-semibold">Coming Soon</h2>
                <p className="text-sm text-white">No content available yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
