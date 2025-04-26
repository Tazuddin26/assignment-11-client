import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-gray-700 dark:text-gray-800 dark:bg-zinc-800">
      <div className="container lg:flex justify-around py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="">
          <img
            src="https://i.ibb.co.com/rvQQPst/logo.png"
            alt="NewDay"
            className="lg:w-36 w-28  p-2 m-2 rounded-xl bg-lime-400"
          />
          <p className="w-10/12 lg:mt-6 font-fs text-xl ">
            Our fund works to save the nature and our planet for future
            generations, and to decrease nowadays harmful human activity!
          </p>
        </div>
        <div className=" ">
          <div className="space-y-3 ">
            <h3 className="tracking-wide uppercase dark:text-gray-900 text-2xl font-fs font-bold">
              Gallery
            </h3>
            <div className="container relative lg:max-w-xs overflow-hidden bg-cover bg-no-repeat grid grid-cols-2 gap-4 p-4  md:grid-cols-4">
              <img
                src="https://i.ibb.co.com/phkCHRx/education1.jpg"
                alt=""
                className="w-full cursor-pointer hover:opacity-25 object-cover object-center col-span-2 row-span-2 rounded shadow-sm h-[220px] md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
              />

              <img
                alt=""
                className="w-full hover:opacity-25 cursor-pointer rounded shadow-sm h-[100px] object-cover object-center  dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co.com/dWkK0H3/food-gaza.jpg"
              />
              <img
                alt=""
                className="w-full hover:opacity-25 border cursor-pointer rounded shadow-sm h-[100px] object-cover object-center  dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co.com/NTLCX1S/freehealth.jpg"
              />
              <img
                alt=""
                className="w-full  hover:opacity-25 border cursor-pointer rounded shadow-sm h-[100px] object-cover object-center  dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co.com/HGw66RB/education2.jpg"
              />
              <img
                alt=""
                className="w-full border hover:opacity-25 cursor-pointer rounded shadow-sm h-[100px] object-cover object-center dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co.com/zGpzdfR/animal2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-600">
        © 2024 Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
