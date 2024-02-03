import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto px-5 sm:px-10 lg:px-32">
      <div className="grid grid-cols-2 gap-2 grid-rows-3 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 xl:grid-cols-4  xl:grid-rows-2 sm:gap-5 md:gap-10 lg:gap-5 h-full md:h-[320px]">
        <div className="flex flex-col gap-3 font-semibold ">
          <h3 className="text-2xl font-bold font-opensans">Customer Service</h3>
          <p className="text-md">Terms & Privacy Policy</p>
          <p className="text-md">Return Policy</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold  font-opensans">Language</h3>
          <div className="text-md flex items-center gap-3 font-semibold">
            <input type="radio" name="language" checked />
            <label htmlFor="unicode">Myanmar (Unicode)</label>
          </div>
          <div className="text-md flex items-center gap-3 font-semibold">
            <input type="radio" name="language" />
            <label htmlFor="zawgyi">Myanmar (Zawgyi)</label>
          </div>
          <div className="text-md flex items-center gap-3 font-semibold">
            <input type="radio" name="language" />
            <label htmlFor="english">English</label>
          </div>
        </div>

        <div className="flex flex-col  gap-3">
          <h3 className="text-2xl font-bold font-opensans">Contact Us</h3>
          <p className="text-md font-semibold">
            Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thingangyun
            Tsp, Yangon
          </p>
          <p className="text-md font-semibold">09458489458</p>
        </div>

        <div className="flex flex-col gap-3 ">
          <h3 className="text-2xl font-bold font-opensans">Download Our App</h3>
          <img
            className="w-40 -ms-3"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold font-opensans">Payment</h3>
          <div className="flex gap-1">
            <img
              className="sm:w-20 sm:h-12 w-14 h-10 rounded-xl object-cover"
              src="https://www.kbzpay.com/wp-content/uploads/sites/9/2020/04/blue-L.png"
              alt="kbz"
            />
            <img
              className="sm:w-20 sm:h-12 w-14 h-10 rounded-lg object-cover"
              src="https://play-lh.googleusercontent.com/XjUGY5EfxEyhUPq1JuadBs4guF0ykiFipRvr052ku3Gc9yfXn2UhP3-Tak7jdtTN24Tj"
              alt="wave"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold font-opensans">Follow Us On</h3>
          <div className="flex gap-1 sm:gap-3">
            <img
              className="sm:w-10 sm:h-10 w-7 h-7 rounded-full object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
              alt="fb"
            />
            <img
              className="sm:w-10 sm:h-10 w-7 h-7 rounded-lg object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
              alt="ig"
            />
            <img
              className="sm:w-10 sm:h-10 w-7 h-7 rounded-lg object-cover"
              src="https://play-lh.googleusercontent.com/EbQM-vsHv42Hg6qZvuK47q_cK3-KObc9GRlhNBWebX0AWrg5nMD92Kniqz8Z1BFpD3U"
              alt="viber"
            />
            <img
              className="sm:w-10 sm:h-10 w-7 h-7 rounded-full object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/800px-Telegram_2019_Logo.svg.png"
              alt="telegram"
            />
            <img
              className="sm:w-10 sm:h-10 w-7 h-7 rounded-full object-cover"
              src="https://store-images.s-microsoft.com/image/apps.60673.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.5d82b7eb-9734-4b51-b65d-a0383348ab1b?h=464"
              alt="twitter"
            />
          </div>
        </div>
      </div>
      <p className="text-center font-opensans block text-lg sm:font-semibold mb-5 md:translate-y-0 mt-0 md:mt-20 lg:mt-16 -translate-y-16">
        &copy; Copyright 2024 by S.D Co.,Ltd. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
