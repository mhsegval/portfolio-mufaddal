import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from 'next/image';
import logo from '../public/logo.png'


const Navbar = ({darkMode, setDarkMode}) => {
  return (
    <nav className="py-10 mb-12 flex justify-between">
    <a href="#" className='flex items-center'><Image src={logo} alt='logo' className='h-10 w-20'></Image></a>
    {/* <h1 className="text-xl font-burtons dark:text-white">Mufaddal Materwala</h1> */}
    <ul className="flex items-center">
      <li>
        <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl dark:text-white" />
      </li>
      <li>
        <a
        target="_blank"
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-md ml-8"
          href="https://www.linkedin.com/in/mufaddal-materwala-61889a188/overlay/1635492816804/single-media-viewer/?profileId=ACoAACxE__QB7IHnruOR3be3n9OjFRT_15naU7k"
        >
          Resume
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar