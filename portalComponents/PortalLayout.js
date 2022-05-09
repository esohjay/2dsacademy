import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaPowerOff,
  FaCog,
  FaEdit,
  FaBell,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaWpforms,
  FaCode,
  FaListUl,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { ImBook } from "react-icons/im";
import {
  MdAssignment,
  MdPhotoCameraBack,
  MdFeedback,
  MdOutlineAssessment,
} from "react-icons/md";

import user from "../public/images/user.svg";
function PortalLayout({ children }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <section className="flex flex-col mb-16">
        {/* Top nav start */}
        <header
          className={`h-[60px]  fixed top-0 left-0 w-full z-40 bg-mainColor text-white shadow-md`}
        >
          <nav className={`flex justify-between h-[100%] items-center p-5  `}>
            {/* Logo */}
            <h3 className="font-bold text-xl">
              <Link href="/">2DSACADEMY</Link>
            </h3>
            {/* Hamburger Icon */}
            <button
              onClick={() => setShowNav(!showNav)}
              id="menu-btn"
              className={`${showNav ? "open" : ""} hamburger md:hidden`}
            >
              <span className="hamburgerTop"></span>
              <span className="hamburgerMiddle"></span>
              <span className="hamburgerBottom"></span>
            </button>
          </nav>
        </header>
        {/* Top nav end */}
        {/*Main Body start */}
        <section className="flex flex-col relative min-h-screen md:flex-row mt-[60px] ">
          {/* sidebar wrapper */}
          <aside
            className={`fixed h-[91vh] px-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-mainColor 
          scrollbar-track-gray-100 bg-portal bg-mainColor w-[280px] md:opacity-100 flex flex-col
          ${showNav ? "opacity-100" : "opacity-0"} transition-all duration-1000
          `}
          >
            {/* sidebar content purple part*/}

            {/* User details */}
            <div className="flex flex-col justify-center ">
              <div
                className="grid grid-cols-[1fr_2fr]  place-items-center p-3 border-b 
                border-b-lightColor mb-2"
              >
                <Image
                  src={user}
                  objectFit="contain"
                  width={100}
                  height={100}
                  className="rounded-full"
                  alt={"learn web development"}
                />
                <div className="text-center text-white">
                  <p className="font-extrabold leading-loose tracking-widest">
                    2737382OD
                  </p>
                  {/* user details icons */}
                  <div className="flex justify-evenly">
                    <Link href={``}>
                      <a className="block hover:text-altColor transition-all duration-700">
                        <FaBell />
                      </a>
                    </Link>
                    <Link href={``}>
                      <a className="block hover:text-altColor transition-all duration-700">
                        <FaEdit />
                      </a>
                    </Link>
                    <Link href={``}>
                      <a className="block hover:text-altColor transition-all duration-700">
                        <FaCog />
                      </a>
                    </Link>
                    <Link href={``}>
                      <a className="block hover:text-altColor transition-all duration-700">
                        <FaPowerOff />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-white mb-3 p-3 leading-loose tracking-widest border-b border-b-lightColor">
                <div className="flex gap-2  items-center">
                  <FaUser />
                  <p>Olusoji Daramola</p>
                </div>
                <div className="flex gap-2  items-center">
                  <FaEnvelope />
                  <p>olusoji@gmail.com</p>
                </div>
                <div className="flex gap-2  items-center">
                  <FaPhoneAlt />
                  <p>08135256188</p>
                </div>
              </div>
            </div>
            {/* User details end */}

            <h2
              className=" text-white text-xl font-bold  p-3 border-b 
                border-b-lightColor "
            >
              Student Dashboard
            </h2>

            <nav className="mb-10">
              <li
                className=" hover:bg-mainColor border-b border-b-lightColor bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500"
              >
                <FaWpforms className="text-white text-md " />
                <Link href={`#`}>
                  <a className="block text-white tracking-widest font-bold py-3 px-3 ">
                    Enroll
                  </a>
                </Link>
              </li>
              <li
                className=" hover:bg-mainColor border-b border-b-lightColor bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500"
              >
                <ImBook className="text-white text-md " />
                <Link href={`#`}>
                  <a className="block text-white tracking-widest font-bold py-3 px-3 ">
                    Courses
                  </a>
                </Link>
              </li>
              <li
                className=" hover:bg-mainColor border-b border-b-lightColor bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500"
              >
                <MdAssignment className="text-white text-md " />
                <Link href={`#`}>
                  <a className="block text-white tracking-widest font-bold py-3 px-3 ">
                    Assignments
                  </a>
                </Link>
              </li>
              <li
                className=" hover:bg-mainColor border-b border-b-lightColor bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500"
              >
                <FaCode className="text-white text-md " />
                <Link href={`#`}>
                  <a className="block text-white tracking-widest font-bold py-3 px-3 ">
                    Exam
                  </a>
                </Link>
              </li>
              <li
                className=" hover:bg-mainColor border-b border-b-lightColor bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500"
              >
                <FaListUl className="text-white text-md " />
                <Link href={`#`}>
                  <a className="block text-white tracking-widest font-bold py-3 px-3 ">
                    My Syllabus
                  </a>
                </Link>
              </li>
              <li
                className=" hover:bg-mainColor border-b border-b-lightColor bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500"
              >
                <MdOutlineAssessment className="text-white text-md " />
                <Link href={`#`}>
                  <a className="block text-white tracking-widest font-bold py-3 px-3 ">
                    Grades
                  </a>
                </Link>
              </li>
              <li
                className=" hover:bg-mainColor border-b border-b-lightColor bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500"
              >
                <FaMoneyCheckAlt className="text-white text-md " />
                <Link href={`#`}>
                  <a className="block text-white tracking-widest font-bold py-3 px-3 ">
                    Make payments
                  </a>
                </Link>
              </li>
              <li
                className=" hover:bg-mainColor border-b border-b-lightColor bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500"
              >
                <MdFeedback className="text-white text-md " />
                <Link href={`#`}>
                  <a className="block text-white tracking-widest font-bold py-3 px-3 ">
                    Ticket&#47;Complain
                  </a>
                </Link>
              </li>
              <li
                className=" hover:bg-mainColor border-b border-b-lightColor bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500"
              >
                <MdPhotoCameraBack className="text-white text-md " />
                <Link href={`#`}>
                  <a className="block text-white tracking-widest font-bold py-3 px-3 ">
                    Change Picture
                  </a>
                </Link>
              </li>
            </nav>
          </aside>

          <main className="w-full md:ml-[280px]">{children}</main>
        </section>
        {/* Main body end */}
      </section>
      <style jsx>
        {`
          .hamburger {
            cursor: pointer;
            width: 24px;
            height: 24px;
            transition: all 0.25s;
            position: relative;
          }

          .hamburgerTop,
          .hamburgerMiddle,
          .hamburgerBottom {
            position: absolute;
            top: 0;
            left: 0;
            width: 24px;
            height: 2px;
            background: white;
            transform: rotate(0);
            transition: all 0.5s;
          }

          .hamburgerMiddle {
            transform: translateY(7px);
          }

          .hamburgerBottom {
            transform: translateY(14px);
          }

          .open {
            transform: rotate(90deg);
            transform: translateY(0px);
          }

          .open .hamburgerTop {
            transform: rotate(45deg) translateY(6px) translate(6px);
          }

          .open .hamburgerMiddle {
            display: none;
          }

          .open .hamburgerBottom {
            transform: rotate(-45deg) translateY(6px) translate(-6px);
          }
          .navbar-fixed {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
            z-index: 49;
            animation: 1000ms ease-in-out 0s normal none 1 running fadeInDown;
          }
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
}

export default PortalLayout;
