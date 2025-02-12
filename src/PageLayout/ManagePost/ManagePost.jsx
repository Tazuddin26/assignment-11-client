import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { RxCrossCircled } from "react-icons/rx";
import Swal from "sweetalert2";
import Loader from "../LoaderPage/Loader";
import { useNavigate } from "react-router-dom";
import Error404 from "../LoaderPage/Error404";
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";
import UseAxiosSecures from "../../Hook/useAxiosSecures";
const ManagePost = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [volunteers, setVolunteers] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const axiosSecure = UseAxiosSecures();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCancelRequest = (id) => {
    console.log("delete", id);
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
          `https://assignment-11-server-ten-mu.vercel.app/volunteer-request/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your volunteer request has been removed.",
                icon: "success",
              });
            }
            const remainingData = volunteers.filter(
              (postData) => postData._id !== id
            );
            setVolunteers(remainingData);
          });
      }
    });
  };

  useEffect(() => {
    axiosSecure.get(`/request-list?email=${user?.email}`).then((res) => {
      // console.log(res.data);
      setVolunteers(res.data);
    });
  }, [user?.email]);

  if (navigate.state === "loading") return <Loader />;
  return (
    <>
      {volunteers.length > 0 ? (
        <div className="container p-2 mx-auto sm:p-4 ">
          <h2 className="mb-4 text-3xl text-center font-semibold leading-tight font-fs">
            Number Of Requests
          </h2>
          <div className="overflow-x-auto bg-green-50 shadow-xl rounded-sm">
            <p className="w-0 h-0 border-[20px] border-transparent border-l-lime-500 border-r-0 -rotate-45 font-semibold lg:mt-2 lg:mr-1 font-fs lg:mb-4 absolute   lg:top-52 lg:right-20 top-52 right-1 mt-0  ">
              <span className="absolute -top-3 text-rose-700 font-bold right-2 rotate-45">
                {volunteers.length}
              </span>
            </p>
            <table className="min-w-full lg:text-base text-sm text-black font-fs ">
              <thead className=" ml-10">
                <tr className="text-center border-t  border-b bg-green-100">
                  <th className="p-3">S/N</th>
                  <th className="p-3">Post Title</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Deadline</th>
                  <th className="p-3">Location</th>
                  <th className="p-3 ">Status</th>
                </tr>
              </thead>
              <tbody>
                {volunteers.map((volunteer, index) => (
                  <tr
                    key={index}
                    className="border-b text-center border-opacity-20 "
                  >
                    <td className="p-3">
                      <p>{index + 1}</p>
                    </td>
                    <td className="p-3">
                      <p>{volunteer.post_title}</p>
                    </td>
                    <td className="p-3">
                      <p className="dark:text-gray-600">
                        {volunteer.volunteerInformation.volunteerEmail}
                      </p>
                    </td>
                    <td className="p-3">
                      <p className="dark:text-gray-600">{volunteer.deadline}</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>{volunteer.location}</p>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold ">
                        <button
                          onClick={() => handleCancelRequest(volunteer._id)}
                          className="border-2 hover:border-green-500  bg-rose-500 text-center rounded-full duration-300 hover:scale-110 t"
                        >
                          <RxCrossCircled size={20} />
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : showLoader ? (
        <Loader />
      ) : (
        <Error404 />
      )}
    </>
  );
};

export default ManagePost;
