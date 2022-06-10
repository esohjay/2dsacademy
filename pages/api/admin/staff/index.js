import nc from "next-connect";
import bcrypt from "bcryptjs";
import Teachers from "../../../../models/Teachers";
import dbConnect from "../../../lib/dbConnect";
import { signToken } from "../../../lib/auth";

import { GenerateValues } from "../../../../utils/randomId";

const handler = nc();

handler.post(async (req, res) => {
  await dbConnect();
  const { lname, fname, email, phone } = req.body;
  try {
    const newTeacher = new Teachers({
      fname,
      lname,
      email,
      phone,
    });
    const radomFields = new GenerateValues(newTeacher.fname, newTeacher.lname);

    newTeacher.password = bcrypt.hashSync(radomFields.generatePw());
    newTeacher.teacherId = bcrypt.hashSync(radomFields.generateId());
    console.log(radomFields.generateId());
    console.log(radomFields.generatePw());
    // const randomNo = Math.random().toString().slice(2, 8);
    // const initName = lname.slice(0, 1) + fname.slice(0, 1);
    // newStudent.regNo = randomNo + initName;
    if (email === "esohjay3@gmail.com") {
      newTeacher.role = "admin";
    } else {
      newTeacher.role = "teacher";
    }
    const teacher = await newTeacher.save();

    const token = signToken({
      fname: teacher.fname,
      lname: teacher.lname,
      role: teacher.role,
      email: teacher.email,
      _id: teacher._id,
    });

    res.status(200).json({
      token,
      fname: teacher.fname,
      lname: teacher.lname,
      role: teacher.role,
      email: teacher.email,
      phone: teacher.phone,
      regNo: teacher.regNo,
      _id: teacher._id,
    });
  } catch (e) {
    let error = e.message;
    if (
      error.includes("duplicate") &&
      error.includes("index: email_1 dup key")
    ) {
      error = "A user with the given email already exists";
      return res.status(500).json({ message: error });
    }
    res.status(500).json({ message: error });
  }
});

export default handler;
