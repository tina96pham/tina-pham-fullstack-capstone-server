/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const data = require("../seed-data/types.js");
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("types").del();
	await knex("types").insert(data);
};

