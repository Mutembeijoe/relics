import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import _ from "lodash";
import { getUserByEmail } from "../../../database/Queries/users/users";
import { sendError } from "../../../utils/api_utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      const { email, password } = req.body;

      let user = await getUserByEmail(email);

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

      try {
        const token = await jwt.sign(
          { email: user.email },
          process.env.PRIVATE_KEY
        );
        user = _.pick(user, ["username", "email"]);

        res.json({
          ...user,
          token,
        });
        return;
      } catch (error) {
        sendError(res, { status: 500, message: "500- Internal Server Error" });
        return;
      }
    default:
      res.setHeader("Allow", ["POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
