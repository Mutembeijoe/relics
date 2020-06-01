import knex from "../knex";

export async function getAllCategorySlugs() {
  return await knex("categories").select("category_slug");
}
