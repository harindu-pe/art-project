import React from "react";
import { NavLink } from "react-router-dom";
import { useGetUser } from "../hooks/users";

export default function ImageCard({ image }) {
  const { user, isLoading } = useGetUser(image.uid);

  return (
    <div className="mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <NavLink href="#">
        <img className="rounded-t-lg" src={image.imageLink} alt="" />
      </NavLink>
      <div className="p-2">
        <div className="flex items-center gap-2">
          <div>
            <h5 className="pr-2 border-r-2 border-indigo-100 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              {image.title}
            </h5>
          </div>
          <div>
            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Posted by{" "}
              <NavLink
                to={`/profile/${image.uid}`}
                className="text-red-900 hover:text-red-500"
              >
                {!isLoading &&
                  user.username.charAt(0).toUpperCase() +
                    user.username.slice(1)}
              </NavLink>
            </h5>
          </div>
        </div>
        <p className="border-t-2 border-indigo-100 font-normal text-gray-700 dark:text-gray-400">
          {image.description}
        </p>
      </div>
    </div>
  );
}
