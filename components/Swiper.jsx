import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import Image from "next/image";

//images
import img1 from '../public/gallery1/1.jpg'
import img3 from '../public/gallery1/3.jpg'
import img4 from '../public/gallery1/4.jpg'
import img5 from '../public/gallery1/5.jpg'
import img6 from '../public/gallery1/6.jpg'
import img7 from '../public/gallery1/7.jpg'
import img8 from '../public/gallery1/8.jpg'
import img9 from '../public/gallery1/9.jpg'
import img10 from '../public/gallery1/10.jpg'

export default function SwiperImg() {

    const data = [
        {
            id: 1,
            imgSrc : img1
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
            id: 9,
            imgSrc : img9
        },
        {
            id: 10,
            imgSrc : img10
        }
    ];

  return (
    <div className="mb-5">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {data.map((item, index) => {
            return (
                <SwiperSlide key={index}>                    
                <Image
                  alt="logo"
                  src={item.imgSrc}
                  className="w-full object-cover aspect-square rounded-full"
                  loading='lazy'
                >
                </Image>
                </SwiperSlide>
            )
        })}

      </Swiper>
    </div>
  );
}