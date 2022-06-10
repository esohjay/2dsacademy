import React from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";

function admin() {
  return (
    <>
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">Admin</h1>
        <span className="text-7xl">📞</span>
      </div>
    </>
  );
}
admin.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default admin;
