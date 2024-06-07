const knex = require('knex')(require('../../knexfile.js'));
const types = require('../seed-data/types.js');

// Get waste type info
const getAllWasteType= async (req, res) => {
  try {
    const wasteType= await knex
    .select (
      'id',
      'type',
      'disposal',
      'process',
      'description',
      'percentage_landfill',
      'Landfill_contribution',
      'impact')
    .from('types')
    
    res.status(200).json(wasteType);
  } catch(error) {
    console.log(`Error retrieving waste type: ${error}`)
    res.status(500).json(`Unable to retrieve all waste types information`);
  }
} 

module.exports = {
  getAllWasteType
}