import nc from "next-connect";

import Classes from "../../../../models/Classes";
import Programs from "../../../../models/Programs";
import dbConnect from "../../../../lib/dbConnect";

const handler = nc();

handler.post(async (req, res) => {
  await dbConnect();
  const { name, status, endDate, startDate, program } = req.body;
  const foundProgram = await Programs.findById(program);
  console.log(foundProgram);
  try {
    const newClass = new Classes({
      name,
      status,
      startDate,
      endDate,
    });
    if (foundProgram) {
      foundProgram.classes.push(newClass);
      const savedClass = await newClass.save();
      await foundProgram.save();
      res.status(200).json(savedClass);
    }
  } catch (e) {
    let error = e.message;
    if (
      error.includes("duplicate") &&
      error.includes("index: name_1 dup key")
    ) {
      error = "A class with the given name already exists";
      return res.status(500).json({ message: error });
    }
    res.status(500).json({ message: error });
  }
});

export default handler;
