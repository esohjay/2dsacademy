import React from "react";
import Link from "next/link";
import { FaLaptopCode, FaServer, FaCode } from "react-icons/fa";

function Courses() {
  return (
    <article className="bg-white py-12">
      <h3 className="text-altColor text-center text-lg uppercase mb-5">
        Increase your skill
      </h3>
      <h3 className="text-mainColor text-center font-bold text-3xl capitalize mb-5">
        explore our courses
      </h3>
      <div className="w-[70px] h-[3px] mx-auto mb-10 bg-altColor op"></div>
      <div className="grid px-5 md:grid-cols-2 lg:grid-cols-3 gap-7 md:px-14">
        {/* Single Card */}
        <div
          className="text-center px-5 bg-bodyBg py-10 rounded-lg  cursor-pointer hover:shadow-lg
         hover:bg-white mb-6 transition-all duration-1000 group"
        >
          <button
            className="bg-transparent text-6xl  text-mainColor2 group-hover:text-altColor 
            relative mb-5 after:absolute transition-all duration-1000
            after:left-[-7px] after:top-[-9px] after:w-[90px] after:h-[80px] after:bg-iconBg"
          >
            <FaCode />
          </button>

          <h3 className="text-xl text-mainColor font-bold mb-5 ">
            Full Stack Web Development
          </h3>
          <p className="text-mainColor2 text-md">
            Learn to design and develop powerful modern web applications that
            form the foundation for the apps, websites, and systems that people
            and businesses use every day.
          </p>
          <Link href="#enroll">
            <a
              className="font-bold capitalize text-md mt-5 block  text-altColor 
              hover:underline transition-all duration-700"
            >
              learn more
            </a>
          </Link>
        </div>
        {/* End of Single Card */}
        {/* Single Card */}
        <div
          className="text-center px-5 bg-bodyBg py-10 rounded-lg  cursor-pointer hover:shadow-lg
         hover:bg-white mb-6 transition-all duration-1000 group"
        >
          <button
            className="bg-transparent text-6xl  text-mainColor2 group-hover:text-altColor 
            relative mb-5 after:absolute transition-all duration-1000
            after:left-[-7px] after:top-[-9px] after:w-[90px] after:h-[80px] after:bg-iconBg"
          >
            <FaLaptopCode />
          </button>

          <h3 className="text-xl text-mainColor font-bold mb-5 ">
            Frontend Development
          </h3>
          <p className="text-mainColor2 text-md">
            Learn the building block of web development. This course will teach
            you how to build a responsible website with modern design.
          </p>
          <Link href="#enroll">
            <a
              className="font-bold capitalize text-md mt-5 block  text-altColor 
              hover:underline transition-all duration-700"
            >
              learn more
            </a>
          </Link>
        </div>
        {/* End of Single Card */}
        {/* Single Card */}
        <div
          className="text-center px-5 bg-bodyBg py-10 rounded-lg  cursor-pointer hover:shadow-lg
         hover:bg-white mb-6 transition-all duration-1000 group"
        >
          <button
            className="bg-transparent text-6xl  text-mainColor2 group-hover:text-altColor 
            relative mb-5 after:absolute transition-all duration-1000
            after:left-[-7px] after:top-[-9px] after:w-[90px] after:h-[80px] after:bg-iconBg"
          >
            <FaServer />
          </button>

          <h3 className="text-xl text-mainColor font-bold mb-5 ">
            Backend Development
          </h3>
          <p className="text-mainColor2 text-md">
            Backend development powers the web. Learn everything you need to
            know about backend development.
          </p>
          <Link href="#enroll">
            <a
              className="font-bold capitalize text-md mt-5 block  text-altColor 
              hover:underline transition-all duration-700"
            >
              learn more
            </a>
          </Link>
        </div>
        {/* End of Single Card */}
      </div>
    </article>
  );
}

export default Courses;
