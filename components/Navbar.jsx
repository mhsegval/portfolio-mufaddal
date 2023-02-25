import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";


const Navbar = () => {
  return (
    <nav className="py-10 mb-12 flex justify-between">
    <h1 className="text-xl font-burtons">Mufaddal Materwala</h1>
    <ul className="flex items-center">
      <li>
        <BsFillMoonStarsFill className="cursor-pointer text-xl" />
      </li>
      <li>
        <a
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