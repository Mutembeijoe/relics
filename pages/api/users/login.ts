import bcrypt from "bcrypt";
import _ from "lodash";
import { getUserByEmail } from "../../../database/Queries/users/users";
import { sendError, logIn } from "../../../utils/api_utils";
import nc from "next-connect";
import middlewares from "../../../utils/middlewares/common";
import { logger } from "../../../utils/logger";


const handler = nc();

handler.use(middlewares);

handler.post(async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await getUserByEmai(email);

    if (!user)
      return sendError(res, {
        message: "Invalid email or password",
        status: 400,
      });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return sendError(res, {
        message: "Invalid email or password",
        status: 400,
      });

    logIn(req, user.id);

    res.json({
      success: "OK",
    });
  } catch (error) {
    logger.error(error.message)
    sendError(res, {
      message: "Something terrible happend. Its not you its us, try again later",
      status: 500,
    })
  }
});

export default handler;
