import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800 bg-zinc-800">
      <div className="container text-white flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3 ">
          <img
            src="https://i.ibb.co.com/rvQQPst/logo.png"
            alt="NewDay"
            className="lg:w-36 w-28  p-2 m-2 rounded-xl bg-lime-400"
          />
          <p className="w-10/12 lg:mt-6">
            Our fund works to save the nature and our planet for future
            generations, and to decrease nowadays harmful human activity!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-3/4 ">
          <div className="space-y-4 lg:w-8/12 ">
            <h3 className="tracking-wide uppercase lg:text-center dark:text-gray-900 text-xl font-bold">
              Our Projects
            </h3>
            <ul className="space-y-5 text-start lg:ml-20">
              <li>
                <Link className="">Home</Link>
              </li>
              <li>
                <Link className="">About</Link>
              </li>
              <li>
                <Link className="">Contact</Link>
              </li>
              <li>
                <Link className="">Services</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3  ">
            <h3 className="tracking-wide uppercase dark:text-gray-900 text-xl font-bold">
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
                className="w-full hover:opacity-25 rounded shadow-sm h-[100px] object-cover object-center  dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co.com/dWkK0H3/food-gaza.jpg"
              />
              <img
                alt=""
                className="w-full hover:opacity-25 border rounded shadow-sm h-[100px] object-cover object-center  dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co.com/NTLCX1S/freehealth.jpg"
              />
              <img
                alt=""
                className="w-full  hover:opacity-25 border rounded shadow-sm h-[100px] object-cover object-center  dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co.com/HGw66RB/education2.jpg"
              />
              <img
                alt=""
                className="w-full border hover:opacity-25 rounded shadow-sm h-[100px] object-cover object-center dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co.com/zGpzdfR/animal2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-white dark:text-gray-600">
        © 2024 Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
