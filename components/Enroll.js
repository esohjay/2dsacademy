import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useStudentContext } from "../lib/dataStore/contexts/student";
import { useStudentActions } from "../lib/dataStore/actions/student";

function Enroll({ close }) {
  const { state } = useStudentContext();
  const { enrollStudent } = useStudentActions();
  const { loading } = state;

  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({
    fname,
    lname,
    email,
    phone,
    password,
    confirmPassword,
  }) => {
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      return;
    }

    enrollStudent(
      {
        fname,
        lname,
        email,
        phone,
        password,
      },
      reset,
      close
    );
  };
  return (
    <div>
      <h3 className="text-mainColor text-center font-bold text-3xl capitalize mb-3">
        Join Us
      </h3>
      <p className="text-center text-mainColor2 mb-4">
        Enroll now to start your journey to becoming a proficient web developer.
      </p>
      <div className="w-[70px] h-[3px] mx-auto mb-8 bg-altColor op"></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full  pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-mainColor text-sm font-bold mb-2"
            htmlFor="fname"
          >
            First Name
          </label>
          <input
            className={` border-mainColor border rounded w-full py-2 px-3 text-mainColor leading-tight ${
              errors.fname && "border-red-600"
            } focus:outline-none focus:focus:border-2`}
            id="fname"
            type="text"
            {...register("fname", { required: true })}
            placeholder="First Name *"
          />
          {errors.fname?.type === "required" && (
            <span className="text-red-500 ">first name is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-mainColor text-sm font-bold mb-2"
            htmlFor="lname"
          >
            Last Name
          </label>
          <input
            className={`border-mainColor border rounded w-full py-2 px-3 text-mainColor leading-tight ${
              errors.lname && "border-red-600"
            } focus:outline-none focus:focus:border-2`}
            id="lname"
            type="text"
            {...register("lname", { required: true })}
            placeholder="Last Name *"
          />
          {errors.lname?.type === "required" && (
            <span className="text-red-500 ">last name is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-mainColor text-sm font-bold mb-2"
            htmlFor="student-email"
          >
            Email
          </label>
          <input
            className={`border-mainColor appearance-none border rounded w-full py-2 px-3 text-mainColor leading-tight ${
              errors.email && "border-red-600"
            } focus:outline-none focus:focus:border-2`}
            id="student-email"
            type="text"
            {...register("email", {
              required: true,
              // pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            placeholder="Email address *"
          />
          {errors.email?.type === "required" && (
            <span className="text-red-500 ">email is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-mainColor text-sm font-bold mb-2"
            htmlFor="student-phone"
          >
            Phone
          </label>
          <input
            className={`border-mainColor appearance-none border rounded w-full py-2 px-3 text-mainColor leading-tight ${
              errors.phone && "border-red-600"
            } focus:outline-none focus:focus:border-2`}
            id="student-phone"
            type="number"
            {...register("phone", { required: true })}
            placeholder="Phone Number *"
          />
          {errors.phone?.type === "required" && (
            <span className="text-red-500 ">phone is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-mainColor text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`border-mainColor appearance-none border rounded w-full py-2 px-3 text-mainColor leading-tight ${
              errors.password && "border-red-600"
            } focus:outline-none focus:focus:border-2`}
            id="password"
            type="password"
            {...register("password", {
              required: true,
              minLength: 8,
              //    pattern: /^(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
              // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            })}
            placeholder="Password *"
          />
          {errors.password?.type === "required" ? (
            <span className="text-red-500 ">password is required</span>
          ) : errors.password?.type === "minLength" ? (
            <span className="text-red-500">
              password must have a minimum of 8 characters
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-mainColor text-sm font-bold mb-2"
            htmlFor="password"
          >
            Confirm Password
          </label>
          <input
            className={`border-mainColor appearance-none border rounded w-full py-2 px-3 text-mainColor leading-tight ${
              errors.confirmPassword && "border-red-600"
            } focus:outline-none focus:focus:border-2`}
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: true,
            })}
            placeholder="Confirm Password *"
          />
          {errors.confirmPassword?.type === "required" && (
            <span className="text-red-500 block">
              confirm password is required
            </span>
          )}
          {confirmPasswordError && (
            <span className="text-red-500">password do not match</span>
          )}
        </div>

        <button
          className="bg-altColor hover:bg-mainColor transition-all duration-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:focus:border-2"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Enroll;
