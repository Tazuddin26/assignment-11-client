import React from "react";

const TaskHighlite = () => {
  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-800 bg-green-50 ">
        <h1 className="text-3xl font-semibold ml-20">Our Task Views</h1>
      <div className="container py-10 grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 ">
        <div className="flex p-4 rounded-lg  dark:bg-gray-50 dark:text-gray-800 ">
          <div className="flex justify-center align-middle gap-4 bg-purple-200 p-6  rounded-xl ">
            <p className="text-6xl font-semibold leading-none text-lime-600">
              200
            </p>
            <p className="capitalize text-2xl font-bold">Rescued animals</p>
          </div>
        </div>
        <div className="flex p-4  rounded-lg  dark:bg-gray-50 dark:text-gray-800 ">
          <div className="flex justify-center align-middle gap-4 bg-purple-200 p-6 rounded-xl">
            <p className="text-6xl font-semibold leading-none text-lime-600">
              320
            </p>
            <p className="capitalize text-2xl font-bold">Cleared Beach</p>
          </div>
        </div>
        <div className="flex p-4  rounded-lg  dark:bg-gray-50 dark:text-gray-800">
          <div className="flex justify-center items-center align-middle gap-4 bg-purple-200 p-6 rounded-xl">
            <p className="text-6xl font-semibold leading-none text-lime-600">
              165
            </p>
            <p className="capitalize text-2xl font-bold">Health Support</p>
          </div>
        </div>
        <div className=" p-4 rounded-lg  dark:bg-gray-50 dark:text-gray-800">
          <div className="flex  justify-center align-middle gap-4 bg-purple-200 p-6  rounded-xl">
            <p className="text-6xl font-semibold leading-none text-lime-600">
              2000
            </p>
            <p className="capitalize text-2xl font-bold">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskHighlite;
