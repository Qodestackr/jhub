import React from 'react';
import EventItem from '../../components/EventItem/EventCard';

type UpcomingEvent = {
  eventName: string;
  date: string;
  location: string;
  description: string;
  isOnLeft?: boolean;
};

const upcomingEvents: UpcomingEvent[] = [
  {
    eventName: 'JHUB Board Meeting',
    date: '11th Dec 2023',
    location: 'JKUAT, SCC 101',
    description: `Our Vision
        Our vision is to be a catalyst for positive change in the digital landscape. We aspire to be a 
        hub where innovation meets sustainability, creating a ripple effect that transforms individuals, 
        businesses, and communities. Join Us on the Journey Whether you're a student eager to learn, an entrepreneur 
        seeking support, or a tech enthusiast looking for a community, JHUB welcomes you. Join us on this exciting journey 
        where technology, innovation, and sustainability converge to shape a better tomorrow.`,
    isOnLeft: true
  },
  {
    eventName: 'TechTalk Series: Navigating the Digital Landscape',
    date: '11th Dec 2023',
    location: 'JKUAT, SCC 101',
    description: `Join us for an insightful session where industry leaders discuss the latest trends in technology, exploring 
    how innovation intersects with sustainability. Discover how these advancements can transform individuals, businesses, and 
    communities. Whether you're a seasoned professional or a curious student, this TechTalk is your gateway to understanding the 
    evolving digital landscape.`,
    isOnLeft: false
  },
  {
    eventName: 'Entrepreneurial Bootcamp: Igniting Ideas, Igniting Success',
    date: '11th Dec 2023',
    location: 'JKUAT, SCC 101',
    description: `Calling all entrepreneurs! Dive into a hands-on bootcamp designed to fuel your passion and 
    guide you on the path to success. Our experienced mentors will share valuable insights on building and growing 
    your startup. Don't miss this opportunity to connect with like-minded individuals, seeking support and building 
    a strong entrepreneurial community.`,
    isOnLeft: true
  },
  {
    eventName: 'Tech Enthusiast Meetup: Beyond the Basics',
    date: '11th Dec 2023',
    location: 'JKUAT, SCC 101',
    description: `Are you a tech enthusiast looking to delve deeper into the world of innovation? Join us for a
     meetup where we explore advanced concepts and the latest breakthroughs in technology. Engage in discussions, 
     share your ideas, and connect with fellow enthusiasts. Let's build a community that thrives on pushing the 
     boundaries of technology.`,

    isOnLeft: false
  },
  {
    eventName: 'Digital Solutions Expo: Innovating for Societal Needs',
    date: '11th Dec 2023',
    location: 'JKUAT, SCC 101',
    description: `Step into the future at our Digital Solutions Expo. Explore a comprehensive array of cutting-edge 
    technologies designed to address societal needs. From climate-smart agricultural solutions to digital trade innovations, 
    witness the transformative power of technology in shaping a sustainable future. Join us in investing in the digital future.`,
    isOnLeft: true
  },
  {
    eventName: 'Innovation Showcase: Bridging the Gap',
    date: '11th Dec 2023',
    location: 'JKUAT, SCC 101',
    description: `JHUB is proud to present an Innovation Showcase, highlighting groundbreaking projects that bridge the gap between 
    innovation and implementation. Our experts have tirelessly worked to ensure that the latest technologies are not just cutting-edge 
    but also accessible to small and medium-scale farmers, traders, and enterprises. Witness the democratization of technology for positive 
    change.`,
    isOnLeft: false
  }
];

export default function JHUBEvents() {
  return (
    <div className="bg-indigo-700 p-4">
      <h2 className="text-3xl text-center text-black font-bold mb-12 dark:text-white">
        JHUB Upcoming Events
      </h2>
      <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        {upcomingEvents.map((event, index) => (
          <EventItem key={index} event={event} />
        ))}
      </div>
    </div>
  );
}
