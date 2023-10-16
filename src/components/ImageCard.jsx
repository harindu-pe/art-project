import React from "react";
import { Link } from "react-router-dom";
import { useGetUser } from "../hooks/users";
import { FaRegHeart, FaHeart, FaTrash } from "react-icons/fa";
import { useAuth } from "../hooks/auth";
import { useDeletePost, useToggleLike } from "../hooks/images";
import Loading from "./Loading";

export default function ImageCard({ image }) {
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { user: imageUser, isLoading: userLoading } = useGetUser(image.uid);
  const { deleteImage, isLoading: deleteLoading } = useDeletePost(image.id);

  const isLiked = image.likes.includes(authUser?.id);
  const config = {
    id: image.id,
    isLiked,
    uid: authUser?.id,
  };
  const { toggleLike, isLoading: likeLoading } = useToggleLike(config);

  return (
    <div className="mb-3 bg-white border-2 border-indigo-100 rounded-lg hover:shadow-xl">
      <Link to={`/image/${image.id}`}>
        <img className="rounded-t-lg" src={image.imageLink} alt="" />
      </Link>
      <div className="">
        <div className="flex items-center">
          <div className="flex items-center w-full">
            {!authLoading && !userLoading && authUser && (
              <div className="px-3 mt-1 flex gap-2 text-xl items-center justify-center">
                <button onClick={toggleLike}>
                  {isLiked ? <FaHeart size={22} /> : <FaRegHeart size={22} />}
                </button>
                <div className="mb-0.5">{image.likes.length}</div>
              </div>
            )}

            <div className="px-3 pt-0.5 pb-0.5 w-full border-l-2 border-indigo-100">
              <h5 className="text-xl font-bold tracking-tight text-gray-900  ">
                {image.title}
              </h5>
              <h5 className="font text-md tracking-tight text-gray-900 ">
                Posted by{" "}
                <Link
                  to={`/profile/${image.uid}`}
                  className="text-red-900 hover:bg-red-500 hover:text-white rounded p-0.5"
                >
                  {!userLoading &&
                    imageUser &&
                    imageUser.username.charAt(0).toUpperCase() +
                      imageUser.username.slice(1)}
                </Link>
              </h5>
            </div>
          </div>

          {!authLoading && !userLoading && authUser?.id === image.uid && (
            <div className="mx-auto px-3 mt-1">
              <button onClick={deleteImage}>
                <FaTrash
                  size={18}
                  className="text-red-900 hover:text-red-500 hover:cursor-pointer"
                />
              </button>
            </div>
          )}
        </div>
        <p className="px-3 pb-3 pt-1 border-t-2 border-indigo-100 font-normal text-gray-700 ">
          {image.description}
        </p>
      </div>
    </div>
  );
}
