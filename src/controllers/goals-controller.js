const knex = require("knex")(require("../../knexfile.js"));
const goals = require("../seed-data/goals.js");
const { v4: uuidv4 } = require("uuid");
const {  
  missingFieldsValidator
} 
= require('../utils/validators.js');

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

const addGoal= async (req, res) =>{
  missingFieldsValidator(req, res);
  if (!req.body.target_value_kg || isNaN(req.body.target_value_kg) || req.body.target_value_kg <= 0) {
    return res.status(400).json({ error: "Value must be a number" });
  }

  try {
       await knex("goals")
       .where("isActive", true) 
       .update({ isActive: false });

    const currentDate = new Date().toISOString().split('T')[0];
    req.body.date=currentDate;
   
    const result = await knex("goals").insert({
      target_value_kg: req.body.target_value_kg,
      date: currentDate,
      isActive: true
    });
    const newGoalId = result[0];
    const createdNewGoal = await knex
      .select (
        'id',
        'date',
        'goal_type',
        'target_value_kg',
        'isActive',
      )
      .from('goals')
      .where({ id: newGoalId });

    res.status(201).json(createdNewGoal);
  } catch (error) {
    console.log(`Unable to create new goal: ${error}`);
    res.status(500).json({
      message: `Unable to create new goal`,
    });
  }
};


module.exports = {
    getAllGoals,
    getGoal,
    addGoal
}

