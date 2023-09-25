import React from "react";
import { NavLink } from "react-router-dom";
import {
  HOME,
  ABOUT,
  CONTACT,
  LOGIN,
  REGISTER,
  ADDPOST,
} from "../../config/routes";
import { useAuth, useLogout } from "../../hooks/auth";

export default function NavBar() {
  const { user, isLoading: authLoading, error } = useAuth();
  const { logout, isLoading: logOutLoading } = useLogout();

  const handleLogOut = () => {
    logout();
  };

  return (
    <nav className="flex flex-col sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-center w-full">
      <div className="mb-2 sm:mb-0">
        <NavLink to={HOME} className="text-lg no-underline hover:text-blue-400">
          Art Store
        </NavLink>
      </div>
      <div className="text-lg flex gap-3 justify-center">
        <NavLink to={HOME} className="hover:text-blue-400">
          Home
        </NavLink>
        <NavLink to={ABOUT} className="hover:text-blue-400">
          About
        </NavLink>
        <NavLink to={CONTACT} className="hover:text-blue-400">
          Contact
        </NavLink>
      </div>

      {!user ? (
        <div className="text-lg flex gap-3 justify-center">
          <NavLink to={LOGIN} className="hover:text-blue-400">
            Login
          </NavLink>
          <NavLink to={REGISTER} className="hover:text-blue-400">
            Register
          </NavLink>
        </div>
      ) : (
        <div className="text-lg flex gap-3 justify-center">
          <div>
            {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
          </div>
          <NavLink className="hover:text-blue-400" to={ADDPOST}>
            +
          </NavLink>
          <button className="hover:text-blue-400" onClick={handleLogOut}>
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
}
