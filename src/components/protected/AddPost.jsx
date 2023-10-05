import React, { useState } from "react";
import { useAddImage } from "../../hooks/images";
import { useAuth } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Loading";

export default function AddPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, isLoading: authLoading, error } = useAuth();
  const {
    setFile,
    addImage,
    isLoading: fileLoading,
    fileURL,
  } = useAddImage(user);

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleImageUpload(data) {
    addImage({ title: data.title, description: data.description });
  }

  if (authLoading) return <Loading />;

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-2  sm:mt-20">
      <form
        onSubmit={handleSubmit(handleImageUpload)}
        className=" flex flex-col gap-2 "
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Title
            <input
              {...register("title", { required: true })}
              type="text"
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Sample title"
            />
          </label>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
            <textarea
              {...register("description", { required: true })}
              rows="4"
              className="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="A description of your artwork..."
            ></textarea>
          </label>
        </div>

        <div>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              {...register("image", { required: true })}
              onChange={handleChange}
              accept="image/*"
              type="file"
              className="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-500 file:text-white
      hover:file:bg-blue-600
    "
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={fileLoading}
          className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Upload Image
        </button>
      </form>
    </div>
  );
}
