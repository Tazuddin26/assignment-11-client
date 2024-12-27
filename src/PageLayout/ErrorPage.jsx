import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  const handleGoBack = () => {
   navigate("/");
}
  return (
    <div className="flex justify-center items-center my-32">
      <div className="border rounded-2xl w-8/12 h-[500px] bg-slate-500  ">
        <button
          onClick={handleGoBack}
          className="btn btn-outline text-base bg-yellow-500"
        >
          Go Back Home{" "}
        </button>
        <div className="">
          <div className=" flex justify-center">
            <img
              src="https://i.ibb.co.com/wdwDHVh/404.png"
              alt=""
              className="w-40 h-[200px]"
            />
          </div>
          <h1 className="text-8xl font-bold text-yellow-400 text-center">
            404
          </h1>
          <p className="text-4xl font-bold text-center text-yellow-400">
            Page not found
          </p>

          <p className="text-4xl font-bold text-center text-yellow-400">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;