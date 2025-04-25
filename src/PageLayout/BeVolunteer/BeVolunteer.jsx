import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import DatePicker from "react-datepicker";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const BeVolunteer = () => {
  const volunteerPost = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    _id,
    postTitle,
    category,
    location,
    thumbnail,
    noOfVolunteersNeeded,
    deadline,
    description,
    organizerEmail,
    organizerName,
  } = volunteerPost;

  const [startDate, setStartDate] = useState(new Date());

  const handleVolunteerRequest = async (e) => {
    e.preventDefault();
    const form = e.target;
    const requestVolunteer = {
      post_title: form.postTitle.value,
      category: form.category.value,
      location: form.location.value,
      thumbnail: form.thumbnail.value,
      noOfVolunteer: form.noOfVolunteer.value,
      deadline: startDate.toLocaleDateString(),
      description: form.description.value,
      suggestion: form.suggestion.value,
      status: form.status.value,
      volunteerInformation: {
        volunteerName: form.volunteerName.value,
        volunteerEmail: form.volunteerEmail.value,
      },
      organizationInformation: {
        organizerEmail: form.organizerEmail.value,
        organizerName: form.organizerName.value,
      },
    };

    try {
      await axios.post(
        `https://assignment-11-server-ten-mu.vercel.app/volunteer-request`,
        requestVolunteer
      );
      toast.success("Your Volunteer Request has been sent ", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (err) {
      console.log(err);
    }

    try {
      await axios.put(
        `https://assignment-11-server-ten-mu.vercel.app/volunteer-count/${_id}`
      );
      navigate("/manageMyPost");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col mx-auto shadow-xl lg:max-w-4xl mt-4 bg-green-50 rounded-xl"
    >
      <motion.section
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-4 lg:px-0">
          <h2 className="text-3xl pt-6 text-center font-body font-semibold capitalize font-fs">
            Be A Volunteer
          </h2>
          <p className="lg:w-8/12 lg:ml-40 text-center font-fs text-gray-600 text-xl">
            Many people have different reasons to volunteer. For us,
            volunteering is one, if not the most rewarding experience in the
            world.
          </p>
        </div>

        <form onSubmit={handleVolunteerRequest} className="card-body">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 lg:gap-6 sm:grid-cols-2 lg:p-10"
          >
            {[
              { label: "Post Title", name: "postTitle", value: postTitle },
              { label: "Thumbnail", name: "thumbnail", value: thumbnail },
              {
                label: "No. of Volunteer Needed",
                name: "noOfVolunteer",
                value: noOfVolunteersNeeded,
              },
              {
                label: "Organizer name",
                name: "organizerName",
                value: organizerName,
              },
              {
                label: "Organizer email",
                name: "organizerEmail",
                value: organizerEmail,
              },
              {
                label: "Volunteer name",
                name: "volunteerName",
                value: user?.displayName,
              },
              {
                label: "Volunteer email",
                name: "volunteerEmail",
                value: user?.email,
              },
            ].map(({ label, name, value }) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <label className="font-semibold">{label}</label>
                <input
                  name={name}
                  defaultValue={value}
                  readOnly
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </motion.div>
            ))}

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Category</label>
              <select
                name="category"
                defaultValue={category}
                disabled
                className="border p-2 rounded-md"
              >
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Social Service">Social Service</option>
                <option value="Animal Welfare">Animal Welfare</option>
                <option value="Environment">Environment</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Location</label>
              <select
                name="location"
                defaultValue={location}
                disabled
                className="border p-2 rounded-md"
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Khulna">Khulna</option>
                <option value="Barishal">Barishal</option>
                <option value="Comilla">Comilla</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
                <option value="Patuakhali">Patuakhali</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Gazipur">Gazipur</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Status</label>
              <select
                name="status"
                defaultValue="Requested"
                className="select select-bordered p-2 rounded-md"
              >
                <option value="Requested">Requested</option>
                <option value="Reject">Reject</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-1">
              <label className="font-semibold">Suggestion</label>
              <textarea
                required
                name="suggestion"
                placeholder="Enter your suggestion"
                className="textarea textarea-bordered block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
              ></textarea>
            </div>

            <div className="flex flex-col gap-2 md:col-span-1">
              <label className="font-semibold">Description</label>
              <textarea
                defaultValue={description}
                name="description"
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
              ></textarea>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-semibold">Deadline</label>
              <DatePicker
                selected={deadline}
                readOnly
                onChange={(date) => setStartDate(date)}
                className="border p-2 rounded-md w-full"
              />
            </div>

            <div className="mt-6 flex flex-col gap-2 md:col-span-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-2 font-fs tracking-wide text-white capitalize bg-green-500 rounded-sm hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300"
              >
                Request
              </motion.button>
            </div>
          </motion.div>
        </form>
      </motion.section>
    </motion.div>
  );
};

export default BeVolunteer;
