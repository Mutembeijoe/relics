import bcrypt from "bcryptjs";
import _ from "lodash";
import nc from "next-connect";

import {
  createUser,
  verifyEmailExists,
} from "../../../database/Queries/users/users";
import { sendError, logIn } from "../../../utils/api_utils";
import middlewares from "../../../utils/middlewares/common";
import { logger } from "../../../utils/logger";

const handler = nc();

handler.use(middlewares);

handler.post(async (req, res) => {
  const user = _.pick(req.body, ["username", "email", "password"]);

  // Verify that a user with sent email doesn't exist already
  try {
    const userExists = await verifyEmailExists(user.email);
    if (userExists) {
      sendError(res, {
        status: 400,
        message: "An account with the provided email already exists",
        label: "email",
      });
      return;
    }

    // Generate salt and hash password
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(user.password, salt);
    user.password = hashed;

    // Create and Login User
    const id = await createUser(user);
    logIn(req, id[0]);
    return res.status(201).json({
      id,
    });
  } catch (error) {
    logger.error(error.message);
    sendError(res, {
      message:
        "Something terrible happend. Its not you its us, try again later",
      status: 500,
    });
    return;
  }
});

export default handler;
