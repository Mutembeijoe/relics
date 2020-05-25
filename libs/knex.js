import Knex from "knex";

export const knex = Knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

export async function getAllProductSlugs() {
  return await knex.select("product_slug").from("products");
}

export async function getProductBySlug(slug) {
  return await knex("products")
    .first(
      "product_name",
      "product_slug",
      "price",
      "description",
      "image_url",
      "category_slug",
      "options"
    )
    .where({ product_slug: slug })
    .join("categories", "category_id", "categories.id");
}

// export async function getProductBySlug(slug) {
//   return await knex
//     .first("product_name", "product_slug", "price", "description", "image_url")
//     .where({ product_slug: slug })
//     .from("products");
// }
