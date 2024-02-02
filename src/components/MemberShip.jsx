import React from "react";
import Item3 from "../assets/member/item3.jpg";
import Item6 from "../assets/member/item6.jpg";
import Mem6 from "../assets/member/member6.jpg";
import MemPlus from "../assets/member/memberPlus.jpg";

const MemberShip = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 md:grid-rows-2 sm:gap-3 mx:10 sm:mx-28 mb-20">
      <div className="sm:col-span-3 sm:row-span-2 sm:rounded-xl overflow-hidden relative sm:w-full">
        <div className="absolute bottom-5 md:bottom-0 lg:bottom-10 left-8 md:flex lg:block items-center">
          <p className="sm:text-[22px] text-[17px] md:text-[25px] lg:text-[45px] font-bold w-[100px] sm:w-[100px] md:w-[200px] lg:w-[200px] mb-3">
            Membership Program
          </p>
          <p className="sm:text-[20px] md:text-[20px] font-semibold sm:w-[200px] md:w-[300px] my-3 hidden lg:block">
            Be a Vape Pi member and get our special exclusive offers
          </p>
          <button className="bg-gray-800 text-white py-1 px-5 sm:py-2 sm:px-7 rounded-full hover:ring-4 ring-gray-500 duration-200">
            View
          </button>
        </div>
        <img
          src={MemPlus}
          alt=""
          className="h-full object-cover object-right"
        />
      </div>

      <div className="row-span-2 bg-member flex items-center sm:rounded-xl overflow-hidden relative sm:w-[150px] sm:h-[150px] md:w-full md:h-full">
        <img
          src={Mem6}
          alt=""
          className="hover:scale-90 duration-300 ms-auto sm:ms-0 w-[180px] sm:w-[150px] md:w-full"
        />
        <div className="absolute sm:bottom-5 left-5 block sm:hidden lg:flex justify-between items-center gap-10 md:hidden">
          <div>
            <p className="text-[23px] font-bold">Devices</p>
            <p className="font-semibold sm:w-[150px] md:hidden lg:block">
              Find the best for you here !
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hidden sm:flex cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>

      <div className="bg-member flex justify-center items-start sm:rounded-xl overflow-hidden relative sm:w-[150px] sm:h-[150px] md:w-full md:h-full">
        <img
          src={Item6}
          alt=""
          className="md:w-[150px] sm:w-[150px] ms-auto sm:ms-0 w-[180px] hover:scale-90 duration-300"
        />
        <div className="absolute bottom-14 sm:bottom-5 left-5 sm:hidden lg:flex justify-between items-center gap-10 md:hidden">
          <div>
            <p className="text-[23px] font-bold">Pods</p>
            <p className="font-semibold sm:w-[150px] ">
              Variety of choices available
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer hidden sm:flex"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>

      <div className="bg-member flex justify-center items-start sm:rounded-xl overflow-hidden relative sm:w-[150px] sm:h-[150px] md:w-full md:h-full">
        <img
          src={Item3}
          alt=""
          className="md:w-[150px] sm:w-[150px] ms-auto sm:ms-0 w-[180px] hover:scale-90 duration-300"
        />
        <div className="absolute bottom-14 sm:bottom-5 left-5 sm:hidden lg:flex justify-between items-center gap-10 md:hidden">
          <div>
            <p className="text-[23px] font-bold">Disposable</p>
            <p className="font-semibold sm:w-[150px]">
              Easy, clean & superb flavour
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer hidden sm:flex"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
