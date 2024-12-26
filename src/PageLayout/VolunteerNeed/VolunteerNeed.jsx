import React, { useEffect, useState } from "react";
import VolunteerNeedCard from "./VolunteerNeedCard";
import { Link } from "react-router-dom";

const VolunteerNeed = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/volunteers", {})
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);

  return (
    <div className="px-3 lg:px-0 max-w-7xl mx-auto ">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-wide text-center mt-10">
          Volunteer Needs Now
        </h1>
        <p className="text-gray-600 tracking-wide max-w-2xl mx-auto text-center ">
          Volunteering can be important now because it helps people in need, the
          community, and worthwhile causes.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
        {volunteers.map((volunteer) => (
          <VolunteerNeedCard key={volunteer._id} volunteer={volunteer} />
        ))}
      </div>
      <div className="flex justify-center items-center mb-4">
        <Link to="/volunteers-need">
          <button className="btn btn-info btn-outline duration-300 hover:scale-110 transition px-7">SEE ALL</button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeed;
