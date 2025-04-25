import React, { useEffect, useState } from "react";
import VolunteerNeedCard from "./VolunteerNeedCard";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoaderPage/LoadingSpinner";
import { motion } from "framer-motion";

const VolunteerNeed = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-3 lg:px-0 max-w-7xl mx-auto"
    >
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold tracking-wide text-center mt-10 font-fs">
          Volunteer Needs Now
        </h1>
        <p className="text-gray-600 tracking-wide max-w-2xl mx-auto text-center text-xl font-fs">
          Volunteering can be important now because it helps people in need, the
          community, and worthwhile causes.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {volunteers.map((volunteer) => (
          <motion.div
            key={volunteer._id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <VolunteerNeedCard volunteer={volunteer} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center items-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/volunteers-need">
          <button className="btn btn-outline btn-accent px-8 mt-4">
            SEE ALL
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default VolunteerNeed;
