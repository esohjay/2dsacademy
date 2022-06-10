import nc from "next-connect";
import bcrypt from "bcryptjs";
import dbConnect from "../../../lib/dbConnect";
import { signToken } from "../../../lib/auth";
import Teachers from "../../../models/Teachers";
import Student from "../../../models/Student";

const handler = nc();

handler.post(async (req, res) => {
  await dbConnect();
  const { emailOrId, password, role } = req.body;
  if (role === "staff") {
    const staff = await Teachers.findOne({
      $or: [{ email: emailOrId }, { teacherId: emailOrId }],
    });

    if (staff && bcrypt.compareSync(password, staff.password)) {
      const token = signToken({
        fname: staff.fname,
        lname: staff.lname,
        role: staff.role,
        email: staff.email,
        _id: staff._id,
      });
      res.status(200).json({
        token,
        fname: staff.fname,
        lname: staff.lname,
        role: staff.role,
        email: staff.email,
        phone: staff.phone,
        teacherId: staff.teacherId,
        _id: staff._id,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } else {
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
  }
});
export default handler;
