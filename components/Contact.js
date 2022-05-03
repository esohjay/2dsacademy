import React from "react";
import { useForm } from "react-hook-form";

import { useStudentContext } from "../lib/dataStore/contexts/student";
import { useStudentActions } from "../lib/dataStore/actions/student";

import SocialBtns from "./SocialBtns";
import Spiner from "./Spiner";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  const { state } = useStudentContext();
  const { contactUs } = useStudentActions();
  const { loading } = state;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    contactUs(data, reset);
  };

  return (
    <section
      className="mt-10 w-full py-14 px-7 md:px-16 bg-contact bg-mainColor"
      id="contact"
    >
      <article className="bg-white shadow-md rounded backdrop-blur-md backdrop-filter bg-opacity-[0.1]">
        <h3 className="font-bold text-white pt-8 mb-6 text-2xl text-center">
          Get In Touch
        </h3>
        <article className="md:flex md:justify-between md:items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" md:w-[45%] px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-mainColor leading-tight ${
                  errors.name && "border-red-600"
                } focus:outline-none focus:shadow-outline`}
                id="name"
                type="text"
                {...register("name", { required: true })}
                placeholder="Your Name"
              />
              {errors.name?.type === "required" && (
                <span className="text-red-400 ">name is required</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-mainColor leading-tight ${
                  errors.email && "border-red-600"
                } focus:outline-none focus:shadow-outline`}
                id="email"
                type="text"
                {...register("email", {
                  required: true,
                  // pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
                placeholder="Email address"
              />
              {errors.email?.type === "required" && (
                <span className="text-red-400 ">email is required</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-mainColor leading-tight ${
                  errors.phone && "border-red-600"
                } focus:outline-none focus:shadow-outline`}
                id="phone"
                type="number"
                {...register("phone", { required: true })}
                placeholder="Phone Number"
              />
              {errors.phone?.type === "required" && (
                <span className="text-red-400 ">phone is required</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-mainColor leading-tight ${
                  errors.message && "border-red-600"
                } focus:outline-none focus:shadow-outline`}
                id="message"
                {...register("message", { required: true })}
                placeholder="Message"
              ></textarea>
              {errors.message?.type === "required" && (
                <span className="text-red-400 ">message is required</span>
              )}
            </div>

            <button
              className="bg-altColor hover:bg-mainColor transition-all duration-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </form>

          <div className="w-full h-[1px] my-5 bg-lightColor md:hidden"></div>
          <div className="px-8 pt-6 pb-8 mb-4 md:w-[45%]">
            <div className="flex items-center mb-3">
              <FaMapMarkerAlt className="text-2xl text-altColor mx-2" />
              <p className="text-md md:text-xl text-left text-white ">
                <span className="text-xl font-bold  md:text-2xl text-white mx-2">
                  {" "}
                  Address:
                </span>{" "}
                Banex Plaza, Wuse 2, Abuja.
              </p>
            </div>
            <div className="flex items-center mb-3">
              <FaPhoneAlt className=" text-2xl text-altColor mx-2" />
              <p className="text-md md:text-xl text-white ">
                {" "}
                <span className="text-xl font-bold  md:text-2xl text-white mx-2">
                  {" "}
                  Phone:
                </span>{" "}
                +234-8130680557
              </p>
            </div>
            <div className="flex items-center mb-5">
              <FaEnvelope className="text-2xl text-altColor mx-2" />
              <a href="mailto:olasunkanmi@gmail.com">
                <p className="text-md md:text-xl text-white ">
                  <span className="text-xl fontboldm md:text-2xl text-white mx-2">
                    Email:
                  </span>{" "}
                  2dsacademy@gmail.com
                </p>{" "}
              </a>
            </div>
            <div className="flex justify-start w-full">
              <SocialBtns style={"bg-mainColor bg-opacity-75"} />
            </div>
          </div>
        </article>
      </article>
    </section>
  );
}

export default Contact;
