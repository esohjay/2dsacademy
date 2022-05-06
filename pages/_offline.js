import React from "react";
import Image from "next/image";

import Presentation from "../public/images/Presentation.png";
import blob from "../public/images/blob.svg";
import blob1 from "../public/images/blob1.svg";

function _offline() {
  return (
    <>
      <p className="text-mainColor2 text-center p-3 bg-white shadow-md mb-6">
        You are currntly offline. Connect to the internet to access more
        features.
      </p>
      <section className="relative w-11/12 my-20 mx-auto max-w-lg" id="about">
        <figure className="absolute top-[-70px] left-[-70px] z-0 opacity-70">
          <Image
            src={blob1}
            objectFit="cover"
            width={250}
            height={250}
            className="rounded-full"
            alt={"teaching web developement"}
          />
        </figure>
        <figure className="absolute top-[100px] right-[-150px] z-0 opacity-30">
          <Image
            src={blob}
            objectFit="cover"
            width={300}
            height={300}
            alt={"teaching web developement"}
          />
        </figure>
        <article
          className="bg-white backdrop-blur-md backdrop-filter bg-opacity-70 p-5 w-full text-center z-10 relative rounded
  shadow-md "
        >
          <Image
            src={Presentation}
            objectFit="cover"
            width={150}
            height={150}
            className="rounded-full"
            alt={"teaching web developement"}
          />
          <h3 className="text-mainColor font-bold text-2xl mt-5 mb-3  capitalize">
            What we do
          </h3>
          <div className="w-[70px] h-[3px] mx-auto mb-6 bg-altColor op"></div>

          <p className="text-mainColor2">
            At 2DSacademy, we train and give you all the support and resources
            you need to break into the tech industry and have a successful
            career. Our courses are designed to meet everyone&#39;s need. We
            will take you from beginner level to an expert level.
          </p>
        </article>
      </section>
    </>
  );
}

export default _offline;
