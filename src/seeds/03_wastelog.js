/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const data = require("../seed-data/wastelog.js");
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("wastelog").del();
	await knex("wastelog").insert(data);
};
