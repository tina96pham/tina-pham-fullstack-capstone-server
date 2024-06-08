const knex = require('knex')(require('../../knexfile.js'));
const types = require('../seed-data/types.js');

// Get waste type info
const getAllWastes= async (req, res) => {
  try {
    const wasteType= await knex
    .select (
      'id',
      'name',
      'image',
      'description',
      'process',
      'going_to_landfill',
      'landfill_contribution'
    )
    .from('types')
    
    res.status(200).json(wasteType);
  } catch(error) {
    console.log(`Error retrieving waste type: ${error}`)
    res.status(500).json(`Unable to retrieve all wastes information`);
  }
} 

module.exports = {
  getAllWastes
}