import React, {useEffect, useState} from 'react'
import {
    AiFillTwitterCircle,
    AiFillFacebook,
    AiFillLinkedin,
    AiFillInstagram,
  } from "react-icons/ai";
  import Image from "next/image";
  import deved from "../public/cover.png";

const Cover = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period =1200;



  useEffect(() => {
      const toRotate = ['Quality Assurance Technician', 'Social Media Influencer', 'Digit Content Creator'];
      const tick = () => {
          let i = loopNum % toRotate.length;
          let fullText = toRotate[i];
          let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
  
          setText(updatedText);
  
          if(isDeleting){
              setDelta(80)
          }
  
          if(!isDeleting && updatedText === fullText) {
              setIsDeleting(true);
              setDelta(period);
          } else if(isDeleting && updatedText === '') {
              setIsDeleting(false);
              setLoopNum(loopNum + 1);
              setDelta(100);
          }else {

          }
      }

      let ticker = setInterval(() => {
          tick();
      }, delta);
      return () => { clearInterval(ticker)};
  }, [delta, isDeleting, loopNum, text])

  return (
    <div>
        <div className="text-center px-5 py-6">
            <h2 className="text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text lg:text-7xl">
              Mufaddal Materwala
            </h2>
            <h3 className="text-xl py-2 md:text-2xl lg:text-3xl dark:text-white">{text}!</h3>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-2xl mx-auto dark:text-white" >
            Food science technology professional, <span className='text-indigo-600 dark:text-pink-500'>who believes in turning ideas into reality.</span> The loathing adventurer and thrill seeker. The problem is normal was{`'`}nt in my DNA, I was destined to be forever freakish. Also, in my opinion, if you are always open to new opportunities then you are right where you need to be. 
            </p>
          </div>

          <div className="text-4xl flex justify-center gap-16 py-3 text-gray-400 md:text-5xl lg:text-6xl lg:gap-22 dark:text-gray-300">
           <a target='_blank' className='hover:text-gray-500 dark:hover:text-white' href="https://twitter.com/MufaddalMaterw1"><AiFillTwitterCircle/></a> 
            <a target='_blank' className='hover:text-gray-500 dark:hover:text-white' href='http://linkedin.com/in/mufaddal-materwala-61889a188'><AiFillLinkedin /></a>
            <a target='_blank' className='hover:text-gray-500 dark:hover:text-white' href="https://www.instagram.com/mufaddal_7860/"><AiFillInstagram/></a>
            <a target='_blank' className='hover:text-gray-500 dark:hover:text-white' href="https://www.facebook.com/mufaddal.materwala7"><AiFillFacebook /></a>
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-indigo-500 rounded-full w-60 h-60 mt-10 overflow-hidden md:w-80 md:h-80 lg:w-100 lg:h-100 dark:from-pink-500">
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