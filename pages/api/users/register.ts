import bcrypt from "bcrypt";
import _ from "lodash";
import {
  createUser,
  verifyEmailExists,
} from "../../../database/Queries/users/users";
import { sendError } from "../../../utils/api_utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
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
      } catch (error) {
        sendError();
        return;
      }

      // Generate salt and hash password
      try {
        const salt = await bcrypt.genSalt();
        const hashed = await bcrypt.hash(user.password, salt);
        user.password = hashed;
      } catch (error) {
        sendError(res, {
          status: 500,
          message: "500 - Internal Server Error",
        });
        return;
      }

      // Create and Save User
      try {
        const id = await createUser(user);
        return res.status(200).json({
          id,
        });
      } catch (error) {
        sendError(res, {
          status: 500,
          message: "500 - Internal Server Error",
        });
        return;
      }
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
