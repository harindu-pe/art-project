import React from "react";
import { useAuth } from "../../hooks/auth";
import { useAddComment } from "../../hooks/comments";
import { useForm } from "react-hook-form";
import Loading from "../Loading";

export default function NewComment({ image }) {
  const { id: imageID } = image;
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { addComment, isLoading: commentLoading } = useAddComment({
    imageID,
    userID: authUser?.id,
  });

  function handleAddComment(data) {
    addComment(data.text);
    reset();
  }

  if (authLoading) return <Loading />;

  return (
    <>
      <form onSubmit={handleSubmit(handleAddComment)} className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Comments</h2>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
          <label>
            <textarea
              rows="3"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
              placeholder="Write a comment..."
              {...register("text", { required: true })}
            ></textarea>
          </label>
        </div>
        <button
          type="submit"
          disabled={commentLoading || authLoading}
          className="flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
        >
          Post comment
        </button>
      </form>
    </>
  );
}
