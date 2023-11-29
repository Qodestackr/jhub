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
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            BUILDING TEAM | JHUB
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src={`/images/dr-lawrence-nderu.png`}
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
                    An Experienced Chairman, Lecturer, and Researcher in AI/ML,
                    Software Engineering. Digital Ecosystem Builder | Founder of
                    JKIAN Hub | Digital Africa Connector
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
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandInstagram />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src=""
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
                    A Seasoned, purpose-driven tech executive with a passion to
                    apply technology to create business outcomes or impact lives
                    positively. Currently the Managing Director of Microsoft,
                    Africa Development Centre (ADC) and the Engineering Director
                    in Identity and Network Access group. Catherine leads a team
                    that buils products and services used by millions of
                    customers across the world and impacting the STEM ecosystem
                    (Universities and High Schools) in Africa and beyond.
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
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandInstagram />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src=""
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
                    Automation Lead
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    An Automation Lead that brings ...assessment and repair of
                    property damage caused by water, fire, smoke, or mold. We
                    can also be a part of the restoration.
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
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandInstagram />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src=""
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
                    An avid Innovative Technology and Data Science Lead who
                    loves to be creative and inventive. I have 20 years of
                    experience in the field.
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
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandInstagram />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src=""
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
                    A DIH Business Development/ Strategy Lead with interests in
                    immersive computing and XR, political ventures, and emerging
                    technologies. Able to take ideas and give them a life.
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
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandInstagram />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image
                      src=""
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
                    A Product Development Fellow is the voice of the customer.
                    Our job is to look beyond the business goals. We don&apos;t
                    just experience user interface but also questions it.
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
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <IconBrandInstagram />
                      </div>
                    </a>
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
