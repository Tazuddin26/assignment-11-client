import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuLink = <></>;

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
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>All Volunteer</a>
            </li>
            <li>
              <details>
                <summary>My Profile</summary>
                <ul className="p-2 w-40">
                  <li>
                    <a>Add Volunteer</a>
                  </li>
                  <li>
                    <a>Manage My Posts </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <a>Home</a>
          </li>

          <li>
            <a>All volunteer</a>
          </li>
          <li>
            <details>
              <summary>My Profile</summary>
              <ul className="p-2 w-52 border border-lime-500">
                <li>
                  <a>Add Volunteer</a>
                </li>
                <li>
                  <a>Manage My Posts </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="btn btn-outline">
          <Link to='/signIn'>
            <button className="hover:underline">Sign In </button>
          </Link>
          /
          <Link to="/register">
            <button to className="hover:underline">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
