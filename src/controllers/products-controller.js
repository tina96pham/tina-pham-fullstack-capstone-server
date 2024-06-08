const knex = require("knex")(require("../../knexfile.js"));
const products = require("../seed-data/products.js");
const types = require("../seed-data/types.js");

const getAllWastes= async (req, res) => {
    try {
      const wasteType= await knex
      .select (
        'products.id as productId',
        'products.name as productName',
        'types.name as type',
        'description',
        'process',
        'going_to_landfill',
        'landfill_contribution'
      )
      .from('products')
      .join("types", "products.type_id", "types.id")

      
      res.status(200).json(wasteType);
    } catch(error) {
      console.log(`Error retrieving waste type: ${error}`)
      res.status(500).json(`Unable to retrieve all wastes information`);
    }
  } 
  
  module.exports = {
    getAllWastes
  }





// module.exports = {
//     getAllProducts
//   }