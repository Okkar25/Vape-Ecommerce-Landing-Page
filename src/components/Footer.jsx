import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto px-5 sm:px-10 lg:px-16">
      <div className="flex flex-col sm:flex-row flex-wrap gap-y-5">
        <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex flex-col gap-3 font-semibold ">
          <h3 className="text-2xl font-bold font-opensans">Customer Service</h3>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
            <p className="text-md">Terms & Privacy Policy</p>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>

            <p className="text-md">Return Policy</p>
          </div>
        </div>

        <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex flex-col gap-3">
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

        <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex flex-col gap-2 sm:gap-3">
          <h3 className="text-2xl font-bold font-opensans">Contact Us</h3>
          <div className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p className="text-md font-semibold w-[85%]">
              Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thingangyun
              Tsp, Yangon
            </p>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <p className="text-md font-semibold">09458489458</p>
          </div>
        </div>

        <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex flex-col sm:gap-3">
          <h3 className="text-2xl font-bold font-opensans">Download Our App</h3>
          <img
            className="w-40 -ms-3"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
            alt=""
          />
        </div>

        <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex flex-col gap-3">
          <h3 className="text-2xl font-bold font-opensans">Payment</h3>
          <div className="flex gap-3 sm:gap-1">
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

        <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex flex-col gap-3">
          <h3 className="text-2xl font-bold font-opensans">Follow Us On</h3>
          <div className="flex gap-3">
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

      <p className="text-center font-opensans text-lg font-semibold mb-5 mt-10">
        &copy; Copyright 2024 by S.D Co.,Ltd. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
