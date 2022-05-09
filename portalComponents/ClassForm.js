import React, { useState, useEffect } from "react";
//import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
//import AdminLayout from "../../../portalComponents/AdminLayout";

import { useAdminContext } from "../lib/dataStore/contexts/admin";
import { useClassActions } from "../lib/dataStore/actions/admin/class";

function addclass({ close }) {
  //   const router = useRouter();
  const { state } = useAdminContext();
  const { addClass } = useClassActions();
  const { classAdded, program } = state;

  useEffect(() => {
    if (classAdded) {
      //router.push("/portal/admin/addclass");
      close();
    }
  }, [classAdded]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ name, startDate, endDate, status }) => {
    addClass(
      { name, startDate, endDate, status, program: program?._id },
      reset
    );
  };
  return (
    <div className="w-[90%] p-5  max-w-[550px] mx-auto ">
      <h3 className="text-mainColor text-center font-bold text-3xl capitalize mb-3">
        Create Class
      </h3>
      <p className="text-center text-mainColor2 mb-4">
        Add a new class to the program.
      </p>
      <div className="w-[70px] h-[3px] mx-auto mb-8 bg-altColor op"></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full  pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-mainColor text-sm font-bold mb-2"
            htmlFor="name"
          >
            Class Name
          </label>
          <input
            className={` border-mainColor border rounded w-full py-2 px-3 text-mainColor leading-tight ${
              errors.name && "border-red-600"
            } focus:outline-none focus:border-2`}
            id="name"
            type="text"
            {...register("name", { required: true })}
            placeholder="Class Name *"
          />
          {errors.name?.type === "required" && (
            <span className="text-red-500 ">class name is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-mainColor text-sm font-bold mb-2"
            htmlFor="startDate"
          >
            Start Date
          </label>
          <input
            className={` border-mainColor border rounded w-full py-2 px-3 text-mainColor leading-tight ${
              errors.startDate && "border-red-600"
            } focus:outline-none focus:border-2`}
            id="startDate"
            type="date"
            {...register("startDate", { required: true })}
            placeholder="Start date *"
          />
          {errors.startDate?.type === "required" && (
            <span className="text-red-500 ">start date is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-mainColor text-sm font-bold mb-2"
            htmlFor="endDate"
          >
            End Date
          </label>
          <input
            className={` border-mainColor border rounded w-full py-2 px-3 text-mainColor leading-tight ${
              errors.endDate && "border-red-600"
            } focus:outline-none focus:border-2`}
            id="endDate"
            type="date"
            {...register("endDate", { required: true })}
            placeholder="End date *"
          />
          {errors.endDate?.type === "required" && (
            <span className="text-red-500 ">end date is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-mainColor text-sm font-bold mb-2"
            htmlFor="message"
          >
            Status
          </label>
          <select
            className={`border-mainColor border rounded w-full py-2 px-3 text-mainColor leading-tight ${
              errors.status && "border-red-600"
            } focus:outline-none focus:border-2`}
            id="status"
            {...register("status", { required: true })}
            placeholder="Program Status"
          >
            <option value="">Select Class Status</option>
            <option value="open">Open For Intake</option>
            <option value="closed">Closed For Intake</option>
            <option value="active">Active</option>
            <option value="ended">Ended</option>
          </select>
          {errors.status?.type === "required" && (
            <span className="text-red-400 ">program status is required</span>
          )}
        </div>

        <button
          className="bg-altColor hover:bg-mainColor transition-all duration-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create Program
        </button>
      </form>
    </div>
  );
}

export default addclass;
