const knex = require("knex")(require("../../knexfile.js"));
const types = require("../seed-data/types.js");
const products = require("../seed-data/products.js");
const records = require("../seed-data/records.js");

// Get ALL records info
const getAllRecords = async (req, res) => {
  try {
    const wasteRecord = await knex("records")
      .select(
        "records.id",
        "records.date as date",
        "products.name as productName",
        "types.name as type",
        "records.quantity",
        knex.raw(
          "records.quantity * products.weight_g as weight"
        ),
        "products.circular_material_index"
      )
      .join("types", "records.type_id", "types.id")
      .join("products", "records.product_id", "products.id");

    res.status(200).json(wasteRecord);
  } catch (error) {
    console.log(`Error retrieving records: ${error}`);
    res.status(500).json({
      message: `Unable to retrieve records`,
    });
  }
};

// Get ALL records info
const addRecord = async (req, res) => {
  try {
    const wasteRecord = await knex("records")
      .select(
        "records.id",
        "records.date as entryDate",
        "products.name as productName",
        "types.name as type",
        "products.designation as disposalDesignation",
        "records.quantity",
        knex.raw(
          "records.quantity * products.weight_g as contribution"
        ),
      )
      .join("types", "records.type_id", "types.id")
      .join("products", "records.product_id", "products.id");

    res.status(200).json(wasteRecord);
  } catch (error) {
    console.log(`Error retrieving records: ${error}`);
    res.status(500).json({
      message: `Unable to retrieve records`,
    });
  }
};

module.exports = {
  getAllRecords,
};
