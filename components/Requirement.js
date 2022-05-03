import React from "react";

import { FcOk } from "react-icons/fc";

function Requirement() {
  return (
    <section className="w-full px-5 max-w-[680px] mx-auto py-12">
      <section className="w-full px-8 py-12 bg-white rounded-xl shadow-md">
        <h3 className="text-mainColor text-center font-bold text-3xl capitalize mb-3">
          Prerequisites
        </h3>
        <p className="text-center text-mainColor2 mb-4">
          What you need before you enroll.
        </p>
        <div className="w-[70px] h-[3px] mx-auto mb-8 bg-altColor op"></div>
        <article>
          {/* Single item */}
          <div
            className="flex  w-full items-center mb-5  border-b border-t 
          border-b-lightColor border-t-lightColor"
          >
            <button className={`rounded-full  p-3 mx-2 md:mx-3  `}>
              <FcOk className="text-2xl" />
            </button>

            <div className="mt-5">
              <h4 className="text-mainColor text-lg font-bold mb-3">Laptop</h4>
              <p className="text-mainColor2  text-sm mb-4">
                Students are expected to come for the training with a working
                laptop.
              </p>
            </div>
          </div>
          {/*End of Single item */}
          {/* Single item */}
          <div className="flex  w-full items-center mb-5 border-b border-b-lightColor">
            <button className={`rounded-full  p-3 mx-2 md:mx-3  `}>
              <FcOk className="text-2xl" />
            </button>

            <div>
              <h4 className="text-mainColor text-lg font-bold mb-3 capitalize">
                computer usage skill
              </h4>
              <p className="text-mainColor2  text-sm mb-4">
                All students are expected to know how to navigate their way on a
                computer system.
              </p>
            </div>
          </div>
          {/*End of Single item */}
          {/* Single item */}
          <div className="flex  w-full items-center mb-5 border-b border-b-lightColor">
            <button className={`rounded-full  p-3 mx-2 md:mx-3  `}>
              <FcOk className="text-2xl" />
            </button>

            <div>
              <h4 className="text-mainColor text-lg font-bold mb-3 capitalize">
                No programming experience
              </h4>
              <p className="text-mainColor2  text-sm mb-4">
                No previous coding experience is required for this training.
              </p>
            </div>
          </div>
          {/*End of Single item */}
          {/* Single item */}
          <div className="flex  w-full items-center mb-5 border-b border-b-lightColor">
            <button className={`rounded-full  p-3 mx-2 md:mx-3  `}>
              <FcOk className="text-2xl" />
            </button>

            <div>
              <h4 className="text-mainColor text-lg font-bold mb-3 capitalize">
                Readiness to learn
              </h4>
              <p className="text-mainColor2  text-sm mb-4">
                Student must be open minded, ready and willing to learn new
                things and take corrections.
              </p>
            </div>
          </div>
          {/*End of Single item */}
          {/* Single item */}
          <div className="flex  w-full items-center mb-5 border-b border-b-lightColor">
            <button className={`rounded-full  p-3 mx-2 md:mx-3  `}>
              <FcOk className="text-2xl" />
            </button>

            <div>
              <h4 className="text-mainColor text-lg font-bold mb-3 capitalize">
                Patience, time and commitment
              </h4>
              <p className="text-mainColor2  text-sm mb-4">
                To enroll, you need to make out time for learning and practice.
                Programming requires time and commitment.
              </p>
            </div>
          </div>
          {/*End of Single item */}
        </article>
      </section>
    </section>
  );
}

export default Requirement;
