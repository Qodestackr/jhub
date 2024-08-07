'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import { auth, passwordResetHandler } from '../../../firebase';

import { AlertDanger, AlertSuccess } from '../../../components/alerts';

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState({ type: '', message: '', show: false });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const resetSuccess = await passwordResetHandler(email);

      if (resetSuccess) {
        setAlert({
          type: 'success',
          message: 'Password reset email sent successfully!',
          show: true
        });

        setTimeout(() => {
          setAlert({
            type: '',
            message: '',
            show: false
          });
        }, 3000);
      } else {
        setAlert({
          type: 'danger',
          message: 'Failed to send password reset email. Please try again.',
          show: true
        });
        setTimeout(() => {
          setAlert({
            type: '',
            message: '',
            show: false
          });
        }, 3000);
      }
    } catch (error) {
      console.error('Error resetting password:', error.message);
      setAlert({
        type: 'danger',
        message: 'An unexpected error occurred.',
        show: true
      });
      setTimeout(() => {
        setAlert({ type: '', message: '', show: false });
      }, 3000);
    }
  };

  return (
    <>
      <Breadcrumb pageName="Reset Password" isDashboard={false} />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" href="/">
                <Image
                  className="hidden dark:block"
                  src={'/images/logo/jhub-logo-new.svg'}
                  alt="Logo"
                  width={276}
                  height={320}
                />

                <Image
                  className="dark:hidden"
                  src={'/images/logo/jhub-logo-new.svg'}
                  alt="Logo"
                  width={176}
                  height={32}
                />
              </Link>

              <p className="2xl:px-20">
                We will <span className="text-primary">Email</span> you
                instructions to reset your password. If you cant access your
                email, you can try account recovery.
              </p>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Reset Your Password
              </h2>

              <form onSubmit={handleResetPassword}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-lg  bg-[#357c20] p-4 text-white transition hover:bg-opacity-90"
                  >
                    Get Reset Email
                  </button>
                </div>

                <div className="mt-6 text-center">
                  {/*  */}
                  <p>
                    Not so Sure?{' '}
                    <Link href="/auth/signin" className="text-[#357c20]">
                      Back to Signin
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            {(alert?.type || alert?.show) === 'success' && (
              <AlertSuccess
                alertText="Success"
                moreAlertInfo="Request Successful Check Your Email."
              />
            )}
            {(alert?.type || alert?.show) === 'danger' && (
              <AlertDanger
                alertText="Failed, Something went Wrong"
                moreAlertInfo="Something went wrong."
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
