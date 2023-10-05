import React from "react";
import { NavLink } from "react-router-dom";
import { HOME, LOGIN } from "../../config/routes";
import { useForm } from "react-hook-form";
import { useRegister } from "../../hooks/auth";
import { BsPaintBucket } from "react-icons/bs";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: signUp,
    isLoading: registerLoading,
    userNameError,
  } = useRegister();

  const handleRegister = (data) => {
    signUp({
      username: data.username,
      email: data.email,
      password: data.password,
      redirectTo: HOME,
    });
  };

  const navigate = useNavigate();

  const { user, isLoading: authLoading, error } = useAuth();

  return user && !authLoading ? (
    navigate(HOME)
  ) : (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex items-center justify-center gap-2 ">
          <BsPaintBucket className="h-10 w-auto" size={25} />
          <span className="font-bold text-2xl">Art Platform</span>
        </div>
        <h2 className="mt-5 text-center text-xl  leading-9 tracking-tight text-gray-900">
          Make a new account!
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Username
              <div className="mt-2">
                <input
                  {...register("username", { required: true })}
                  type="text"
                  autoComplete="email"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
              <div className="mt-2">
                <input
                  {...register("email")}
                  type="email"
                  autoComplete="email"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Password
              <div className="mt-2">
                <input
                  {...register("password", { required: true })}
                  type="password"
                  autoComplete="current-password"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={registerLoading}
              className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <NavLink
            to={LOGIN}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign In!
          </NavLink>
        </p>

        <div className="mt-5 text-center text-lg text-red-600">
          {userNameError}
        </div>
      </div>
    </div>
  );
}
