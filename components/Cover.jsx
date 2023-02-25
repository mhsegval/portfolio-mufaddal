import React from 'react'
import {
    AiFillTwitterCircle,
    AiFillFacebook,
    AiFillLinkedin,
    AiFillInstagram,
  } from "react-icons/ai";
  import Image from "next/image";
  import deved from "../public/dev-ed-wave.png";

const Cover = () => {
  return (
    <div>
        <div className="text-center px-5 py-6">
            <h2 className="text-5xl py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
              Mufaddal Materwala
            </h2>
            <h3 className="text-2xl py-2">Quality Assurance Technician.</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
            Food science technology professional with <span className='text-indigo-600'>2+ years of experience</span>. I have a deep knowledge of food production and quality and I am well acquainted with concepts of food processing, food quality, analysis & processing with practical applications of SQF, BRC, HACCP, and GMPs.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillInstagram/>
            <AiFillFacebook />
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-indigo-500 rounded-full w-80 h-80 mt-10 overflow-hidden">
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