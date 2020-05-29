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
      "products.id",
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


export async function getAllCategorySlugs(){
  return await knex("categories").select("category_slug")
}

// export async function getAllCategories(){
//   return await knex("categories").select("category_slug, category")
// }


async function getCategoryBySlug(category_slug){
  return await knex("categories").first("id").where({category_slug})
}

export async function getAllProductsInCategory(category_slug){
  const category = await getCategoryBySlug(category_slug)
  return await knex("products").select("id","product_name","product_slug","price","image_url").where({category_id:category.id})
}

