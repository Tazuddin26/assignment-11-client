import { Link, useLocation } from "react-router-dom";
const Error404 = () => {
  const location = useLocation();
  return (
    <section className="bg-white font-qs">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <h1 className="mt-3 text-3xl font-bold text-gray-800 dark:text-white md:text-3xl">
            Sorry, There is no Data in the Server
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, we could not find this page.Here are some helpful links:
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <Link
              to="/"
              className="btn btn-warning "
            >
              Quick Home
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <img
            className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
            src="https://i.ibb.co.com/LhPR3cK/detective-animation-404-error-page.gif"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Error404;
