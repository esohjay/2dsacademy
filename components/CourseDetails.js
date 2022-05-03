import React from "react";
import { FaThumbsUp, FaRegClock, FaBullseye } from "react-icons/fa";

function CourseDetails({ data }) {
  return (
    <section className="my-10 p-6">
      <h3 className="text-mainColor text-center font-bold text-3xl capitalize mb-3">
        {data.name}
      </h3>
      <p className="text-center text-mainColor2 mb-4">{data.brief}</p>
      <div className="w-[70px] h-[3px] mx-auto mb-8 bg-altColor op"></div>
      <article className="text-mainColor2 mb-10 leading-loose">
        {data.overview}
      </article>
      <h3 className="text-mainColor text-left font-bold text-3xl capitalize mb-3">
        What will you gain?
      </h3>
      <div className="mb-10">
        {data.outcome.map((gain) => (
          <div key={gain} className="flex gap-5 items-center mb-3">
            <FaThumbsUp className="text-green-400" />
            <p className="text-mainColor2 text-left capitalize">{gain}</p>
          </div>
        ))}
      </div>
      <div className="mb-8">
        <div className="flex gap-10 items-center mb-5">
          <FaRegClock className="text-altColor" />
          <h3 className="text-mainColor font-bold text-xl">Duration</h3>
        </div>
        <p className="text-mainColor2 text-left">{data.duration}</p>
      </div>
      <div className="mb-5">
        <h3 className="text-mainColor font-bold text-left text-xl mb-5">
          Technologies To Be Taught
        </h3>
        {data.courses.map((course) => (
          <div key={course} className="flex gap-5 items-center mb-3">
            <FaBullseye className="text-green-400" />
            <p className="text-mainColor2 text-left capitalize">{course}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseDetails;
