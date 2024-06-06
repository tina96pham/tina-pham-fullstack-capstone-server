/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const data = require("../seed-data/products.js");
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("products").del();
	await knex("products").insert(data);
};
