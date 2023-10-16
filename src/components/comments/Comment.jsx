import React from "react";
import { FaTrash } from "react-icons/fa";
import { useGetUser } from "../../hooks/users";
import { useAuth } from "../../hooks/auth";
import Loading from "../Loading";
import { format } from "date-fns";
import { useDeleteComment } from "../../hooks/comments";

export default function Comment({ comment }) {
  const { text, userID, date, id } = comment;
  const { user, isLoading: userLoading } = useGetUser(userID);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { deleteComment, isLoading: deleteLoading } = useDeleteComment(id);

  if (userLoading) return <Loading />;

  return (
    <article className="mb-5 p-3 text-base bg-white rounded-lg  border ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
            {user.username}
          </p>
          <p className="text-sm text-gray-600 ">
            {format(date, "dd-MMMM-yyyy")}
          </p>
        </div>
        {authUser && !authLoading && authUser.id === userID && (
          <button
            disabled={deleteLoading}
            onClick={deleteComment}
            className="inline-flex items-center p-2 font-medium text-center bg-white rounded-lg hover:bg-gray-100 hover:text-red-500 focus:ring-4 focus:outline-none focus:ring-gray-50 text-red-900 hover:cursor-pointer "
            type="button"
          >
            <FaTrash size={18} />
          </button>
        )}
      </div>
      <p className="text-gray-500 ">{text}</p>
    </article>
  );
}
