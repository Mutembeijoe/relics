import nc from "next-connect";
import middlewares from "../../../utils/middlewares/common";
import { sendError } from "../../../utils/api_utils";
import { getUserById } from "../../../database/Queries/users/users";

const handler = nc();

handler.use(middlewares);

handler.get(async (req, res) => {
  console.log("------==========>", req.session.userId);
  if (!req.session.userId) {
    sendError(res, {
      status: 404,
      message: "User not Found",
    });
    return;
  }

  console.log("-------------->", req.session.userId);

  const user = await getUserById(req.session.userId);

  res.json({
    user,
  });
});

export default handler;
