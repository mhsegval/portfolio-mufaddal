import React from 'react'
import img1 from '../public/gallery/1.jpg'
import img2 from '../public/gallery/2.jpg'
import img3 from '../public/gallery/3.jpg'
import img4 from '../public/gallery/4.jpg'
import img5 from '../public/gallery/5.jpeg'
import img6 from '../public/gallery/6.jpeg'
import img7 from '../public/gallery/7.jpg'
import img8 from '../public/gallery/8.jpeg'
import img10 from '../public/gallery/10.jpg'
import img11 from '../public/gallery/11.jpeg'
import img12 from '../public/gallery/12.jpeg'
import img13 from '../public/gallery/13.jpeg'
import img14 from '../public/gallery/14.jpg'
import img15 from '../public/gallery/15.jpeg'
import img16 from '../public/gallery/16.jpg'
import img17 from '../public/gallery/17.jpg'
import img18 from '../public/gallery/18.jpg'
import Image from "next/image";


const Gallery = () => {

    const data = [
        {
            id: 1,
            imgSrc : img1
        },
        {
            id: 2,
            imgSrc : img2
        },
        {
            id: 3,
            imgSrc : img3
        },
        {
            id: 4,
            imgSrc : img4
        },
        {
            id: 5,
            imgSrc : img5
        },
        {
            id: 6,
            imgSrc : img6
        },
        {
            id: 7,
            imgSrc : img7
        },
        {
            id: 8,
            imgSrc : img8
        },
        {
            id: 10,
            imgSrc : img10
        },
        {
            id: 11,
            imgSrc : img11
        },
        {
            id: 12,
            imgSrc : img12
        },
        {
            id: 13,
            imgSrc : img13
        },
        {
            id: 14,
            imgSrc : img14
        },
        {
            id: 15,
            imgSrc : img15
        },
        {
            id: 16,
            imgSrc : img16
        },
        {
            id: 17,
            imgSrc : img17
        },        
        {
            id: 18,
            imgSrc : img18
        },
    ];

  return (
    <div>
    <hr class="w-48 h-1 mx-auto my-4 bg-indigo-500 border-0 rounded md:my-10 dark:bg-pink-500"></hr>
    <h2 className='text-3xl lg:text-5xl dark:text-white text-center'>Gallery</h2>
    <div className="w-full max-w-8xl p-5 pb-10 mx-auto mb-10 gap-5 columns-2 md:columns-3 lg:columns-4">
        {data.map((item, index) => {
            return (
                    <Image
                    alt="logo"
                    src={item.imgSrc}
                    key={index}
                    className="py-1"
                    loading='lazy'
                    ></Image>
            )
        })}
    </div>
    </div>

  )
}

export default Gallery