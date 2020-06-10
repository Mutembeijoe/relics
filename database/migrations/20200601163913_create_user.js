
exports.up = function(knex) {
  return knex.schema.createTable("users", (table)=> {
      table.increments();
      table.timestamps(false,true)
      table.timestamp("deleted_at").nullable()
      table.string("username").notNullable();
      table.string("password").notNullable();
      table.string("email").notNullable().unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("orders").dropTable("users");
};
