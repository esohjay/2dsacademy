import Link from "next/link";
import React, { useState, useEffect } from "react";

import Modal from "./Modal";
import Enroll from "./Enroll";

const Nav = ({ background }) => {
  const [showNav, setShowNav] = useState(false);
  const [fixedNav, setFixedNav] = useState("");
  const [showNavModal, setShowNavModal] = useState(false);
  const closeNavModal = () => {
    setShowNavModal(false);
  };
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setFixedNav("navbar-fixed");
    } else {
      setFixedNav("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    // Start of Nav section
    <header className={`h-[60px] ${fixedNav} relative z-40  `}>
      {/* Navbar */}
      <nav
        className={`flex justify-between h-[100%] items-center p-5  text-mainColor ${
          showNav ? "bg-white" : background
        }`}
      >
        {/* Logo */}
        <h3 className="font-bold text-xl">
          <Link href="/">2DSACADEMY</Link>
        </h3>
        {/* Big screen nav links */}
        <ul className="hidden space-x-6 md:flex justify-center w-[60%] font-medium items-center bg-transparent  ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#courses">Courses</Link>
          </li>

          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        <button
          onClick={() => setShowNavModal(true)}
          className="py-2 text-center  bg-altColor px-7 text-white font-bold rounded-md hidden 
            hover:bg-mainColor md:block transition-all duration-700"
        >
          Enroll
        </button>

        <Modal
          content={<Enroll close={closeNavModal} />}
          close={closeNavModal}
          show={showNavModal}
        />
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
      {/* Small Screen */}
      <nav
        className={`${
          showNav ? "flex" : "hidden"
        } w-[100%] transition-all duration-1000 md:hidden`}
      >
        <ul className="flex flex-col w-[100%] justify-center items-center bg-white py-6 ">
          <li
            onClick={() => setShowNav(false)}
            className=" w-[100%] text-mainColor hover:bg-mainColor hover:text-white cursor-pointer font-medium transition-all duration-500 "
          >
            <Link href="/">
              <a className="py-5 block text-center  ">Home</a>
            </Link>
          </li>
          <li
            onClick={() => setShowNav(false)}
            className=" w-[100%] text-mainColor hover:bg-mainColor hover:text-white cursor-pointer font-medium transition-all duration-500 "
          >
            <Link href="#about">
              <a className="py-5 block text-center  ">About</a>
            </Link>
          </li>
          <li
            onClick={() => setShowNav(false)}
            className=" w-[100%] text-mainColor hover:bg-mainColor hover:text-white cursor-pointer font-medium transition-all duration-500 "
          >
            <Link href="#courses">
              <a className="py-5 block text-center  ">Courses</a>
            </Link>
          </li>

          <li
            onClick={() => setShowNav(false)}
            className=" w-[100%]  text-mainColor hover:bg-mainColor hover:text-white cursor-pointer font-medium transition-all duration-500 "
          >
            <Link href="#contact">
              <a className="py-5 block text-center w-full ">Contact</a>
            </Link>
          </li>
          <div className="w-full h-[0.5px] my-3 bg-lightColor"></div>
          <li className=" w-[100%]  text-white bg-altColor text-center hover:bg-mainColor  cursor-pointer font-medium transition-all duration-500 ">
            <button
              onClick={() => setShowNavModal(true)}
              className="py-5 w-full block text-center px-7 "
            >
              Enroll
            </button>
          </li>
        </ul>
      </nav>
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
            background: #58468c;
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
    </header>
    // End of nav
  );
};
Nav.defaultProps = {
  background: "bg-mainColor",
};
export default Nav;
