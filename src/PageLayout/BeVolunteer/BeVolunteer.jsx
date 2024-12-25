import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import DatePicker from "react-datepicker";
import axios from "axios";

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
    const post_title = form.postTitle.value;
    const category = form.category.value;
    const location = form.location.value;
    const thumbnail = form.thumbnail.value;
    const noOfVolunteer = form.noOfVolunteer.value;
    const orgName = form.orgName.value;
    const orgEmail = form.orgEmail.value;
    const volunteerName = form.volunteerName.value;
    const volunteerEmail = form.volunteerEmail.value;
    const description = form.description.value;
    const suggestion = form.suggestion.value;
    const status = form.status.value;
    const deadline = startDate.toLocaleDateString();
    const requestVolunteer = {
      post_title,
      category,
      location,
      thumbnail,
      noOfVolunteer,
      deadline,
      description,
      suggestion,
      status,
      volunteerInformation: {
        volunteerName,
        volunteerEmail,
      },
      organizationInformation: {
        orgEmail,
        orgName,
      },
    };

    try {
      const { data } = await axios.post(
        `http://localhost:4000/volunteer-request`,
        requestVolunteer
      );
      console.log(data);
      // toast.success("Your Volunteer Request has been sent ")
      // form.reset();
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await axios.put(
        `http://localhost:4000/volunteer-count/${_id}`
      );
      console.log(requestVolunteer);
      console.log(data);
      navigate("/managePost");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container flex flex-col mx-auto space-y-12 border max-w-4xl">
      <section className="">
        <h2 className="text-3xl pt-6 text-center font-body font-semibold text-gray-900 capitalize dark:text-white">
          Be A Volunteer
        </h2>

        <form onSubmit={handleVolunteerRequest} className="card-body ">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 p-12">
            <div>
              <label className="text-gray-800 font-semibold dark:text-gray-200">
                Post Title
              </label>
              <input
                placeholder="Enter your title of the post"
                name="postTitle"
                readOnly
                defaultValue={postTitle}
                id="postTitle"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-800 font-semibold" htmlFor="category">
                Category
              </label>
              <select
                name="category"
                id="category"
                defaultValue={category}
                disabled
                className="border p-2 rounded-md"
              >
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Social Service">Social Service</option>
                <option value="Animal Welfare">Animal Welfare</option>
                <option value="Environment">Environment</option>
                {/* <option value="Food Security">Food Security</option> */}
              </select>
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-800 font-semibold dark:text-gray-200">
                Location
              </label>
              <select
                name="location"
                id="location"
                defaultValue={location}
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

            <div>
              <label className="text-gray-800 font-semibold dark:text-gray-200">
                Thumbnail
              </label>
              <input
                defaultValue={thumbnail}
                readOnly
                id="thumbnail"
                name="thumbnail"
                placeholder="Enter your thumbnail link"
                type="url"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-800 font-semibold dark:text-gray-200">
                No. of Volunteer Needed
              </label>
              <input
                defaultValue={noOfVolunteersNeeded}
                readOnly
                id="noOfVolunteer"
                name="noOfVolunteer"
                placeholder="Enter the total number of people you need"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-1">
              <label
                className="text-gray-800 font-semibold"
                htmlFor="description"
              >
                Status
              </label>
              <select
                name="status"
                id="status"
                defaultValue={"Requested"}
                className="select select-bordered border p-2 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              >
                <option value="Requested">Requested</option>
                <option value="Reject">Reject</option>
              </select>
            </div>
            <div>
              <label className="text-gray-800 font-semibold dark:text-gray-200">
                Organizer name
              </label>
              <input
                id="orgName"
                name="orgName"
                defaultValue={organizerName}
                type="text"
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-800 font-semibold dark:text-gray-200">
                Organizer email
              </label>
              <input
                id="orgEmail"
                name="orgEmail"
                defaultValue={organizerEmail}
                readOnly
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-800 font-semibold dark:text-gray-200">
                Volunteer name
              </label>
              <input
                id="volunteerName"
                name="volunteerName"
                defaultValue={user?.displayName}
                type="text"
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-800 font-semibold dark:text-gray-200">
                Volunteer email
              </label>
              <input
                id="volunteerEmail"
                name="volunteerEmail"
                defaultValue={user?.email}
                readOnly
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-gray-800 font-semibold"
                htmlFor="description"
              >
                Suggestion
              </label>
              <textarea
                required
                placeholder="Enter your suggestion"
                className="textarea textarea-bordered block w-full px-4  mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="suggestion"
                id="suggestion"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2 md:col-span-1">
              <label
                className="text-gray-800 font-semibold"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                defaultValue={description}
                readOnly
                placeholder="Enter the description"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="description"
                id="description"
              ></textarea>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-gray-800 font-semibold">Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md w-full  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                selected={deadline}
                readOnly
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className=" mt-6 md:px-12 md:pb-12">
            <button type="submit" className="btn btn-outline w-full">
              Request
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BeVolunteer;
