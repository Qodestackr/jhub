import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const partnershipLogos = [
  {
    name: 'JKUAT Enterprises',
    logo: '/images/logo/jkuates-logo.png',
    description: '',
    link: 'https://jkuates.co.ke/index.php/'
    // description: `A trailblazer in industry innovation, JKUAT Enterprises pioneers the creation and
    // global commercialization of cutting-edge, research-based solutions. From product innovation to
    // emerging technologies, training, and consultancy, we push boundaries to shape the future, contributing
    // significantly to various industries.`
  },
  {
    name: 'FundingBox',
    logo: '/images/logo/fb-logo-text.png',
    link: 'https://fundingbox.com/',
    description: ''
    // description: `At FundingBox, we're not just fostering growth; We are #FundingChampions in every corner of our dynamic ecosystem.
    // Join the ranks of #FundingChampions with FundingBox, where growth meets opportunity. Elevate your trajectory and redefine your future
    // with accessible funding opportunities, exclusive partnerships with global brands.`
  },
  {
    name: 'AEDIB | NET',
    logo: '/images/logo/AEDIBNET-Logos/main-logo.jpg',
    link: 'https://aedibnet.eu/',
    description: ''
    // description: `AEDIB|NET aims to fortify a shared African-European digital innovation ecosystem, supporting local digital
    // innovation and start-up ecosystems in Africa. AEDIB|NET mission includes facilitating collaboration between European and African DIHs,
    // contributing to the growth and advancement of digital initiatives that build and prepare new ventures emerging on the continents.`
  },
  {
    name: 'TAIMBA',
    logo: '/images/logo/taimba-logo.png',
    link: 'https://taimba.co.ke/',
    description: ''
    // description: `Taimba is dedicated to establishing enduring and impactful relationships between farmers and retailers. We realize this
    // vision through an innovative mobile-based cashless business-to-business platform connecting farmers directly to retailers. Our approach
    // revolutionizes the agricultural supply chain, fostering efficiency and sustainability in the farming industry.`
  }
];

function PartnershipLogos() {
  return (
    <div className="w-full container mx-auto">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-8">
        <h1 className="xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">
          Notable Partnerships
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
          Explore the impactful collaborations between Jomo Kenyatta University
          of Agriculture (JKUAT) and its consortium partners. Together, we are
          dedicated to creating a Digital Innovation Hub (DIH) that supports
          smallholder farmers and Micro and Small Enterprises (MSEs) with
          climate-smart agriculture, healthcare, and cutting-edge tech
          solutions.
        </p>
      </div>
      <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-8 flex justify-start items-center flex-wrap">
        {partnershipLogos.map((partner, i) => (
          <div
            key={i}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8 flex items-center justify-center"
          >
            <Link href={partner?.link}>
              <div className="bg-white border border-gray-200 dark:bg-boxdark-2 dark:text-bodydark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <Image
                  className="w-full h-32 object-contain object-center"
                  src={partner?.logo}
                  alt={partner?.name}
                  width={200}
                  height={200}
                />
                {/* <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {partner?.name}
                </h2>
                <p className="text-gray-600 text-sm">{partner?.description}</p>
              </div> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnershipLogos;
