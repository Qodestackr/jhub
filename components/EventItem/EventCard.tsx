import { IconChevronDown } from '@tabler/icons-react';
import React from 'react';

const EventItem = ({ event }) => {
  const isOnLeft = event.isOnLeft || false;
  // ${isOnLeft ? 'flex-row-reverse' : ''}

  return (
    <div className={`flex md:contents ${isOnLeft ? 'flex-row-reverse' : ''}`}>
      <div
        className={`relative p-4 my-6 text-black bg-white rounded-xl col-start-1 ${
          isOnLeft
            ? 'col-end-5 mr-auto md:mr-0 md:ml-auto'
            : 'col-end-5 ml-auto md:ml-0 md:mr-auto'
        }`}
      >
        <h3 className="text-lg font-semibold lg:text-xl">{event?.eventName}</h3>
        <p className="mt-2 leading-6">{event.description}</p>
        <div className="absolute text-sm w-full text-indigo-100/75 dark:text-white -top-5 left-2 whitespace-nowrap flex gap-2 justify-around items-center">
          <span>Date: {event.date}</span>
          <span>Location: {event.location}</span>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center md:flex-row mt-4 space-x-2">
          <button className="bg-primary text-white py-2 md:px-4 rounded-md w-full md:w-auto">
            Attend
          </button>
          <button className="bg-green-500 bg-primary text-white py-2 md:px-4 rounded-md w-full md:w-auto">
            Register as Speaker
          </button>
          <button className="bg-primary text-white py-2 md:px-4 rounded-md w-full md:w-auto">
            More About This Event
          </button>
        </div>
      </div>

      <div
        className={`relative col-start-5 col-end-6 mr-7 md:mx-auto ${
          isOnLeft ? 'ml-auto' : 'mr-auto'
        }`}
      >
        <div className="flex items-center justify-center w-6 h-full">
          <div className="w-1 h-full bg-success rounded-t-full bg-gradient-to-b from-indigo-400 to-success"></div>
        </div>
        <div className="absolute w-6 h-6 -mt-3 bg-primary border-4 border-white rounded-full top-1/2"></div>
      </div>
    </div>
  );
};

export default EventItem;
