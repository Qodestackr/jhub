import {
  IconAddressBook,
  IconCalendarEvent,
  IconAffiliate,
  IconUsers
} from '@tabler/icons-react';
import Image from 'next/image';

const communityHighlights = [
  {
    title: 'Network',
    content:
      'Connect with like-minded innovation actors, partners, and investors.',
    imageSrc: `/images/community/jhub-team-001.jpg`,
    icon: <IconAffiliate />,
    buttonText: 'Explore Now'
  },
  {
    title: 'Communities',
    content:
      'Our communities provide innovators and DIHs with a virtual space where different stakeholders can connect, collaborate digitally, and build a digital ecosystem.',
    imageSrc: `/images/community/jhub-team-002.jpg`,
    icon: <IconUsers />,
    buttonText: 'Join'
  },
  {
    title: 'Events',
    content:
      'We offer a variety of online events and in-person for members. Browse our current events and register below.',
    imageSrc: `/images/community/jhub-team-012.jpg`,
    icon: <IconCalendarEvent />,
    buttonText: 'Register'
  },
  {
    title: 'Resources Library',
    content:
      'Here, you will find interesting resources we have created or discovered, from white papers to webinars and videos, to courses and training toolkits.',
    imageSrc: `/images/community/jhub-team-001.jpg`,
    icon: <IconAddressBook />,
    buttonText: 'Get Inspired'
  }
];

const HighlightCard = ({ imageSrc, icon, title, content, buttonText }) => {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mb-8 flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="flex-grow p-6 flex flex-col justify-between">
        <div>
          <div className="flex flex-col gap-4 justify-start items-start mb-2">
            {icon}
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white ml-2">
              {title}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{content}</p>
        </div>
        <button className="mt-4 bg-primary hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const CommunityHighlights = () => {
  return (
    <div className="my-8">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4 ml-8">
        Community Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8">
        {communityHighlights.map((highlight, index) => (
          <HighlightCard
            key={index}
            imageSrc={highlight?.imageSrc}
            icon={highlight?.icon}
            title={highlight?.title}
            content={highlight?.content}
            buttonText={highlight?.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityHighlights;
