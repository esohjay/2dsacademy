import nc from "next-connect";
import bcrypt from "bcryptjs";
import dbConnect from "../../../lib/dbConnect";
import { signToken } from "../../../lib/auth";
import Student from "../../../models/Student";

const handler = nc();

handler.post(async (req, res) => {
  await dbConnect();
  const { emailOrId, password } = req.body;

  const student = await Student.findOne({
    $or: [{ email: emailOrId }, { regNo: emailOrId }],
  });

  if (student && bcrypt.compareSync(password, student.password)) {
    const token = signToken({
      fname: student.fname,
      lname: student.lname,
      role: student.role,
      email: student.email,
      _id: student._id,
    });
    res.status(200).json({
      token,
      fname: student.fname,
      lname: student.lname,
      role: student.role,
      email: student.email,
      phone: student.phone,
      regNo: student.regNo,
      _id: student._id,
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

export default handler;
