import knex from "../../knex";

export const createUser = async (user) => {
  return await knex("users")
    .insert({
      username: user.username,
      password: user.password,
      email: user.email,
    })
    .returning("id");
};

export const getUserByEmail = async (email) => {
  return await knex("users").first("email", "password").where("email", email);
};

export const verifyEmailExists = async (email) => {
  const user = await getUserByEmail(email);
  if (!user) return false;
  return true;
};
