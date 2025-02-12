import React, { useEffect, useState } from "react";
import VolunteerNeedCard from "./VolunteerNeedCard";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoaderPage/LoadingSpinner";

const VolunteerNeed = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(volunteers);
  useEffect(() => {
    fetch("https://assignment-11-server-ten-mu.vercel.app/volunteers")
      .then((res) => res.json())
      .then((data) => {
        setVolunteers(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="px-3 lg:px-0 max-w-7xl mx-auto ">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-wide text-center mt-10 font-fs ">
          Volunteer Needs Now
        </h1>
        <p className="text-gray-600 tracking-wide max-w-2xl mx-auto text-center text-xl font-fs">
          Volunteering can be important now because it helps people in need, the
          community, and worthwhile causes.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 ">
        {volunteers.map((volunteer) => (
          <VolunteerNeedCard key={volunteer._id} volunteer={volunteer} />
        ))}
      </div>
      <div className="flex justify-center items-center mb-4">
        <Link to="/volunteers-need">
          <button className="btn btn-outline btn-accent px-8">
            SEE ALL
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeed;
