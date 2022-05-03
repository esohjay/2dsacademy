import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useStudentContext } from "../lib/dataStore/contexts/student";
import {
  ENROLL_STUDENT_RESET,
  CONTACT_US_RESET,
} from "../lib/dataStore/constants/student";
import Image from "next/image";

import { FaRegArrowAltCircleUp } from "react-icons/fa";

import coder from "../public/images/Coder.svg";

import Nav from "../components/Nav";
import WhyUs from "../components/WhyUs";
import Courses from "../components/Courses";
import Requirement from "../components/Requirement";
import Contact from "../components/Contact";
import Delivery from "../components/Delivery";
import { MovingObjects } from "../components/MovingObjects";
import { About } from "../components/About";
import Enroll from "../components/Enroll";
import Modal from "../components/Modal";
import Notification from "../components/Notification";
import Spiner from "../components/Spiner";
import BackToTop from "../components/BackToTop";

export default function Home() {
  const { state, dispatch } = useStudentContext();
  const { enrolled, error, messageSent, loading } = state;
  const [showHeroModal, setShowHeroModal] = useState(false);

  const closeHeroModal = () => {
    setShowHeroModal(false);
  };
  useEffect(() => {
    const clear = setTimeout(() => {
      dispatch({ type: ENROLL_STUDENT_RESET });
      dispatch({ type: CONTACT_US_RESET });
    }, 4000);
    return () => {
      clearTimeout(clear);
    };
  }, [enrolled, messageSent]);

  return (
    <>
      <section
        className=" h-screen  bg-heroSection bg-right-center bg-cover relative
      "
      >
        <Nav background={"bg-transparent"} />

        <article className=" flex z-20 flex-col w-full h-full justify-center items-center md:flex-row md:justify-between">
          <article className="p-10">
            <h1 className="font-extrabold text-3xl mb-5 text-mainColor md:text-5xl">
              Become A <span className="text-altColor  ">Web Developer</span>
            </h1>
            <p className="text-mainColor2 mb-8 text-md leading-loose">
              You journey of becoming a website developer starts here. With us,
              you learn not just the technical side of the job, but also the
              business side of it.
            </p>

            <button
              onClick={() => setShowHeroModal(true)}
              className="font-bold uppercase text-xs py-5 px-7 bg-altColor text-white
                  border rounded-md hover:bg-mainColor transition-all duration-700"
            >
              get started
            </button>

            <Modal
              close={closeHeroModal}
              show={showHeroModal}
              content={<Enroll close={closeHeroModal} />}
            />
          </article>
          <figure className="relative z-20 w-full md:grid md:place-items-end ">
            <Image
              src={coder}
              objectFit="contain"
              alt="coder"
              width={700}
              height={400}
            />
          </figure>
        </article>
        <MovingObjects />
      </section>
      <About />
      <Courses />
      <Requirement />
      <WhyUs />
      <Delivery />
      <Contact />
      <BackToTop link={"/"} />
      {enrolled && (
        <Notification
          message={
            "Thanks for applying. Your application will be processed. You will hear from us soon."
          }
          heading={"Your application has been submitted!"}
        />
      )}
      {messageSent && (
        <Notification
          message={"Thanks for contacting us. We will get back to you soon."}
          heading={"Message sent!"}
        />
      )}
      {error && (
        <Notification
          message={error}
          heading={"Something went wrong."}
          variant="error"
        />
      )}
      {loading && <Spiner />}
    </>
  );
}
