import React from "react";
import Image from "next/image";

import slider1 from "../public/images/slider_shape01.png";
import slider3 from "../public/images/slider_shape03.png";
import slider4 from "../public/images/slider_shape04.png";
import slider5 from "../public/images/slider_shape05.png";
import slider6 from "../public/images/slider_shape06.png";

export const MovingObjects = () => {
  return (
    <>
      <figure className="absolute animate-moveFirst top-[44%] left-[14%] opacity-[0.18] z-10">
        <Image
          src={slider1}
          objectFit="contain"
          alt="coder"
          layout="intrinsic"
        />
      </figure>
      <figure className="absolute animate-moveSecond top-[30%] left-[30%] opacity-[0.18] z-10">
        <Image
          src={slider3}
          objectFit="contain"
          alt="coder"
          layout="intrinsic"
        />
      </figure>
      <figure className="absolute animate-moveThird top-[22%] left-[11%] opacity-[0.18] z-10">
        <Image
          src={slider3}
          objectFit="contain"
          alt="coder"
          layout="intrinsic"
        />
      </figure>
      <figure className="absolute animate-moveFourth top-[54%] left-[35%] opacity-[0.18] z-10">
        <Image
          src={slider4}
          objectFit="contain"
          alt="coder"
          layout="intrinsic"
        />
      </figure>
      <figure className="absolute animate-moveFifth top-[47%] left-[51%] opacity-[0.18] z-10">
        <Image
          src={slider5}
          objectFit="contain"
          alt="coder"
          layout="intrinsic"
        />
      </figure>
      <figure className="absolute animate-moveSixth top-[41%] left-[20%] opacity-[0.18] z-10">
        <Image
          src={slider6}
          objectFit="contain"
          alt="coder"
          layout="intrinsic"
        />
      </figure>
    </>
  );
};
