import React from 'react'
import {
    AiFillTwitterCircle,
    AiFillFacebook,
    AiFillLinkedin,
    AiFillInstagram,
  } from "react-icons/ai";
  import Image from "next/image";
  import deved from "../assets/gian.jpg";

const Cover = () => {
  return (
    <div>
        <div className="text-center px-5 py-6">
            <h2 className="text-5xl py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text lg:text-7xl">
              Mufaddal Materwala
            </h2>
            <h3 className="text-2xl py-2 lg:text-3xl dark:text-white">Quality Assurance Technician</h3>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-2xl mx-auto dark:text-white" >
            Food science technology professional with <span className='text-indigo-600 dark:text-pink-500'>2+ years of experience</span>. I have a deep knowledge of food production and quality and I am well acquainted with concepts of food processing, food quality, analysis & processing with practical applications of SQF, BRC, HACCP, and GMPs.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400 lg:text-6xl lg:gap-22 dark:text-gray-300">
           <a className='hover:text-gray-500 dark:hover:text-white' href="https://twitter.com/MufaddalMaterw1"><AiFillTwitterCircle/></a> 
            <a className='hover:text-gray-500 dark:hover:text-white' href='http://linkedin.com/in/mufaddal-materwala-61889a188'><AiFillLinkedin /></a>
            <a className='hover:text-gray-500 dark:hover:text-white' href="https://www.instagram.com/mufaddal_7860/"><AiFillInstagram/></a>
            <a className='hover:text-gray-500 dark:hover:text-white' href="https://www.facebook.com/mufaddal.materwala"><AiFillFacebook /></a>
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-indigo-500 rounded-full w-80 h-80 mt-10 overflow-hidden lg:w-100 lg:h-100 dark:from-pink-500">
            <Image
              layout="fill"
              objectFit="cover"
              alt="logo"
              src={deved}
            ></Image>
        </div>
    </div>
  )
}

export default Cover