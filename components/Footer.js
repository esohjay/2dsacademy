import React, { useState, useEffect } from "react";

import SocialBtns from "./SocialBtns";

function Footer() {
  const [date, setDate] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    setDate(year);
  }, []);
  return (
    <footer className="flex flex-col justify-center space-y-6 py-10 bg-mainColor">
      <h3 className="text-center text-white text-xl font-medium">2dsAcademy</h3>
      <div>
        <SocialBtns style={"border-[1px] border-white bg-mainColor2"} />
      </div>
      <p className="text-center  uppercase text-md md:text-lg text-white">
        &copy; {date} 2DSTECH - All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
