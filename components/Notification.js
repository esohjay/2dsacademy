import React, { useState, useEffect } from "react";

import { ImHappy, ImSad, ImCancelCircle } from "react-icons/im";

function Notification({ variant, heading, message, reset }) {
  const [show, setShow] = useState(true);
  const hide = () => {
    setShow(false);
  };
  useEffect(() => {
    const disappear = setTimeout(() => {
      hide();
    }, 3000);
    return () => {
      clearTimeout(disappear);
    };
  });
  return (
    <>
      {show && (
        <section className="fixed top-4 left-0  w-full z-50  p-5">
          <div className="flex relative bg-white w-full z-50 max-w-lg mx-auto  items-center justify-around p-2 rounded-md shadow-md">
            <button
              onClick={hide}
              className="rounded-full absolute top-2 right-2 text-red-500 p-3 mx-2 md:mx-3"
            >
              <ImCancelCircle />
            </button>
            <button
              className={`rounded-full  p-3 mx-2 md:mx-3 ${
                variant === "success" ? "text-green-500" : "text-red-500"
              } `}
            >
              {variant === "success" ? (
                <ImHappy className="text-3xl" />
              ) : (
                <ImSad className="text-3xl" />
              )}
            </button>

            <div
              className={`${
                variant === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              <h4 className=" text-lg font-bold mb-2">{heading}</h4>
              <p className="text-sm leading-loose">{message}</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
Notification.defaultProps = {
  variant: "success",
  heading: "success",
  message: "successfully done",
  reset: {},
};
export default Notification;
