import React from "react";
import SlideItem14 from "../assets/sliderItems/BestDeal10.jpg";
import SlideItem13 from "../assets/sliderItems/BestDeal6.jpg";
import SlideItem12 from "../assets/sliderItems/BestDeal7.jpg";
import SlideItem1 from "../assets/sliderItems/item1.jpg";
import SlideItem10 from "../assets/sliderItems/item10.jpg";
import SlideItem11 from "../assets/sliderItems/item11.jpg";
import SlideItem2 from "../assets/sliderItems/item2.jpg";
import SlideItem3 from "../assets/sliderItems/item3.jpg";
import SlideItem4 from "../assets/sliderItems/item4.jpg";
import SlideItem5 from "../assets/sliderItems/item5.jpg";
import SlideItem7 from "../assets/sliderItems/item7.jpg";
import SlideItem8 from "../assets/sliderItems/item8.jpg";
import SlideItem9 from "../assets/sliderItems/item9.jpg";

import Pod from "../assets/sliderItems/item3.jpg";

const settings = {
  dots: false,
  infinite: false,
  speed: 1700,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 5000,
};

const SlideItemArr = [
  SlideItem3,
  SlideItem3,
  SlideItem3,
  SlideItem3,
  SlideItem14,
  SlideItem9,
  SlideItem11,
  SlideItem10,
  SlideItem12,
  SlideItem13,
  SlideItem7,
  SlideItem2,
  SlideItem1,
  SlideItem5,
  SlideItem8,
  SlideItem4,
];

const Pods = () => {
  return (
    <div className="container mx-auto mb-3 sm:mb-20 sm:px-10 lg:px-16 ">
      <div className="h-[320px] w-full overflow-hidden sm:rounded-2xl bg-[url('./assets/rocks/rocks.jpg')]">
        <div className="flex flex-row h-full overflow-auto bg-cover bg-gradient-to-r from-transparent via-slideGradient via-30% to-slideGradient">
          <div className="flex flex-col translate-x-3 sm:translate-x-8 md:translate-x-10 lg:translate-x-0 sm:flex-row items-center justify-center sm:justify-end  w-1/3 sm:w-60 lg:w-80 h-full mr-20 ">
            <img src={Pod} className="w-full sm:w-[270px]" alt="" />

            <div className="sm:-translate-x-16 z-20 flex flex-col justify-center items-center">
              <p className="text-[23px] sm:text-[20px] lg:text-[30px] text-white font-bold mb-1">
                Pods
              </p>
              <p className="text-white text-[15px] sm:text-[17px] lg:text-[18px] sm:font-semibold text-center">
                variety of choices available
              </p>
            </div>
          </div>

          <div className="-ms-10 overflow-hidden h-full flex-1">
            <div className="flex flex-row justify-center items-center h-full w-full -ps-20 pe-9 no-scrollbar overflow-x-auto gap-2 sm:gap-3 sm:ps-44 sm:pe-2">
              {Array.from({ length: 15 }, (_, index) => (
                <div className=" w-40 min-w-40 cursor-pointer">
                  <img
                    src={SlideItemArr[index]}
                    className="w-40 h-40 object-cover rounded-2xl bg-slideImgBg"
                    alt=""
                  />

                  <div className="caption flex flex-col justify-center items-center mt-2">
                    <p className="text-md text-white">Lost Vape Orion</p>
                    <p className="text-md text-white">45,000 MMK</p>
                    <p className="text-yellow-300 flex gap-1 items-center">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                      <span>600 Points</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pods;
