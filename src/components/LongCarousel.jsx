import React, { useRef } from "react";
import Slider from "react-slick";
import Slide1 from "../assets/LongSlide/hero3.jpg";
import Slide4 from "../assets/LongSlide/hero4.jpg";
import Slide3 from "../assets/LongSlide/hero5.jpg";

const settings = {
  dots: false,
  infinite: true,
  speed: 1700,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
};

const LongCarousel = () => {
  const SliderRef = useRef(null);

  return (
    <div className="container mx-auto mb-8 sm:mb-20 sm:px-10 lg:px-16">
      <div className="max-h-[270px] overflow-hidden sm:rounded-2xl relative">
        <Slider {...settings} ref={SliderRef}>
          <div className="">
            <img src={Slide1} alt="" className="w-full" />
          </div>

          <div>
            <img src={Slide3} alt="" className="w-full" />
          </div>

          <div>
            <img src={Slide4} alt="" className="w-full" />
          </div>
        </Slider>

        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-2 sm:px-10">
          <button
            onClick={() => SliderRef.current.slickPrev()}
            className="bg-gray-300 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full flex justify-center items-center hover:bg-gray-400 active:ring-2 ring-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={() => SliderRef.current.slickNext()}
            className="bg-gray-300 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full flex justify-center items-center hover:bg-gray-400 active:ring-2 ring-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LongCarousel;
