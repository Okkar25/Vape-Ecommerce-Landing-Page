import React from "react";
import Item3 from "../assets/member/item3.jpg";
import Item6 from "../assets/member/item6.jpg";
import Mem6 from "../assets/member/member6.jpg";
import MemPlus from "../assets/member/memberPlus.jpg";

const MemberShip = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 md:grid-rows-2 gap-2 sm:gap-3 container mx-auto mb-10 sm:px-10 lg:px-16">
      <div className="sm:col-span-3 sm:row-span-2 sm:rounded-xl overflow-hidden relative sm:w-full sm:shadow-lg">
        <div className="absolute bottom-5 md:bottom-0 lg:bottom-10 left-8 md:flex lg:block items-center">
          <p className="sm:text-[25px] text-[17px] font-roboto lg:text-[30px] xl:text-[45px] font-bold w-[100px] sm:w-[100px] md:w-[200px] lg:w-[200px] mb-3">
            Membership Program
          </p>
          <p className="sm:text-[20px] font-semibold sm:w-[200px] md:w-[300px] my-3 hidden xl:block">
            Be a Vape Pi member and get our special exclusive offers
          </p>
          <button className="bg-gray-800 text-white py-1 px-5 sm:py-2 sm:px-7 md:py-1 md:px-5 rounded-full hover:ring-4 ring-gray-500 duration-200">
            View
          </button>
        </div>
        <img
          src={MemPlus}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="row-span-2 bg-member flex items-center sm:shadow-lg sm:rounded-xl overflow-hidden relative sm:w-[150px] sm:h-[150px] md:w-full md:h-full">
        <img
          src={Mem6}
          alt=""
          className="hover:scale-90 duration-300 ms-auto sm:ms-0 w-[180px] sm:w-[150px] md:w-full"
        />
        <div className="absolute sm:bottom-5 left-5 block sm:hidden xl:flex justify-between items-center gap-10 lg:hidden">
          <div>
            <p className="text-[23px] font-bold font-poppins">Disposable</p>
            <p className="sm:w-[150px] md:hidden lg:block font-poppins">
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

      <div className="bg-member flex justify-center items-start sm:shadow-lg sm:rounded-xl overflow-hidden relative sm:w-[150px] sm:h-[150px] md:w-full md:h-full">
        <img
          src={Item6}
          alt=""
          className="md:w-[150px] sm:w-[150px] ms-auto sm:ms-0 w-[180px] hover:scale-90 duration-300"
        />
        <div className="absolute bottom-14 sm:bottom-3 left-5 sm:hidden xl:flex justify-between items-center gap-10 lg:hidden">
          <div>
            <p className="text-[23px] font-bold font-poppins">Pods</p>
            <p className="sm:w-[150px] font-poppins">
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

      <div className="bg-member flex justify-center items-start sm:shadow-lg sm:rounded-xl overflow-hidden relative sm:w-[150px] sm:h-[150px] md:w-full md:h-full">
        <img
          src={Item3}
          alt=""
          className="md:w-[150px] sm:w-[150px] ms-auto sm:ms-0 w-[180px] hover:scale-90 duration-300"
        />
        <div className="absolute bottom-14 sm:bottom-3 left-5 sm:hidden xl:flex justify-between items-center gap-10 lg:hidden">
          <div>
            <p className="text-[23px] font-bold font-poppins">Devices</p>
            <p className="font-poppins sm:w-[150px]">
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
