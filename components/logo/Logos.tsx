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
      <div className="flex flex-col mx-3 bg-opacity-60 rounded-lg p-4 w-full shadow-md">
        <div className="w-full draggable">
          <div className="container flex flex-col items-center gap-8 mx-auto my-32">
            <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
              Endorsed by Notable global corporations
            </p>
            <div className="flex flex-col md:flex-row  flex-wrap items-center justify-center w-full gap-8 lg:gap-0 lg:flex-nowrap lg:justify-between">
              <span>
                <Image
                  className="w-full h-full object-contain object-center"
                  src={'/images/logo/jkuates-logo.png'}
                  alt={'partner?.name'}
                  width={200}
                  height={200}
                />
              </span>
              <span>
                <Image
                  className="w-full h-full object-contain object-center"
                  src={'/images/logo/fb-logo-text.png'}
                  alt={'partner?.name'}
                  width={200}
                  height={200}
                />
              </span>
              <span>
                <Image
                  className="h-full object-contain object-center"
                  src={'/images/logo/AEDIBNET-Logos/main-logo.jpg'}
                  alt={'partner?.name'}
                  width={200}
                  height={200}
                />
              </span>
              {/* <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="177"
                  height="45"
                  viewBox="0 0 177 45"
                  fill="none"
                >
                  <path
                    d="M174.225 15.0965C174.225 14.419 173.752 13.9673 172.973 13.9673L171.444 13.9955L171.472 17.4396H172.306V16.2539H172.807L173.53 17.4396H174.503L173.641 16.1128C173.819 16.0123 173.968 15.8649 174.071 15.686C174.173 15.5072 174.227 15.3035 174.225 15.0965ZM172.807 15.5482H172.278V14.673H172.89C173 14.6608 173.111 14.6921 173.199 14.7604C173.287 14.8288 173.346 14.9289 173.363 15.04V15.0683C173.361 15.138 173.344 15.2066 173.314 15.2695C173.285 15.3324 173.242 15.3883 173.19 15.4335C173.137 15.4787 173.076 15.5123 173.01 15.532C172.944 15.5518 172.875 15.5573 172.807 15.5482ZM49.4303 31.0185C48.0119 31.0185 47.0385 29.8893 47.0385 28.2237V20.6297H52.8791V15.2659H47.0524L46.9968 9.11161H40.5443L40.5999 29.607C40.5999 33.7569 43.3255 36.5799 47.3305 36.5799C49.4443 36.5799 51.4468 36.2694 53.0321 35.5354V30.3128C51.9063 30.843 50.6697 31.0854 49.4303 31.0185ZM64.8385 14.9271C58.831 14.9271 54.2141 19.6698 54.2141 25.9652C54.2141 32.2042 58.831 36.5517 65.2 36.5517C68.7879 36.5517 72.1532 35.2531 74.2113 32.5712L69.2607 30.2845C68.2594 31.2161 66.7297 31.5831 65.3669 31.5831C63.1419 31.5831 60.9169 30.4257 60.611 28.0543H75.3794C75.6014 27.207 75.7136 26.3339 75.7132 25.4571C75.7132 18.9923 71.0685 14.9271 64.8524 14.9271H64.8385ZM60.611 23.9044C60.8057 21.0814 62.8082 19.7828 65.0053 19.7828C67.4807 19.7828 69.3441 21.1943 69.3441 23.6221V23.9044H60.611ZM34.4116 31.0185C32.9932 31.0185 32.0197 29.8893 32.0197 28.2237V20.6297H37.8604V15.2659H32.0336L31.978 9.11161H25.5255L25.5811 29.607C25.5811 33.7569 28.3068 36.5799 32.3118 36.5799C34.4255 36.5799 36.428 36.2694 38.0133 35.5354V30.3128C36.8884 30.8456 35.6511 31.088 34.4116 31.0185ZM11.7444 14.9271C6.20973 14.9271 0.396912 18.6253 0.396912 26.0782C0.396912 32.2889 4.51316 36.6364 9.7141 36.6364C12.69 36.6364 14.9429 35.4225 16.4169 33.277L16.6116 36.2694H22.8555V26.3322C22.8555 18.7665 17.3625 14.9271 11.7444 14.9271ZM11.7444 30.9056C8.93535 30.9056 6.90504 28.7883 6.90504 25.7959C6.90504 22.8034 8.90754 20.6861 11.7444 20.6861C14.3588 20.6861 16.5282 23.001 16.5282 25.7959C16.5282 28.5907 14.3588 30.9056 11.7444 30.9056ZM172.668 12.4146C170.637 12.4428 169.33 13.7697 169.358 15.7458C169.386 17.7219 170.721 19.0205 172.751 18.9923C174.726 18.9641 176.061 17.6372 176.033 15.6329C176.005 13.6285 174.67 12.3864 172.668 12.4146ZM172.751 18.4277C171.166 18.4559 170.081 17.3832 170.081 15.7458C170.081 14.1084 171.11 13.0074 172.695 12.9792C174.281 12.951 175.338 14.0237 175.365 15.6893C175.365 17.2985 174.308 18.3995 172.765 18.4277H172.751ZM141.128 15.2941L136.623 28.5625L132.061 15.2941H125.053L133.452 36.2412H139.738L148.137 15.2941H141.128ZM157.843 14.9271C151.836 14.9271 147.219 19.6698 147.219 25.9652C147.219 32.2042 151.836 36.5517 158.205 36.5517C161.793 36.5517 165.158 35.2531 167.216 32.5712L162.266 30.2845C161.264 31.2161 159.735 31.5831 158.372 31.5831C156.147 31.5831 153.922 30.4257 153.616 28.0543H168.384C168.606 27.207 168.719 26.3339 168.718 25.4571C168.718 18.9923 164.073 14.9271 157.843 14.9271ZM162.349 23.9044H153.616C153.811 21.0814 155.813 19.7828 158.01 19.7828C160.486 19.7828 162.349 21.1943 162.349 23.6221V23.9044ZM120.074 6.09094C117.793 6.09094 116.069 7.64363 116.069 9.81738C116.069 11.9911 117.793 13.6003 120.074 13.6003C122.355 13.6003 124.079 12.0194 124.079 9.81738C124.079 7.6154 122.383 6.09094 120.074 6.09094ZM90.7875 14.8989C89.4835 14.8775 88.1962 15.199 87.0509 15.8323C85.9056 16.4655 84.9412 17.3888 84.2516 18.5124L84.0291 15.2941H77.7991V36.2412H84.2516V25.2595C84.3907 22.634 86.4766 20.6297 88.7572 20.6297C91.316 20.6297 92.4841 22.5776 92.4841 25.0336V36.2129H98.9088V24.0173C98.9088 18.71 95.7243 14.8989 90.7875 14.8989ZM110.479 31.0185C109.06 31.0185 108.087 29.8893 108.087 28.2237V20.6297H113.928V15.2659H108.087L108.031 9.11161H101.579L101.634 29.607C101.634 33.7569 104.36 36.5799 108.365 36.5799C110.479 36.5799 112.481 36.2694 114.067 35.5354V30.3128C112.946 30.8433 111.714 31.0857 110.479 31.0185ZM116.82 15.2941V36.2412H123.328V15.2941C122.363 15.9431 121.232 16.2892 120.074 16.2892C118.917 16.2892 117.785 15.9431 116.82 15.2941Z"
                    fill="#1B2559"
                  />
                </svg>
              </span> */}
              <span>
                <Image
                  className="w-full h-full object-contain object-center"
                  src={'/images/logo/taimba-logo.png'}
                  alt={'partner?.name'}
                  width={200}
                  height={200}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 my-5"></div>
    </div>
  );
}

export default PartnershipLogos;
