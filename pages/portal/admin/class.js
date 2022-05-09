import React from "react";
import AdminLayout from "../../../portalComponents/AdminLayout";

function singleClass() {
  return (
    <AdminLayout>
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">Admin</h1>
        <span className="text-7xl">📞</span>
      </div>
    </AdminLayout>
  );
}

export default singleClass;
