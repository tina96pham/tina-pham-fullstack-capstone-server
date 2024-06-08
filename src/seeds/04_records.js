/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const data = require("../seed-data/records.js");
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("records").del();
	await knex("records").insert(data);
};
