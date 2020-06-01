exports.up = function (knex) {
  return knex.schema
    .createTable("categories", (table) => {
      table.increments("id");
      table.string("category_name").notNullable();
      table.string("category_slug").notNullable().unique();
      table.timestamps(false, true);
      table.timestamp("deleted_at").nullable();
      table.jsonb("options").defaultTo({ sizes: ["XL", "LG", "MD", "SM"] });
    })
    .createTable("products", (table) => {
      table.increments("id");
      table.string("product_name").notNullable();
      table.string("product_slug").unique().notNullable();
      table.decimal("price").notNullable();
      table.text("description");
      table.text("img_url").notNullable();
      table.timestamps(false, true);
      table.timestamp("deleted_at").nullable();
      table.integer("category_id").notNullable();
      table
        .foreign("category_id")
        .references("id")
        .inTable("categories")
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products").dropTable("categories");;
};
