import React from 'react'

const Contact = () => {
  return (
    <div className="p-2">
    <hr className="w-48 h-1 mx-auto mb-3 bg-indigo-500 border-0 rounded md:my-10 dark:bg-pink-500"></hr>
            <div>
              <h2 className="text-3xl lg:text-5xl dark:text-white text-center">
                Lets talk about everything!
              </h2>
              <div className="text-gray-700 mt-8 mb-2 dark:text-gray-300">
                Hate forms? Send me an <span className="underline">email</span>{" "}
                instead.
              </div>
            </div>
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold dark:text-gray-300">
                Full Name
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:bg-white"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold dark:text-gray-300">
                Email
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:bg-white"
                type="text"
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold dark:text-gray-300">
                Message
              </span>
              <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:bg-white"></textarea>
            </div>
            <div className="mt-8">
              <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline dark:bg-pink-500">
                Send Message
              </button>
            </div>
          </div>
  )
}

export default Contact