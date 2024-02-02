import React from "react";
import BestDeal10 from "../assets/BestDeal/BestDeal10.jpg";
import BestDeal2 from "../assets/BestDeal/BestDeal2.jpg";
import BestDeal6 from "../assets/BestDeal/BestDeal6.jpg";
import BestDeal7 from "../assets/BestDeal/BestDeal7.jpg";
import BestDeal8 from "../assets/BestDeal/BestDeal8.jpg";
import BestDeal9 from "../assets/BestDeal/BestDeal9.jpg";

const BestDeals = () => {
  return (
    <div className="mt-14 mx:10 sm:mx-28 mb-10">
      <div className="flex flex-col items-center mb-10">
        <h1 className="font-bold text-[40px] sm:text-[50px]">Best Deals</h1>
        <h4 className=" text-lg sm:text-xl font-semibold">Just For You</h4>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div className="best-deal-item mb-3 sm:mb-0">
          <div className="relative flex justify-center mx-auto w-[250px] h-[250px] sm:w-[210px] sm:h-[210px] items-center bg-gray-200 rounded-3xl overflow-hidden">
            <div className="bg-red-500 absolute top-0 px-4 py-1 rounded-b-md text-white font-bold">
              25% Off
            </div>
            <img
              className="w-[210px] h-[210px] hover:scale-110 duration-200 cursor-pointer"
              src={BestDeal2}
              alt=""
            />
          </div>
          <div className="caption mt-4 flex flex-col items-center">
            <p className="text-md">Geek Vape L200</p>
            <p className="text-lg font-semibold">70,000 MMK</p>
            <p className="text-sm line-through">80,000 MMK</p>
            <p className="text-yellow-300 font-bold flex gap-1 items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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

        <div className="best-deal-item mb-3 sm:mb-0">
          <div className="relative flex justify-center mx-auto w-[250px] h-[250px] sm:w-[210px] sm:h-[210px] items-center bg-gray-200 rounded-3xl overflow-hidden">
            <div className="bg-red-500 absolute top-0 px-4 py-1 rounded-b-md text-white font-bold">
              25% Off
            </div>
            <img
              className="w-[210px] h-[210px] hover:scale-110 duration-200 cursor-pointer"
              src={BestDeal6}
              alt=""
            />
          </div>
          <div className="caption mt-4 flex flex-col items-center">
            <p className="text-md">Lost Vape Orion</p>
            <p className="text-lg font-semibold">45,000 MMK</p>
            <p className="text-sm line-through">50,000 MMK</p>
            <p className="text-yellow-300 font-bold flex gap-1 items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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

        <div className="best-deal-item mb-3 sm:mb-0">
          <div className="relative flex justify-center mx-auto w-[250px] h-[250px] sm:w-[210px] sm:h-[210px] items-center bg-gray-200 rounded-3xl overflow-hidden">
            <div className="bg-red-500 absolute top-0 px-4 py-1 rounded-b-md text-white font-bold">
              25% Off
            </div>
            <img
              className="w-[210px] h-[210px] hover:scale-110 duration-200 cursor-pointer"
              src={BestDeal7}
              alt=""
            />
          </div>
          <div className="caption mt-4 flex flex-col items-center">
            <p className="text-md">Mystery Disposable Vape</p>
            <p className="text-lg font-semibold">50,000 MMK</p>
            <p className="text-sm line-through">60,000 MMK</p>
            <p className="text-yellow-300 font-bold flex gap-1 items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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

        <div className="best-deal-item mb-3 sm:mb-0">
          <div className="relative flex justify-center mx-auto w-[250px] h-[250px] sm:w-[210px] sm:h-[210px] items-center bg-gray-200 rounded-3xl overflow-hidden">
            <div className="bg-red-500 absolute top-0 px-4 py-1 rounded-b-md text-white font-bold">
              25% Off
            </div>
            <img
              className="w-[210px] h-[210px] hover:scale-110 duration-200 cursor-pointer"
              src={BestDeal8}
              alt=""
            />
          </div>
          <div className="caption mt-4 flex flex-col items-center">
            <p className="text-md">SMOK NORD 5</p>
            <p className="text-lg font-semibold">30,000 MMK</p>
            <p className="text-sm line-through">50,000 MMK</p>
            <p className="text-yellow-300 font-bold flex gap-1 items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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

        <div className="best-deal-item mb-3 sm:mb-0">
          <div className="relative flex justify-center mx-auto w-[250px] h-[250px] sm:w-[210px] sm:h-[210px] items-center bg-gray-200 rounded-3xl overflow-hidden">
            <div className="bg-red-500 absolute top-0 px-4 py-1 rounded-b-md text-white font-bold">
              25% Off
            </div>
            <img
              className="w-[210px] h-[210px] hover:scale-110 duration-200 cursor-pointer"
              src={BestDeal9}
              alt=""
            />
          </div>
          <div className="caption mt-4 flex flex-col items-center">
            <p className="text-md">SMOK NOVO MASTER</p>
            <p className="text-lg font-semibold">65,000 MMK</p>
            <p className="text-sm line-through">80,000 MMK</p>
            <p className="text-yellow-300 font-bold flex gap-1 items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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

        <div className="best-deal-item mb-3 sm:mb-0">
          <div className="relative flex justify-center mx-auto w-[250px] h-[250px] sm:w-[210px] sm:h-[210px] items-center bg-gray-200 rounded-3xl overflow-hidden">
            <div className="bg-red-500 absolute top-0 px-4 py-1 rounded-b-md text-white font-bold">
              25% Off
            </div>
            <img
              className="w-[210px] h-[210px] hover:scale-110 duration-200 cursor-pointer"
              src={BestDeal10}
              alt=""
            />
          </div>
          <div className="caption mt-4 flex flex-col items-center">
            <p className="text-md">Vaporesso XROS 3</p>
            <p className="text-lg font-semibold">55,000 MMK</p>
            <p className="text-sm line-through">60,000 MMK</p>
            <p className="text-yellow-300 font-bold flex gap-1 items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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
      </div>

      <div className="flex justify-center mt-5 sm:mt-8">
        <button className="bg-gray-200 w-[200px] sm:w-[250px] py-2 flex justify-center items-center rounded-full font-semibold hover:bg-gray-300">
          <span>View More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" ms-2 w-4 h-4"
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
  );
};

export default BestDeals;
