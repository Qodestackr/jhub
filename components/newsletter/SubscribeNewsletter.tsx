import React from 'react';
import Image from 'next/image';

export default function SubscribeNewsletter() {
  return (
    <>
      <div className="bg-[#0e2557] text-white p-6 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
        {/* <div className="xl:w-1/2 xl:mb-0 relative h-auto flex items-center justify-center">
          <Image
            src={'/images/logo/jhub-logo1.png'} 
            alt="Envelope with a newsletter"
            role="img"
            className="h-full xl:w-full lg:w-1/2 w-full "
            width={200}
            height={300}
          />
          JHUB Logo
        </div> */}
        <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">
            Subscribe
          </h1>
          <p className="text-base leading-normal text-gray-600 text-center xl:text-left">
            Subscribe to JHUB Newsletter.
          </p>
          <div className="flex items-stretch mt-12">
            <input
              className="bg-gray-100 text-black-2 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
              type="email"
              placeholder="Your Email"
            />
            <button className="w-32 rounded-l-none hover:bg-success bg-success rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
