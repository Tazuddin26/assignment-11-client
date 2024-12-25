import { Link, useLoaderData } from "react-router-dom";

const VolunteerPostDetails = () => {
  const {
    _id,
    thumbnail,
    postTitle,
    description,
    category,
    deadline,
    location,
    noOfVolunteersNeeded,
    organizerName,
    organizerEmail,
  } = useLoaderData();
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 mt-10">
      <div className="container w-full flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center lg:w-7/12">
          <img src={thumbnail} alt="" className="object-contain rounded-xl " />
        </div>

        <div className=" lg:w-6/12 text-start flex flex-col justify-center p-6  rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
          <h1 className="mb-4 lg:text-4xl text-3xl font-bold leading-none ">
            {postTitle}
          </h1>
          <div className="flex justify-between items-center sm:mb-4">
            <p className=" text-2xl font-semibold ">
              Category:{" "}
              <span className="text-lime-600 font-semibold">{category}</span>
            </p>
          </div>
          <p className="text-xl text-gray-500 mb-6">{description}</p>
          <p className="text-xl font-bold ">
            Volunteer:{" "}
            <span className="border-2 btn btn-outline rounded-full border-purple-500 bg-lime-500">
              {noOfVolunteersNeeded}
            </span>
          </p>
          <div className="text-start lg:flex lg:space-x-3">
            <p className="text-xl">Deadline: {deadline}</p>
            <p className="text-xl">Location: {location}</p>
          </div>
          <p className="text-[22px] mt-4 text-start">
            Information Of Organization:{" "}
          </p>
          <hr className="mb-3" />
          <div className="lg:flex justify-between items-center lg:space-x-3 text-xl">
            <p>Name: {organizerName}</p>
            <p>Email: {organizerEmail}</p>
          </div>
          <div className="flex lg:justify-end justify-center mt-6">
            <Link to={`/beVolunteer/${_id}`}>
              <button className="px-8 py-3 btn btn-outline hover:shadow-lg hover:shadow-lime-500/50 bg-lime-600 uppercase">
                Be a Volunteer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerPostDetails;
