import React from "react";
import { NavLink } from "react-router-dom";
import { useGetUser } from "../hooks/users";
import { FaTrash } from "react-icons/fa";
import { useAuth } from "../hooks/auth";
import { useDeletePost } from "../hooks/images";

export default function ImageCard({ image }) {
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { user: imageUser, isLoading: userLoading } = useGetUser(image.uid);
  const { deleteImage, isLoading } = useDeletePost(image.id);

  return (
    <div className="mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <NavLink href="#">
        <img className="rounded-t-lg" src={image.imageLink} alt="" />
      </NavLink>
      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h5 className="pr-2 border-r-2 border-indigo-100 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              {image.title}
            </h5>
            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Posted by{" "}
              <NavLink
                to={`/profile/${image.uid}`}
                className="text-red-900 hover:text-red-500"
              >
                {!userLoading &&
                  imageUser &&
                  imageUser.username.charAt(0).toUpperCase() +
                    imageUser.username.slice(1)}
              </NavLink>
            </h5>
          </div>
          {!authLoading && !userLoading && authUser?.id === image.uid && (
            <div>
              <button onClick={deleteImage}>
                <FaTrash
                  size={20}
                  className=" text-red-900 hover:text-red-500 hover:cursor-pointer"
                />
              </button>
            </div>
          )}
        </div>
        <p className="border-t-2 border-indigo-100 font-normal text-gray-700 dark:text-gray-400">
          {image.description}
        </p>
      </div>
    </div>
  );
}
