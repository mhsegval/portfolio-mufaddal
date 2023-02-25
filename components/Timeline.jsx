import React from 'react'

const Timeline = () => {
  return (
    <div className='py-10 justify-center'>
    <hr class="w-48 h-1 mx-auto my-4 bg-indigo-500 border-0 rounded md:my-10"></hr>
    <h3 className="text-3xl py-1 text-center">My Timeline</h3>

    <ol className="relative border-l border-indigo-600 dark:border-gray-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-pink-600 rounded-full mt-1.5 -left-1.5 border border-indigo-600 dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          November 2022 - Present
        </time>
        <h3 className='text-xl text-indigo-500 font-bold'>Freshstone Brands Inc.</h3>
        <h3 className="text-lg font-semibold text-gray-900 py-2">
          Quality Assurance Technician
        </h3>
            <ul className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside'>
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
        <div className="absolute w-3 h-3 bg-pink-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400">
          January 2022 - October 2022
        </time>
        <h3 className='text-xl text-indigo-500 font-bold'>Joriki Inc.</h3>
        <h3 className="text-lg font-semibold text-gray-900 py-2">
          Quality Assurance Technician
        </h3>
        <ul className='mb-4 text-base font-normal text-gray-500 list-disc list-inside'>
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
        <div className="absolute w-3 h-3 bg-pink-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          September 2021 - December 2021
        </time>
        <h3 className='text-xl text-indigo-500 font-bold'>Gourmet Foods Inc.</h3>
        <h3 className="text-lg font-semibold text-gray-900 py-2">
          Quality Assurance Technician
        </h3>
        <ul className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside'>
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
    </ol>
  </div>
  )
}

export default Timeline