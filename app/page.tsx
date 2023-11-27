import { Metadata } from 'next';
import Link from 'next/link';
import ModalVideo from '../components/modalVideo/ModalVideo';
import PartnershipLogos from '../components/logo/Logos';
import SubscribeNewsletter from '../components/newsletter/SubscribeNewsletter';
import IndustryStats from '../components/IndustryStats/IndustryStats';
import LandingHeroSection from '../components/Hero/HeroSection';
import FeatureList from '../components/FeatureList/FeatureList';
import DefaultTable from '../components/Tables/DefaultTable';
import Th from '../components/Tables/Th';
import CookiesBanner from '../components/CookiesBanner/CookiesBanner';
import CardDataStats from '../components/CardDataStats';
import WriteAComment from '../components/write-a-comment';
import Headerzz from '../components/Headerzz';
import Image from 'next/image';
import Footer from '../components/footer/Footer';


export default function Home() {
  return (
    <>
      {/* <LandingHeroSection /> */}

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
            Innovation for Transformation.
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
            We are a one-stop hub offering comprehensive array of digital solutions for societal needs.
            </p>

            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              {/* <div className="w-full sm:w-auto">
                <label htmlFor="hero-input" className="sr-only">
                  Request a Demo
                </label>
                <input
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  className="py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter your email"
                />
              </div> */}
              <a
                className="w-full bg-success sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                About JHUB
              </a>
              <a
                className="w-full bg-success sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Learn Hub
              </a>
            </div>

            <div className="mt-6 lg:mt-12">
              <span className="text-xs font-medium text-success uppercase dark:text-gray-200">
                {/* Trusted by: */}
                Investing in the digital future.
              </span>

              <div className="mt-4 flex gap-x-8">
                {/* TODO Company Logos */}
                JHUB develops climate smart agricultural solutions and digital trade.


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

      {/* <ModalVideo thumb={"/"} thumbWidth={7} thumbHeight={10} thumbAlt={"Modal Video"} video={""} videoWidth={30} videoHeight={40} /> */}

      <FeatureList />
      {/* <IndustryStats /> */}

      {/* <CookiesBanner /> */}
      {/* <CardDataStats title={"Title"} total={"199"} rate={"6"} children={<p>Hello Card Status</p>}>
      </CardDataStats> */}

      {/* <PartnershipLogos /> */}

      {/* <SubscribeNewsletter /> */}

      {/* <Th /> */}
      {/* <WriteAComment /> */}

      <Footer />
    </>
  );
}
