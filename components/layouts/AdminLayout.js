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
  FaFileCode,
  FaUsers,
  FaFolderPlus,
  FaUserPlus,
  FaSchool,
} from "react-icons/fa";
import { GoDashboard } from "react-icons/go";
import { MdPhotoCameraBack, MdFeedback } from "react-icons/md";

import Footer from "../Footer";
import Meta from "../Meta";

import user from "../../public/images/user.svg";
function AdminLayout({ children }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Meta />
      <section className="flex flex-col  relative">
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
            className={`fixed h-[91vh] min-h-[91vh] bg-bodyBg  px-2 overflow-y-scroll w-[280px] md:block  flex flex-col
          ${
            showNav ? " block animate-contentSlideIn" : " hidden"
          } transition-all duration-1000
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
                  width={60}
                  height={60}
                  className="rounded-full"
                  alt={"learn web development"}
                />
                <div className=" text-mainColor">
                  <p className="font-extrabold leading-loose tracking-widest">
                    2737382OD
                  </p>
                  {/* user details icons */}
                  <div className="flex justify-evenly">
                    <Link href={`/`}>
                      <a className="block hover:text-altColor transition-all duration-700">
                        <FaBell />
                      </a>
                    </Link>
                    <Link href={`/`}>
                      <a className="block hover:text-altColor transition-all duration-700">
                        <FaEdit />
                      </a>
                    </Link>
                    <Link href={`/`}>
                      <a className="block hover:text-altColor transition-all duration-700">
                        <FaCog />
                      </a>
                    </Link>
                    <Link href={`/`}>
                      <a className="block hover:text-altColor transition-all duration-700">
                        <FaPowerOff />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-mainColor mb-3 p-3 leading-loose tracking-widest border-b border-b-lightColor">
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

            <h2 className=" text-mainColor text-xl font-bold  p-3  ">
              Admin Dashboard
            </h2>

            <nav className="mb-10">
              <li
                className="   bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500 cursor-pointer hover:bg-mainColor hover:text-white"
              >
                <GoDashboard className="text-mainColor text-md group-hover:text-white" />
                <Link href={`/`}>
                  <a
                    className="block text-mainColor tracking-widest font-medium py-3 px-3 
                  group-hover:text-white "
                  >
                    Dashboard
                  </a>
                </Link>
              </li>
              <li
                className="   bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500 cursor-pointer hover:bg-mainColor hover:text-white"
              >
                <FaFolderPlus className="text-mainColor text-md group-hover:text-white" />
                <Link href={`/portal/admin/newprogram`}>
                  <a
                    className="block text-mainColor tracking-widest font-medium py-3 px-3 
                  group-hover:text-white "
                  >
                    Add Program
                  </a>
                </Link>
              </li>
              <li
                className="   bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500 cursor-pointer hover:bg-mainColor hover:text-white"
              >
                <FaFileCode className="text-mainColor text-md group-hover:text-white" />
                <Link href={`/`}>
                  <a
                    className="block text-mainColor tracking-widest font-medium py-3 px-3 
                  group-hover:text-white "
                  >
                    Programmes
                  </a>
                </Link>
              </li>
              <li
                className="   bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500 cursor-pointer hover:bg-mainColor hover:text-white"
              >
                <FaUserPlus className="text-mainColor text-md group-hover:text-white" />
                <Link href={`/`}>
                  <a
                    className="block text-mainColor tracking-widest font-medium py-3 px-3 
                  group-hover:text-white "
                  >
                    Add Staff
                  </a>
                </Link>
              </li>
              <li
                className="   bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500 cursor-pointer hover:bg-mainColor hover:text-white"
              >
                <FaUsers className="text-mainColor text-md group-hover:text-white" />
                <Link href={`/`}>
                  <a
                    className="block text-mainColor tracking-widest font-medium py-3 px-3 
                  group-hover:text-white "
                  >
                    Staff
                  </a>
                </Link>
              </li>
              <li
                className="   bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500 cursor-pointer hover:bg-mainColor hover:text-white"
              >
                <FaSchool className="text-mainColor text-md group-hover:text-white" />
                <Link href={`/`}>
                  <a
                    className="block text-mainColor tracking-widest font-medium py-3 px-3 
                  group-hover:text-white "
                  >
                    Classes
                  </a>
                </Link>
              </li>
              <li
                className="   bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500 cursor-pointer hover:bg-mainColor hover:text-white"
              >
                <FaUsers className="text-mainColor text-md group-hover:text-white" />
                <Link href={`/`}>
                  <a
                    className="block text-mainColor tracking-widest font-medium py-3 px-3 
                  group-hover:text-white "
                  >
                    Students
                  </a>
                </Link>
              </li>
              <li
                className="   bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500 cursor-pointer hover:bg-mainColor hover:text-white"
              >
                <MdFeedback className="text-mainColor text-md group-hover:text-white" />
                <Link href={`/`}>
                  <a
                    className="block text-mainColor tracking-widest font-medium py-3 px-3 
                  group-hover:text-white "
                  >
                    Tickets
                  </a>
                </Link>
              </li>
              <li
                className="   bg-opacity-40 pl-3 group flex items-center
                 transition-all duration-500 cursor-pointer hover:bg-mainColor hover:text-white"
              >
                <MdPhotoCameraBack className="text-mainColor text-md group-hover:text-white" />
                <Link href={`/`}>
                  <a
                    className="block text-mainColor tracking-widest font-medium py-3 px-3 
                  group-hover:text-white "
                  >
                    Change Picture
                  </a>
                </Link>
              </li>
            </nav>
          </aside>

          <main className="w-full md:ml-[280px] ">
            <section className="min-h-screen">{children}</section>
            <Footer />
          </main>
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
          ::-webkit-scrollbar {
            width: 3px;
          }

          ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          }

          ::-webkit-scrollbar-thumb {
            background-color: #58468c;
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

export default AdminLayout;
