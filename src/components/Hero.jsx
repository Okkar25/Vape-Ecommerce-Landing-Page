import React from "react";

const Hero = () => {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative h-screen  overflow-hidden">
        <div className="absolute z-50 sm:flex gap-5 top-10 left-1/2 -translate-x-1/2 sm:left-48">
          <img
            className="w-[120px] sm:w-[150px]"
            src="https://sen.voopoo.com.cn/www-voopoo/static/dist/images/logo.png?v=3a6cae85dd"
            alt=""
          />
        </div>

        <div className="absolute z-50 sm:flex gap-7 top-10 right-10 sm:top-10 sm:right-48">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6 cursor-pointer sm:inline-block hidden"
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
            className="w-6 h-6 cursor-pointer sm:inline-block hidden"
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
            className="w-6 h-6 cursor-pointer"
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
          <h3 className="text-white text-xl sm:text-2xl">The Best Look</h3>
          <h1 className="text-white text-center text-[40px] sm:text-[50px] font-bold">
            Anytime Anywhere
          </h1>
          <h5 className="text-white text-md sm:text-lg">
            Starts from 10,000 MMK
          </h5>
          <button className="text-white text-md py-1 px-5 bg-white/30 hover:bg-white/50 hover:ring-2 hover:ring-white mt-5 rounded-full">
            View
          </button>
        </div>

        {/* Item 1 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../public/hero/hero1.jpg"
            className="absolute block w-full h-screen object-right object-cover sm:object-cover -translate-x-1/2 left-1/2 sm:h-screen"
            alt="..."
          />
        </div>

        {/* Item 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../public/hero/hero2.jpg"
            className="absolute block w-full h-screen object-left object-cover sm:object-cover -translate-x-1/2 left-1/2 sm:h-screen"
            alt="..."
          />
        </div>

        {/* Item 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../public/hero/hero8.jpg"
            className="absolute block w-full h-screen object- object-cover sm:object-cover -translate-x-1/2 left-1/2 sm:h-screen"
            alt="..."
          />
        </div>

        {/* Item 4 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../public/hero/hero7.jpg"
            className="absolute block w-full h-screen object-right object-cover sm:object-cover -translate-x-1/2 left-1/2 sm:h-screen"
            alt="..."
          />
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-10 sm:bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-2 h-2 md:w-3 md:h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to={0}
        />
        <button
          type="button"
          className="w-2 h-2 md:w-3 md:h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to={1}
        />
        <button
          type="button"
          className="w-2 h-2 md:w-3 md:h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to={2}
        />
        <button
          type="button"
          className="w-2 h-2 md:w-3 md:h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to={3}
        />
      </div>

      {/* Slider controls */}
      <button
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
  );
};

export default Hero;
