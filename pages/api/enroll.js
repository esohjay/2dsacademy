import nc from "next-connect";
import bcrypt from "bcryptjs";
import Student from "../../models/Student";
import dbConnect from "../../lib/dbConnect";
import { signToken } from "../../lib/auth";
import { sendEmail } from "../../lib/mail";
import { welcomeMessage } from "../../utils/emailTemplate";

const handler = nc();

handler.post(async (req, res) => {
  await dbConnect();
  const { lname, fname, email, phone, password } = req.body;
  const newStudent = new Student({
    fname,
    lname,
    email,
    password: bcrypt.hashSync(password),
    role: "Student",
    phone,
  });

  const randomNo = Math.random().toString().slice(2, 8);
  const initName = lname.slice(0, 1) + fname.slice(0, 1);
  newStudent.regNo = randomNo + initName;

  const student = await newStudent.save();
  // await db.disconnect();

  const token = signToken({
    fname: student.fname,
    lname: student.lname,
    role: student.role,
    email: student.email,
    _id: student._id,
  });
  const output = welcomeMessage(student.fname, student.regNo);
  sendEmail({
    from: process.env.EMAIL,
    to: student.email,
    subject: `Welcome to 2dsacademy`,
    html: output,
  });
  res.status(200).json({
    token,
    fname: student.fname,
    lname: student.lname,
    role: student.role,
    email: student.email,
    phone: student.phone,
    _id: student._id,
  });
});

export default handler;
