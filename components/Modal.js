import React from "react";

import { FaTimes } from "react-icons/fa";

function Modal({ close, content, show }) {
  //const { isModalOpen, closeModal, openModal } = useGeneralContext();
  return (
    <>
      <section>
        {show && (
          <article
            className="flex flex-col justify-center items-center overflow-x-hidden 
          overflow-y-scroll fixed inset-0 top-0 left-0 z-50 outline-none focus:outline-none py-12 px-7 
          animate-modalFadeIn w-full h-full bg-black backdrop-blur-sm backdrop-filter bg-opacity-5"
          >
            <article
              className="w-full grid place-items-center relative 
          max-w-[680px] bg-white p-5 shadow-lg rounded-lg overflow-y-scroll overscroll-contain
          scrollbar-thin scrollbar-thumb-mainColor scrollbar-track-gray-100"
            >
              <button
                className="absolute top-3 text-2xl md:text-4xl right-3 p-2 "
                onClick={close}
              >
                <FaTimes className="text-red-700" />
              </button>
              <div className="w-full">
                {content}
                <div className="flex justify-center items-center gap-1 ">
                  <button
                    className="font-bold uppercase text-xs py-3 px-3 bg-red-700 text-white 
              border rounded-md hover:bg-white hover:text-red-700 transition-all duration-700"
                    onClick={close}
                  >
                    Close
                  </button>
                </div>
              </div>
            </article>
          </article>
        )}
      </section>
      <style jsx>
        {`
          ::-webkit-scrollbar {
            width: 2px;
          }

          ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          }

          ::-webkit-scrollbar-thumb {
            background-color: #58468c;
          }
        `}
      </style>
    </>
  );
}

export default Modal;
// {type === "btn" ? (
// <Link href="#">
//   <a
//     onClick={() => setModalOpen(true)}
//     className="py-2 text-center  bg-altColor px-7 text-white font-bold rounded-md hidden md:block"
//   >
//     {btnText}
//   </a>
// </Link>
// ) : type === "link" ? (
//   <Link href="#">
//     <a
//       onClick={() => setModalOpen(true)}
//       className="font-bold capitalize text-md mt-5 block  text-altColor
//         hover:underline transition-all duration-700"
//     >
//       {btnText}
//     </a>
//   </Link>
// ) : type === "btn2" ? (
//   <Link href="#">
//     <a
//       onClick={() => setModalOpen(true)}
//       className="font-bold uppercase text-xs py-5 px-7 bg-altColor text-white
// border rounded-md hover:bg-mainColor transition-all duration-700"
//     >
//       {btnText}
//     </a>
//   </Link>
// ) : (
// <Link href="#">
//   <a
//     onClick={() => setModalOpen(true)}
//     className="py-5 block text-center px-7 "
//   >
//     {btnText}
//   </a>
// </Link>
// )}
