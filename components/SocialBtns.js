import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function SocialBtns({ style }) {
  return (
    <div className="flex justify-center">
      <button
        className={`rounded-full p-3 mx-2 md:mx-3 ${style}  text-white hover:bg-white hover:text-altColor`}
      >
        <FaWhatsapp />
      </button>
      <button
        className={`rounded-full  p-3 mx-2 md:mx-3 ${style}  text-white hover:bg-white hover:text-altColor`}
      >
        <FaFacebookF />
      </button>
      <button
        className={`rounded-full  p-3 mx-2 md:mx-3 ${style}  text-white hover:bg-white hover:text-altColor`}
      >
        <FaTwitter />
      </button>
      <button
        className={`rounded-full  p-3 mx-2 md:mx-3 ${style}  text-white hover:bg-white hover:text-altColor`}
      >
        <FaLinkedinIn />
      </button>
      <button
        className={`rounded-full  p-3 mx-2 md:mx-3 ${style}  text-white hover:bg-white hover:text-altColor`}
      >
        <FaGithub />
      </button>
    </div>
  );
}
SocialBtns.defaultProps = {
  style: "bg-black bg-opacity-[0.4]",
};
export default SocialBtns;
