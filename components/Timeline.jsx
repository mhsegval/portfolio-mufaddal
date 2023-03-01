import React, {useState} from 'react'
import Carousel from './Carousal'
import {AiOutlineArrowDown} from 'react-icons/ai'
import Gallery from './Gallery';

const Timeline = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  return (
    <div>
    <div className='py-10'>
    <hr className="w-48 h-1 mx-auto my-4 bg-indigo-500 border-0 rounded md:my-10 dark:bg-pink-500"></hr>
    <h3 className="text-3xl lg:text-5xl dark:text-white text-center py-1 mb-2">My Timeline</h3>

    <ol className="relative border-l border-indigo-600 md:ml-5 lg:ml-12">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-pink-600 rounded-full mt-1.5 -left-1.5 border border-indigo-600 dark:border-white"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-500 md:text-lg md:mb-2 dark:text-gray-300">
          November 2022 - Present
        </time>
        <h3 className='text-xl text-indigo-500 font-bold md:text-2xl dark:text-pink-500'> <a target='_blank' href="https://www.freshstonebrands.com/">Freshstone Brands Inc.</a> </h3>
        <h3 className="text-lg font-semibold text-gray-500 py-2 md:text-2xl dark:text-gray-300">
          Quality Assurance Technician
        </h3>
            <ul className='mb-4 text-base font-normal text-gray-500 list-disc list-inside md:text-lg max-w-7xl dark:text-gray-300'>
                <li>Participate actively in plant sanitation and perform
          pre-operational inspections on production lines.</li>
                <li>Perform online product analysis, inspection and observation
          for any deviation to the standard product specifications and
          formulations. Line inspection includes but not limited to
          weight checks of products, temperature checks, metal detector
          checks, code checks, verifying line paperwork in a systematic
          fashion.</li>
                <li>Perform incoming raw materials testing and finished product
          testing. Testing knowledge includes pH, titration, micro
          sampling, viscosity, temperature measurements, etc.</li>
                <li>Lead improvement efforts directed at improving product
          quality throughout.</li>
            </ul>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-pink-600 rounded-full mt-1.5 -left-1.5 border border-indigo-600 dark:border-white"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-500 md:text-lg md:mb-2 dark:text-gray-300">
          January 2022 - October 2022
        </time>
        <h3 className='text-xl text-indigo-500 font-bold md:text-2xl dark:text-pink-500'><a target='_blank' href="https://www.jorikiinc.com/">Joriki Inc.</a></h3>
        <h3 className="text-lg font-semibold text-gray-500 py-2 md:text-2xl dark:text-gray-300">
          Quality Assurance Technician
        </h3>
        <ul className='mb-4 text-base font-normal text-gray-500 list-disc list-inside md:text-lg max-w-7xl dark:text-gray-300'>
            <li>Inspection of incoming raw material. Receiving Sugar
          concentrates and Oat base.</li>
            <li>Performing numerous tests for Oat base (pH, %TS, Gluten) and
          documentation of all the details.</li>
            <li>Processing parameter inspection, collecting Micro and
          Retention samples and performing %TS, pH on hourly basis</li>
            <li>Performing Brix, pH, %acidity and %ascorbic acid test for
          various beverages.</li>
        </ul>
      </li>
      <li className="ml-4">
        <div className="absolute w-3 h-3 bg-pink-600 rounded-full mt-1.5 -left-1.5 border border-indigo-600 dark:border-white"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-500 md:text-lg md:mb-2 dark:text-gray-300">
          September 2021 - December 2021
        </time>
        <h3 className='text-xl text-indigo-500 font-bold md:text-2xl dark:text-pink-500'><a target='_blank' href="http://signatureculinarysolutions.com/">Gourmet Foods Inc.</a></h3>
        <h3 className="text-lg font-semibold text-gray-500 py-2 md:text-2xl dark:text-gray-300">
          Quality Assurance Technician
        </h3>
        <ul className='mb-4 text-base font-normal text-gray-500 list-disc list-inside md:text-lg max-w-7xl dark:text-gray-300'>
            <li>Participate actively in plant sanitation and perform
          pre-operational inspections on production lines.</li>
            <li>Perform online product analysis, inspection and observation
          for any deviation to the standard product specifications and
          formulations. Line inspection includes but not limited to
          weight checks of products, temperature checks, metal detector
          checks, code checks, verifying line paperwork in a systematic
          fashion.</li>
            <li>Perform incoming raw materials testing and
          finished product testing. Testing knowledge includes pH,
          titration, micro sampling, viscosity, temperature
          measurements, etc.</li>
            <li>Lead improvement efforts directed
          at improving product quality throughout.</li>
        </ul>
      </li>
      <li className="">
        <div className="absolute w-3 h-3 bg-pink-600 rounded-full mt-1.5 -left-1.5 border border-indigo-600 dark:border-white"></div>
        <time className="mb-1 ml-4 text-sm font-normal leading-none text-gray-500 md:text-lg md:mb-2 dark:text-gray-300">
          Beginning of a new life!
        </time>
        <h3 className='ml-4 text-xl text-indigo-500 font-bold md:text-2xl dark:text-pink-500'>My journey in Canada</h3>
        <p className="ml-4 text-lg text-gray-500 py-2 dark:text-gray-300">
        In the winter of 2020, I came to Canada as a student with the determination and passion to achieve great things. After a lot of hard work and many sleepless nights, I finally achieved my college degree! I am thankful to my parents who have always supported me, believed in me. I was fortunate to have wonderful Mentors and Seniors. Canada is a wonderful country where I was able to follow my heart. I{`'`}m thrilled that my professional background allows me to contribute to the development of this country, and I{`'`}m proud of how far I{`'`}ve come personally in the previous few years. 
        <span className='text-indigo-600 dark:text-pink-500'> Here you go, A small glace to my wonderful journey...</span>
        </p>
        <ul className='mb-4 text-base font-normal text-gray-500 list-disc list-inside md:text-lg max-w-7xl dark:text-gray-300'>
              <Carousel />
              <button onClick={() => setIsGalleryOpen(!isGalleryOpen)} className="flex bg-transparent hover:bg-indigo-500 text-indigo-700 hover:text-white py-1 px-2 border border-indigo-500 hover:border-transparent rounded mx-auto dark:hover:bg-pink-500 dark:text-pink-500 dark:border-pink-500 dark:hover:text-white">
                {isGalleryOpen ? "Show Less" : 'Show More'}
              </button>
        </ul>
      </li>
    </ol>
  </div>
  {isGalleryOpen ? <Gallery /> : ''}
  </div>

  )
}

export default Timeline