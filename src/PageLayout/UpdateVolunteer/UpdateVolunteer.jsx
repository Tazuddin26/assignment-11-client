import { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import DatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateVolunteer = () => {
  const { user } = useContext(AuthContext);
  const loadedData = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
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
  } = loadedData;

  const handleUpdatePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const postTitle = form.postTitle.value;
    const category = form.category.value;
    const location = form.location.value;
    const thumbnail = form.thumbnail.value;
    const noOfVolunteersNeeded = form.noOfVolunteersNeeded.value;
    const organizerName = form.organizerName.value;
    const organizerEmail = form.organizerEmail.value;
    const description = form.description.value;
    const deadline = startDate.toLocaleDateString();
    const updateVolunteer = {
      _id,
      postTitle,
      category,
      location,
      thumbnail,
      noOfVolunteersNeeded,
      deadline,
      description,
      organizerName,
      organizerEmail,
    };

    fetch(`https://assignment-11-server-ten-mu.vercel.app/volunteer/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateVolunteer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("volunteer update", data);
        toast.success("Your Volunteer post has been Updated", {
          position: "top-center",
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.log("update data error", error);
      });
    navigate("/");
  };

  return (
    <div className="container flex flex-col mx-auto space-y-12 border max-w-4xl mt-10 rounded-xl">
      <section className="">
        <h2 className="text-3xl pt-6 text-center font-body font-semibold text-gray-900 capitalize dark:text-white">
          Updated Volunteer Information
        </h2>

        <form onSubmit={handleUpdatePost} className="card-body ">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 p-12">
            <div>
              <label className="text-gray-800 font-semibold dark:text-gray-200">
                Post Title
              </label>
              <input
                placeholder="Enter your title of the post"
                name="postTitle"
                id="postTitle"
                defaultValue={postTitle}
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
                id="thumbnail"
                name="thumbnail"
                defaultValue={thumbnail}
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
                name="noOfVolunteersNeeded"
                defaultValue={noOfVolunteersNeeded}
                placeholder="Enter the total number of people you need"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
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
                selected={startDate || new Date()}
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
                readOnly
                defaultValue={description}
              ></textarea>
            </div>
          </div>

          <div className=" mt-6 md:px-12 md:pb-12">
            <button
              type="submit"
              className="btn btn-info btn-outline duration-300 hover:scale-105 transition w-full"
            >
              Update Volunteer
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateVolunteer;
