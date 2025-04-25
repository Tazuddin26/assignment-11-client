import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import { CiLight, CiMenuBurger } from "react-icons/ci";
import { MdOutlineNightlightRound } from "react-icons/md";

const Navbar = () => {
  const { user, createSignOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const handleSignOut = () => {
    createSignOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Signed Out Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.error("Sign out error:", error.message));
  };

  const menuLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-lime-700 font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/volunteers-need"
          className={({ isActive }) =>
            isActive ? "text-lime-700 font-semibold" : ""
          }
        >
          Need Volunteer
        </NavLink>
      </li>
      <li>
        <details>
          <summary>My Profile</summary>
          <ul className="p-2 rounded-sm bg-green-100 text-gray-800 font-fs">
            <li>
              <NavLink
                to="/addVolunteerPost"
                className={({ isActive }) => (isActive ? "text-lime-700" : "")}
              >
                Add Volunteer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/manageMyPost"
                className={({ isActive }) => (isActive ? "text-lime-700" : "")}
              >
                Manage My Posts
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 w-full z-50 px-4 py-3 transition-all duration-300">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden cursor-pointer">
            <CiMenuBurger size={24} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-3 shadow-lg bg-base-100 rounded-box w-56 font-fs text-lg"
          >
            {menuLink}
          </ul>
        </div>
        <Link to="/">
          <img
            src="https://i.ibb.co.com/rvQQPst/logo.png"
            alt="Logo"
            className="w-28 lg:w-36 ml-2 hover:scale-105 transition-transform duration-300 "
          />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-8 px-1 text-lg font-fs">
          {menuLink}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-3">
        {/* Theme Toggle */}
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "dark"}
            className="hidden"
          />
          <CiLight size={22} className="swap-on transition duration-300" />
          <MdOutlineNightlightRound
            size={22}
            className="swap-off transition duration-300"
          />
        </label>

        {/* User Info */}
        {user?.email ? (
          <>
            <div className="hidden lg:flex items-center gap-2">
              <div
                className="w-10 h-10 ring ring-accent rounded-full overflow-hidden"
                id="my-anchor-element-id"
              >
                <img
                  src={user.photoURL}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
              <Tooltip
                anchorSelect="#my-anchor-element-id"
                content={user.displayName}
              />
            </div>
            <Link to="/signIn">
              <button
                onClick={handleSignOut}
                className="btn btn-sm bg-green-500 text-white hover:bg-green-400 font-fs"
              >
                Sign Out
              </button>
            </Link>
          </>
        ) : (
          <Link to="/signIn">
            <button className="btn btn-sm bg-green-500 text-white hover:bg-green-400 font-fs">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
