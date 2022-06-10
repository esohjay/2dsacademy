import nc from "next-connect";
import dbConnect from "../../../../../lib/dbConnect";
import Classes from "../../../../../models/Classes";
import { isAdmin, isAuth } from "../../../../../lib/auth";
const handler = nc();
//handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  console.log("here");
  await dbConnect();
  const foundClass = await Classes.findById(req.query.id);
  res.json(foundClass);
});
export default handler;
