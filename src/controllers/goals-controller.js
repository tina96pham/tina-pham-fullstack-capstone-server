const knex = require("knex")(require("../../knexfile.js"));
const goals = require("../seed-data/goals.js");

const getAllGoals= async (req, res) => {
  try {
    const goalsData= await knex (goals)
    .from('goals')
    
    res.status(200).json(goalsData);
  } catch(error) {
    console.log(`Error retrieving waste type: ${error}`)
    res.status(500).json(`Unable to retrieve all goals information`);
  }
} 
const getGoal= async (req, res) => {
  try {
    const goalsData= await knex (goals)
    .from('goals')
    .where('id', req.params.id)
    
    res.status(200).json(goalsData);
  } catch(error) {
    console.log(`Error retrieving goal with ID ${req.params.id}: ${error}`)
    res.status(500).json(`Unable to retrieve goal with ID ${req.params.id} information`);
  }
} 


module.exports = {
    getAllGoals,
    getGoal,
//     addGoal
}

