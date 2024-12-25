import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { RxCrossCircled } from "react-icons/rx";
import Swal from "sweetalert2";
const ManagePost = () => {
  const { user } = useContext(AuthContext);
  const [volunteers, setVolunteers] = useState([]);
  const [requestDelete, setRequestDelete] = useState([]);

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
        fetch(`http://localhost:4000/volunteer-request/${id}`, {
          method: "DELETE",
        })
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
    fetch(`http://localhost:4000/request-list?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, [user.email]);

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-3xl text-center font-semibold leading-tight">
        Number Of Requests : <span className="">{volunteers.length}</span>
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm ">
          <thead className="dark:bg-gray-300 ml-10">
            <tr className="text-center border-t  border-b bg-lime-200">
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
                className="border-b text-center border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
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
                      className="border-2 border-lime-500 hover:border-lime-400 bg-rose-500 text-center rounded-full duration-300 hover:scale-110 t"
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
  );
};

export default ManagePost;
