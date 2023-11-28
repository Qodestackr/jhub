'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function LandingHeroSection() {
  const [show, setShow] = useState(false);
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className="lg:col-span-3">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
            Innovation for Transformation.
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
            We are a one-stop hub offering comprehensive array of digital
            solutions for societal needs.
          </p>

          <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <Link
              className="w-full bg-success sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/about-jhub"
            >
              About JHUB
            </Link>
            <Link
              className="w-full bg-success sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/learn-hub"
            >
              Learn Hub
            </Link>
          </div>

          <div className="mt-6 lg:mt-12">
            <span className="text-xs font-medium text-success uppercase dark:text-gray-200">
              Investing in the digital future.
            </span>

            <div className="mt-4 flex gap-x-8">
              JHUB develops climate smart agricultural solutions and digital
              trade.
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 mt-10 lg:mt-0">
          <Image
            className="w-full rounded-xl"
            src={`/images/logo/corporate-banner2x.jpg`}
            alt="Image Description"
            layout="responsive"
            width={900}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingHeroSection;
