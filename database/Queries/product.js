import knex from "../knex";

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
      "img_url",
      "category_slug",
      "options"
    )
    .where({ product_slug: slug })
    .join("categories", "category_id", "categories.id");
}

async function getCategoryBySlug(category_slug) {
  return await knex("categories").first("id").where({ category_slug });
}

export async function getAllProductsInCategory(category_slug) {
  const category = await getCategoryBySlug(category_slug);
  return await knex("products")
    .select("id", "product_name", "product_slug", "price", "img_url")
    .where({ category_id: category.id });
}
