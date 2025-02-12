import { Link } from "react-router-dom";

const VolunteerNeedCard = ({ volunteer }) => {
  const { _id, thumbnail, postTitle, description, category, deadline } =
    volunteer;

  return (
    <div
      className=" rounded-md hover:shadow-custom-light dark:bg-gray-50
     dark:text-gray-800 hover:scale-105 -translate-y-3 duration-300 ease-in-out border "
    >
      <img
        src={thumbnail}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-40 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-4 space-y-2">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-wide font-fs">{postTitle}</h2>
          <p className="text-xl font-bold tracking-wide text-green-600 font-fs">
            {category}
          </p>
          <p className="dark:text-gray-800 w-72 text-lg text-gray-500 font-fs">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Link to={`/postDetails/${_id}`}>
            <button
              type="button"
              className="px-4 py-2 font-fs tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-sm hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
            >
              View Details
            </button>
          </Link>
          <p className="text-gray-500 font-fs">{deadline}</p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedCard;
