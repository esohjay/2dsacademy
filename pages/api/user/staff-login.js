import nc from "next-connect";
import bcrypt from "bcryptjs";
import dbConnect from "../../../lib/dbConnect";
import { signToken } from "../../../lib/auth";
import Teachers from "../../../models/Teachers";

const handler = nc();

handler.post(async (req, res) => {
  await dbConnect();
  const { emailOrId, password } = req.body;

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
});

export default handler;
