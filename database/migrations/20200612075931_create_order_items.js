exports.up = function (knex) {
  return knex.schema.createTable("order_items", (table) => {
    table.increments();
    table.timestamps(false, true);
    table.timestamp("deleted_at").nullable();
    table.integer("order_id").notNullable();
    table.foreign("order_id").references("id").inTable("orders");
    table.integer("product_id").notNullable();
    table.foreign("product_id").references("id").inTable("products");
    table.decimal("amount").notNullable();
    table.string("size").notNullable();
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable("order_items")
};
