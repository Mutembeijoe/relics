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
  return await knex("users").first("id", "password", "email").where("email", email);
};

export const getUserById = async (id) => {
  return await knex("users").first("id", "username", "email").where("id", id);
};

export const verifyEmailExists = async (email) => {
  const user = await getUserByEmail(email);
  if (!user) return false;
  return true;
};
