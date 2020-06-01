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
