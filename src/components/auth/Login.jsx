import React from "react";
import { NavLink } from "react-router-dom";
import { HOME, REGISTER } from "../../config/routes";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/auth";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, isLoading } = useLogin();

  const handleLogin = (data) => {
    login({
      email: data.email,
      password: data.password,
      redirectTo: HOME,
    });
  };

  return (
    <div className="p-10">
      <h1 className="mb-8 font-extrabold text-4xl">Login</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mt-4">
            <label className="block font-semibold">
              Email
              <input
                className="shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                type="email"
                {...register("email")}
              />
            </label>
          </div>

          <div className="mt-4">
            <label className="block font-semibold">
              Password
              <input
                className="shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                type="password"
                {...register("password", { required: true })}
              />
            </label>
            {errors.password && <span>This field is required</span>}
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              type="submit"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Login
            </button>

            <NavLink to={REGISTER}>Register</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
