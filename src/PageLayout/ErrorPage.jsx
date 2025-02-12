import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="container mx-auto">
        <div className="h-[80vh] flex flex-col justify-center items-center">
          <div className=" ">
            <img
              src="https://i.ibb.co.com/jv7BnWkZ/404.gif"
              alt=""
              className="w-full object-cover object-center"
            />
            <p className="text-4xl font-bold text-center text-yellow-400">
              <i>Oops! Something went wrong!</i>
            </p>
          </div>

          <p className="text-4xl font-bold text-center text-yellow-400">
            <i>{error.statusText || error.message}</i>
          </p>
          <button
            onClick={handleGoBack}
            className="px-8 py-2 my-2 font-fs tracking-wide rounded-full text-white capitalize transition-colors duration-300 transform bg-green-500 hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
          >
            go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
