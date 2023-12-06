import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter
} from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';

/**
            IMAGE
            NAME
            ROLE
            DESCRIPTION

            TWITTER
            FACEBOOK
            LINKEDIN
 */

const teams = [
  {
    memberImageUrl: `/images/team/dr-lawrence-nderu.png`,
    memberName: `Dr. Lawrence Nderu(PhD)`,
    memberRole: `Project Lead`,
    description: `Project Lead with extensive experience as Chairman,
    Lecturer, and Researcher in AI/ML and Software Engineering.
    A Digital Ecosystem Builder and Founder of JKIAN Hub,
    serving as a Digital Africa Connector.`,
    twitterLink: ``,
    facebookLink: ``,
    linkedInLink: `https://www.linkedin.com/in/dr-lawrence-nderu/?originalSubdomain=ke`
  },
  {
    memberImageUrl: `/images/team/cate.jpg`,
    memberName: `Catherine Muraga`,
    memberRole: `Managing Director, Microsoft ADC`,
    description: `Catherine is a purpose-driven tech executive, currently the Managing Director at Microsoft ADC. 
    She leads a team creating impactful products and services globally, with a focus on STEM education in Africa.`,
    twitterLink: ``,
    facebookLink: ``,
    linkedInLink: `https://www.linkedin.com/in/dr-lawrence-nderu/?originalSubdomain=ke`
  },
  {
    memberImageUrl: `/images/team/rehema-ndenda.jpeg`,
    memberName: `Dr Rehema Ndeda`,
    memberRole: `Climate Smart Agriculture/ Automation Lead/JKUAT`,
    description: `Mechatronics Engineer with a specialization on automation, currently focusing on development and 
    testing of technologies related to precision agriculture`,
    twitterLink: ``,
    facebookLink: ``,
    linkedInLink: ``
  },
  {
    memberImageUrl: `/images/team/dr-mwangi-karanja.jpeg`,
    memberName: `Dr Mwangi Karanja`,
    memberRole: `Innovative Technology and Data Science Lead`,
    description: `An Innovative technology diffusion expert with a background in computing, research and innovation management. 
    Have trained Small scale entrepreneurs on data management and research-driven approaches to growth`,
    twitterLink: ``,
    facebookLink: ``,
    linkedInLink: ``
  },
  {
    memberImageUrl: `/images/team/william-muriithi.jpeg`,
    memberName: `Dr William Murithi`,
    memberRole: `DIH Business Development/ Strategy Lead`,
    description: `An expert in business model innovation, digital entrepreneurship & innovation and design thinking. 
    Founder and Lead consultant at EMBC, a premier management consulting firm that offers bespoke and integrated solutions 
    for enterprises.`,
    twitterLink: ``,
    facebookLink: ``,
    linkedInLink: ``
  },
  {
    memberImageUrl: ``,
    memberName: `Ms. Daisy Ondwari`,
    memberRole: `Product Development Fellow`,
    description: `Ms. Daisy Ondwari, as a Product Development Fellow, serves
    as the voice of the customer. Her role extends beyond user
    interface experience, questioning and shaping products to
    align with user needs.`,
    twitterLink: ``,
    facebookLink: ``,
    linkedInLink: ``
  }
];

function Team() {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark ">
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg dark:bg-boxdark-2 dark:text-bodydark text-center font-normal pb-3">
            Beyond the Ordinary | Meet the team
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 dark:text-bodydark font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            Our people are the heart and soul of our success
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {teams?.map((team, i) => (
              <div
                key={i}
                className="xl:w-1/3 h-full sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div className="rounded overflow-hidden shadow-md border border-gray-200 dark:bg-boxdark-2 dark:text-bodydark bg-white">
                  <div className="absolute -mt-20 w-full h-full flex justify-center">
                    <div className="h-32 w-32">
                      <Image
                        src={team?.memberImageUrl}
                        alt=""
                        className="rounded-full object-cover h-full w-full shadow-md"
                        width={200}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-3xl text-center pb-1">
                      {team?.memberName}
                    </div>
                    <p className="text-gray-800 dark:text-bodydark text-sm text-center">
                      {team?.memberRole}
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      {team?.description}
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href={team?.twitterLink} className="mx-5">
                        <div>
                          <IconBrandTwitter />
                        </div>
                      </a>
                      <a href={team?.facebookLink} className="mx-5">
                        <div>
                          <IconBrandFacebook />
                        </div>
                      </a>
                      <a href={team?.linkedInLink} className="mx-5">
                        <div>
                          <IconBrandLinkedin />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
