const knex = require("knex")(require("../../knexfile.js"));
const products = require("../seed-data/products.js");
const types = require("../seed-data/types.js");
const {searchProducts} = require('../utils/search.js');

const getAllProducts= async (req, res) => {
    try {
      const products= await knex
      .select (
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
      .from('products')
      .join("types", "products.type_id", "types.id")

      const searchData = await searchProducts(req);
      if(searchData) {
        return res
          .status(searchData.status)
          .json(searchData.message)
      }
      res.status(200).json(products);
    } catch(error) {
      console.log(`Error retrieving products: ${error}`)
      res.status(500).json(`Unable to retrieve all products information`);
    }
  }

  const getOneProduct= async (req, res) => {
    try {
      const product= await knex
      .select (
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
      .from('products')
      .join("types", "products.type_id", "types.id")
      .where('products.id', req.params.id);

      res.status(200).json(product);
    } catch(error) {
      console.log(`Error retrieving products: ${error}`)
      res.status(500).json(`Unable to retrieve all products information`);
    }
  }
  
  module.exports = {
    getAllProducts,
    getOneProduct
  }





