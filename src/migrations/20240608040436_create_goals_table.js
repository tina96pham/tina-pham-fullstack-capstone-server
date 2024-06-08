/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("goals", (table) => {
    table.increments("id").primary();
    table.date('date').notNullable();
    table.string("goal_type").notNullable().defaultTo("weekly");
    table.decimal("target_value_kg", 8, 2).notNullable();
    table.boolean("isActive").notNullable().defaultTo(true);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("goals");
  };
  