'use client';
import Image from 'next/image';
import Link from 'next/link';
import Ps from '../../public/assets/ps5.svg';

const NewArrivalComp = () => {
  const products = [
    {
      id: 1,
      title: 'PlayStation 5',
      description: 'Black and White version of the PS5 coming out on sale.',
      pics: Ps,
      large: true,
    },
    {
      id: 2,
      title: "Women's Collections",
      description: 'Featured woman collections that give you another vibe.',
      pics: Ps,
    },
    {
      id: 3,
      title: 'Speakers',
      description: 'Amazon wireless speakers',
      pics: Ps,
    },
    {
      id: 4,
      title: 'Perfume',
      description: 'GUCCI INTENSE OUD EDP',
      pics: Ps,
    },
  ];

  return (
    <div className="p-5 md:px-16 md:pb-10 lg:px-20 bg-white">
     
      <div className="flex gap-2 md:gap-4 items-center py-6">
        <div className="border-[#8644DB] border-6 md:border-7 rounded h-[5vh]"></div>
        <p className="text-[#8644DB] text-sm md:text-lg lg:text-sm">
          Featured
        </p>
      </div>

   
      <div className="flex justify-between items-center pb-10">
        <h2 className="text-xl md:text-3xl font-semibold">New Arrival</h2>
      </div>

      
      <div className="flex flex-col gap-4 lg:hidden">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="relative bg-black overflow-hidden h-[300px] w-full"
          >
            <Link href={`/products/${product.id}`} passHref legacyBehavior>
              <a className="block w-full h-full">
                <Image 
                  src={product.pics} 
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority={product.id === 1}
                />
                <div className='absolute bottom-0 left-0 text-white p-5 md:p-6 space-y-2'>
                  <p className='font-medium text-sm md:text-xl lg:text-base'>{product.title}</p>
                  <p className='font-extralight text-xs md:text-[14px] lg:text-sm w-[70%]'>{product.description}</p>
                  <span className='text-xs md:text-[12px] lg:text-sm text-white underline font-light'>Shop Now</span>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>

      {/* Desktop View - Grid Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-4 h-[70vh]">
        {/* Large Left Card */}
        <div className="relative bg-black overflow-hidden h-full">
          <Link href={`/products/${products[0].id}`} passHref legacyBehavior>
            <a className="block w-full h-full">
              <Image 
                src={products[0].pics} 
                alt={products[0].title}
                fill
                className="object-cover"
                priority
              />
              <div className='absolute bottom-0 left-0 text-white p-10 space-y-2'>
                <p className='font-medium text-base'>{products[0].title}</p>
                <p className='font-extralight text-sm w-[70%]'>{products[0].description}</p>
                <span className='text-sm text-white underline font-light'>Shop Now</span>
              </div>
            </a>
          </Link>
        </div>

        {/* Right Column - 3 Cards */}
        <div className="grid grid-rows-2 gap-4 h-full">
          {/* Top Card */}
          <div className="relative bg-black overflow-hidden">
            <Link href={`/products/${products[1].id}`} passHref legacyBehavior>
              <a className="block w-full h-full">
                <Image 
                  src={products[1].pics} 
                  alt={products[1].title}
                  fill
                  className="object-cover"
                />
                <div className='absolute bottom-0 left-0 text-white p-6 space-y-2'>
                  <p className='font-medium text-base'>{products[1].title}</p>
                  <p className='font-extralight text-sm w-[70%]'>{products[1].description}</p>
                  <span className='text-sm text-white underline font-light'>Shop Now</span>
                </div>
              </a>
            </Link>
          </div>

          {/* Bottom 2 Cards */}
          <div className="grid grid-cols-2 gap-4">
            {products.slice(2).map((product) => (
              <div key={product.id} className="relative bg-black overflow-hidden">
                <Link href={`/products/${product.id}`} passHref legacyBehavior>
                  <a className="block w-full h-full">
                    <Image 
                      src={product.pics} 
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    <div className='absolute bottom-0 left-0 text-white p-6 space-y-2'>
                      <p className='font-medium text-base'>{product.title}</p>
                      <p className='font-extralight text-sm w-[70%]'>{product.description}</p>
                      <span className='text-sm text-white underline font-light'>Shop Now</span>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalComp;