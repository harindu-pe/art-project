import React, { useState } from "react";
import { BsPaintBucket } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import {
  HOME,
  ABOUT,
  CONTACT,
  LOGIN,
  REGISTER,
  ADDPOST,
  PROFILE,
} from "../../config/routes";
import { useAuth, useLogout } from "../../hooks/auth";

export default function NavBar() {
  const { user, isLoading: authLoading, error } = useAuth();
  const { logout, isLoading: logOutLoading } = useLogout();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    logout();
  };

  return (
    // <!-- navbar goes here -->
    <nav className="bg-gray-100 w-full fixed">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* <!-- logo --> */}
            <div>
              <NavLink
                to={HOME}
                className="flex items-center gap-1 py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <BsPaintBucket size={25} />
                <span className="font-bold">Art Platform</span>
              </NavLink>
            </div>

            {/* <!-- primary nav --> */}
            <div className="hidden sm:flex items-center space-x-1 ">
              <NavLink
                to={HOME}
                className="py-2 px-3 text-gray-700 hover:bg-yellow-300  hover:text-gray-900 rounded transition duration-300"
              >
                Home
              </NavLink>
              <NavLink
                to={ABOUT}
                className="py-2 px-3 text-gray-700 hover:bg-yellow-300  hover:text-gray-900 rounded transition duration-300"
              >
                About
              </NavLink>
              <NavLink
                to={CONTACT}
                className="py-2 px-3 text-gray-700 hover:bg-yellow-300  hover:text-gray-900 rounded transition duration-300"
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* <!-- secondary nav --> */}
          {!user ? (
            <div className="hidden sm:flex items-center space-x-1">
              <NavLink
                to={LOGIN}
                className="py-2 px-3 text-gray-900 hover:bg-yellow-300  hover:text-gray-900 rounded transition duration-300"
              >
                Login
              </NavLink>
              <NavLink
                to={REGISTER}
                className="py-2 px-3 text-gray-900 hover:bg-yellow-300  hover:text-gray-900 rounded transition duration-300"
              >
                Signup
              </NavLink>
            </div>
          ) : (
            <div className="hidden sm:flex items-center space-x-1">
              <NavLink
                to={`profile/${user.id}`}
                className="py-2 px-3 hover:bg-yellow-300 text-red-500 hover:text-yellow-800 rounded transition duration-300"
              >
                {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
              </NavLink>
              <NavLink
                to={ADDPOST}
                className="py-2 px-3 hover:bg-yellow-300 text-gray-700 hover:text-yellow-800 rounded transition duration-300"
              >
                + Post
              </NavLink>
              <button
                onClick={handleLogOut}
                className="py-2 px-3  hover:bg-red-300 text-gray-700 rounded transition duration-300"
              >
                Logout
              </button>
            </div>
          )}

          {/* <!-- mobile button goes here --> */}
          <div className="sm:hidden flex items-center justify-center">
            {user && (
              <NavLink
                to={`profile/${user.id}`}
                className="mr-6 text-base  text-red-500"
              >
                {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
              </NavLink>
            )}
            <button onClick={toggleNavBar}>
              <AiOutlineMenu size={25} />
            </button>
          </div>
        </div>
      </div>

      {/* <!-- mobile menu --> */}
      {isOpen && (
        <div className="mobile-menu sm:hidden ">
          <NavLink
            to={HOME}
            onClick={toggleNavBar}
            className="border-t-2 border-indigo-100 block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Home
          </NavLink>
          <NavLink
            to={ABOUT}
            onClick={toggleNavBar}
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            About
          </NavLink>
          <NavLink
            to={CONTACT}
            onClick={toggleNavBar}
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Contact
          </NavLink>

          {!user ? (
            <div className="flex border-t-2 border-indigo-100">
              <NavLink
                to={LOGIN}
                onClick={toggleNavBar}
                className="text-center w-full bg-yellow-200 border-r-2 border-indigo-100 py-2 px-4 text-sm hover:bg-gray-200"
              >
                Login
              </NavLink>
              <NavLink
                to={REGISTER}
                onClick={toggleNavBar}
                className="text-center w-full bg-green-100  py-2 px-4 text-sm hover:bg-gray-200"
              >
                Signup
              </NavLink>
            </div>
          ) : (
            <div className="flex border-t-2 border-indigo-100">
              <NavLink
                to={ADDPOST}
                onClick={toggleNavBar}
                className="text-center w-full bg-yellow-200 border-r-2 border-indigo-100 py-2 px-4 text-sm hover:bg-gray-200"
              >
                + Post
              </NavLink>
              <button
                onClick={handleLogOut}
                className="text-center w-full bg-red-100  py-2 px-4 text-sm hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
