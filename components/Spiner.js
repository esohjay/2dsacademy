import React from "react";

function Spiner() {
  return (
    <div className=" fixed top-[25%] w-full z-[53]">
      <div
        className="bg-white w-[300px] p-4 mx-auto rounded-md flex flex-col justify-center
      bg-opacity-50"
      >
        <div className="flex items-center  justify-center space-x-2 animate-bounce">
          <div className="w-8 h-8 bg-mainColor2 rounded-full"></div>
          <div className="w-8 h-8 bg-mainColor rounded-full"></div>
          <div className="w-8 h-8 bg-altColor rounded-full"></div>
        </div>
        <h3 className="text-altColor text-center font-semibold">
          Please wait...
        </h3>
      </div>
    </div>
  );
}

export default Spiner;
