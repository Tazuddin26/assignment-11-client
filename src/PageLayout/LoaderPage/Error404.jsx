import { Link, useLocation } from "react-router-dom";
const Error404 = () => {
  const location = useLocation();
  return (
    <section className="bg-white font-qs ">
      <div className="container min-h-screen mx-auto lg:flex lg:items-center justify-center lg:gap-12">
        <div className="relative w-full lg:w-1/2 lg:mt-0">
        <div className="">
          <h1 className="text-4xl text-center font-fs font-bold text-gray-800 dark:text-white md:text-3xl">
            Sorry, There is no Data in the Request
          </h1>
        </div>
          <img
            className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
            src="https://i.ibb.co.com/LhPR3cK/detective-animation-404-error-page.gif"
            alt=""
          />
        </div>
        <div className="flex items-center mt-6 gap-x-3 justify-center">
            <Link to="/" className="px-6 py-2 font-fs tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-full hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
              Quick Home
            </Link>
          </div>
      </div>
    </section>
  );
};

export default Error404;
