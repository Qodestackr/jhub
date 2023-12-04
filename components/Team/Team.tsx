import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter
} from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';

function Team() {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark ">
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg dark:bg-boxdark-2 dark:text-bodydark text-center font-normal pb-3">
            Beyond the Ordinary | Meet the team
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            Our people are the heart and soul of our success
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md border border-gray-200 dark:bg-boxdark-2 dark:text-bodydark bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src={`/images/team/dr-lawrence-nderu.png`}
                      alt="dr lawarence nderu avatar"
                      className="rounded-full object-cover h-full w-full shadow-md"
                      width={200}
                      height={300}
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Dr. Lawrence Nderu(PhD.)
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Project Lead.
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Project Lead with extensive experience as Chairman,
                    Lecturer, and Researcher in AI/ML and Software Engineering.
                    A Digital Ecosystem Builder and Founder of JKIAN Hub,
                    serving as a Digital Africa Connector.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://www.linkedin.com/in/dr-lawrence-nderu/?originalSubdomain=ke"
                      className="mx-5"
                    >
                      <div>
                        <IconBrandTwitter />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandFacebook />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandLinkedin />
                      </div>
                    </a>
                    {/* <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandInstagram />
                      </div>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md border border-gray-200 dark:bg-boxdark-2 dark:text-bodydark bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src={`/images/team/cate.jpg`}
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                      width={200}
                      height={300}
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Catherine Muraga
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Managing Director, Microsoft ADC
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Catherine is a purpose-driven tech executive, currently the
                    Managing Director at Microsoft ADC. She leads a team
                    creating impactful products and services globally, with a
                    focus on STEM education in Africa.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://www.linkedin.com/in/dr-lawrence-nderu/?originalSubdomain=ke"
                      className="mx-5"
                    >
                      <div>
                        <IconBrandTwitter />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandFacebook />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandLinkedin />
                      </div>
                    </a>
                    {/* <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandInstagram />
                      </div>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md border border-gray-200 dark:bg-boxdark-2 dark:text-bodydark bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src={`/images/team/rehema-ndenda.jpeg`}
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                      width={200}
                      height={300}
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Dr Rehema Ndeda
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Climate Smart Agriculture/ Automation Lead/JKUAT
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Mechatronics Engineer with a specialization on automation,
                    currently focusing on development and testing of
                    technologies related to precision agriculture
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://www.linkedin.com/in/dr-lawrence-nderu/?originalSubdomain=ke"
                      className="mx-5"
                    >
                      <div>
                        <IconBrandTwitter />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandFacebook />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandLinkedin />
                      </div>
                    </a>
                    {/* <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandInstagram />
                      </div>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md border border-gray-200 dark:bg-boxdark-2 dark:text-bodydark bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src="/images/team/dr-mwangi-karanja.jpeg"
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                      width={200}
                      height={300}
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Dr Mwangi Karanja
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Innovative Technology and Data Science Lead
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    An Innovative technology diffusion expert with a background
                    in computing, research and innovation management. Have
                    trained Small scale entrepreneurs on data management and
                    research-driven approaches to growth
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://www.linkedin.com/in/dr-lawrence-nderu/?originalSubdomain=ke"
                      className="mx-5"
                    >
                      <div>
                        <IconBrandTwitter />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandFacebook />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandLinkedin />
                      </div>
                    </a>
                    {/* <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandInstagram />
                      </div>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md border border-gray-200 bg-white dark:bg-boxdark-2 dark:text-bodydark">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src={`/images/team/william-muriithi.jpeg`}
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                      width={200}
                      height={300}
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Dr William Murithi
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    DIH Business Development/ Strategy Lead
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    An expert in business model innovation, digital
                    entrepreneurship & innovation and design thinking. Founder
                    and Lead consultant at EMBC, a premier management consulting
                    firm that offers bespoke and integrated solutions for
                    enterprises.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://www.linkedin.com/in/dr-lawrence-nderu/?originalSubdomain=ke"
                      className="mx-5"
                    >
                      <div>
                        <IconBrandTwitter />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandFacebook />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandLinkedin />
                      </div>
                    </a>
                    {/* <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandInstagram />
                      </div>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md border border-gray-200 dark:bg-boxdark-2 dark:text-bodydark bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src={``}
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                      width={200}
                      height={300}
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Ms. Daisy Ondwari
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Product Development Fellow
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Ms. Daisy Ondwari, as a Product Development Fellow, serves
                    as the voice of the customer. Her role extends beyond user
                    interface experience, questioning and shaping products to
                    align with user needs.
                  </p>
                  {/*  */}
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://www.linkedin.com/in/dr-lawrence-nderu/?originalSubdomain=ke"
                      className="mx-5"
                    >
                      <div>
                        <IconBrandTwitter />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandFacebook />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandLinkedin />
                      </div>
                    </a>
                    {/* <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandInstagram />
                      </div>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
