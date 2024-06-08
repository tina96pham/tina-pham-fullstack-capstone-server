/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const data = require("../seed-data/goals.js");
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("goals").del();
	await knex("goals").insert(data);
};