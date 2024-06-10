const knex = require("knex")(require("../../knexfile.js"));
const types = require("../seed-data/types.js");
const products = require("../seed-data/products.js");
const records = require("../seed-data/records.js");
const {  
  missingFieldsValidator
} 
= require('../utils/validators.js');
// Get ALL records info
const getAllRecords = async (_req, res) => {

  try {
    const wasteRecord = await knex("records")
      .select(
        "records.id",
        "records.date as date",
        "products.name as productName",
        "types.name as type",
        "records.quantity",
        knex.raw("records.quantity * products.weight_g as weight"),
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
  missingFieldsValidator(req,res)
  try {

    const product = await knex("products").where({ name: req.body.productName }).first();
    const type = await knex("types").where({ name: req.body.productType }).first();
 

    if (!product || !type) {
      return res.status(404).json({ error: "Product or type not found" });
    }

    // Fetch the active goal
    const activeGoal = await knex("goals").where({ isActive: true }).first();

    // Check if active goal exists
    if (!activeGoal) {
      return res.status(404).json({ error: "Active goal not found" });
    }
    const newRecord = {
      date: req.body.date,
      product_id: product.id,
      type_id: type.id,
      quantity: req.body.quantity,
      goal_id: activeGoal.id,
    };
    console.log(newRecord)

    const result = await knex("records").insert(newRecord);
    console.log(result[0]);


    const createdNewRecord = await knex('records')
      .where({ id: result[0]});


    res.status(201).json(createdNewRecord);
  } catch (error) {
    console.error("Error creating record:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllRecords,
  addRecord,
};
