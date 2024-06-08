const knex = require("knex")(require("../../knexfile.js"));
const products = require("../seed-data/products.js");
const types = require("../seed-data/types.js");

const searchProducts = async (req) => {
  const reqInput = req.query.s;
  const searchInput = req.query.s + "%";
  if (reqInput) {
    const response = await knex("products")
      .select(
        'products.id as productId',
        'products.name as productName',
        'types.name as type',
        'products.designation',
        'products.instruction',
        'products.recyclable',
        'products.reusable',
        'products.weight_g as contribution',
        'products.circular_material_index as cmi'
      ) 
      .join("types", "products.type_id", "types.id") 
      .whereILike("products.name", searchInput)
      .orWhereILike("products.designation", searchInput) 
      .orWhereILike("types.name", searchInput); 

    if (response.length === 0) {
      return {
        status: 404,
        message: `Search input ${searchInput} was not found`,
      };
    }

    return {
      status: 200,
      message: response,
    };
  }
  return false;
};
module.exports = {
  searchProducts,
};
