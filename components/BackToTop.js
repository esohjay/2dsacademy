import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

function BackToTop({ link }) {
  const [showBtpBtn, setShowBtpBtn] = useState(false);
  //show and hide the back to top btn
  const handleShow = () => {
    if (window.pageYOffset >= 2300) {
      setShowBtpBtn(true);
    } else {
      setShowBtpBtn(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, []);
  return (
    <>
      {showBtpBtn && (
        <Link href={link} passHref>
          <button
            className={`rounded-full  p-1 mx-2 md:mx-3 bg-altColor bg-opacity-70  text-white  
        hover:bg-mainColor fixed z-[56] bottom-3 right-3 animate-modalFadeIn`}
          >
            <FaRegArrowAltCircleUp className="text-4xl md:text-5xl" />
          </button>
        </Link>
      )}
    </>
  );
}

export default BackToTop;
