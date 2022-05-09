import nc from "next-connect";

import Programs from "../../../../models/Programs";
import dbConnect from "../../../../lib/dbConnect";

const handler = nc();

handler.post(async (req, res) => {
  await dbConnect();
  const { name, description } = req.body;
  try {
    const newProgram = new Programs({
      name,
      description,
    });

    const student = await newProgram.save();
    res.status(200).json(student);
  } catch (e) {
    let error = e.message;
    if (
      error.includes("duplicate") &&
      error.includes("index: name_1 dup key")
    ) {
      error = "A program with the given name already exists";
      return res.status(500).json({ message: error });
    }
    res.status(500).json({ message: error });
  }
});

export default handler;
