import React from "react";
import PortalLayout from "../../../../portalComponents/PortalLayout";

function student() {
  return (
    <PortalLayout>
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">Contact</h1>
        <span className="text-7xl">📞</span>
      </div>
    </PortalLayout>
  );
}

export default student;
