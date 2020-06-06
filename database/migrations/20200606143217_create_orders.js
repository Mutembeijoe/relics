exports.up = function (knex) {
  return knex.schema.createTable("orders", (table) => {
    table.increments();
    table.timestamps(false, true);
    table.timestamp("deleted_at").nullable();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable();
    table.string("address").notNullable();
    table.string("optional_address").nullable();
    table.string("town").notNullable();
    table.string("county").notNullable();
    table.string("payment_status").notNullable().default("pending");
    table.integer("user_id").notNullable();
    table.foreign("user_id").references("id").inTable("users");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("orders");
};
