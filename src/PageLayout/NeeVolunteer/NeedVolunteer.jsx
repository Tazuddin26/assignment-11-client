import React, { useEffect, useState } from "react";
import VolunteerNeedCard from "../VolunteerNeed/VolunteerNeedCard";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link, useLoaderData } from "react-router-dom";
import LoadingSpinner from "../LoaderPage/LoadingSpinner";

const NeedVolunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isGridView, setIsGridView] = useState(true);
  const [isTableView, setIsTableView] = useState(false);
  const [sortData, setSortData] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://assignment-11-server-ten-mu.vercel.app/volunteers-need?search=${search}&sort=${sortData}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVolunteers(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching initial data:", err));
  }, [search, sortData]);
  // console.log("sorted", sortData);
  // console.log(volunteers);
  const [view, setView] = React.useState("grid");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const handleGridView = (isActive) => {
    setIsGridView(isActive);
    setIsTableView(!isActive);
  };

  const handleTableView = (isActive) => {
    setIsTableView(isActive);
    setIsGridView(!isActive);
  };
  const handleSearchValue = () => {
    console.log("searching text is", searchValue);
    setSearch(searchValue);
  };
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="max-w-7xl mx-auto mt-28">
      <div className=" lg:flex lg:justify-between items-center space-y-6 ">
        <div className="flex gap-4 items-center justify-center ">
          <ToggleButtonGroup
            orientation="horizontal"
            value={view}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton
              onClick={() => handleTableView(true)}
              value="list"
              aria-label="list"
            >
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() => handleGridView(true)}
              value="module"
              aria-label="module"
            >
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>

          <select
            defaultValue="Sorted By Deadline"
            onChange={(e) => setSortData(e.target.value)}
            className="select select-bordered max-w-xs placeholder-gray-500 capitalize font-fs text-base"
          >
            <option disabled>Sorted By Deadline</option>
            <option value="1">Ascending</option>
            <option value="-1">Descending</option>
          </select>
        </div>
        <div className="join ml-16 lg:ml-0">
          <input
            className="input input-bordered join-item"
            placeholder="category "
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <button
            onClick={() => handleSearchValue()}
            className="btn btn-accent bg-green-500 join-item rounded-r-xl capitalize"
          >
            Search
          </button>
        </div>
      </div>
      <article className="max-w-2xl px-6 py-8 mx-auto space-y-16 dark:bg-gray-100 dark:text-gray-900">
        <div className="w-full mx-auto space-y-4">
          <h1 className="text-3xl font-bold leading-none text-center font-fs ">
            Welcome to{" "}
            <img
              src="https://i.ibb.co.com/rvQQPst/logo.png"
              alt=""
              className="w-32 lg:ml-60 ml-28  bg-lime-500 p-2 rounded-xl border font-fs mt-2"
            />{" "}
            Everyone to our beautiful family at a glance
          </h1>
          <p className="text-center font-fs text-gray-600 text-xl">
            I had read articles that advised fresh graduates to volunteer in
            order to know more about their society and the world.
          </p>
        </div>
      </article>
      <div>
        <div className={isGridView ? "block" : "hidden"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 px-2 lg:px-0">
            {volunteers.map((volunteer) => (
              <VolunteerNeedCard key={volunteer._id} volunteer={volunteer} />
            ))}
          </div>
        </div>
        <div className={!isTableView ? "hidden" : "block"}>
          <div className="container p-2 mx-auto sm:p-4 text-gray-800">
            <div className="overflow-x-auto rounded-xl bg-green-50 hidden md:block">
              <table className="min-w-full text-xs rounded-xl">
                <thead className=" border-b border-t bg-sky-100 ">
                  <tr className="py-6 text-base text-center font-fs font-bold">
                    <th className="p-3"></th>
                    <th className="p-3">Post Title</th>
                    <th className="p-3">Posted By</th>
                    <th className="p-3">Category</th>
                    <th className="p-3 text-right">Location</th>
                    <th className="p-3">Deadline</th>
                    <th className="p-3">Volunteer Ready</th>
                    <th className="p-3">View Details</th>
                  </tr>
                </thead>
                <tbody>
                  {volunteers.map((volunteer, index) => (
                    <tr
                      key={index}
                      className="border-b text-base font-fs border-opacity-20 text-center dark:border-gray-300 dark:bg-gray-50"
                    >
                      <td className="p-3">
                        <p>{index + 1}</p>
                      </td>
                      <td className="p-3">
                        <p>{volunteer.postTitle}</p>
                      </td>
                      <td className="p-3 ">
                        <p>{volunteer.organizerName}</p>
                        <p className="dark:text-gray-600 ">
                          {volunteer.organizerEmail}
                        </p>
                      </td>
                      <td className="p-3">
                        <p className="dark:text-gray-600 ">
                          {volunteer.category}
                        </p>
                      </td>
                      <td className="p-3 ">
                        <p className="">{volunteer.location}</p>
                      </td>
                      <td className="p-3">
                        <p className="">{volunteer.deadline}</p>
                      </td>
                      <td className="p-3 ">
                        <p className="">{volunteer.noOfVolunteersNeeded}</p>
                      </td>
                      <td className="p-3">
                        <Link
                          to={`/postDetails/${volunteer._id}`}
                          className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                        >
                          <button className="px-4 py-2 font-fs tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-sm hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                            View Details
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* small view */}
            <div className="md:hidden">
              <div className="overflow-x-auto rounded-xl bg-green-50">
                <table className="min-w-full text-xs rounded-xl">
                  <thead className="dark:bg-gray-300 border-b border-t ">
                    <tr className="py-6 text-base text-center  bg-lime-400 ">
                      <th className="p-3">Post Title</th>
                      <th className="p-3">Deadline</th>
                      <th className="p-3">View Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {volunteers.map((volunteer, index) => (
                      <tr
                        key={index}
                        className="border-b text-base border-opacity-20 text-start dark:border-gray-300 dark:bg-gray-50"
                      >
                        <td className="p-3">
                          <p>{volunteer.postTitle}</p>
                        </td>
                        <td className="p-3 ">
                          <p className="">{volunteer.deadline}</p>
                          <p className="btn text-center">
                            {volunteer.noOfVolunteersNeeded}
                          </p>
                        </td>
                        <td className="p-3">
                          <Link
                            to={`/postDetails/${volunteer._id}`}
                            className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                          >
                            <button className="btn btn-outline bg-lime-500">
                              View Details
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteer;
