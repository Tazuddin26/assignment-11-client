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
        className="object-cover object-center w-full rounded-t-md h-48 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-3">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide">{postTitle}</h2>
          <p className="text-xl font-bold tracking-wide text-lime-600">
            {category}
          </p>
          <p className="dark:text-gray-800 w-72 text-gray-500 ">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center">
        <Link to={`/postDetails/${_id}`}>
        <button
            type="button"
            className="px-8 py-3 btn btn-outline hover:shadow-lg hover:shadow-lime-500/50 bg-lime-600 font-semibold rounded-xl dark:bg-gray-800 dark:text-gray-100"
          >
            View Details
          </button>
        </Link>
          <p className="text-gray-500">Deadline: {deadline}</p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedCard;
