import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import AuthContext from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const AddVolunteerPost = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const handleVolunteerPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const postTitle = form.postTitle.value;
    const category = form.category.value;
    const location = form.location.value;
    const thumbnail = form.thumbnail.value;
    const noOfVolunteer = parseInt(form.noOfVolunteer.value);
    const organizerName = form.organizerName.value;
    const organizerEmail = form.organizerEmail.value;
    const description = form.description.value;
    // const status = form.status.value;
    const deadline = startDate.toLocaleDateString();
    const addVolunteer = {
      postTitle,
      category,
      location,
      thumbnail,
      noOfVolunteer,
      deadline,
      description,
    //   status,
      organizerEmail,
      organizerName,
    };

    fetch("http://localhost:4000/volunteer", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addVolunteer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("add volunteer", data);
        //Sweet Alert
        // navigate('/addVolunteer')
      });
  };

  return (
    <div className="container flex flex-col mx-auto space-y-12 border max-w-4xl mt-10 rounded-xl">
      <section className="">
        <h2 className="text-3xl pt-6 text-center font-body font-semibold text-gray-900 capitalize dark:text-white">
          Please Input Volunteer Information
        </h2>

        <form onSubmit={handleVolunteerPost} className="card-body ">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 p-12">
            <div>
              <label className="text-gray-800 font-semibold dark:text-gray-200">
                Post Title
              </label>
              <input
                placeholder="Enter your title of the post"
                name="postTitle"
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
                // defaultValue={category}
                className="border p-2 rounded-md "
              >
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Social Service">Social Service</option>
                <option value="Animal Welfare">Animal Welfare</option>
                <option value="Environment">Environment</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-800 font-semibold dark:text-gray-200">
                Location
              </label>
              <select
                name="location"
                id="location"
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
                id="noOfVolunteer"
                name="noOfVolunteer"
                placeholder="Enter the total number of people you need"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            {/* <div className="flex flex-col gap-2 md:col-span-1">
              <label
                className="text-gray-800 font-semibold"
                htmlFor="description"
              >
                Status
              </label>
              <select
                name="status"
                id="status"
                className="select select-bordered border p-2 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              >
                <option value="Requested">Requested</option>
                <option value="Reject">Reject</option>
              </select>
            </div> */}
            <div>
              <label className="text-gray-800 font-semibold dark:text-gray-200">
                Organizer name
              </label>
              <input
                id="orgName"
                name="organizerName"
                defaultValue={user?.displayName}
                type="text"
                readOnly
                placeholder=" Organizer Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-800 font-semibold dark:text-gray-200">
                Organizer email
              </label>
              <input
                id="orgEmail"
                name="organizerEmail"
                type="email"
                defaultValue={user?.email}
                readOnly
                placeholder=" Organizer Email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-1">
              <label className="text-gray-800 font-semibold">Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md w-full  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                selected={startDate}
                readOnly
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                className="text-gray-800 font-semibold"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                placeholder="Enter the description"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="description"
                id="description"
              ></textarea>
            </div>

            
          </div>

          <div className=" mt-6 md:px-12 md:pb-12">
            <button
              type="submit"
              className="btn btn-outline bg-lime-400 w-full"
            >
              Add Volunteer
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddVolunteerPost;
