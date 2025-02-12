import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import { CiLight, CiMenuBurger } from "react-icons/ci";
import { MdOutlineNightlightRound } from "react-icons/md";

const Navbar = () => {
  const { user, createSignOutUser } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

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
      <li className="">
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? " text-lime-700" : ""}`}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/volunteers-need"
          className={({ isActive }) => `${isActive ? "text-lime-700" : ""}`}
        >
          Need Volunteer
        </NavLink>
      </li>
      <li>
        <details>
          <summary>My Profile</summary>
          <ul className="p-2 lg:w-56 w-40 rounded-sm bg-green-200 text-gray-800 font-fs">
            <li>
              <NavLink
                to="/addVolunteerPost"
                className={({ isActive }) =>
                  `${isActive ? "text-lime-700" : ""}`
                }
              >
                Add Volunteer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/manageMyPost"
                className={({ isActive }) =>
                  `${isActive ? "text-lime-700" : ""}`
                }
              >
                Manage My Posts{" "}
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100  shadow-green-800 shadow-md p-4 fixed top-0 z-10">
      <div className="navbar-start relative  ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className=" lg:hidden ">
            <CiMenuBurger size={24} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md font-fs text-xl dropdown-content dark:text-gray-800 bg-green-100 rounded-md z-[10] mt-3 w-56 p-2 shadow-md "
          >
            {menuLink}
          </ul>
        </div>
        <Link>
          <img
            to="/"
            src="https://i.ibb.co.com/rvQQPst/logo.png"
            alt="NewDay"
            className="lg:w-36 w-28 border p-2 m-2 rounded-xl bg-lime-400"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex z-10">
        <ul className="menu menu-horizontal py-0 text-xl gap-10 font-fs dark:text-gray-800 ">
          {menuLink}
        </ul>
      </div>

      <div className="navbar-end ">
        <label className="swap swap-rotate lg:mr-4 mr-4">
          <input
            className="hidden"
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "light" ? false : true}
          />
          <CiLight
            size={20}
            className="swap-on h-6 w-6 fill-current border bg-slate-50 rounded-full border-white"
          />
          <MdOutlineNightlightRound
            size={20}
            className="swap-off transition duration-300 ease-in-out -rotate-45 h-6 w-6 fill-current border bg-slate-200 rounded-full border-stone-950 "
          />
        </label>
        {user?.email ? (
          <>
            <div className="items-center justify-center gap-2  p-1 navbar-center hidden lg:flex z-[10]">
              <div className="ring-accent ring-offset-base-100 ring ring-offset-2 w-10 mr-2 rounded-full">
                <a id="my-anchor-element-id">
                  <img
                    src={user?.photoURL}
                    alt="image"
                    className="rounded-full"
                  />
                </a>
              </div>
              <Tooltip
                className="bg"
                anchorSelect="#my-anchor-element-id"
                content={user.displayName}
              />
            </div>

            <Link
              to="/signIn"
              className="px-6 py-2 font-fs tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-sm hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
            >
              <button onClick={handleSignOut}>Sign Out</button>
            </Link>
          </>
        ) : (
          <>
            <div className="px-6 py-2 font-fs tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-sm hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
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
