import Image from 'next/image';
import React from 'react';
 
export const partnershipLogos = [
  {
    name: 'PARTNER1',
    logo: '/images/logo/jhub-logo.png'
  },
  {
    name: 'PARTNER2',
    logo: '/images/logo/jkuat-logo-160x160.jpg'
  },
  {
    name: 'PARTNER3',
    logo: '/images/logo/jkuat-logo-160x160.jpg'
  },
  {
    name: 'PARTNER4',
    logo: '/images/logo/taimba-logo.png'
  },
  {
    name: 'PARTNER5',
    logo: '/images/logo/taimba-logo.png'
  }
];

function PartnershipLogos() {
  return (
    <div className="container mx-auto pt-16">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">
          Notable Partners we Work With.
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
          A consortium between Jomo Kenyatta University of Agriculture (JKUAT) &
          other partners. The Consortium is formed by JKUAT and partners,
          established through an agreement to create a DIH to support
          Smallholder farmers and MSEs with climate smart agriculture, health,
          and other tech/smart solutions.
        </p>
      </div>
      <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex justify-start items-center flex-wrap">
        {/* xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200  */}
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center">
          {partnershipLogos.map((partner, i) => (
            // <Image key={i} src="" alt="Logo 123" width={200} height={300} />
            <Image
              key={i}
              className="w-full rounded-xl"
              src={partner?.logo}
              alt={partner?.name}
              layout="responsive"
              width={900}
              height={700}
              style={{
                margin: '0 10px'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnershipLogos;
