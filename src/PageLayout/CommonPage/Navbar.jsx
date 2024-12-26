import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, createSignOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    createSignOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Registration is Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log("failed to sign Out", error.message));
  };

  const menuLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/volunteers-need">Need Volunteer</NavLink>
      </li>
      <li>
        <details>
          <summary>My Profile</summary>
          <ul className="p-2 lg:w-52 w-40 lg:border border-lime-500">
            <li>
              <NavLink to="/addVolunteerPost">Add Volunteer</NavLink>
            </li>
            <li>
              <NavLink to="/manageMyPost">Manage My Posts </NavLink>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 border-b border-lime-500 p-4">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border border-lime-500"
          >
            {menuLink}
          </ul>
        </div>
        <img
          src="https://i.ibb.co.com/rvQQPst/logo.png"
          alt="NewDay"
          className="lg:w-36 w-28 border p-2 m-2 rounded-xl bg-lime-400"
        />
      </div>
      <div className="navbar-center hidden lg:flex z-50">
        <ul className="menu menu-horizontal px-1 text-xl gap-28">{menuLink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Link to="/signIn">
              <button
                onClick={handleSignOut}
                className=" btn btn-info hover:scale-105 transition duration-300 "
              >
                Sign Out
              </button>
            </Link>
          </>
        ) : (
          <>
            <div className="btn btn-sm btn-outline duration-300 hover:scale-110 transition ">
              <Link to="/signIn">
                <button className="">Sign In </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
