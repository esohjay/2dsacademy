import React, { useState } from "react";
import Image from "next/image";

import Modal from "./Modal";
import Enroll from "./Enroll";

import Presentation from "../public/images/Presentation2.png";
import Pair from "../public/images/Pair.svg";
import Virtual from "../public/images/Virtual.png";

function Delivery() {
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const closeDeliveryModal = () => {
    setShowDeliveryModal(false);
  };
  return (
    <section className=" py-12 px-3">
      <h3 className="text-mainColor text-center font-bold text-3xl capitalize mb-3">
        program delivery
      </h3>
      <p className="text-center text-mainColor2 mb-4">
        We have different delivery methods for you to choose from.
      </p>
      <div className="w-[70px] h-[3px] mx-auto mb-24 bg-altColor op"></div>
      <div className="grid px-5 md:grid-cols-2 lg:grid-cols-3 mb-6 gap-7 md:px-14">
        {/* Single Card */}
        <div
          className="text-left px-7 bg-white py-10 rounded-xl shadow-md  cursor-pointer hover:shadow-lg
         hover:bg-white mb-6 transition-all duration-1000 relative hover:-translate-y-1"
        >
          <figure className="absolute p-2 top-[-40px] bg-white rounded-full">
            <Image
              src={Presentation}
              objectFit="cover"
              width={70}
              height={70}
              className="rounded-full"
              alt={"teaching web developement"}
            />
          </figure>

          <h3 className="text-xl text-mainColor font-bold my-5 ">
            Physical Class
          </h3>
          <p className="text-mainColor2 text-md">
            We have our physical class at Banex Plaza. We have classes on
            Mondays, Wednessdays and Fridays from 9am to 12pm.
          </p>
        </div>
        {/* End of Single Card */}
        {/* Single Card */}
        <div
          className="text-left px-7 bg-white py-10 rounded-xl shadow-md  cursor-pointer hover:shadow-lg
         hover:bg-white mb-6 transition-all duration-1000 relative hover:-translate-y-1"
        >
          <figure className="absolute p-2 top-[-40px] bg-white rounded-full">
            <Image
              src={Virtual}
              objectFit="cover"
              width={70}
              height={70}
              className="rounded-full"
              alt={"teaching web developement"}
            />
          </figure>

          <h3 className="text-xl text-mainColor font-bold my-5 ">
            Virtual Class
          </h3>
          <p className="text-mainColor2 text-md">
            We have our virtual classes every Tuesdays and Thursdays, 10am to
            2pm.
          </p>
        </div>
        {/* End of Single Card */}
        {/* Single Card */}
        <div
          className="text-left px-7 bg-white py-10 rounded-xl shadow-md  cursor-pointer hover:shadow-lg
         hover:bg-white mb-6 transition-all duration-1000 relative hover:-translate-y-1"
        >
          <figure className="absolute p-2 top-[-40px] bg-white rounded-full">
            <Image
              src={Pair}
              objectFit="cover"
              width={70}
              height={70}
              className="rounded-full"
              alt={"teaching web developement"}
            />
          </figure>

          <h3 className="text-xl text-mainColor font-bold my-5 ">
            Private Class
          </h3>
          <p className="text-mainColor2 text-md">
            If you have a tight schedule, we can arrange a one-on-one class
            phsyically or virtually.
          </p>
        </div>
        {/* End of Single Card */}
      </div>
      <div className="text-center">
        <button
          onClick={() => setShowDeliveryModal(true)}
          className="font-bold uppercase text-xs py-6 px-8 bg-altColor text-white
                  border rounded-md hover:bg-mainColor transition-all duration-700"
        >
          get started
        </button>
      </div>

      <Modal
        content={<Enroll close={closeDeliveryModal} />}
        close={closeDeliveryModal}
        show={showDeliveryModal}
      />
    </section>
  );
}

export default Delivery;
