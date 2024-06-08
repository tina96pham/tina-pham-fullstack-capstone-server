/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id").primary();
    table
      .integer("type_id")
      .unsigned()
      .references("types.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("name").notNullable();
    table.string("designation").notNullable();
    table.string("instruction").notNullable();
    table.string("recyclable").notNullable();
    table.string("reusable").notNullable();
    table.string("unit").notNullable();
    table.decimal("circular_material_index").notNullable();
    table.integer("weight_g").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("inventories");
};
