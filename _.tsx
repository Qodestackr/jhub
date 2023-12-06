'use client';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter
} from '@tabler/icons-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { Tab } from '@headlessui/react';

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Team() {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2
      }
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12
      }
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2
      }
    ]
  });

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
          </div>
        </div>
      </div>
    </div>

    // <div className="w-full max-w-md px-2 py-16 sm:px-0">
    //   <Tab.Group>
    //     <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
    //       {Object.keys(categories).map((category) => (
    //         <Tab
    //           key={category}
    //           className={({ selected }) =>
    //             classNames(
    //               'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
    //               'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
    //               selected
    //                 ? 'bg-white text-blue-700 shadow'
    //                 : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
    //             )
    //           }
    //         >
    //           {category}
    //         </Tab>
    //       ))}
    //     </Tab.List>
    //     <Tab.Panels className="mt-2">
    //       {Object.values(categories).map((posts, idx) => (
    //         <Tab.Panel
    //           key={idx}
    //           className={classNames(
    //             'rounded-xl bg-white p-3',
    //             'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
    //           )}
    //         >
    //           <ul>
    //             {posts.map((post) => (
    //               <li
    //                 key={post.id}
    //                 className="relative rounded-md p-3 hover:bg-gray-100"
    //               >
    //                 <h3 className="text-sm font-medium leading-5">
    //                   {post.title}
    //                 </h3>

    //                 <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
    //                   <li>{post.date}</li>
    //                   <li>&middot;</li>
    //                   <li>{post.commentCount} comments</li>
    //                   <li>&middot;</li>
    //                   <li>{post.shareCount} shares</li>
    //                 </ul>

    //                 <a
    //                   href="#"
    //                   className={classNames(
    //                     'absolute inset-0 rounded-md',
    //                     'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
    //                   )}
    //                 />
    //               </li>
    //             ))}
    //           </ul>
    //         </Tab.Panel>
    //       ))}
    //     </Tab.Panels>
    //   </Tab.Group>
    // </div>
  );
}

export default Team;
