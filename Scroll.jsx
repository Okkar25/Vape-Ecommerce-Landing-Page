import React from "react";

const Scroll = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto mt-[4rem] px-2 md:px-0">
      <div className="w-full h-80 bg-black rounded-xl overflow-hidden mt-[3rem]">
        <div className="flex flex-row h-full overflow-auto">

          <div className="flex flex-col sm:flex-row items-center justify-center w-2/3 sm:w-80 h-full bg-[url('https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover pr-20 sm:pl-10">
            <img
              src="/image/vape.png"
              alt
              className="h-32 md:h-[200px] object-fit "
              height={150}
            />
            <div className="text-white w-36 ml-5">
              <p className="text-lg md:text-2xl font-bold">Devices</p>
              <p className="text-sm md:text-base">
                Find the best for you here!
              </p>
            </div>
          </div>



          <div className="-ms-20 flex-1 h-full bg-gradient-to-r from-transparent via-neutral-700 via-10% to-neutral-700 pl-10 overflow-hidden">
            <div className="flex flex-row items-center gap-4 h-full overflow-x-auto scroll-bar-hide p-4">
              <a href="#" className="flex flex-col items-center w-40 min-w-40">
                <img
                  src="https://www.ecigwizard.com/cdn/shop/products/voopoo-drag-s-pod-kit-galaxy-blue_800x800_crop_center.jpg?v=1698753674"
                  alt
                  className="w-40 h-40 object-cover rounded-lg"
                />
                <div className="text-white text-center mt-4">
                  <p className="font-thin">Refreshing Mint</p>
                  <p className="font-medium">30,000 MMK</p>
                  <p className="text-yellow-500 text-sm">⭐ 600 points</p>
                </div>
              </a>

            </div>
          </div>





        </div>
      </div>
    </div>
  );
};

export default Scroll;
