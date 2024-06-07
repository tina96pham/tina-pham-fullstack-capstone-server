const knex = require("knex")(require("../../knexfile.js"));
const types = require("../seed-data/types.js");
const products = require("../seed-data/products.js");
const wastelog = require("../seed-data/wastelog.js");

// Get waste type info
const getWasteRecord = async (req, res) => {
  try {
    const wasteRecord = await knex("wastelog")
      .select(
        "wastelog.id",
        "wastelog.intake_date as intakeDate",
        "wastelog.disposal_date as disposalDate",
        "products.name as productName",
        "types.type as type",
        "wastelog.quantity",
        knex.raw(
          "wastelog.quantity * products.landfill_g as landfillContribution"
        ),
        "products.cmi"
      )
      .join("types", "wastelog.type_id", "types.id")
      .join("products", "wastelog.product_id", "products.id");

    res.status(200).json(wasteRecord);
  } catch (error) {
    console.log(`Error retrieving inventories: ${error}`);
    res.status(500).json({
      message: `Unable to retrieve inventories for warehouse with ID ${req.params.id}: ${error}`,
    });
  }
};

module.exports = {
  getWasteRecord,
};
