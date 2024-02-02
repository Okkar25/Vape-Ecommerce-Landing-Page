import React, { useRef } from "react";
import Slider from "react-slick";
import Hero1 from "../assets/hero/hero1.jpg";
import Hero2 from "../assets/hero/hero2.jpg";
import Hero7 from "../assets/hero/hero7.jpg";
import Hero8 from "../assets/hero/hero8.jpg";

const settings = {
  dots: true,
  infinite: true,
  speed: 1700,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
};

const Hero = () => {
  const SliderRef = useRef(null);

  return (
    <div className="mb-10 w-full">
      <div className="relative h-screen overflow-hidden">
        {/* logo */}
        <div className="absolute z-50 sm:flex gap-5 top-10 left-1/2 -translate-x-1/2 sm:left-48">
          <img
            className="w-[120px] sm:w-[150px]"
            src="https://sen.voopoo.com.cn/www-voopoo/static/dist/images/logo.png?v=3a6cae85dd"
            alt=""
          />
        </div>

        {/* setting icon */}
        <div className="absolute z-50 sm:flex gap-8 top-10 right-10 sm:top-10 sm:right-48">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8 cursor-pointer sm:inline-block hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8 cursor-pointer sm:inline-block hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        {/* hero caption */}
        <div className="absolute flex flex-col gap-1 justify-center select-none items-center bottom-1/3 sm:bottom-18 sm:bottom-24 left-1/2 -translate-x-1/2 z-50">
          <h3 className="text-white text-xl sm:text-3xl">The Best Look</h3>
          <h1 className="text-white text-center text-[40px] sm:text-[60px] font-bold">
            Anytime Anywhere
          </h1>
          <h5 className="text-white text-md sm:text-xl">
            Starts from 10,000 MMK
          </h5>
          <button className="text-white text-xl py-1 px-5 sm:py-2 sm:px-7 bg-white/30 hover:bg-white/50 hover:ring-2 hover:ring-white mt-5 rounded-full">
            View
          </button>
        </div>

        <Slider {...settings} ref={SliderRef}>
          <div className="">
            <img
              src={Hero1}
              alt=""
              className="w-full h-screen object-right object-cover"
            />
          </div>

          <div>
            <img
              src={Hero2}
              alt=""
              className="w-full h-screen object-left object-cover"
            />
          </div>

          <div>
            <img
              src={Hero7}
              alt=""
              className="w-full h-screen object-right object-cover"
            />
          </div>

          <div>
            <img
              src={Hero8}
              alt=""
              className="w-full h-screen object-center object-cover"
            />
          </div>
        </Slider>

        <button
          onClick={() => SliderRef.current.slickPrev()}
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-5 sm:px-10 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-7 h-24 sm:w-10 sm:h-32 md:w-10 md:h-48 rounded-lg bg-white/30  dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          onClick={() => SliderRef.current.slickNext()}
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-5 sm:px-10 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-7 h-24 sm:w-10 sm:h-32 md:w-10 md:h-48 rounded-lg bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
