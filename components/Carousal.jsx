import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import img1 from '../public/gallery/1.jpeg'
import img2 from '../public/gallery/2.jpg'
import img3 from '../public/gallery/3.jpeg'
import img4 from '../public/gallery/4.jpeg'
import img5 from '../public/gallery/5.jpeg'
import img6 from '../public/gallery/6.jpeg'
import img7 from '../public/gallery/7.jpg'
import img8 from '../public/gallery/8.jpeg'
import img9 from '../public/gallery/9.jpeg'
import img10 from '../public/gallery/10.jpeg'
import img11 from '../public/gallery/11.jpeg'
import img12 from '../public/gallery/12.jpeg'
import img13 from '../public/gallery/13.jpeg'
import img14 from '../public/gallery/14.jpeg'
import img15 from '../public/gallery/15.jpeg'
import img16 from '../public/gallery/16.jpeg'

// Data

// const data = 
// {
//     "resources": [
//       {
//         "title": "Find me on Twitter",
//         "link": "https://twitter.com/kendalmintcode",
//         "imageUrl": img1
//       },
//       {
//         "title": "Welcome to Ark Labs",
//         "link": "https://ark-labs.co.uk",
//         "imageUrl": img2
//       },
//       {
//         "title": "Some sort of third title",
//         "link": "https://twitter.com/kendalmintcode",
//         "imageUrl": img3
//       },
//       {
//         "title": "A personal site perhaps?",
//         "link": "https://robkendal.co.uk",
//         "imageUrl": img4
//       },
//       {
//         "title": "Super item number five",
//         "link": "https://twitter.com/kendalmintcode",
//         "imageUrl": img5
//       },
//       {
//         "title": "Super item number six",
//         "link": "https://twitter.com/kendalmintcode",
//         "imageUrl": img6
//       },
//       {
//         "title": "Super item number seven",
//         "link": "https://twitter.com/kendalmintcode",
//         "imageUrl": img7
//       },
//       {
//         "title": "Super item number eight",
//         "link": "https://twitter.com/kendalmintcode",
//         "imageUrl": img8
//       },
//       {
//         "title": "Super item number the last",
//         "link": "https://twitter.com/kendalmintcode",
//         "imageUrl": img9
//       }
//     ]
//   };

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
        id: 9,
        imgSrc : img9
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
];

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-pink-500 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-64 h-64"
              >
                <a
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                >
                    <Image
                    alt="logo"
                    src={resource.imgSrc}
                    key={index}
                    className="w-full object-cover aspect-square rounded-full"
                    loading='lazy'
                    ></Image>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;