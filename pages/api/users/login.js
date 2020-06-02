import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import _ from 'lodash';
import { loginSchema } from "../../../database/Queries/users/schema";
import { getUserByEmail } from "../../../database/Queries/users/users";

export default async (req, res) => {
  const { error, value } = loginSchema.validate(req.body);

  if (error) return res.status(400).json({ error });

  let user = await getUserByEmail(value.email);

  if (!user)
    return res.status(400).json({ error: "Invalid email or password" });

  const isPasswordValid = await bcrypt.compare(value.password, user.password);

  if (!isPasswordValid)
    return res.status(400).json({ error: "Invalid email or password" });

  const token = await jwt.sign({ email: user.email }, process.env.PRIVATE_KEY);

  user = _.pick(user,["username", "email"])

  res.json({
    ...user,
    token
  });
};
