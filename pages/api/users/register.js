import bcrypt from "bcrypt";
import _ from "lodash";
import { userSchema } from "../../../database/Queries/users/schema";
import {
  createUser,
  verifyEmailExists,
} from "../../../database/Queries/users/users";

export default async (req, res) => {
  const { error, value } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json(error);
  }

  const user = _.pick(value, ["username", "email", "password"]);

  const salt = await bcrypt.genSalt();
  const hashed = await bcrypt.hash(value.password, salt);
  user.password = hashed;

  const userExists = await verifyEmailExists(user.email);

  if (userExists) {
    return res.status(400).json({
      error: "An account with the provided email already exists",
    });
  }

  try {
    const id = await createUser(user);
    return res.status(200).json({
      id,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};
