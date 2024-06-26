/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("records", (table) => {
    table.increments("id").unsigned().primary();
    table.date("date").notNullable();
    table
      .integer("type_id")
      .unsigned()
      .references("types.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("product_id")
      .unsigned()
      .references("products.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("goal_id")
      .unsigned()
      .references("goals.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.integer("quantity").notNullable();
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
    return knex.schema.dropTableIfExists("records");
  };
  