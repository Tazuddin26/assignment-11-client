import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { CiEdit } from "react-icons/ci";
import { IoTrashBinOutline } from "react-icons/io5";
const PostedVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:4000/volunteers?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, [user.email]);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <p className="text-center text-3xl font-semibold">
        Your Added Vlounteer - {volunteers.length}
      </p>
      <div className="overflow-x-auto mt-5 hidden md:block">
        <table className="table bg-purple-50 ">
          {/* head */}
          <thead className="border-t bg-lime-300 text-center text-base font-semibold">
            <tr>
              <th></th>
              <th>organizerName</th>
              <th>Post Title</th>
              <th>category</th>
              <th>deadline</th>
              <th>location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map((volunteer) => (
              <tr key={volunteer._id} className="text-center">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12 mr-10">
                        <img
                          src={user?.photoURL}
                          alt="user Photo"
                          className="border border-purple-800 rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.dispalyName}</div>
                      <small className="text-sm opacity-50">
                        {user?.email}
                      </small>
                    </div>
                  </div>
                </td>
                <td>{volunteer.postTitle}</td>
                <td>{volunteer.category}</td>
                <td>{volunteer.deadline}</td>
                <td>{volunteer.location}</td>
                <th className="space-x-6">
                  <button className=" font-bold border-b-2 hover:border-purple-700 text-sky-600 ">
                    <CiEdit size={24} />
                  </button>
                  <button className="font-bold border-b-2 hover:border-purple-700 text-rose-700">
                    <IoTrashBinOutline size={20} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* small view */}
      <table className="table bg-purple-50 md:hidden">
        {/* head */}
        <thead className="border-t bg-lime-300 text-center text-base font-semibold">
          <tr>
            <th></th>

            <th>category</th>
            <th>deadline</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer) => (
            <tr key={volunteer._id} className="text-center">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>

              <td>{volunteer.category}</td>
              <td>{volunteer.deadline}</td>
              <th className="space-x-6">
                <button className=" font-bold border-b-2 hover:border-purple-700 text-sky-600 ">
                  <CiEdit size={24} />
                </button>
                <button className="font-bold border-b-2 hover:border-purple-700 text-rose-700">
                  <IoTrashBinOutline size={20} />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostedVolunteers;
