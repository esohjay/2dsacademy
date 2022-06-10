import React from "react";
import axios from "axios";
import AdminLayout from "../../../../components/layouts/AdminLayout";
import { useCourseContext } from "../../../../lib/dataStore/contexts/course";
import { useClassActions } from "../../../../lib/dataStore/actions/portal/class";
// import dbConnect from "../../../../lib/dbConnect";
// import Classes from "../../../../models/Classes";

function SingleClass({ data }) {
  const { state } = useCourseContext();
  const { classData } = state;
  console.log(classData);
  const { findClassById } = useClassActions();

  return (
    <section className="flex flex-wrap w-full px-5">
      <article className="w-[250px]  rounded-md shadow-md ">
        <h1>{data.name}</h1>
      </article>
    </section>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const { data } = await axios.get(
    `${process.env.BASE_URL}/api/admin/class/${id}`
  );
  console.log(data);

  return {
    props: {
      data,
    },
  };
}

SingleClass.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
export default SingleClass;
