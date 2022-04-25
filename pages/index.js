import Link from "next/link";
import Image from "next/image";

import coder from "../public/images/Coder.svg";

import Nav from "../components/Nav";
import WhyUs from "../components/WhyUs";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
import Delivery from "../components/Delivery";
import { MovingObjects } from "../components/MovingObjects";
import { About } from "../components/About";

export default function Home() {
  return (
    <>
      <section
        className=" h-screen  bg-heroSection bg-right-center bg-cover
      relative "
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
            <Link href="#enroll">
              <a
                className="font-bold uppercase text-xs py-3 px-3 bg-altColor text-white 
              border rounded-md hover:bg-mainColor transition-all duration-700"
              >
                get started
              </a>
            </Link>
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
      <WhyUs />
      <Delivery />
      <Contact />
    </>
  );
}
