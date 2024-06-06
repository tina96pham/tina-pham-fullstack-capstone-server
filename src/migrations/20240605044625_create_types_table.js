/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('types', (table) => {
    table.increments('id').primary();
    table.string('type').notNullable();
    table.string('disposal').notNullable();
    table.string('process').notNullable();
    table.string('description').notNullable();
    table.string('impact').notNullable();
    table.integer('percentage_landfill').notNullable();
    table.decimal('landfill_contribution').notNullable();
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
  return knex.schema.dropTable('warehouses');
};
