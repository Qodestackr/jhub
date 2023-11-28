'use client';

import React, { useState } from 'react';
import Team from '../../components/Team/Team';
import Link from 'next/link';

function ContactUs() {
  const [show, setShow] = useState(false);

  const handleContactJHUB = (e: any) => {
    alert("TODO: Contact Us Submission successful")
  }


  return (
      <div className="w-full border-stroke dark:border-strokedark">
            <div className="w-full flex items-center justify-center mb-12">
      <div className="w-full bg-white shadow rounded py-12 lg:px-28 px-8">
        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
          Contact The JHUB Team.
        </p>
        <div className="md:flex items-center mt-12 w-full">
          <div className="w-full flex flex-col">
            <label className="text-base font-semibold leading-none text-gray-800">
              Name
            </label>
            <input
              tabIndex={0}
              arial-label="Please input name"
              type="name"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Please input  name"
            />
          </div>
          <div className="w-full flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="text-base font-semibold leading-none text-gray-800">
              Email Address
            </label>
            <input
              tabIndex={0}
              arial-label="Please input email address"
              type="name"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Please input email address"
            />
          </div>
        </div>
        <div className="md:flex items-center mt-8">
          <div className="w-full flex flex-col">
            <label className="text-base font-semibold leading-none text-gray-800">
              Company name
            </label>
            <input
              tabIndex={0}
              role="input"
              arial-label="Please input company name"
              type="name"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
              placeholder="Please input company name"
            />
          </div>
          <div className="w-full flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="text-base font-semibold leading-none text-gray-800">
              Country
            </label>
            <input
              tabIndex={0}
              arial-label="Please input country name"
              type="name"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Please input country name"
            />
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col mt-8">
            <label className="text-base font-semibold leading-none text-gray-800">
              Message
            </label>
            <textarea
              tabIndex={0}
              aria-label="leave a message"
              role="textbox"
              className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
              defaultValue={''}
              placeholder='Write Your Message Here...'
            />
          </div>
        </div>
        <p className="text-xs leading-3 text-black mt-4 flex items-center justify-start gap-1">
          <input type="checkbox" name="" id="" className='mx-2'/>
          By clicking submit you agree to our terms of service, privacy policy
          and how we use data as stated
        </p>
        <div className="flex items-center justify-center w-full">
          <button 
          onClick={handleContactJHUB}
          className="mt-9 text-base w-full font-semibold leading-none text-white py-4 px-10 bg-[#074b3e] rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
      </div>
  );
}

export default ContactUs;
