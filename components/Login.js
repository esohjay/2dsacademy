import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useUserActions } from "../lib/dataStore/actions/user";

import { FaEyeSlash, FaEye } from "react-icons/fa";

function Login({ close }) {
  const { loginUser } = useUserActions();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPw = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    loginUser(data, reset, close);
  };
  return (
    <section className="px-14">
      <h3 className="text-mainColor text-center font-bold text-3xl capitalize mb-3">
        welcome back
      </h3>
      <p className="text-center text-mainColor2 font-semibold mb-4">
        Login to manage your account.
      </p>
      <div className="w-[70px] h-[3px] mx-auto mb-8 bg-altColor op"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full pt-6 pb-8 mb-4"
      >
        <div className="mb-6">
          <label
            className="block text-lightBlack text-sm font-bold mb-2"
            htmlFor="emailOrId"
          >
            Email address or Id
          </label>
          <input
            className={`border-mainColor appearance-none border rounded w-full py-2 px-3 text-mainColor leading-tight ${
              errors.email && "border-red-600"
            } focus:outline-none focus:focus:border-2`}
            id="emailOrId"
            type="text"
            {...register("emailOrId", { required: true })}
            placeholder="example@email.com *"
          />
          {errors.email?.type === "required" && (
            <span className="text-red-500 ">email is required</span>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-lightBlack text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            {showPassword ? (
              <button
                type="button"
                className="absolute right-2 top-3 text-lightBlack"
                onClick={handleShowPw}
              >
                <FaEyeSlash />
              </button>
            ) : (
              <button
                type="button"
                className="absolute right-2 top-3 text-lightBlack"
                onClick={handleShowPw}
              >
                <FaEye />
              </button>
            )}
            <input
              className={`border-mainColor appearance-none border rounded w-full py-2 px-3 text-mainColor leading-tight ${
                errors.password && "border-red-600"
              } focus:outline-none focus:focus:border-2`}
              id="password"
              {...register("password", { required: true })}
              placeholder="***********"
              type={`${showPassword ? "text" : "password"}`}
            />
          </div>
          {errors.password?.type === "required" && (
            <span className="text-red-400 ">password is required</span>
          )}
        </div>
        <div className="mb-10">
          <label
            className="block text-lightBlack text-sm font-bold mb-2"
            htmlFor="email"
          >
            Log in as
          </label>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <input
                className={` text-mainColor leading-tight ${
                  errors.role && "border-red-600"
                } focus:outline-none focus:focus:border-2`}
                id="student"
                type="radio"
                value="student"
                {...register("role", { required: true })}
              />
              <label
                className="block text-lightBlack text-sm font-bold"
                htmlFor="student"
              >
                Student
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                className={` text-mainColor leading-tight ${
                  errors.role && "border-red-600"
                } focus:outline-none focus:focus:border-2`}
                id="staff"
                type="radio"
                value="staff"
                {...register("role", { required: true })}
              />
              <label
                className="block text-lightBlack text-sm font-bold"
                htmlFor="staff"
              >
                Staff
              </label>
            </div>
          </div>

          {errors.email?.type === "required" && (
            <span className="text-red-500 ">email is required</span>
          )}
        </div>
        <button
          className="bg-altColor hover:bg-mainColor transition-all duration-700 
          text-white font-bold py-2 px-10 mb-5 rounded focus:outline-none focus:focus:border-2"
          type="submit"
        >
          Login
        </button>
        <div className="flex justify-end mb-10">
          <Link href={"/"}>
            <a className="font-bold">Forgot password?</a>
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
