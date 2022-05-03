import React from "react";
import Image from "next/image";

import { GiMoneyStack, GiBookPile } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";

import coder from "../public/images/webdev.png";
import blob from "../public/images/blob3.svg";

function WhyUs() {
  return (
    <section className=" bg-white flex flex-col items-center py-12 justify-between relative md:flex-row">
      <figure className="absolute top-[300px] md:top-[100px] right-[-50px] z-0 opacity-20">
        <Image
          src={blob}
          objectFit="cover"
          width={300}
          height={300}
          alt={"teaching web developement"}
        />
      </figure>
      <figure className="relative w-full md:grid md:place-items-start ">
        <Image
          src={coder}
          objectFit="contain"
          alt="coder"
          width={700}
          height={600}
        />
      </figure>
      <article className="grid place-items-start w-full p-9">
        <h3 className="font-bold text-3xl capitalize mb-5 text-mainColor text-left">
          why learn here
        </h3>
        <p className="text-mainColor2 mb-5 text-md">
          Our courses are designed to set you up for a successfull career in the
          tech industry.
        </p>
        {/* Single card */}
        <article className="flex justify-between mb-7 shadow-md  w-full p-3 rounded-md">
          <button className="  text-6xl  bg-transparent  text-mainColor2 ">
            <FaUserGraduate />
          </button>
          <div className="w-[80%]">
            <h3 className="text-mainColor text-lg font-bold mb-3">
              Learn From Experts
            </h3>
            <p className="text-mainColor2  text-md">
              You will be taught and mentored by experts with years of
              professional experience
            </p>
          </div>
        </article>
        {/*End of Single card */}
        {/* Single card */}
        <article className="flex justify-between mb-7 shadow-md p-3 rounded-md">
          <button className="  text-6xl  bg-transparent  text-mainColor2 ">
            <GiMoneyStack />
          </button>
          <div className="w-[80%]">
            <h3 className="text-mainColor text-lg font-bold mb-3">
              Lower Learning Cost
            </h3>
            <p className="text-mainColor2  text-md">
              We give us the best at a relatively low price. We also have
              flexible payment plans that you can choose from.
            </p>
          </div>
        </article>
        {/*End of Single card */}
        {/* Single card */}
        <article className="flex justify-between mb-7 shadow-md p-3 rounded-md">
          <button className="  text-6xl  bg-transparent  text-mainColor2  ">
            <GiBookPile />
          </button>
          <div className="w-[80%]">
            <h3 className="text-mainColor text-lg font-bold mb-3">
              Learn From Anywhere
            </h3>
            <p className="text-mainColor2  text-md">
              At 2dsAcademy, we have different programme delivery method that
              enables you to choose a suitable learning mode.
            </p>
          </div>
        </article>
        {/*End of Single card */}
      </article>
    </section>
  );
}

export default WhyUs;
