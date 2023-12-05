'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const navTopLinks = [
  {
    name: 'About JHUB',
    href: '/about-jhub'
  },
  {
    name: 'Projects & Innovation',
    href: '/jhub-projects'
  },
  {
    name: 'Consultancy',
    href: '/consulatation-request'
  },
  {
    name: 'JHUB Portal',
    href: '/dashboard'
  }
];

export const navBottomLinks = [
  {
    name: 'Forums',
    href: '/jhub-forums'
  },
  {
    name: 'Innovation Hub',
    href: '/' // Todo, Move into new subdomain
  },
  {
    name: 'Training Programs',
    href: '/training-programs'
  },
  {
    name: 'Technology & Sustainability',
    href: '/technology-sustainability'
  },
  {
    name: 'Objectives',
    href: '/jhub-objectives'
  }
];

export const navProductsList = [
  {
    name: 'About',
    href: '/'
  },
  {
    name: 'About',
    href: '/'
  },
  {
    name: 'About',
    href: '/'
  }
];

export default function Headerzz() {
  const [showUpperDropdown, setShowUpperDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const trigger = useRef<any>(null);
  const _dropdown = useRef<any>(null);

  const pathname = usePathname();
  const isDashboardPage = pathname.startsWith('/dashboard');

  const toggleDropdown = () => {
    setShowDropdown((prevDropdownState) => !prevDropdownState);
  };

  const toggleUpperDropdown = () => {
    setShowUpperDropdown((prevUpperDropdownState) => !prevUpperDropdownState);
  };

  // // close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }: MouseEvent) => {
  //     if (!_dropdown.current) return;
  //     if (!showDropdown || _dropdown.current.contains(target)) return;
  //     setShowDropdown(false);
  //   };
  //   document.addEventListener('click', clickHandler);
  //   return () => document.removeEventListener('click', clickHandler);
  // });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!showDropdown || keyCode !== 27) return;
      setShowDropdown(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // TODO USE ROUTER TO
  return isDashboardPage ? null : (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-main text-whiter text-sm py-3 sm:py-0 dark:bg-slate-900">
        <nav
          className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          {/*  */}

          <div className="flex items-center justify-between">
            {/* TODO: BRING USE MEDIA QUERY & then work on something to swap images based on media Query */}
            <a
              className="flex-none text-3xl bg-white font-semibold dark:text-white"
              href="/"
              aria-label="jhub Suite Brand"
            >
              <Image
                src={'/images/logo/jhub-logo1.png'}
                width={100}
                height={100}
                alt={''}
              />
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                //ref={_dropdown}
                onClick={toggleUpperDropdown}
                //onFocus={toggleUpperDropdown}
                //onBlur={toggleUpperDropdown}
                className="hs-collapse-toggle w-9 h-9 text-white flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200  hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className={`hs-collapse ${
              showUpperDropdown ? '' : 'hidden'
            } overflow-hidden transition-all duration-300 basis-full grow sm:block`}
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button
                  type="button"
                  className="flex items-center w-full font-semibold  hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                >
                  Services
                  <svg
                    className="flex-shrink-0 ms-2 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10  sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/"
                  >
                    About
                  </a>
                  <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                    <button
                      type="button"
                      className="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Sub Menu
                      <svg
                        className="sm:-rotate-90 flex-shrink-0 ms-2 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-white sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="/"
                      >
                        About
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="/"
                      >
                        Downloads
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="/"
                      >
                        Team Account
                      </a>
                    </div>
                  </div>

                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/"
                  >
                    Downloads
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/"
                  >
                    Team Account
                  </a>
                </div>
              </div>
              {/* END OF DROP DOWN */}

              {navTopLinks.map((link, i) => (
                <Link
                  href={link?.href}
                  key={i}
                  className="font-semibold text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                >
                  {link?.name}{' '}
                </Link>
              ))}

              <Link
                className="flex items-center gap-x-2 font-semibold text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                href="/auth/signin"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Account
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <nav className="w-full md:max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-end flex-1 bg-success  py-4">
        <div className="relative flex flex-row justify-between items-center gap-x-8 border-t py-4 sm:py-0 dark:border-whiter">
          <div className="flex items-center w-full sm:w-[auto]">
            <span className="font-semibold text-main whitespace-nowrap text-xl border-white sm:border-transparent pe-4 me-4 sm:py-3.5 dark:text-white">
              JHUB Sections:
            </span>

            <div className="w-full sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle text-white group w-full inline-flex justify-between items-center gap-2 rounded-lg font-medium text-gray-600 border border-gray-200 align-middle py-1.5 px-2 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/[.5] transition"
                data-hs-collapse="#secondary-nav-toggle"
                aria-controls="secondary-nav-toggle"
                aria-label="Toggle navigation"
                onClick={toggleDropdown}
              >
                Overview
                <svg
                  className="hs-dropdown-open:rotate-180 flex-shrink-0 w-4 h-4 transition group-hover:text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="secondary-nav-toggle"
            className={`bg-[#074b3e]  text-white ${
              showDropdown ? '' : 'hidden'
            } hs-collapse overflow-hidden transition-all duration-300 absolute top-16 end-0 w-full rounded-lg sm:block sm:static sm:top-0 sm:w-full sm:max-h-full sm:bg-transparent sm:overflow-visible`}
          >
            <div className="ml-6 flex flex-col py-2 sm:flex-row sm:justify-end sm:gap-y-0 sm:gap-x-6 sm:py-0">
              {navBottomLinks.map((link, i) => (
                <Link
                  key={i}
                  className="text-sm font-medium text-white hover:text-blue-600 sm:border-b-2 border-b-transparent py-2 sm:py-3.5 dark:text-gray-400 "
                  href={link?.href}
                >
                  {link?.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
