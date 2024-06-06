/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("wastelog", (table) => {
		table.increments("id").primary();
    table.date('intake_date').notNullable();
    table.date('disposal_date').notNullable();
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
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("wastelog");
  
};
