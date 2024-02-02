import React from "react";
import Release1 from "../assets/member/item1.jpg";
import Release11 from "../assets/member/item11.jpg";
import Release7 from "../assets/member/item7.jpg";
import Release9 from "../assets/member/item9.jpg";

const NewReleased = () => {
  return (
    <div className=" container mx-auto mb-20">
      <div className="flex flex-col justify-center items-center w-full mb-5">
        <p className="text-[30px] md:text-[40px] lg:text-[50px] font-bold">
          <span className="text-red-500">New</span> Released
        </p>
        <p className="text-lg md:text-xl font-semibold">
          Try Our Latest Flavors Here
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-1 sm:gap-5">
        <div className="bg-yellow-200 flex justify-end lg:justify-center items-center w-full sm:rounded-2xl relative">
          <img src={Release1} alt="" className="w-[180px] sm:w-[200px] " />

          <div className="absolute bottom-3 left-5">
            <p className="text-xl">Citras Mon</p>
            <p className="text-lg">Nic 3 Percent</p>
            <p className="text-lg font-semibold">30,000 MMK</p>
          </div>
        </div>

        <div className="bg-pink-300 flex justify-end lg:justify-center items-center w-full sm:rounded-2xl relative">
          <img src={Release7} alt="" className="w-[180px] sm:w-[200px] " />
          <div className="absolute bottom-3 left-5">
            <p className="text-xl">Starwberry Taste</p>
            <p className="text-lg">Nic 3 Percent</p>
            <p className="text-lg font-semibold">35,000 MMK</p>
          </div>
        </div>

        <div className="bg-blue-300 flex justify-end lg:justify-center items-center w-full sm:rounded-2xl relative">
          <img src={Release9} alt="" className="w-[180px] sm:w-[200px] " />
          <div className="absolute bottom-3 left-5">
            <p className="text-xl">Blueberry Taste</p>
            <p className="text-lg">Nic 3 Percent</p>
            <p className="text-lg font-semibold">45,000 MMK</p>
          </div>
        </div>

        <div className="bg-green-300 flex justify-end lg:justify-center items-center w-full sm:rounded-2xl relative">
          <img src={Release11} alt="" className="w-[180px] sm:w-[200px]" />

          <div className="absolute bottom-3 left-5">
            <p className="text-xl">Melon Flavour</p>
            <p className="text-lg">Nic 3 Percent</p>
            <p className="text-lg font-semibold">35,000 MMK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReleased;
