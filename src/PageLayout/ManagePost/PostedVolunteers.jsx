import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { CiEdit } from "react-icons/ci";
import { IoTrashBinOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../LoaderPage/Loader";
import Error404 from "../LoaderPage/Error404";
import axios from "axios";
import UseAxiosSecures from "../../Hook/useAxiosSecures";
const PostedVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(true);
  const axiosSecure = UseAxiosSecures();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    axiosSecure
      .get(`/volunteer?email=${user?.email}`)
      .then((res) => setVolunteers(res.data));
  }, [user.email]);

  const handleDeleteMyVolunteer = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-11-server-ten-mu.vercel.app/volunteer/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log('deleted data',data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success",
              });
            }
            const deletedData = volunteers.filter(
              (deletePost) => deletePost._id !== id
            );
            // console.log(deletedData);
            setVolunteers(deletedData);
            //  navigate("/managePost");
          });
      }
    });
  };
  if (navigate.state === "loading") return <Loader />;
  return (
    <>
      {volunteers.length > 0 ? (
        <div className="max-w-7xl mx-auto my-5">
          <p className="text-center text-2xl font-semibold mb-4">
            Your Added Vlounteer: {volunteers.length}
          </p>
          <div className="overflow-x-auto mt-5 hidden md:block">
            <table className="table text-black">
              {/* head */}
              <thead className="border-t text-black bg-sky-200 text-center text-base font-semibold">
                <tr>
                  <th></th>
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
                    <td>{volunteer.postTitle}</td>
                    <td>{volunteer.category}</td>
                    <td>{volunteer.deadline}</td>
                    <td>{volunteer.location}</td>
                    <th className="space-x-6">
                      <Link
                        to={`/updateVolunteer/${volunteer._id}`}
                        className=""
                      >
                        <button className=" font-bold border-b-2 hover:border-purple-700 text-sky-600 ">
                          <CiEdit size={24} />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDeleteMyVolunteer(volunteer._id)}
                        className="font-bold border-b-2 hover:border-purple-700 text-rose-700"
                      >
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
            <thead className="border-t text-black bg-sky-200 text-center text-base font-semibold">
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
                    <Link to={`/updateVolunteer/${volunteer._id}`} className="">
                      <button className=" font-bold border-b-2 hover:border-purple-700 text-sky-600 ">
                        <CiEdit size={24} />
                      </button>
                    </Link>
                    <button className="font-bold border-b-2 hover:border-purple-700 text-rose-700">
                      <IoTrashBinOutline size={20} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : showLoader ? (
        <Loader />
      ) : (
        <Error404 />
      )}
    </>
  );
};

export default PostedVolunteers;
