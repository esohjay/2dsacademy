import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import AdminLayout from "../../../components/layouts/AdminLayout";

import { useCourseContext } from "../../../lib/dataStore/contexts/course";
import { useProgramActions } from "../../../lib/dataStore/actions/portal/program";

import Modal from "../../../components/Modal";
import ClassForm from "../../../portalComponents/ClassForm";

function newprogram() {
  const router = useRouter();
  const { state } = useCourseContext();
  const { addProgram } = useProgramActions();
  const { programAdded, classAdded, classData } = state;

  const [showClass, setShowClass] = useState(false);
  const closeClass = () => {
    setShowClass(false);
  };

  useEffect(() => {
    if (programAdded) {
      setShowClass(true);
    }
    if (classAdded) {
      router.push(`/portal/admin/class/${classData._id}`);
    }
  }, [programAdded, classAdded]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    addProgram(data, reset);
  };
  return (
    <>
      <section className="h-screen grid place-items-center">
        <div className="w-[90%] p-5  max-w-[550px]  rounded-md bg-white shadow-md">
          <h3 className="text-mainColor text-center font-bold text-3xl capitalize mb-3">
            New program
          </h3>
          <p className="text-center text-mainColor2 mb-4">
            Add a new program you want students to enroll in.
          </p>
          <div className="w-[70px] h-[3px] mx-auto mb-8 bg-altColor op"></div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" w-full pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-mainColor text-sm font-bold mb-2"
                htmlFor="name"
              >
                Program Name
              </label>
              <input
                className={` border-mainColor border rounded w-full py-2 px-3 text-mainColor leading-tight ${
                  errors.name && "border-red-600"
                } focus:outline-none focus:border-2`}
                id="fname"
                type="text"
                {...register("name", { required: true })}
                placeholder="Program Name *"
              />
              {errors.name?.type === "required" && (
                <span className="text-red-500 ">program name is required</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-mainColor text-sm font-bold mb-2"
                htmlFor="description"
              >
                Program Description
              </label>
              <textarea
                className={`border-mainColor border rounded w-full py-2 px-3 text-mainColor leading-tight ${
                  errors.description && "border-red-600"
                } focus:outline-none focus:border-2`}
                id="description"
                {...register("description", { required: true })}
                placeholder="Program Description"
              ></textarea>
              {errors.description?.type === "required" && (
                <span className="text-red-400 ">
                  program description is required
                </span>
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
        <Modal
          close={closeClass}
          show={showClass}
          content={<ClassForm close={closeClass} />}
        />
      </section>
    </>
  );
}

newprogram.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default newprogram;
